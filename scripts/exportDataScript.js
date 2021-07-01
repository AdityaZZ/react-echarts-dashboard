/**
 * node scripts of init bi data
 * @author Adtiya
 * @date 2021/7/1
 */
const fs = require('fs');
const initSqlJs = require('sql.js');
const collegeData = require('./collegeData');
const doctorData = require('./doctorData');

initSqlJs().then((SQL) => {
  //  init db
  const db = new SQL.Database();

  // create table

  // create table 各学院招生人数表
  db.exec(`CREATE TABLE 各学院招生人数表(
     学院     CHAR(50),
     专业     CHAR(50),
     志愿     CHAR(50),
     实际招生  INT,
     计划招生  INT
  )`);

  // insert data

  // insert data 各学院招生人数表
  collegeData.forEach((x) => {
    db.exec(`INSERT INTO 各学院招生人数表 VALUES(?,?,?,?,?)`, x);
  });

  // create table 医生门诊数据表
  db.exec(`CREATE TABLE 医生门诊数据表(
     时间     CHAR(50),
     医生姓名  CHAR(50),
     职务     CHAR(50),
     号别     INT,
     出诊次数  INT
  )`);

  // insert data 医生门诊数据表
  doctorData.forEach((x) => {
    db.exec(`INSERT INTO 医生门诊数据表 VALUES(?,?,?,?,?)`, x);
  });

  // export db file
  const data = db.export();
  const buffer = new Buffer(data);
  fs.writeFileSync('bi_test_data.sqlite', buffer);
});
