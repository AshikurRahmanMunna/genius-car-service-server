/**
 * --------------------
 * ONE TIME
 * --------------------
 * 1. Create Heroku Account
 * 2. Verify email
 * 3. Install heroku CLI
 * 4. Heroku Login
 * 
 * --------------------------
 * For each project one time
 * --------------------------
 * 1. heroku create
 * 2. make sure you have updated work on git
 * 3. git push heroku main
 * 4. Go to heroku dashboard > current project > settings > reveal config vars
 * 5. copy pase config vars from your .env file
 * 6. Make sure you whitelisted all ip address in mongodb
 * -------------------------
 * Update Server with new changes
 * -------------------------
 * 1. make changes
 * 2. commit or push changes on git
 * 3. git push heroku main
 * ------------------------------
 * Connect Server with client and deploy client
 * ------------------------------
 * 1. replace localhost by heroku link
 * 2. npm run build
 * 3. firebase deploy
 */