const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'http://localhost:3000',
    credientials: true

}

//middle wares

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(corOptions))


const adminRouter = require('./routes/adminRoute.js')
const userRouter = require('./routes/usersRoute.js')
const showRouter = require('./routes/showRoute.js')
app.use('/api/admins', adminRouter)
app.use('/api/users', userRouter)
app.use('/api/shows', showRouter)
//testing api
app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})
//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))