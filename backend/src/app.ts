const express = require('express')
import { setupMiddleware } from '@/setup/setupMIddleware'
import { setupRouter } from '@/setup/setupRouter'
import { setupServer } from '@/setup/setupServer'

const app = express()

setupMiddleware(app)
setupRouter(app)
setupServer(app)
