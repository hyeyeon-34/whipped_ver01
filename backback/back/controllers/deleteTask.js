const database = require('../database/database'); // database 모듈 가져오기

exports.deleteTask = async (req, res) => {
  const itemId = req.params.itemId;
  try {
    const result = await database.query('DELETE FROM task WHERE _id = $1', [
      itemId,
    ]);
    return res.status(200).json({ message: 'Task Deleted Successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Get Items Fail' + error });
  }
};
