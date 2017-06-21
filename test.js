const HeadlessChrome = require('simple-headless-chrome')

const browser = new HeadlessChrome({
  headless: false
})
async function navigateWebsite() {
  await browser.init()
  // Navigate to a URL
  await browser.goTo('http://www.github.com')

  // Take a screenshot
  await browser.saveScreenshot('./github.png')

}
navigateWebsite()
