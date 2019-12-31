const dotenv = require('dotenv')

const autorestart = true
const watch = false
const maxMemoryRestart = '512M'

module.exports = {
  apps: [
    {
      name: 'gs_dev',
      script: 'yarn run dev',
      instances: 1,
      autorestart,
      watch,
      max_memory_restart: maxMemoryRestart,
      env: dotenv.config({ path: './config/.env.dev' }).parsed
    },
    {
      name: 'gs_run',
      script: 'yarn start',
      instances: 1,
      autorestart,
      watch,
      max_memory_restart: maxMemoryRestart,
      env: dotenv.config({ path: './config/.env' }).parsed
    }
  ]
}