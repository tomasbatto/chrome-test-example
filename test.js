const HeadlessChrome = require('simple-headless-chrome')

const browser = new HeadlessChrome({
  headless: false // If you turn this off, you can actually see the browser navigate with your instructions
  // see above if using remote interface
})
async function navigateWebsite() {
  await browser.init()
  // Navigate to a URL
  await browser.goTo('http://www.github.com')

  // Take a screenshot
  await browser.saveScreenshot('./github.png')
  
 }
 navigateWebsite()
