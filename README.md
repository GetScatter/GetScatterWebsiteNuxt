# DigitalForge

> Website for the get-scatter.com website

## Build Setup

We are running digitalforge.codes with PM2. After each update you must run:

1. Pull from github on the server: 'git pull origin master'
2. yarn install && yarn build
3. run "pm2 reload gs_run"

Setting up PM2

1. Make sure that there is an "ecosystem.config.js" file, and .env, .env.dev, etc.
2. In ecosystem.config.js you must define the correct start script
3. "pm2 start ecosystem.config.js --only gs_run" will run the script as a daemon
  