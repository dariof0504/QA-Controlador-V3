import app from './app'
import sqlDB from './database/database'
const PORT:number = 4000

const main = async () => {
    try {

        await sqlDB.authenticate()
        await sqlDB.sync({force: false})

        app.listen(PORT)


    } catch (error) {
        console.log(error)
    }
}

main()