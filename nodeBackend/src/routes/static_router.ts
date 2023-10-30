import { Router } from "express";
import express from 'express'

export const static_files = Router()

static_files.options('/')
static_files.use(express.static('pub'))