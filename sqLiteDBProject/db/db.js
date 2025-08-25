import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'


export const getDBConnection = async () => {
   return open({
    filename: path.join('database.db'),
    driver: sqlite3.Database
   })
}