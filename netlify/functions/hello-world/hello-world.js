const Insta = require('scraper-instagram');
const InstaClient = new Insta();

const handler = async (event, context) => {
  try {
    const result = await InstaClient.getProfile('benyamynbrkyc');

    return {
      status: 200,
      body: JSON.stringify({
        result,
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
