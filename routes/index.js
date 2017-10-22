var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    posts:
      [
          { title: "Hello World",
            date: "۱۲ تیر ۱۳۷۵",
            author: "مسعود",
            text: "این یک پست تست هستش."
          },
          { title: "Hello World2",
              date: "Hamin Alan",
              author: "Masood",
              text: "This is a test post!"
          },
          { title: "سلام خوبی؟",
              date: "مرداد ۷۶",
              author: "چاکرم",
              text: "تست می‌شود"
          }
    ],
    pagination: {
      new: {status: true, link: "/p1"},
      old: {status: false, link: null}
    }
  });
});

module.exports = router;
