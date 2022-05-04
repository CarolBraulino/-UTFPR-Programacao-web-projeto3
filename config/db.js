if (process.env.NODE_ENV == "production") {
    module.exports = { mongoURI:"mongodb+srv://carolbraulino:<mcarol12>@cluster0.qstld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"}
} else {
    module.exports = { mongoURI: "mongodb://localhost/projetospotify"}
}