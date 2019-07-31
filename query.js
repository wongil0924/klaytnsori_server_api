//- 게시판 클릭 시 함수 호출: showQuestion() - 채택 여부(select)/채택 기간(remainingTime) 확인 후 질문 번호, 질문 제목, 남은 시간 출력

//-- 게시판 클릭 시 전체 질문 조회
var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  klaytnsori.query("SELECT * FROM question", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

// #해결해야하는것
// is_selected 는 answer table에서 받아야 함 -> 답변이 없는 질문은?
// date 는 현재 시간과 비교해야 함

-- 채택중인 게시판 조회
var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  klaytnsori.query("SELECT * FROM question WHERE is_selected = false AND date < 7days", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//-- 채택된 게시판 조회
var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  klaytnsori.query("SELECT * FROM question WHERE is_selected = true", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//- 질문 등록 시 함수 호출(1): registerQuestion(char questionAccount, char questionTitle, char questionContent, double klay) - 질문 번호 생성

//#
//질문 번호 생성

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO question (question_num, email, question_title, category, question_content, klay) VALUES (1, 'w@w', 'title', 1, 'hello', 10)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

//- 질문 등록 시 함수 호출(2): sendQuestionToCaver(char questionAccount, double klay ,int questionNum)

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  klaytnsori.query("SELECT email, klay, question_num FROM question WHERE question_num = 1", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//- 질문 등록 시 함수 호출(3): registerTime() - 서버를 통해 블록이 생성된 시간 저장

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO question (time) VALUES ('0000:00:00:00:00')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

//- 답변 등록 시 함수 호출(1): registerAnswer(int questionNum, char answerAccount, char answerContent) - 답변 번호 생성

//#
//답변 번호 생성

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO answer (answer_num, email, answer_content, question_num, is_selected) VALUES (1, 'g@g', 'a', 1, false)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

//- 답변 등록 시 함수 호출(2): sendAnswerToCaver(int questionNum, int answerNum, char answerAccount)

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  klaytnsori.query("SELECT question_num, answer_num, email FROM answer WHERE question_num = 1 AND answer_num = 1", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


//- 질문자가 답변 채택하기 위해 자신의 질문인지 확인 시 함수 호출: selectQuestion(char questionAccount) - 본인 여부 확인 후 채택 버튼 활성화/비활성화

//- 답변 채택 시 함수 호출(1): toggleState(int questionNum, int answerNum)

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO answer (is_selected) VALUES (ture)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

//- 답변 채택 시 함수 호출(2): selectAnswerToCaver(char answerAccount, int questionNum, int answerNum, double klay)

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  klaytnsori.query("SELECT answer.email, answer.question_num, answer.answer_num, question.klay FROM question JOIN answer ON question.question_num = answer.question_num", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//- Like 누를 시 함수 호출(1): selectLike(char likeAccount, int questionNum, char answerNum)

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO like (question_num, answer_num ,email) VALUES (1, 1, 'w@g')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

//- Like 누를 시 함수 호출(2): sendLikeToCaver(char likeAccount, int questionNum, char answerNum)

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  klaytnsori.query("SELECT email, question_num, answer_num FROM like WHERE email = 'w@g'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//- Like 종료: sendLikeKlayToCaver(char questionNum, double klay) - 질문 번호로 답변자 및 like 사용자들에게 상황 별로 klay 전송, Like Table에서 답변 번호 갯수로 Like 수 확인

var mysql = require('mysql');

var klaytnsori = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "klaytndb"
});

klaytnsori.connect(function(err) {
  if (err) throw err;
  klaytnsori.query("SELECT question_num, klay FROM question WHERE email = 'w@g'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
