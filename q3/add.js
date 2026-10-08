const fs = require("fs");
const path = require("path");

const logsDirectory = path.join(process.cwd(), "Logs");

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
  console.log("Logs directory created.");
}

process.chdir(logsDirectory);
console.log(`Current directory: ${process.cwd()}`);

for (let index = 1; index <= 10; index += 1) {
  const fileName = `log${index}.txt`;
  fs.writeFileSync(fileName, `This is log file ${index}.\n`, "utf8");
  console.log(fileName);
}
