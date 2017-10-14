import formurlencoded from 'form-urlencoded'

export function doFetch(url, method, data) {
	let params = {
		method: method,
		body: formurlencoded(data),
		headers: {
			'Content-Type' : 'application/x-www-form-urlencoded'
		},
	}

	return fetch(url, params).then(response => response.json());
}

/*

axios
fetch
jquery
comet

*/