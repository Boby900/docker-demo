// app/api/twitter-search/route.js


export async function GET() {
  // Define your Bearer Token
  const TWITTER_BEARER_TOKEN  = process.env.TWITTER_BEARER_TOKEN ;

  // Twitter API URL
  const url = 'https://api.x.com/2/users/by/username/Princy_tiwari_';

  try {
    // Make the request to the Twitter API
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TWITTER_BEARER_TOKEN }`,
        'Content-Type': 'application/json',
      },
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the response
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error:any) {
    // Handle errors
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
