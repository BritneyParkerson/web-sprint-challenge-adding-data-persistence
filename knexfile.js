// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.db3'
    },
    useNullDefault: true
  },
   pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      migrations: {
        directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
  },

}; 
