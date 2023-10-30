from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from seleniumScript import Navigator
from appiumScript import NavigatorAppium
from selenium import webdriver
from selenium.common.exceptions import TimeoutException

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Sesion(BaseModel):
    targetURL: str
    servicio: str
    comandos: list


@app.post('/executeSelenium', status_code=status.HTTP_202_ACCEPTED)
def seleniumExecutor(element: Sesion):

    webdriver_url = 'http://localhost:4444/wd/hub'
    chromeOptions = webdriver.ChromeOptions()

    try:
        result = Navigator(command_executor=webdriver_url,
                           options=chromeOptions)
        result.initialArguments(element.targetURL, element.comandos)
        result.implicitly_wait(30)
        result.executeDefaultRoutine()

        return {"works": "works"}

    except TimeoutException:
        result.quit()
        print('no Funciona')
        return {"works": "works"}

    except Exception as e:
        print(e)
        return {"works": "works"}


@app.post('/executeAppium', status_code=status.HTTP_202_ACCEPTED)
def appiumExecutor(element: Sesion):

    print(element)

    capabilities = {
        "appium:deviceName": "Redmi A2",
        "platformName": "Android",
        "appium:platformVersion": "13"
    }

    try:

        driver = NavigatorAppium('http://127.0.0.1:4723/wd/hub', capabilities)
        print(driver)
        driver.implicitly_wait(30)
        driver.initialArguments(element.comandos)
        driver.executeDefaultRoutine()
        return {"works": "works"}

    except TimeoutException:
        print('No funciona')
        return {"works": "works"}

    except Exception as e:
        print(e)
        return {"works": "works"}
