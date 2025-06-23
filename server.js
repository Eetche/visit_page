import { createServer } from "http";

import next from "next"

const dev = process.env.NODE_ENV !== "production";

const port = 3000

const app = next({ dev })

const handler = app.getRequestHandler()

app.prepare().then(() => {
    const server = createServer(handler)

    server.listen(port, () => {
        console.log(`> listen on http://locahost:${port} as ${dev ? "development" : process.env.NODE_ENV}`)
    })
})
