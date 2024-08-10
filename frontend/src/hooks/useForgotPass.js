import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const useForgotPass = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate();

  const forgotPass = async (email) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`/user/forgot-pass`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email })
    })
    const json = await response.json()
    
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
        // console.log(json);  
        
        // update loading state
        setIsLoading(false)
        // Redirect to reset password page with userId and token
        navigate(`/reset-password/${json.userId}/${json.token}`);
      }
  }

  return { forgotPass, isLoading, error }
}