const needle = require("needle");

// The code below sets the bearer token from your environment variables
// To set environment variables on Mac OS X, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token =
  "AAAAAAAAAAAAAAAAAAAAAOqqKwEAAAAAQIxCkIGB89WhEB%2FgmzCvn%2BRBG1w%3DaohCrsuDcsAL1RwPsXLB3Z9IlWZVG4GGtaP5LjKeFF3s5KaQWm";

const endpointURL = "https://api.twitter.com/2/users/by?usernames=";

async function getRequest() {
  const params = {
    usernames: "TwitterDev,TwitterAPI", // Edit usernames to look up
    "user.fields": "created_at,description", // Edit optional query parameters here
  };

  const res = await needle("get", endpointURL, params, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (res.body) {
    return res.body;
  } else {
    throw new Error("Unsuccessful request");
  }
}

const myFunc = async () => {
  try {
    // Make request
    const response = await getRequest();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export default myFunc
