async function tryFetching(urls) {
  for (let i = 0; i < urls.length; i++) {
    try {
      const response = await fetch(urls[i]);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn(`Failed to fetch from ${urls[i]}: ${error.message}`);
    }
  }

  throw new Error("All provided URLs are unreachable or returned an error.");
}

const brokenURL = "https://notGood.com/data";
const workingURL = "https://jsonplaceholder.typicode.com/users";

tryFetching([brokenURL, workingURL])
  .then((data) => {
    console.log("Successfully fetched data:", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error fetching data on all urls: ", error);
  });
