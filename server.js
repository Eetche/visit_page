import { createServer } from "http";
import next from "next"


const dev = process.env.NODE_ENV !== "production";

const hostname = "localhost"
const port = 3000

const app = next({ dev })

const handler = app.getRequestHandler()

app.prepare().then(() => {
    const httpServer = createServer(handler)

    httpServer.listen(port, () => {
        console.log(`> listen on http://${hostname}:${port} as ${dev ? "development" : process.env.NODE_ENV}`);
    })
})
