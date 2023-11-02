from typing import List, Union
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.options import BaseOptions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, InvalidSessionIdException
import copy
import uuid
import json


class Navigator(webdriver.Remote, By):

    def __init__(self, command_executor="http://127.0.0.1:4444", keep_alive=True, file_detector=None, options: BaseOptions | List[BaseOptions] = None) -> None:
        super().__init__(command_executor, keep_alive, file_detector, options)

    def initialArguments(self, url: str, comandos: list):

        self.targetURL: str = url
        self.comandos: list = comandos

    def selectElementByXPATH(self, location: str):
        WebDriverWait(driver=self, timeout=30).until(
            EC.element_to_be_clickable((self.XPATH, location)))
        self.element = self.find_element(by=self.XPATH,
                                         value=location)

    def selectElementByCssSelector(self, location: str):
        WebDriverWait(driver=self, timeout=30).until(
            EC.presence_of_element_located((self.CSS_SELECTOR, location)))
        self.element = self.find_element(by=self.CSS_SELECTOR,
                                         value=location)

    def selectElementByClassName(self, location: str):
        WebDriverWait(driver=self, timeout=30).until(
            EC.presence_of_element_located((self.CSS_SELECTOR, location)))
        self.element = self.find_element(by=self.CLASS_NAME,
                                         value=location)

    def selectElementByID(self, location: str):
        WebDriverWait(driver=self, timeout=30).until(
            EC.presence_of_element_located((self.CSS_SELECTOR, location)))
        self.element = self.find_element(by=self.ID,
                                         value=location)

    def filterSelector(self, typeLocation: str, location: str):
        match typeLocation:
            case 'CSS':
                self.selectElementByCssSelector(location)
            case 'XPATH':
                self.selectElementByXPATH(location)
            case 'CLASSNAME':
                self.selectElementByClassName(location)
            case 'ID':
                self.selectElementByID(location)

    def initSession(self):

        self.get(self.targetURL)
        self.set_window_size(1500, 1000)

    def typeElement(self, content: str):
        self.element.send_keys(content)

    def clickElement(self):
        self.element.click()

    def executeDefaultRoutine(self):
        self.initSession()

        commands = self.comandos

        for c in commands:

            # Datos de comando
            command = c["command"]
            # Datos de ubicacion
            location = str(c["location"])
            typeLocation = c["typeLocation"]
            # Valor
            value = c["value"]

            self.filterSelector(typeLocation, location)

            if command == 'type':
                self.typeElement(value)
            else:
                self.clickElement()

        self.quit()
