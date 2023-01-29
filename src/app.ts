import buildServer from "./server";

const server = buildServer();

async function main() {

    const SERVER_PORT: number = parseInt(process.env.SERVER_PORT ? process.env.SERVER_PORT.toString() : '3000')
    try {
        await server.listen({ host: process.env.SERVER_HOST, port: SERVER_PORT });
        console.log(`Server listening to Port 3000`)
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main();