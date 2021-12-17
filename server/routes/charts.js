const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.get('/github', async (req, res) => {
	const getCommit = async () => {
		try {
			return await axios.get('https://github.com/gonudayo');
		} catch (error) {}
	};
	let arr = [];
	await getCommit().then((html) => {
		const $ = cheerio.load(html.data);
		let parentTag = $('rect');

		parentTag.each(function (i, elem) {
			let date = $(this).attr('data-date');
			let count = $(this).attr('data-count') * 1;
			if (count != 0) arr.push({ day: date, value: count, github: count });
		});
		return res.status(200).json({ success: true, arr: arr });
	});
});

router.get('/baekjoon', async (req, res) => {
	const getCommit = async () => {
		try {
			return await axios.get('https://www.acmicpc.net/user/gonudayo');
		} catch (error) {}
	};
	let arr = [];
	await getCommit().then( async (html) => {
		const $ = await cheerio.load(html.data);
		await console.log($('script')[22])
		return res.status(200).json({ success: true });
	});
});

module.exports = router;