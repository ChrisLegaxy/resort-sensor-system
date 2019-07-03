module.exports = {
    ENV : process.env.NODE_ENV,
    PORT : process.env.PORT || 7000,
    MONGODB_URI : process.env.MONGODB_URI || 'mongodb+srv://admin:12345@test-hnilf.mongodb.net/test?retryWrites=true&w=majority'
}