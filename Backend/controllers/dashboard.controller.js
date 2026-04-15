import pool from "../config/db.js";

export const getDashboard = async (req, res) => {
  try {

    const userId = req.user?.id; 

    const projects = await pool.query(
      "SELECT COUNT(*) FROM projects WHERE user_id=$1",
      [userId]
    );

    const tasks = await pool.query(
      "SELECT COUNT(*) FROM tasks WHERE user_id=$1",
      [userId]
    );

    const todo = await pool.query(
      "SELECT COUNT(*) FROM tasks WHERE status='todo' AND user_id=$1",
      [userId]
    );

    const progress = await pool.query(
      "SELECT COUNT(*) FROM tasks WHERE status='progress' AND user_id=$1",
      [userId]
    );

    const done = await pool.query(
      "SELECT COUNT(*) FROM tasks WHERE status='done' AND user_id=$1",
      [userId]
    );

    const recent = await pool.query(
      "SELECT * FROM tasks WHERE user_id=$1 ORDER BY id DESC LIMIT 5",
      [userId]
    );

    res.json({
      projects: Number(projects.rows[0].count),
      tasks: Number(tasks.rows[0].count),
      todo: Number(todo.rows[0].count),
      progress: Number(progress.rows[0].count),
      done: Number(done.rows[0].count),
      recent: recent.rows
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};