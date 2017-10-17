import { doFetch } from './fetcher'

export default {
	add: (data) => doFetch('/requests/addNew', 'post', {data}),
	remove: (arrayKeys) => doFetch('/requests/remove', 'post', {arrayKeys}),
	get_all: () => doFetch('/requests/getAll', 'post', {}),
}