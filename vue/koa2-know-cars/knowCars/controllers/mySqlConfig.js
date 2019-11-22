var mysql = require('mysql')
var config = require('./defaultConfig.js')

// 创建线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 定义一个统一连接数据库的方法
let allServies = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release() // 释放连接池
          })
        }
      })
    })
  }
}

// 读取所有recommend表数据， 测试数据连接
let getAllRecommend = function (idx) {
  let _sql = `select * from recommend limit ${idx}`
  return allServies.query(_sql)
}
// 读取所有new表数据， 测试数据连接
let getAllNew = function (idx) {
  let _sql = `select * from new limit ${idx}`
  return allServies.query(_sql)
}
// 读取所有newResources表数据， 测试数据连接
let getAllNewResources = function (idx) {
  let _sql = `select * from newResources limit ${idx}`
  return allServies.query(_sql)
}
// 读取所有evaluation表数据， 测试数据连接
let getAllEvaluation = function (idx) {
  let _sql = `select * from evaluation limit ${idx}`
  return allServies.query(_sql)
}
// 读取所有shopping表数据， 测试数据连接
let getAllShopping = function (idx) {
  let _sql = `select * from shopping limit ${idx}`
  return allServies.query(_sql)
}
// 读取所有SUV表数据， 测试数据连接
let getAllSuv = function (idx) {
  let _sql = `select * from SUV limit ${idx}`
  return allServies.query(_sql)
}
// 读取所有tarvel表数据， 测试数据连接
let getAllTarvel = function (idx) {
  let _sql = `select * from tarvel limit ${idx}`
  return allServies.query(_sql)
}
// 读取所有task表数据， 测试数据连接
let getAllTask = function (idx) {
  let _sql = `select * from task limit ${idx}`
  return allServies.query(_sql)
}
// 读取所有use表数据， 测试数据连接
let getAllUsecars = function (idx) {
  let _sql = `select * from usecars limit ${idx}`
  return allServies.query(_sql)
}

module.exports = {
  getAllRecommend,
  getAllNew,
  getAllNewResources,
  getAllEvaluation,
  getAllShopping,
  getAllSuv,
  getAllTarvel,
  getAllTask,
  getAllUsecars
  
}