# shorts-backend

To get started, clone this project to your local machine.  

You will need a local or cloud based postgreSQL database in order to get this backend up and running. Checkout [PostgreSQL](https://www.postgresql.org/download/) to see how to download it and start it up. 

If you are unfamiliar with sql it would be best to do some research.

After cloning down the project create a .env file in the root directory and populate it with the following;

```
PORT=8000
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=tweets_dev
PG_USER=postgres
SECRET_KEY='a key of your choice'
```
In the SECRET_KEY you will place an assortment of letters and numbers that will be used to sign tokens when a user logs in and/or signs up. Check out [JWT](https://jwt.io/) for more information on the process and for troubleshooting your tokens.

After creating the .env file run the following commands in the terminal at the root folder 'shorts-backend' unless you changed it when cloning;
`npm install` installs the dependencies

`npm run dbinit` initializes your database and creates some tables check out the schema.sql in the db folder.

`npm run dbseed` populates the database's tables with some information.

Ensure that you have postgreSQL running otherwise dbinit and dbseed will not work.

After that you are ready to start the server, you can run 

`npm start`

If you have nodemon you can run `npm run devstart` or `nodemon server.js`

If you want to install nodemon, a package that restarts the server on changes, run the following in the terminal ;

`npm install -g nodemon` 

'-g' install this package globally so you can use it in your other projects too.

Your backend should be up and running now, check [http://localhost:8000/tweets](http://localhost:8000/tweets) to see the data in your database

You can now checkout how to get the [frontend](https://github.com/felizj17/shorts-frontend) up and running

[App](https://shorts-app.netlify.app/)
