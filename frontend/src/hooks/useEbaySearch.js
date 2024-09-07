import { useState } from 'react'

// Ebay search function using keywords
export const useEbaySearch = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const ebaySearch = async (requestKeywords) => {

    if (!requestKeywords) {
      setError("Keywords are required");
      return;
    }

    setIsLoading(true)
    setError(null)

    // setting request keywords as query parameters instead of body, because can't pass body in GET requests
    const response = await fetch(`/user/ebay-search?keywords=${encodeURIComponent(requestKeywords)}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify()
    })

    const json = await response.json()

    console.log(json);
    
    
    if (!response.ok) {
      setIsLoading(false)
      if (response.status === 404) {
        setError(json.error || "No items found with the provided keywords");
      } else {
        setError(json.error || "Something went wrong");
      }  
    }
    if (response.ok) {
      // update loading state
      setIsLoading(false)

      return json
    }

  }

  return { ebaySearch, isLoading, error }
}
