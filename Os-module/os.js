// OS : operationg system related information or data 

const os = require('os');

// defined the architecture of our machine
const cpu = os.arch(); // x64
console.log(cpu);

// return the aomout of free memory in system
const freeMemeory = os.freemem() // memory return in the form of Bytes
console.log(`${freeMemeory / 1024 / 1024 / 1024}`);  // then here convert into the GB.

// return the total memory of the machine
const totaMemory = os.totalmem();
console.log(`${totaMemory / 1024 / 1024 / 1024 }`);

// return hostName (machine name)
const hostName = os.hostname();
console.log(hostName);

// return the platform of the os
const platform = os.platform();
console.log('platform', platform);

// return the operationg system name 
const operatingSystem = os.type();
console.log(operatingSystem);

