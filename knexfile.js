// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection:  'postgres://localhost/pirates_development',
    pool: {
      min: 2,
      max: 10
    }
  }
};
