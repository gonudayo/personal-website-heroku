const express = require('express');
const router = express.Router();

const axios = require('axios');
const cheerio = require('cheerio');


router.get("/", async (req, res) => {

const getCommit = async () => {
      try {
          return await axios.get("https://github.com/gonudayo");
      } catch (error) {}
  };
  let arr = [];
  await getCommit().then(html => {
      const $ = cheerio.load(html.data);
      let parentTag = $("rect");
      
      parentTag.each(function(i, elem) {
        let date = $(this).attr("data-date");
        let count = $(this).attr("data-count");
        arr.push({day: date, value: count});
    });
    console.log(arr);
	  return res.status(200).json({ success: true, arr: arr });
  });
});

module.exports = router;