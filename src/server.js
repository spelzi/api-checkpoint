const http = require("http");
const app = require("./app");
const server = http.createServer(app);

// db connection function imported from utils folder
const mongoConnect = require("./utils/dbConnect");

// server connected port number
const PORT = 3001;

const startServer = async () => {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`server is live on port: ${PORT}`);
  });
};

startServer();
