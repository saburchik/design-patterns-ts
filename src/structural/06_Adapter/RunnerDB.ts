import { AdapterAppToDB } from './AdapterAppToDB'
import { DataBase } from './interface/DataBase'

class RunnerDB {
  constructor() {
    const db: DataBase = new AdapterAppToDB()

    db.insert()
    db.update()
    db.select()
    db.remove()
  }
}
new RunnerDB()
