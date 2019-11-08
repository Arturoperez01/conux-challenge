const mysqlConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "conux"    
}

const config = {
    publicPath: '../client/dist',
    port: 4000,
    api: '/api'
}

module.exports = {mysqlConfig , config}; 

/*
module.exports = {
	db_Url: 'localhost:27017/challange_db',
    publicPath: '../client/dist',
	port: 8000,
    tokenSecret: 'notasecret',
    api: '/api'
}
//*/