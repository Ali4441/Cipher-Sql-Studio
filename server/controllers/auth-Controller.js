const Pool = require("../db/postgres")

const getAssignments = async (req, res) => {
  try {
    const result = await Pool.query("SELECT * FROM assignments");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};
const getResult = async (req, res) => {
  const { query } = req.body;

  try {
    const result = await Pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getAssignments, getResult };