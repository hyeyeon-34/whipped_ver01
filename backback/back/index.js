const express = require('express'); // express 모듈 불러오기
const cors = require('cors'); // cors 모듈 불러오기
const PORT = '8080';
const app = express(); // express 모듈을 사용하기 위해 app 변수에 할당한다.
const cookieParser = require('cookie-parser');


app.use(cors({
  origin : "http://localhost:3000",
  credentials : true,
})); // http, https 프로토콜을 사용하는 서버 간의 통신을 허용한다.
app.use(express.json()); // express 모듈의 json() 메소드를 사용한다.
app.use(cookieParser())

app.use(require('./routers/postRoutes'))
app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); // 서버실행시 메시지

