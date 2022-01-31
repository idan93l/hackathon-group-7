const puppeteer = require("puppeteer");

const scrape = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${url}`);

    const elements = await page.$$("#lyrics-root-pin-spacer a");

    let text = "";
    for (elem of elements) {
        text += "<br>";
        text += await page.evaluate((el) => el.innerHTML, elem);
    }
    await browser.close();
    return text;
};

module.exports = scrape;
