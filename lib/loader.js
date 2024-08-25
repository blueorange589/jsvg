const fetchURLs = async (urls) => {
  try {
    const promises =
      urls.map(url => fetch(url));

    // Wait for all of the promises to resolve
    const responses =
      await Promise.all(promises);

    // Extract JSON data from responses
    const data = await
    Promise.all(responses.map(response => response.text()));

    return data
  }
  catch (error) {
    throw new Error(`Failed to fetch data: ${error}`)
  }
}

