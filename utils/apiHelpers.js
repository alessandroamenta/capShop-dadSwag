export async function fetchGetJSON(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return { data };
    } catch (error) {
      return { error };
    }
  }
  
  export async function fetchPostJSON(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const responseData = await response.json();
      return { responseData };
    } catch (error) {
      return { error };
    }
  }
  