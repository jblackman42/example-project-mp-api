const MinistryPlatformAPI = require('ministry-platform-api-wrapper');

const connectDB = () => {
  return MinistryPlatformAPI
    .CreateWebApiClient()
    .then((domain) => {console.log(`Successfully connected to ${domain.DisplayName}`)})
    .catch((err) => {console.log(err)})
}

module.exports = connectDB;