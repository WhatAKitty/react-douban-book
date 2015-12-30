module.exports = function() {
	
	var _constant = {
		title: "豆瓣读书Node客户端"
	};
	
	return function() {
		return _constant;
	}
	
	// return function(key, value) {
	// 	return setValue(key, value, true);
	// }
	
	// return function(key, value, override) {
	// 	return setValue(key, value, override);
	// }
	
	// var setValue = function(key, value, override) {
	// 	if (_constant[key] && override) {
	// 		_constant[key] = value;
	// 	}
	// 	return _constant;
	// }
	
}