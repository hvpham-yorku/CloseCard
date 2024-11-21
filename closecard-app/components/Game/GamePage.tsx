'use client'

import React from 'react';
import { AvatarIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface GamePageProps {
  firstName: string | null;
  lastName: string | null;
}

export default function GamePage({ firstName, lastName }: GamePageProps) {
  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    alert(`Generated Number: ${randomNumber}`);
  };

  return (
    <div className="w-full h-screen bg-gray-900 text-gray-100 overflow-hidden flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        {/* Game area */}
        <main className="flex-1 overflow-auto p-4">
          <div className="max-w-2xl mx-auto">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Prompt</CardTitle>
                <CardDescription>Answer the question below</CardDescription>
              </CardHeader>
              <CardContent>
                <h2 className="text-2xl font-bold text-center mb-4">Favourite Way To Spend The Weekend</h2>
                <div className="space-y-4">
                  <Input placeholder="Type your favourite weekend activity here..." />
                  <Button className="w-full">Submit Answer</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

