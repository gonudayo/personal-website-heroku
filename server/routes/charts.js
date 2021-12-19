const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const map1 = new Map();

router.get('/data', async (req, res) => {
	let arr = [];

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
			if (count != 0) map1.set(day, { value: count, commit: count, solve: 0 });
			if (count != 0) arr.push({ day: day, value: count, commit: count });
			// console.log(map1.get(day));
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
					t = '';
				} else if (str[i] != ',') t += str[i];
			}
			let array = Array.from(map1, ([day, value]) => ({
				day,
				value: value.value,
				commit: value.commit,
				solve: value.solve,
			}));
			// for (var i in array) {
			// 	console.log(array[i]);
			// }
			return res.status(200).json({ success: true, arr: array });
		});
	});
});

module.exports = router;