from seleniumScript import Navigator
from seleniumScript import Navigator
from selenium import webdriver
import json
import copy

#Declaramos la url de webdriver
webdriver_url = 'http://localhost:4444/wd/hub'

#Configuraciones de webdriver
firefoxOptions = webdriver.FirefoxOptions()
chromeOptions=webdriver.ChromeOptions()
edgeOptions = webdriver.EdgeOptions()

drivers = [
    firefoxOptions,
    chromeOptions,
    edgeOptions
]

def executeScript(jsonData: dict) -> list:

    #Declaramos variables que nos interesen
    url = jsonData["targetURL"]
    tests:list = jsonData["tests"]
    
    for t in tests:
        for driver in drivers:
            result = Navigator(command_executor=webdriver_url, options=driver)
            result.initialArguments(url=url, test=t)
            result.executeValidatorRoutine()

            if len(result.sucesos) != 0:
                sucesos.append(result.sucesos)
    
