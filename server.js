const app = require("./index")
const http = require("http");
require("dotenv").config();

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

server.listen(PORT, (err) => {
    if(err) {
        console.error(`Server Error: ${err}`);
    }
    console.log(`Server is running on: http://localhost:${PORT}`);
    
})