# Fiilis

## What is Fiilis
Fiilis is a website created to track your physical and mental wellbeing. Website was developed as a practice project and is still under developement.

## Architecture
At the moment website features login, signup & dashboard API endpoints. Login endpoint answers to ``/api/user/auth`` address and signup answers to ``/api/user/create`` address. ``/api/dashboard`` address is used to hydrate user dashboard after authenticating. Website uses postgres and pgadmin4 docker images to host an SQL database.

## How to run
1. Clone the repository to your own machine.
2. Install dependencies
   ```bash
   npm install
   ```
3. Create ``.env`` file to root folder ans fill it with ``DATABASE_URL``, ``JWT_SECRET`` and ``JWT_EXPIRES_IN``. DATABASE_URL is the address of your postgres database. JWT_SECRET is utf-8 encoded string that's used to create the json web tokens. JWT_EXPIRES_IN is the default expiration time for the json web tokens.
4. Start vite developement server
   ```bash
   npm run dev
   ```
5. Start express.js server
   ```bash
   npm run server
   ```
