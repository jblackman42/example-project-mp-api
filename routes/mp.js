const express = require('express');
const router = express.Router();

const MinistryPlatformAPI = require('ministry-platform-api-wrapper');

//home page
router.get('/top10contacts', async (req, res) => {
  try {
    const response = await MinistryPlatformAPI.request('get', '/tables/Activity_Log', {"$select":"Contact_ID_Table.Display_Name, Activity_Log.Contact_ID, Count(*) AS Count","$filter":"YEAR(Activity_Log.Activity_Date) = YEAR(GETDATE())","$orderby":"Count Desc","$groupby":"Activity_Log.Contact_ID, Contact_ID_Table.Display_Name","$top":"10"}, {});
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error).end();
  }
})

module.exports = router;