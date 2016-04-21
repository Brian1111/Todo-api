var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
<<<<<<< d6560df92f7d8bcd28d8073101382c1d381ddbbe
    sequelize = new Sequelize(process.env.DATABASE_URL {
=======
    sequelize = new Sequelize(process.env.DATABASE_URL, {
>>>>>>> Convert GET /todos to sequelize
        dialect: 'postgres'
    });
} else {
    sequelize = new Sequelize(undefined, undefined, undefined, {
        'dialect': 'sqlite',
        'storage': __dirname + '/data/dev-todo-api.sqlite'
    });
}

var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;