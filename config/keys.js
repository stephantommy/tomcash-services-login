module.exports = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3002,

    // mongoUrl: 'mongodb+srv://db_user:db_pass@cluster0.5vgix.mongodb.net/<dbname>?retryWrites=true&w=majority',
    mongoUrl: 'mongodb://localhost:27017/testDB'
}
