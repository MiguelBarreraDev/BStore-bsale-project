import '#config/env.js'
import { connectDBMongo, sequelize } from '#config/db.js'
import httpServer from "#config/http.js"

async function runServer () {
  await sequelize.authenticate()
  await connectDBMongo(process.env.MONGODB_URL)

  httpServer.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
  })
}

runServer()
