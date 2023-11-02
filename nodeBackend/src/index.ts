import app from './app'
import sqlDB from './database/database'

const main = async () => {
    try {
        (await import('dotenv')).config()

        const PORT = process.env.PORT_SERVICE

        await sqlDB.authenticate()
        await sqlDB.sync({force: false})

        app.listen(PORT)


    } catch (error) {
        console.log(error)
    }
}

main()