import os, { NetworkInterfaceInfo } from 'os';

const interfaces = os.networkInterfaces(); //服务器本机地址

let ipAddress = '';

for (var devName in interfaces) {
  const iface: any[] = interfaces[devName] as any[];

  for (var i = 0; i < iface.length; i++) {
    var alias = iface[i];
    if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
      ipAddress = alias.address;
    }
  }
}

export default ipAddress;
