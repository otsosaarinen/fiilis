# Fiilis

## Built with
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

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


