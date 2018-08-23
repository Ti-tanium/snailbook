//新增图书

//获取豆瓣信息

//信息入库

const https = require("https");
const { mysql } = require("../qcloud");

module.exports = async ctx => {
  const { ISBN, openId } = ctx.request.body;
  if (ISBN && openId) {
    //查询当前添加的书是否已经存在本地数据库
    const exist = await mysql("book")
      .select()
      .where("isbn", ISBN);
    if (exist.length) {
      ctx.state = {
        code: -1,
        data: {
          msg: "图书已存在"
        }
      };
      return;
    }

    let url = "https://api.douban.com/v2/book/isbn/" + ISBN;
    console.log(url);
    try {
      const bookInfo = await getJSON(url);
    } catch (e) {
      ctx.state = {
        code: -1,
        data: {
          msg: "oops!我与这本书素未蒙面呢"
        }
      };
      return;
    }

    const average = bookInfo.rating.average;
    const { title, image, alt, publisher, summary, price } = bookInfo;
    const tags = bookInfo.tags
      .map(v => {
        return v.name + " " + v.count;
      })
      .join(",");
    const author = bookInfo.author.join(",");

    //mysql 是个异步函数，使用await将其转成同步，并使用try catch做错误处理
    try {
      await mysql("book").insert({
        ISBN,
        openId,
        average,
        title,
        image,
        alt,
        publisher,
        summary,
        price,
        tags,
        author
      });
      //这里的ctx.state就是客户端request成功后得到的res
      //code 默认是0
      ctx.state.data = {
        title,
        msg: "success"
      };
    } catch (e) {
      ctx.state = {
        code: -1,
        data: {
          msg: "新增失败：" + e.sqlMessage
        }
      };
    }
  }
};

function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let urlData = "";
      res.on("data", data => {
        urlData += data;
      });
      res.on("end", data => {
        const bookInfo = JSON.parse(urlData);
        if (bookInfo.title) {
          resolve(bookInfo);
        } else {
          reject(bookInfo);
        }
      });
    });
  });
}
