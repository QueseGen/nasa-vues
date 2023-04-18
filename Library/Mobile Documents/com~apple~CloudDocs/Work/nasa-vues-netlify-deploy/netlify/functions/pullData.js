const config = require("../../views/src/components/config");

// functions/myFunction.js

const axios = require('axios');

exports.handler = async (event, context) => {
  const { rover, date, camera } = JSON.parse(event.body);
  const url = `${config.NASA_API}${rover}/photos?earth_date=${date}${camera}${config.NASA_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
