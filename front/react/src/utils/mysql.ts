var mysql = require('mysql')

var mysql_user = {
    host:"58.199.168.73",
    user:"root",
    password:"114986550cld",
    database:"AI4mater"
}
var connection = mysql.createConnection(mysql_user,{multipleStatement: true});
module.exports={
    connection
}