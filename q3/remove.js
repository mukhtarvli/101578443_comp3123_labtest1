const fs = require("fs");
const path = require("path");

const logsDirectory = path.join(process.cwd(), "Logs");

if (!fs.existsSync(logsDirectory)) {
  console.log("Logs directory does not exist.");
  process.exit(0);
}

for (const fileName of fs.readdirSync(logsDirectory)) {
  const filePath = path.join(logsDirectory, fileName);
  if (fs.statSync(filePath).isFile()) {
    console.log(`delete files... ${fileName}`);
    fs.unlinkSync(filePath);
  }
}

fs.rmdirSync(logsDirectory);
console.log("Logs directory removed.");
