import buildServer from "./server";

const server = buildServer();

async function main() {
    try {
        await server.listen({ port: 3000 });
        console.log(`Server listening to Port 3000`)
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main();