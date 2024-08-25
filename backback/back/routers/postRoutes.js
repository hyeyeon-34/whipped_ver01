const router = require('express').Router();
const { postTasks } = require('../controllers/postTasks');
const { postUser, loginUser } = require('../controllers/postUser');

router.post('/post_tasks', postTasks); // 컨트롤러 함수 연결 , : 은 정해지지 않은 문자열 표시
router.post('/register' , postUser);
router.post('/login' , loginUser);
module.exports = router;
