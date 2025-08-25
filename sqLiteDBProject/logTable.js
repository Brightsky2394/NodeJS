import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { getDBConnection } from './db/db.js'

async function viewAllProducts() {
    const db = await getDBConnection()

    try {
        const abductions = await db.all(`SELECT * FROM abductions`)
        const itemsToDisplay = abductions.map((abduction) => {
             return abduction
        });
        console.table(itemsToDisplay)
        
    } catch (err) {
        console.error(`Error fetching products`, err.message)
    } finally {
        db.close()
    }
}

viewAllProducts();