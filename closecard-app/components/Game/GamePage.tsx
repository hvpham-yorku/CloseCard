'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PaperPlaneIcon } from '@radix-ui/react-icons';

export default function GamePage() {
  return (
    <div className="flex flex-col w-3/4 h-[calc(100vh-110px)] absolute left-1">
      {/* Main game area */}
      <main className="flex-grow">
        <div className="w-full h-full pr-4 pl-2">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className='text-2xl'>Prompt</CardTitle>
              <CardDescription className='justify-center'>Play Your Turn Answer</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-center mb-4">
                  What Would Fix the World?
                </h2>
              </div>
              <div className="relative  items-center">
                <Input
                  placeholder="Type your answer here..."
                  className="flex-grow text-xl pr-16 w-4/5 md:text-lg"
                  maxLength={100}
                />
                <Button className="absolute right-0 top-0 text-xl font-bold h-full">
                  <PaperPlaneIcon/>
                  Submit Answer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

{/* <div className="relative">
                    <Input placeholder="Type your answer here..." className="pr-16" />
                    <Button className="absolute right-0 top-0 h-full">Submit Answer</Button>
                  </div> */}