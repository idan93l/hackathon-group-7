const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.foodsdictionary.co.il/Recipes/Kitchen/2");

  const elements = await page.$$("h4.card-title");

  for (elem of elements) {
    const text = await page.evaluate((el) => el.textContent, elem);
    console.log(text.split("").reverse().join(""));
  }
  await browser.close();
})();
