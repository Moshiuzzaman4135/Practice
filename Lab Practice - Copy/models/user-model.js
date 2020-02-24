var db = require('./db');
module.exports = {

	validate : function(user,callback){
		var sql = "select * from user where username=? and password=?";//SQL query
		db.getResults(sql,[user.username,user.password],function(results){ //Get result in db with 3 parametes to send conditions
			if(results.length > 0 ){
				callback(true);
			}
			else{
				callback(false);
			}
		});
	},
	getByUname: function(username,callback){
		var sql = "select * from user where username=?";
		db.getResults(sql,[username],function(result){
			if(result.length>0){
				callback(result[0]);
			}
			else{
				callback(null);
			}
		});
	}
}