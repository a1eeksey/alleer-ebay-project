import { GoogleLogin } from '@react-oauth/google';
import React from "react";
import { useAuthContext } from '../../hooks/useAuthContext';

// jwt decode
import {jwtDecode} from 'jwt-decode'

function GoogleSignin() {
    const { dispatch } = useAuthContext()

    return (
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      let credentialResponseDecoded = jwtDecode(credentialResponse.credential)
                      // console.log(credentialResponseDecoded);
                    // update the auth context
                    dispatch({type: 'LOGIN', payload: credentialResponseDecoded})
                    }}
                    onError={() => {
                      console.log('Login Failed');
                      alert('Login Failed');
                    }}
                  />
             
    )
}

export default GoogleSignin;
