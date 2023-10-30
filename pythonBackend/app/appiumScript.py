from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class NavigatorAppium(webdriver.Remote, AppiumBy):

    def initialArguments(self, comandos: list):
        self.comandos: list = comandos

    def selectElementByClassName(self, location: str):
        WebDriverWait(driver=self, timeout=60).until(
            EC.presence_of_element_located((self.CLASS_NAME, location)))
        self.element = self.find_element(by=self.CLASS_NAME, value=location)

    def selectElementByID(self, location: str):
        WebDriverWait(driver=self, timeout=60).until(
            EC.presence_of_element_located((self.ACCESSIBILITY_ID, location)))
        self.element = self.find_element(
            by=self.ACCESSIBILITY_ID, value=location)

    def selectElementByXPATH(self, location: str):
        WebDriverWait(driver=self, timeout=60).until(
            EC.presence_of_element_located((self.XPATH, location)))
        self.element = self.find_element(by=self.XPATH,
                                         value=location)

    def selectElementByCssSelector(self, location: str):
        WebDriverWait(driver=self, timeout=60).until(
            EC.presence_of_element_located((self.CSS_SELECTOR, location)))
        self.element = self.find_element(by=self.CSS_SELECTOR,
                                         value=location)

    def filterSelector(self, typeLocation: str, location: str):
        match typeLocation:
            case 'CSS':
                self.selectElementByCssSelector(location)
            case 'XPATH':
                self.selectElementByXPATH(location)
            case 'ID':
                self.selectElementByID(location)
            case 'CLASSNAME':
                self.selectElementByClassName(location)

    def typeElement(self, content: str):
        self.clickElement()
        self.element.send_keys(content)
        self.hide_keyboard()

    def clickElement(self):
        self.element.click()

    def executeDefaultRoutine(self):
        commands = self.comandos

        for c in commands:

            # Datos de comando
            command = c["command"]
            # Datos de ubicacion
            location = c["location"]
            typeLocation = c["typeLocation"]
            # Datos de indice
            index = c["index"]
            # Valor
            value = c["value"]

            print(index)
            print(typeLocation)
            print(location)

            self.filterSelector(typeLocation, location)

            if command == 'type':
                self.typeElement(value)
            else:
                self.clickElement()

        self.quit()
