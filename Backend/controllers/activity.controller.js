import pool from "../config/db.js";

export const getActivity = async (req, res) => {
  try {

    const { projectId } = req.params;

    const result = await pool.query(
      `SELECT * FROM activity
       WHERE project_id=$1
       ORDER BY id DESC`,
      [projectId]
    );

    res.json({
      activity: result.rows
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};