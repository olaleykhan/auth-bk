import axios from 'axios';

// Create instance called instance
// const instance = axios.create({
// 	baseURL: 'https://example.com',
// 	headers: {
// 		'content-type': 'application/octet-stream',
// 		'x-rapidapi-host': 'example.com',
// 		'x-rapidapi-key': process.env.RAPIDAPI_KEY,
// 	},
// });

export const api = axios.create({
	baseURL: 'http://developer.ssafllc.com',
	headers: {
		'content-type': 'application/json',
		'accept': 'application/json',
	},
});
