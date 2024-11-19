// src/components/global/Footer.js
"use client";

import React from "react";
import { EnvelopeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons"


export default function Footer() {
  return (
    <footer className="bg-transparent text-white p-4 w-full fixed bottom-0">
      <div className="container px-9 mx-auto flex justify-between items-center">
        <div className="text-md">
          <span>@closecard</span>
        </div>
        <div className="flex space-x-8 text-xs">
          <a
            href="https://github.com/orgs/hvpham-yorku/teams/group_21"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline"
          >
            <GitHubLogoIcon className="h-6 w-6" />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:ray116@my.yorku.ca"
            className="flex items-center space-x-2 hover:underline"
          >
            <EnvelopeOpenIcon className="h-6 w-6" />
            <span>Email</span>
          </a>
        </div>
      </div>
      {/* {<div className="border-t border-neutral-600 pt-4 mt-4 text-center">
        <p>© Close Card</p>
      </div>} */}
    </footer>
  );
}