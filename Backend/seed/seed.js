import pool from "../config/db.js";
import bcrypt from "bcrypt";

const seed = async () => {
  const password = await bcrypt.hash("password123", 12);

  const user = await pool.query(`
    INSERT INTO users (name, email, password)
    VALUES ('Test User', 'test@example.com', $1)
    RETURNING *
  `, [password]);

  const project = await pool.query(`
    INSERT INTO projects (name, description, owner_id)
    VALUES ('Demo Project', 'Seed project', $1)
    RETURNING *
  `, [user.rows[0].id]);

  await pool.query(`
    INSERT INTO tasks (title, status, priority, project_id)
    VALUES 
    ('Task 1', 'todo', 'high', $1),
    ('Task 2', 'in_progress', 'medium', $1),
    ('Task 3', 'done', 'low', $1)
  `, [project.rows[0].id]);

  console.log("Seed data created");
  process.exit();
};

seed();