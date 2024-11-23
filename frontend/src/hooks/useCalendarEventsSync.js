import { useState } from 'react'

export const useSyncEvents = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  const syncEvents = async (userEmail, events) => {
    if (!events) {
      return;
    }

    setIsLoading(true)
    setError(null)
   
    const response = await fetch(`/user/events/sync`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userEmail, events})
    })
    const json = await response.json()
    
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)

      return false
    }
    if (response.ok) {
      // update loading state
      setIsLoading(false)

      return json
    }

  }

  return { syncEvents, isLoading, error }
}
