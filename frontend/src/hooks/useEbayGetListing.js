import { useState } from 'react'

// Ebay get listing details function
export const useEbayGetListing = () => {
  const [getListingError, setError] = useState(null)
  const [getListingisLoading, setIsLoading] = useState(null)

  const ebayGetListing = async (requestId) => {

    if (!requestId) {
      setError("Something went wrong");
      return;
    }

    setIsLoading(true)
    setError(null)

    // setting request keywords as query parameters instead of body, because can't pass body in GET requests
    const response = await fetch(`/user/ebay-item-details?id=${encodeURIComponent(requestId)}`, {
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

  return { ebayGetListing, getListingisLoading, getListingError }
}
