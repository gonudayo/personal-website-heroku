const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const { Record } = require('../models/Record');

router.get('/study', async (req, res) => {
	let map1 = new Map();
	let arr = [];
	let totalCommit = 0;
	let totalSolve = 0;

	const getCommit = async () => {
		try {
			return await axios.get('https://github.com/gonudayo');
		} catch (error) {}
	};

	await getCommit().then(async (html) => {
		const $ = cheerio.load(html.data);
		let parentTag = $('rect');

		await parentTag.each(function (i, elem) {
			let day = $(this).attr('data-date');
			let count = $(this).attr('data-count') * 1;
			if (!isNaN(count) && count != 0) {
				map1.set(day, { value: count, commit: count, solve: 0 });
				totalCommit += count;
			}
		});

		const getSolved = async () => {
			try {
				return await axios.get('https://www.acmicpc.net/user/gonudayo');
			} catch (error) {}
		};

		await getSolved().then((html) => {
			const $ = cheerio.load(html.data);
			let parentTag = $('script');
			var str = parentTag[27].children[0].data;
			var strSplit = str.split(' ');
			var str = strSplit[9];

			var t = '';
			for (var i = 1; i < str.length - 3; i++) {
				if (str[i] == '[') continue;
				else if (str[i] == ']') {
					let day = t[0] + t[1] + t[2] + t[3] + '-' + t[4] + t[5] + '-' + t[6] + t[7];
					let count = t.substr(8) * 1;
					if (map1.has(day)) {
						map1.set(day, {
							value: map1.get(day).value + count,
							commit: map1.get(day).commit,
							solve: count,
						});
					} else map1.set(day, { value: count, commit: 0, solve: count });
					totalSolve += count;
					t = '';
				} else if (str[i] != ',') t += str[i];
			}
			let array = Array.from(map1, ([day, value]) => ({
				day,
				value: value.value,
				commit: value.commit,
				solve: value.solve,
			}));

			// api 결과 값 확인
			// for (var i in array) {
			// 	console.log(array[i]);
			// }
			// console.log(totalCommit, totalSolve)

			return res
				.status(200)
				.json({ success: true, arr: array, commits: totalCommit, solves: totalSolve });
		});
	});
});

router.get('/stock', (req, res) => {
	Record.find(async (err, data) => {
		if (err) res.status(400).json({ success: false, arr: err });
		let arr = data;
		await arr.sort(function (a, b) {
			return parseInt(a.day.replace(/-/gi, "")) - parseInt(b.day.replace(/-/gi, ""));
		})
		return res.status(200).json({ success: true, arr: arr });
	});
});

module.exports = router;