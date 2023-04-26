const { Pool } = require('pg')

let pool

export const getDB = () => {
  const connectionString = process.env.DATABASE_URL

  if (!pool) {
    pool = new Pool({
      connectionString,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000
    })
  }

  return pool
}
