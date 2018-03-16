var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
    	orm.selectAll("burgers", function(res) {
      		cb(res);
    	});
 	},

	createOne: function(burger_name, cb) {
		orm.createOne(burger_name, function(res){
			cb(res);
		});
	},
	updateOne: function(burgerId, cb) {
    	orm.updateOne(burgersId, function(res) {
      		cb(res);
    	});
  	},

};

// Export at the end of the burger.js file.

module.exports = burger;