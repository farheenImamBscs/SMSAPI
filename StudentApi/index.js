const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    try {
        res.json("WELCOME TO STUDENT API");
    } catch {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/students', async (req, res) => {
    try {
        const result = await pool.query('select * from student');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});


app.get('/cjobs', async (req, res) => {
    try {
        const result = await pool.query('select count(*) from jobs');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
app.get('/cjob_history', async (req, res) => {
    try {
        const result = await pool.query('select count(*) from job_history');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
app.get('/cemp', async (req, res) => {
    try {
        const result = await pool.query('select count(*) from employees');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
app.get('/clocations', async (req, res) => {
    try {
        const result = await pool.query('select count(*) from locations');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
app.get('/cregions', async (req, res) => {
    try {
        const result = await pool.query('select count(*) from regions');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
app.get('/ccountries', async (req, res) => {
    try {
        const result = await pool.query('select count(*) from countries');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
app.get('/cdepartments', async (req, res) => {
    try {
        const result = await pool.query('select count(*) from departments');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
app.get('/jobs', async (req, res) => {
    try {
        const result = await pool.query('select * from jobs');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 50
app.get('/ques50', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name, j.job_title, c.country_name FROM employees e JOIN job_history jh ON e.employee_id = jh.employee_id JOIN jobs j ON jh.job_id = j.job_id JOIN departments d ON d.department_id = jh.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 51
app.get('/ques51', async (req, res) => {
    try {
        const result = await pool.query('SELECT r.region_name, c.country_name, l.city FROM regions r JOIN countries c ON r.region_id = c.region_id JOIN locations l ON c.country_id = l.country_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 52
app.get('/ques52', async (req, res) => {
    try {
        const result = await pool.query('SELECT c.country_name, r.region_name, l.city FROM countries c JOIN regions r ON c.region_id = r.region_id JOIN locations l ON c.country_id = l.country_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 53
app.get('/ques53', async (req, res) => {
    try {
        const result = await pool.query('SELECT l.city, c.country_name, r.region_name FROM locations l JOIN countries c ON l.country_id = c.country_id JOIN regions r ON c.region_id = r.region_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 54
app.get('/ques54', async (req, res) => {
    try {
        const result = await pool.query('SELECT d.department_name, e first_name, e.last_name, l.city FROM departments d JOIN employees e ON d.department_id = e.department_id JOIN locations l ON d.location_id = l.location_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 55
app.get('/ques55', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name, d.department_name, l.city, c.country_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

// Ques 56
app.get('/ques56', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name, m.first_name AS manager_first, m.last_name AS manager_last, d.department_name, l.city FROM employees e JOIN employees m ON e.manager_id = m.employee_id JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 57
app.get('/ques57', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name, j.job_title, d.department_name, l.city FROM employees e JOIN jobs j ON e.job_id = j.job_id JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 58
app.get('/ques58', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name, j.job_title, d.department_name, m.first_name AS manager_first, m.last_name AS manager_last FROM employees e JOIN jobs j ON e.job_id = j.job_id JOIN departments d ON e.department_id = d.department_id JOIN employees m ON e.manager_id = m.employee_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message }); 
    }
});
// Ques 59
app.get('/ques59', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name, j.job_title, d.department_name, m.first_name AS manager_first, m.last_name AS manager_last, l.city FROM employees e JOIN jobs j ON e.job_id = j.job_id JOIN departments d ON e.department_id = d.department_id JOIN employees m ON e.manager_id = m.employee_id JOIN locations l ON d.location_id = l.location_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 60
app.get('/ques60', async (req, res) => {
    try {
        const result = await pool.query('SELECT country_name FROM countries WHERE region_id = 1');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

// Ques 61
app.get('/ques61', async (req, res) => {
    try {
        const result = await pool.query(`SELECT d.department_name FROM departments d JOIN locations l ON d.location_id = l.location_id WHERE l.city LIKE 'N%' `);
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});  
// Ques 62
app.get('/ques62', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN employees m ON d.manager_id = m.employee_id WHERE m.commission_pct > 0.15');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 63
app.get('/ques63', async (req, res) => {
    try {
        const result = await pool.query('SELECT DISTINCT j.job_title FROM employees e JOIN jobs j ON e.job_id = j.job_id WHERE e.employee_id IN (SELECT DISTINCT manager_id FROM employees WHERE manager_id IS NOT NULL)');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 64
app.get('/ques64', async (req, res) => {
    try {
        const result = await pool.query(`SELECT l.postal_code FROM locations l JOIN countries c ON l.country_id = c.country_id JOIN regions r ON c.region_id = r.region_id WHERE r.region_name = 'Asia'`);
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 65
app.get('/ques65', async (req, res) => {
    try {
        const result = await pool.query('SELECT DISTINCT d.department_name FROM employees e JOIN departments d ON e.department_id = d.department_id WHERE e.commission_pct < (SELECT AVG(commission_pct) FROM employees)');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

// Ques 66
app.get('/ques66', async (req, res) => {
    try {
        const result = await pool.query('SELECT job_title FROM employees e1 JOIN jobs j ON e1.job_id = j.job_id WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e1.department_id = e2.department_id)');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 67
app.get('/ques67', async (req, res) => {
    try {
        const result = await pool.query('SELECT employee_id FROM employees WHERE department_id IS NULL');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 68
app.get('/ques68', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name FROM employees e WHERE (SELECT COUNT(*) FROM job_history jh WHERE jh.employee_id = e.employee_id) > 1');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 69
app.get('/ques69', async (req, res) => {
    try {
        const result = await pool.query('SELECT department_id, COUNT(*) AS employee_count FROM employees GROUP BY department_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 70
app.get('/ques70', async (req, res) => {
    try {
        const result = await pool.query('SELECT job_id, SUM(salary) AS total_salary FROM employees GROUP BY job_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});


// Ques 71
app.get('/ques71', async (req, res) => {
    try {
        const result = await pool.query('SELECT department_id, AVG(commission_pct) AS avg_commission FROM employees GROUP BY department_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 72
app.get('/ques72', async (req, res) => {
    try {
        const result = await pool.query('SELECT c.country_name, MAX(e.salary) AS max_salary FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id GROUP BY c.country_name');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 73
app.get('/ques73', async (req, res) => {
    try {
        const result = await pool.query('SELECT c.country_name, l.city, COUNT(DISTINCT d.department_id) AS dept_count FROM countries c JOIN locations l ON c.country_id = l.country_id JOIN departments d ON l.location_id = d.location_id JOIN employees e ON d.department_id = e.department_id GROUP BY c.country_name, l.city HAVING COUNT(e.employee_id) >= 2');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 74
app.get('/ques74', async (req, res) => {
    try {
        const result = await pool.query('SELECT c.country_name, l.city, COUNT(DISTINCT d.department_id) AS dept_count FROM countries c JOIN locations l ON c.country_id = l.country_id JOIN departments d ON l.location_id = d.location_id JOIN employees e ON d.department_id = e.department_id GROUP BY c.country_name, l.city HAVING COUNT(e.employee_id) >= 2');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});// Ques 75
app.get('/ques75', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name, j.job_title, jh.start_date, jh.end_date FROM employees e JOIN job_history jh ON e.employee_id = jh.employee_id JOIN jobs j ON jh.job_id = j.job_id WHERE e.commission_pct IS NULL');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 76
app.get('/ques76', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name, e.employee_id, c.country_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 77
app.get('/ques77', async (req, res) => {
    try {
        const result = await pool.query('SELECT e.first_name, e.last_name, e.salary, e.department_id FROM employees e WHERE salary = (SELECT MIN(salary) FROM employees WHERE department_id = e.department_id)');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 78
app.get('/ques78', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM employees WHERE salary = (SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2)');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
// Ques 79
app.get('/ques79', async (req, res) => {
    try {
        const result = await pool.query(`SELECT e.employee_id, e.first_name, e.last_name, e.salary FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees) AND department_id IN (SELECT DISTINCT department_id FROM employees WHERE first_name LIKE '%J%' OR last_name LIKE '%J%')`);
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});// Ques 80
app.get('/ques80', async (req, res) => {
    try {
        const result = await pool.query(`SELECT e.first_name, e.last_name, e.employee_id, j.job_title FROM employees e JOIN jobs j ON e.job_id = j.job_id JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id WHERE l.city =  'Toronto'`);
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/gettotalstd', async (req, res) => {
    try {
        const result = await pool.query('select count(*) from student');
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ Error: err.message });
    }
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Connected Successfully...Running n PORT ${PORT}`);
})