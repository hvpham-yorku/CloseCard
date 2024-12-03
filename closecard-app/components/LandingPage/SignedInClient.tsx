"use client";
import React, { useEffect } from 'react'

interface SignedInProps {
    fullName: string;
    email: string;
}

export const SignedInClient = ({fullName, email}: SignedInProps) => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/users');
            const result = await response.json();
            
            let doesExist = false;
            for (let index = 0; index < result.length; index++) {
                if (result[index]["email"] === email) {
                    doesExist = true;
                }
            }
            if (!doesExist) {
                const postResponse = await fetch('http://localhost:3000/createuser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({"fullName": fullName, "email": email})
                });
            }
        }

        fetchData();
    }, []);
  return (
    <></>
  )
}