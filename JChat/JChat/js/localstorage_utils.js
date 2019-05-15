// local stroage utils
LocalStroageUtils = {
	getToken: function() {
		return plus.storage.getItem("token");
	},
	
	put: function(key, value) {
		plus.storage.setItem(key, value);
	},
	
	get: function(key) {
		plus.storage.getItem(key);
	},
	
	getUserInfo: function() {
		LocalStroageUtils.get(USER_INFO);
	}
}