'use strict'

module.exports = {
  host: process.env.RH_USERS_HOST || 'localhost',
  port: process.env.RH_USERS_PORT || 3001,
  prod: process.env.NODE_ENV === 'production',
  pg: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.PG_HOST || 5432,
    database: process.env.RH_USERS_DB || 'rh_users',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres'
  }
}