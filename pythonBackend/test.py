capabilities = {
    "appium:deviceName": "ZTE Blade A3 2020",
    "appium:udid": "320514062002",
    "platformName": "Android",
    "appium:platformVersion": "9"
    }

driver = webdriver.Remote(command_executor='http://127.0.0.1:4723/wd/hub',options= capabilities)