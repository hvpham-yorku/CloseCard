'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GamePageProps {
  fullName: string;
  email: string;
}

export default function GamePage({ fullName, email }: GamePageProps) {
  const [answer, setAnswer] = useState('');
  const [answersList, setAnswersList] = useState<{ username: string; content: string }[]>([]);
  const [username, setUsername] = useState('User Ray '); // You can modify this to get the actual username

  const handleSubmit = async () => {
    if (answer.trim()) {
      const newAnswer = { username, content: answer };
      setAnswersList([...answersList, newAnswer]);
      setAnswer(''); // Clear the input after submission

      // Send the answer to the backend
      try {
        await fetch('http://localhost:3000/answers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newAnswer),
        });
      } catch (error) {
        console.error('Error submitting answer:', error);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents form submission if inside a form
      handleSubmit(); // Call the submit function
    }
  };

  const handleUnload = async () => {
    await fetch('http://localhost:3000/removeuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
  };

  const handleLoad = async () => {
    const responseLoad = await fetch('http://localhost:3000/users');
    const resultLoad = await responseLoad.json();

    let doesExist = false;
    for (let index = 0; index < resultLoad.length; index++) {
      if (resultLoad[index]["email"] === email) {
        doesExist = true;
      }
    }
    if (!doesExist) {
      await fetch('http://localhost:3000/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email }),
      });
    }

    // Fetch all stored answers
    const responseAnswers = await fetch('http://localhost:3000/answers');
    const resultAnswers = await responseAnswers.json();
    setAnswersList(resultAnswers);
  };

  useEffect(() => {
    handleLoad();

    const unloadHandler = () => handleUnload();

    window.addEventListener('beforeunload', unloadHandler);
    return () => {
      window.removeEventListener('beforeunload', unloadHandler);
      unloadHandler();
    };
  }, []);

  return (
    <div className="flex flex-col w-3/4 h-[calc(100vh-110px)] absolute left-1">
      {/* Main game area */}
      <main className="flex-grow ">
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
              <div className='overflow-y-auto flex-grow'>
                {/* Wrap the carousel in a div to control its width */}
                <div className="flex justify-center pt-4">
                  <Carousel className="w-full max-w-2xl"> {/* Set a max width for the carousel */}
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {answersList.map((ans, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 w-1/2 text-center"> {/* Set width to half */}
                          <Card className="bg-slate-800 text-white shadow-lg rounded-lg h-full flex flex-col justify-between"> {/* Updated background color */}
                            <CardHeader className="text-2xl font-bold">
                              {ans.username}
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <div className="h-24 overflow-y-auto"> {/* Fixed height for scrolling */}
                                <p className="text-center text-5xl text-white">{ans.content}</p> {/* Updated text size */}
                              </div>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 z-10">Previous</CarouselPrevious>
                    <CarouselNext className="absolute right-0 z-10">Next</CarouselNext>
                  </Carousel>
                </div>
              </div>
              <div className="relative items-center">
                <Input
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  onKeyDown={handleKeyDown} // Add the key down event handler
                  placeholder="Type your answer here..."
                  className="flex-grow text-xl pr-16 w-4/5 md:text-lg"
                  maxLength={100}
                />
                <Button
                  className="absolute right-0 top-0 text-xl font-bold h-full"
                  onClick={handleSubmit}
                >
                  <PaperPlaneIcon />
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