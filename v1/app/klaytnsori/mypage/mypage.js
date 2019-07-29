var express = require('express');
var router = express.Router();
var result = require('../../../../result');

//거래내역 확인
router.get('/transaction', function(req,res,next){
  d
}, function(req,res,next){
  var u_klay;
  //DB에서 해당 session_id로 들어온 사용자의 email을 확인 후 caver로 거래 내역 조회

  var data = {
    klay : ,
    trans_time : ,
    trans_content : ,
  };
  return res.json(result.successTrue(data));
});

//내가 올린 질문 리스트
router.get('/my_question_list', function(req,res,next){
  d
}, function(req,res,next){
  //DB에서 해당 유저의 질문을 가져옴

  var data = {
    question_title : ,
    question_content : ,
    question_klay : ,
    category : ,
    question_state :
  };
  return res.json(result.successTrue(data));
});

//내가 답변 단 글 리스트
router.get('/my_answer_list', function(req,res,next){
  d
}, function(req,res,next){
  //DB에서 해당 유저의 답변을 가져옴

  var data = {
    question_title : ,
    question_state : ,
    answer_content :
  };
  return res.json(result.successTrue(data));
});

//내가 like 누른 글 리스트
router.get('/my_like_list', function(req,res,next){
  d
}, function(req,res,next){
  //DB에서 해당 유저의 like를 가져옴

  var data = {
    question_title : ,
    answer_content : ,
    like_count :
  };
  return res.json(result.successTrue(data));
});

//내가 보유하고 있는 klay양
router.get('/my_remain_klay', function(req,res,next){
  d
}, function(req,res,next){
  //DB에서 해당 유저의 wallet의 정보를 가져옴

  //caver에서 해당 유저의 klay양을 가져옴

  var data = {
    klay :
  };
  return res.json(result.successTrue(data));
});
