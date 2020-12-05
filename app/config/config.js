module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_password,
    "database": "PersonalityPupDB",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "PersonalityPupDB",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "PersonalityPupDB",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}
