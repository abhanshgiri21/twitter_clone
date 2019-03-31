### Twitter Clone

This project is an attempt to clone some, if not all of the functionalities of twitter by exposing a set of REST api's that support various operations.

The api's are written in [NodeJS](https://nodejs.org/en/) using [Express](https://expressjs.com/).

Steps to run the api server:
> Make sure you have NodeJS version 10 or higher installed. Also make sure the global install directory of nodejs global packages does not require root priviledges to avoid permission errors.
1) Clone this repository.
2) Navigate to repository folder and execute the following command:
    `npm install`
3) Run the following command to install `knexJS` globally.:
    `npm i -g knex`
4) Make sure you have PostgreSQL installed. Create a DB in postgres. Make note of DB name along with username, password and host(if it's on a remote server). You machine should be able to connect to database using any DB client (PgAdmin, DBeaver).

5) Create a `.env` file in root directory of project to specify necessary environment variables. I have provided the file in the git repository for the sake of simplicity. Edit the DB configuration to your own DB configuration.
6) Run `npm start` in root directory of project to start the api server. This should start the server listening on port `3000`.
7) Import the following postman collection to have a look at the api's and try them out yourself. Set the following environment variable in postman.
    `baseurl : localhost:3000`


