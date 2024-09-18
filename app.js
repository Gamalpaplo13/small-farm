const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replacetemplate = require("./modules/replacetemplate");

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  // const pathname = req.url;
  // const method = req.method;
  //overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardhtml = dataObj
      .map((el) => replacetemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardhtml);
    res.end(output);

    //product page
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replacetemplate(tempProduct, product);
    res.end(output);
    //api page
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
    //not found page
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "hello,World",
    });
    res.end("this page is not found");
  }
  res.end();
});
server.listen(8000);
