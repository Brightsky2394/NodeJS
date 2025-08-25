import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { abductionsData } from './abductionsData.js'
import { getDBConnection } from './db/db.js'


const seedTable = async () => {
    // create a database connection
    const db = await getDBConnection()

    try {
        await db.exec(`BEGIN TRANSACTION`)
        for (const {location, details} of abductionsData) {
            await db.run(`INSERT INTO abductions (location, details)
                  VALUES ( ?, ?)`, [location, details])
        }
        await db.exec(`COMMIT`)
        console.log(`All records inserted`)
    } catch (err) {
        await db.exec(`ROLLBACK`);
        console.log(`Error inserting data`, err.message);
    } finally {
        await db.close();
    }
}

seedTable()