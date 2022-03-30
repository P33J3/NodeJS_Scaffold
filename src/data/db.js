import knex from 'knex'

import knexfile from '../lib/knex/config'

const env = process.env.NODE_ENV || 'development'
const configOptions = knexfile[env]

module.exports = knex(configOptions)
