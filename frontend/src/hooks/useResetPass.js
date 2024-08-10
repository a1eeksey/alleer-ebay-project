import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const useResetPass = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate();

  const resetPass = async (password, userId, token) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`/user/create-password/${userId}/${token}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ password })
    })

    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      return false
    }
    if (response.ok) {
        // console.log(json);  

        // update loading state
        setIsLoading(false)
        // Redirect to login page
        navigate(`/signin`);
      }
  }

  return { resetPass, isLoading, setError, error }
}