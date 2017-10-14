import { doFetch } from './fetcher'

export default {
	add: (data) => doFetch('http://localhost/React/append_data.php', 'post', {data}),
	remove: (arrayKeys) => doFetch('http://localhost/React/remove.php', 'post', {arrayKeys}),
	get_all: () => doFetch('http://localhost/React/get_data.php', 'post', {}),
}