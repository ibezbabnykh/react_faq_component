const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.url === '/users/authenticate' && req.method === 'POST') {
        const users = router.db.get('users').value();

        const {
            email,
            password
        } = req.body;
        const filteredUser = users.find(user => {
            return user.email === email && user.password === password;
        });

        if (filteredUser) {
            const {
                id,
                firstName,
                lastName
            } = filteredUser;
            const responseJson = {
                id,
                firstName,
                lastName,
                token: 'fake-jwt-token'
            };
            return res.json(responseJson)
        } else {
            return res.status(401).send(JSON.stringify('Username or password is incorrect'))
        }
    }

    if (req.url === '/users' && req.method === 'POST') {
        const users = router.db.get('users').value();

        const {
            titleCode,
            customerType,
            firstName,
            lastName,
            email,
            password
        } = req.body
        const duplicateUser = users.find(user => {
            return user.email === email;
        })

        if (duplicateUser) {
            return res.status(400).send(JSON.stringify(`User with ${email} email is already taken`))
        } else {
            const newUser = {
                titleCode,
                customerType,
                firstName,
                lastName,
                email,
                password,
                id: users.length + 1
            }
            users.push(newUser)
            router.db.write(users)
            return res.json(newUser)
        }
    }

    next()
})

server.use(router)
server.listen(9000)