import pool from "../config/db.js";

export const createComment = async (req, res) => {
  try {

    const { taskId } = req.params;
    const { comment } = req.body;

    const result = await pool.query(
      `INSERT INTO comments (task_id, comment)
       VALUES ($1,$2)
       RETURNING *`,
      [taskId, comment]
    );

    // get project id
    const task = await pool.query(
      "SELECT project_id FROM tasks WHERE id=$1",
      [taskId]
    );

    const projectId = task.rows[0].project_id;

    // activity
    await pool.query(
      `INSERT INTO activity (project_id, message)
       VALUES ($1,$2)`,
      [projectId, `Comment added`]
    );

    res.json(result.rows[0]);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


export const getComments = async (req, res) => {
  try {

    const { taskId } = req.params;

    const result = await pool.query(
      "SELECT * FROM comments WHERE task_id=$1 ORDER BY id DESC",
      [taskId]
    );

    res.json({
      comments: result.rows
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


export const deleteComment = async (req, res) => {
  try {

    const { id } = req.params;

    await pool.query(
      "DELETE FROM comments WHERE id=$1",
      [id]
    );

    res.json({
      message: "Comment deleted"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};