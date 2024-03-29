var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect(function(err) {
  if (err) throw err;
  console.log('connected to DB');
});
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

exports.selectAllMsgs = function(callback) {
  console.log("selectAllMsgs:");
  dbConnection.query('SELECT * FROM messages JOIN users ON messages.id_users = users.id JOIN chatrooms ON messages.id_chatrooms = chatrooms.id', function (err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result));
    callback(result);
  });
};
