/**
 * Created by Administrator on 2017/5/6.
 */
var MongonDb = require("mongodb").MongoClient;
var assert = require("assert");
function _connectMongoDb(mydb,callback) {
  var url="mongodb://localhost:27017/"+mydb;
  console.log(url);
  MongonDb.connect(url,function (err,db) {
    if(err){
      callback(err,null)
    }
    callback(err,db);
  })
}
/**
 *
 * @param mydb 所要使用数据库的名称
 * @param collection 数据库中的集合
 * @param json 所要插入的数据
 * @param callback 回调函数
 */
exports.insert = function (mydb,collection,json,callback) {
  _connectMongoDb(mydb,function (err,db) {
    db.collection(collection).insertOne(json,function (err,result) {
      if(err){
        callback(err,null);
        return;
      }
      callback(err,result);
      db.close();
    })
  })
}
/**
 *
 * @param mydb 所要使用数据库的名称
 * @param collection 数据库中的集合
 * @param json 所要插入的数据
 * @param args 分页管理传入格式为{"pageamount":aa,"page:aa"}
 * @param callback 回调函数
 */
exports.find = function (mydb,collection,json,callback) {
  _connectMongoDb(mydb,function (err,db) {
    db.collection(collection).find(json).toArray(function (err,items) {
      if(err)
      {
        callback(err,null);
        return;
      }
      callback(err,items);
      db.close();
    })
  })
}
exports.update = function (mydb,collection,query,json,callback) {
  _connectMongoDb(mydb,(function (err,db) {
    db.collection(collection).updateOne(query,json,function (err,result) {
      if(err)
      {
        callback(err,null);
        return;
      }
      callback(err,result);
      db.close();
    })
  }))
}

exports.delete = function (mydb,collection,json,callback) {
  _connectMongoDb(mydb,function (err,db) {
    db.collection(collection).deleteOne(json,function (err,result) {
      if(err)
      {
        callback(err);
        return;
      }
      callback(err,result);
    })
  })
}
