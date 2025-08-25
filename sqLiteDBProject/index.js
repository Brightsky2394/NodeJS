import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { getDBConnection } from './db/db.js'


const createTable = async () => {
    // create database connection
    const db = await getDBConnection()

    // create table
    await db.exec(`
          CREATE TABLE IF NOT EXISTS abductions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            location TEXT NOT NULL,
            details TEXT NOT NULL
          )
        `)

    // close database
    await db.close();
    console.log(`Abductions table created`)
}

createTable();