const puppeteer = require("puppeteer");

(async () => {
  console.log("im about to explode");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://genius.com/Nine-inch-nails-hurt-lyrics");

  const elements = await page.$$("#lyrics-root-pin-spacer a");

  for (elem of elements) {
    const text = await page.evaluate((el) => el.innerHTML, elem);
    console.log(text);
  }
  await browser.close();
})();
