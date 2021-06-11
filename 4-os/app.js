const os = require("os");

// info about current user
const userInfo = os.userInfo()
const userInfoAsFn = () => os.userInfo();
console.log(userInfoAsFn());

// method returns system uptime in seconds
console.log(`System uptime is ${os.uptime()}`);

// system details
const currentOS = {
    name : os.type(),
    freeMem: os.freemem(),
    totalMem : os.totalmem()
}
console.log(`system details ${JSON.stringify(currentOS)}`)