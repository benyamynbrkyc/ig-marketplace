const Insta = require('scraper-instagram');
const InstaClient = new Insta();

const handler = async (event, context) => {
  console.log('running function');
  try {
    const result = await InstaClient.getProfile('benyamynbrkyc');
    console.log(result);
    return {
      status: 200,
      body: JSON.stringify({
        result,
      }),
    };
  } catch (error) {
    console.log('failed', error);
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
