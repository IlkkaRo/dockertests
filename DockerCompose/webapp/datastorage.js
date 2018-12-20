'use strict';

const mysql     = require('mysql');

module.exports  = class Database {
  constructor(options) {
    this.options = options;
    this.getAllPersons = 'select * from person';
  }

  doQuery(sql, ...parameters) {
    return new Promise((resolve, reject) => {
      let connection = mysql.createConnection(this.options);
      connection.query(sql,[...parameters], (err,result) => {
        if(err) {
          reject(new Error('Statement error:'+err.message))}
      } else {
        resolve(result);
      });
      connection.end();
    });
  }

  getAll() {
    return new Promise(async (resolve,reject) => {
      try{
        let result = await this.doQuery(this.getAllPersons);
        resolve(result);
      }
      catch(err){
        reject(new Error('Statement error:'+err.message))
      }
    });
  }
}
