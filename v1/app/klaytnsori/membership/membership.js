var express = require('express');
var router = express.Router();
var result = require('../../../../result');
var caver = require('caver-js');

//login
router.post(('/login'),function(req,res,next){
  var isValid = true;
  var validationError = {
      name : 'ValidationError',
      errors:{}
  };

  if(!req.body.email){
    isValid = false;
    validationError.errors.email = { message:'Email is required!'};
  }

  if(!req.body.password){
    isValid = false;
    validationError.errors.password = {message: 'Password is required!'};
  }
  if(!isValid) return res.json(result.successFalse(validationError));

  else next();
  },
  function(req,res,next){
    var u_email = req.body.email;
    var u_pw = req.body.password;
    //DB에서 u_email과 u_pw확인 후 session_id 부여 변수명은 _session


    if(err) return res.json(result.successFalse(err));
    else {
      var data = {
        session_id : _session
      };
      return res.json(result.successTrue(data));
    }
  });

//logout
router.post('/logout', function(req,res){

  var logout_session = req.body.session_id;

  //DB에서 해당 session_id 클리어하고 u_emil로 email 반환

  var data = {message : 'Thanks to use our service'}
  return res.json(result.successTrue(data));
});

//signup
router.post('/signup', function(req,res,next){
  var isValid = true;
  var validationError = {
    name : 'ValidationError',
    errors:{}
  };

  if(!req.body.email){
    isValid = false;
    validationError.errors.email = { message:'Email is required!'};
  }

  if(!req.body.password){
    isValid = false;
    validationError.errors.password = {message: 'Password is required!'};
  }
  if(!isValid) return res.json(result.successFalse(validationError));
  else next();
}, function(req,res,next){
  var u_email = req.body.email;
  var u_pw = req.body.password;
  var _ok;
  var _address;
  var _privateK;
  //DB에서 email에 대한 중복 여부 확인 후 boolen으로 _OK를 리턴 맞다면 true

  if(_ok)
  {
    //caver에서 wallet 생성 후 privateKey와 Address를 돌려줌
    //DB에 추가 email,password, address, privatekey를 저장

    var data = {
      wallet_address: _address
    };
    return res.json(result.successTrue(data));
  }
  else{
    var emailError = {
      name : 'email 중복',
      errors:{}
    };
    emailError.errors = {message: 'Another user is using same email'};
    return res.json(result.successFalse(emailError));
  }
});

//find_pw
router.get('find_pw', function(req,res){
  var _email = req.body.email;
  var _pw;
  //DB에서 해당 email의 pw를 찾음.

  var data = { password : _pw};
  return res.json(result.successTrue(data));
});

//modify_pw
router.post('/modify_pw', function(req,res){
  var _email = req.body.email;
  var m_pw = req.body.password;

  //DB에서 해당 email에 pw를 변경
  return res.json(result.successTrue()={message:'Success to modify your password!'});
});

moudle.exports = router;
