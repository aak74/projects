module.exports = {
  port: 3000,
  // healthPeriod: 5,
  db: {
    url: 'mongodb://pr-mongodb:27017/projects',
    name: 'projects',
  },
  rabbit: {
    queues: {
      'backup': {},
      'backuped': {},
    },
  },
}
