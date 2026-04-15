import pool from "../config/db.js";

export const addMember = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { userId, role } = req.body;

    const result = await pool.query(
      `INSERT INTO project_members 
       (user_id, project_id, role)
       VALUES ($1,$2,$3)
       RETURNING *`,
      [userId, projectId, role || "member"]
    );

    res.json(result.rows[0]);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMembers = async (req, res) => {
  try {
    const { projectId } = req.params;

    const result = await pool.query(
      `SELECT * FROM project_members 
       WHERE project_id=$1`,
      [projectId]
    );

    res.json({
      members: result.rows
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeMember = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM project_members WHERE id=$1",
      [id]
    );

    res.json({
      message: "Member removed"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};