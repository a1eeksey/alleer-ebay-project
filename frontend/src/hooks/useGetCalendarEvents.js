import { useState } from 'react'

// Ebay search function using keywords
export const useGetEvents = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const getEvents = async (userEmail) => {
    setIsLoading(true)
    setError(null)
    
    const response = await fetch(`/user/events/get-events?email=${encodeURIComponent(userEmail)}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify()
    })

    const json = await response.json()
    
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // update loading state
      setIsLoading(false)

      return json
    }

  }

  return { getEvents, isLoading, error }
}
