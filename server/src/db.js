const db = {
    dbUri: 'mongodb://localhost:27017/todoDatabase'
}

const getDb = key => db[key];

module.exports = getDb;

