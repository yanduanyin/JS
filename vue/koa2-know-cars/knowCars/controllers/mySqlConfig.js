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
let getAllRecommend = function () {
  let _sql = `select * from recommend`
  return allServies.query(_sql)
}
// 读取所有new表数据， 测试数据连接
let getAllNew = function () {
  let _sql = `select * from new`
  return allServies.query(_sql)
}
// 读取所有newResources表数据， 测试数据连接
let getAllNewResources = function () {
  let _sql = `select * from newResources`
  return allServies.query(_sql)
}
// 读取所有evaluation表数据， 测试数据连接
let getAllEvaluation = function () {
  let _sql = `select * from evaluation`
  return allServies.query(_sql)
}
// 读取所有shopping表数据， 测试数据连接
let getAllShopping = function () {
  let _sql = `select * from shopping`
  return allServies.query(_sql)
}
// 读取所有SUV表数据， 测试数据连接
let getAllSuv = function () {
  let _sql = `select * from SUV`
  return allServies.query(_sql)
}
// 读取所有tarvel表数据， 测试数据连接
let getAllTarvel = function () {
  let _sql = `select * from tarvel`
  return allServies.query(_sql)
}
// 读取所有task表数据， 测试数据连接
let getAllTask = function () {
  let _sql = `select * from task`
  return allServies.query(_sql)
}
// 读取所有use表数据， 测试数据连接
let getAllUse = function () {
  let _sql = `select * from use`
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
  getAllUse
}