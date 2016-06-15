import Config from './config';

exports.login = function(email, password) {
	var route = Config.commonRoute + '/login';
	return fetch(route, {
		method: 'POST',
		headers: {
			'Accept': 'application.json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			password: password,
		})
	}).then(function(response){
			return response.json();
		}).then(function(json){
			return {
				result: json.result,
			}
		});
};
