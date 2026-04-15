import pool from "../config/db.js";
import { v4 as uuidv4 } from "uuid";

export const createTask = async (req, res) => {
  try {

    const { title, description, priority, status, assignee_id, due_date } = req.body;
    const { id: project_id } = req.params;

    if (!title) {
      return res.status(400).json({
        error: "validation failed",
        fields: { title: "is required" }
      });
    }

    const result = await pool.query(
      `INSERT INTO tasks 
      (id, title, description, priority, status, project_id, assignee_id, due_date)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *`,
      [
        uuidv4(),
        title,
        description,
        priority || "medium",
        status || "todo",
        project_id,
        assignee_id || null,
        due_date || null
      ]
    );

    // Activity log
    await pool.query(
      `INSERT INTO activity (project_id, message)
       VALUES ($1,$2)`,
      [project_id, `Task created: ${title}`]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    console.log(error);
  }
};


export const getTasks = async (req, res) => {
  try {

    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM tasks WHERE project_id = $1 ORDER BY created_at DESC",
      [id]
    );

    res.json({
      tasks: result.rows
    });

  } catch (err) {
    console.log(err);
  }
};


export const updateTask = async (req, res) => {
  try {

    const { id } = req.params;
    const { title, description, status, priority, assignee_id, due_date } = req.body;

    const result = await pool.query(
      `UPDATE tasks
       SET title = COALESCE($1, title),
           description = COALESCE($2, description),
           status = COALESCE($3, status),
           priority = COALESCE($4, priority),
           assignee_id = COALESCE($5, assignee_id),
           due_date = COALESCE($6, due_date),
           updated_at = NOW()
       WHERE id = $7
       RETURNING *`,
      [title, description, status, priority, assignee_id, due_date, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "not found"
      });
    }

    const task = result.rows[0];

    // Activity log
    if (status) {
      await pool.query(
        `INSERT INTO activity (project_id, message)
         VALUES ($1,$2)`,
        [task.project_id, `Task moved to ${status}`]
      );
    }

    res.json(task);

  } catch (err) {
    console.log(err);
  }
};


export const deleteTask = async (req, res) => {
  try {

    const { id } = req.params;

    const result = await pool.query(
      `DELETE FROM tasks WHERE id = $1 RETURNING *`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "not found"
      });
    }

    res.status(204).send();

  } catch (err) {
    console.log(err);
  }
};