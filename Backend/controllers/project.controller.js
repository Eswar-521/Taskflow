import pool from "../config/db.js";
import { v4 as uuidv4 } from "uuid";

export const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "validation failed",
        fields: { name: "is required" }
      });
    }

    const owner_id = req.user.user_id;

    const result = await pool.query(
      `INSERT INTO projects (id, name, description, owner_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [uuidv4(), name, description, owner_id]
    );

    res.status(201).json(result.rows[0]);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};


export const getProjects = async (req, res) => {
  try {
    const userId = req.user.user_id;

    const result = await pool.query(
      `SELECT * FROM projects 
       WHERE owner_id = $1
       ORDER BY created_at DESC`,
      [userId]
    );

    res.json({ projects: result.rows });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};


export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await pool.query(
      `SELECT * FROM projects WHERE id = $1`,
      [id]
    );

    if (project.rows.length === 0) {
      return res.status(404).json({ error: "not found" });
    }

    const tasks = await pool.query(
      `SELECT * FROM tasks WHERE project_id = $1`,
      [id]
    );

    res.json({
      ...project.rows[0],
      tasks: tasks.rows
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};


export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const result = await pool.query(
      `UPDATE projects 
       SET name = COALESCE($1, name),
           description = COALESCE($2, description)
       WHERE id = $3
       RETURNING *`,
      [name, description, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "not found" });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};


export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

  
    await pool.query(`DELETE FROM tasks WHERE project_id = $1`, [id]);

    const result = await pool.query(
      `DELETE FROM projects WHERE id = $1 RETURNING *`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "not found" });
    }

    res.status(204).send();

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
};