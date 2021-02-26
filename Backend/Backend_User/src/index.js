const server = require("./app");
const config = require("./config");
server.listen(7009, '127.0.0.1' ,() => {
  console.log(`Server is running on ${config.host}:${config.port}`);
});
