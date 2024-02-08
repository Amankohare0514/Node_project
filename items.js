const http = require("http")

PORT = 3000

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "text/plain"
//     })
//     res.end("Hello! Sit Isaac Newton is your friend")
// })

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "application/json"
//     })
//     res.end(JSON.stringify({
//         id: 1,
//         name: "Sit Isaac Newton",
//     }))
// })

const server = http.createServer()

const friends = [
    {
        id: 1,
        name: "Sit Isaac Newton",
    },
    {
        id: 2,
        name: "Albert Einstein",
    },
    {
        id: 3,
        name: "aman Einstein",
    },
    {
        id: 3,
        name: "Nikola Tesla",
    }
]

server.on("request", (req, res) => {
    // if(req.url === "/friends"){
    //     res.end(JSON.stringify({
    //         id: 1,
    //         name: "Sit Isaac Newton",
    //     }))
    // } else if(req.url === "/messages"){
    //     res.setHeader("Content-Type", "text/html")
    //     res.write("<html>")
    //     res.write("<body>")
    //     res.write("<h1>Hello</h1>")
    //     res.write("</body>")
    //     res.write("</html>")
    //     res.end()
    // } else {
    //     res.statusCode = 404
    //     res.end("404 not found")
    // }

    const items = req.url.split("/") // localhost":3300/messages => messages/friend/1
    if(items[1] === "friends"){
        if(items.length === 3){
            const friendsIndex =  Number(items[2])
            res.end(JSON.stringify(friends[friendsIndex]))
        } else {
            res.end(JSON.stringify(friends))

        }
    }
    else if (items[1] === "messages"){
             res.setHeader("Content-Type", "text/html")
        res.write("<html>")
        res.write("<body>")
        res.write("<h1>Hello</h1>")
        res.write("</body>")
        res.write("</html>")
        res.end()
    }
    else {
            res.statusCode = 404
            res.end("404 not found")
        }
})


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
