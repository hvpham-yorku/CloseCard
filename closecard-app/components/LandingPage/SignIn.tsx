// a component for clients to sign in where u clicks signin button to sign in 
import React from 'react'
import { Button } from '../ui/button'

export const SignIn = () => {
  return (
    <div>
      <h1>
        Please sign in to access the CloseCard app 
      </h1>
      <Button className='px-10 rounded-sm'>Sign In</Button>
    </div>
  )
}