/**
 * Created by Administrator on 2017/5/6.
 */
var express = require("express");
var DAO = require("./DAO/DAO");
var app =express();
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get("/reigster",function (req,res) {
  let user_type = "user";
  let username = req.query.username;
  let password = req.query.password;
  let tel = parseInt(req.query.tel);
  let qrcodemessage = "";
  let touxiang = req.query.touxiang;
  var json = {
    "user_type":user_type,
    "username":username,
    "password":password,
    "tel":tel,
    "qrcodemessage":qrcodemessage,
    "touxiang":touxiang
  }
  DAO.insert("tpp","user",json,function (err,result) {
    if(err){
      throw err;
    }
    res.send("true");
  });
});
app.get("/login",function (req,res) {
  let username = req.query.username;
  let password = req.query.password;
  let json={
    "username": username,
    "password":password
  }
  console.log(json);
  DAO.find("tpp","user",json,function (err,result) {
    if(err){
      throw err;
    }
    res.send(result);
  })
})
app.get("/datebase",function (req,res) {
  DAO.find("tpp","user",{},function (err,result) {
    if(err){
      throw err;
    }
    res.send(result);
  })
})
app.get("/updateusermessage",function (req,res) {
  var username = req.query.username;
  var changedpassword = req.query.changedpassword;
  var changedtel = req.query.changedtel;
  console.log(changedtel);
  DAO.update("tpp","user",{"username":username},{$set:{"password":changedpassword,"tel":changedtel}},function (err,result) {
    if(err){
      throw err;
    }
    res.send(result);
  })
})
app.get("/buyTicket",function (req,res) {
  let qrcodejson = req.query.qrcodejson;
  let filier = JSON.parse(qrcodejson).content[0];
  console.log(filier);
  let username = filier.username;
  let query = {
    "username":username
  }
  console.log("查询条件:"+query);
  DAO.update("tpp","user",query, {$set:{"qrcodemessage":qrcodejson}},function (err,result) {
    if(err){
      throw err;
      return;
    }
    if(result.toString()){
      res.send("true");
    }else {
      res.send("false");
    }

  })
})
app.get("/getqrcodelength",function (req,res) {
  let username = req.query.username;
  DAO.find("tpp","user",{"username":username},function (err,result) {
    if(err){
      throw err;
    }
    if(result.toString()){
      res.send(result);
    }else{
      res.send("false");
    }

  })
})
app.listen(2900);
