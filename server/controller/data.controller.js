const db = require('../db');

class DataController {
    async createData(req, res) {
        const { date, name, amount, distance } = req.body;
        const newData = await db.query(`INSERT INTO dbase (date, name, amount, distance) values ($1, $2, $3, $4) RETURNING *`, [date, name, amount, distance]);
        res.json(newData.rows[0]);
    }
    async getData(req, res) {
        const data = await db.query("SELECT * FROM dbase");
        res.json(data.rows);
    }
    async deleteData(req, res) {
        const id = req.params.id;
        const data = await db.query('DELETE FROM dbase where id = $1', [id]);
        res.json(data.rows[[0]]);
    }
}

module.exports = new DataController();