require('dotenv').config({ path: `${__dirname}/.env` })

module.exports = {
  apiUrl: process.env.API_URL,
  threshold: parseInt(process.env.THRESHOLD),
  personalToken: process.env.PERSONAL_TOKEN,
  projectId: parseInt(process.env.PROJECT_ID),
  message: process.env.MESSAGE
}