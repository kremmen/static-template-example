const util = require("util");
const fs = require("fs");
const ejs = require("ejs")

const writeFile = util.promisify(fs.writeFile)

const outputPath = 'build'
const pagePath = '../pages/'

function build(outputPath) {

  if (!fs.existsSync(outputPath)) {
    fs.mkdir(outputPath, function(err) {
      if (err) {
        return console.error(err);
      }
    });
  }
  
  buildPage(outputPath + '/index.html', pagePath + "index.ejs", {title: "My Home Page"})
  buildPage(outputPath + '/about.html', pagePath + "about.ejs", {title: "My About Page"})
}

async function buildPage(output, path, params) {
      
    try {
      const html = await template(path, params)
      await writeFile(output, html)
    } catch (err) {
      return console.log(err)
    }

}

async function template(page, params) {

  try {
    return await ejs.renderFile("views/layouts/layout.ejs", {page: page, params: params}, {async: true})
        .then(output => output)
  } catch (err) {
    return console.log(err)
  }

}

build(outputPath)