import React from 'react'
import { Button } from '../ui/button'

export const SignedIn = ({firstName, lastName}: {firstName: string, lastName: string}) => {
  return (
    <div>
        <div className="flex justify-center pt-10 pb-20 text-4xl">
            <p>Welcome, <span>{firstName} {lastName}</span></p>
        </div>
        <div className="flex justify-center pt-20 text-3xl">
            <p>To begin playing, choose one of the options below</p>
        </div>
        <div className="flex justify-evenly pt-10">
            <Button className="text-2xl py-7 hover:bg-gray-700 rounded-lg">Create Game</Button>
            <Button className="text-2xl py-7 bg-white text-black hover:bg-slate-300 rounded-lg">Join Game</Button>
        </div>
    </div>
  )
}
