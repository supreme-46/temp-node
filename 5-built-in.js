const os = require('os')
const user = os.userInfo()
console.log(user);
console.log(`System up time : ${os.uptime()}`);
const cpu = os.cpus()
//console.log(cpu);
console.log(os.networkInterfaces());
