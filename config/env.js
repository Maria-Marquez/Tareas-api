
const env = {
  database: 'desarrollo_examen_2024',
  username: 'desarrollo_examen_2024_user',
  password: 'YWtL3jmYQdbrUaU2HUEXag3P10mLaHs1',
  host: 'dpg-csjsokbtq21c73dgq0fg-a.oregon-postgres.render.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;