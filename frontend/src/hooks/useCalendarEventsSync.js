import { useState } from 'react'

// Ebay search function using keywords
export const useSyncEvents = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const syncEvents = async (token, events) => {

    if (!events) {
      return;
    }

    setIsLoading(true)
    setError(null)
   
    const response = await fetch(`/user/events/sync`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({token, events})
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

  return { syncEvents, isLoading, error }
}
