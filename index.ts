import app from './src/app';
import { AddressInfo } from 'net';
import http from 'http';
import os from 'os';

const port = process.env.PORT || '3000';
app.on("error", (error) => {
    console.error(error);
})

const server = http.createServer(app);
server.listen(port, () => {
    const addressInfo: AddressInfo = <AddressInfo>server.address();
    console.log(`Hosting on http://localhost:${addressInfo.port}`);
});
