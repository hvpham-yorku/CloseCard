// src/components/global/Footer.js
"use client";

import React from "react";
import { Github, Mail } from "lucide-react"; // Import GitHub and Mail icons

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-70 text-white p-4 w-full">
      <div className="container px-9 mx-auto flex justify-between items-center">
        <div className="text-xs">
          <span>@closecard</span>
        </div>
        <div className="flex space-x-8 text-xs">
          <a
            href="https://github.com/orgs/hvpham-yorku/teams/group_21"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline"
          >
            <Github className="h-6 w-6" />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:ray116@my.yorku.ca"
            className="flex items-center space-x-2 hover:underline"
          >
            <Mail className="h-6 w-6" />
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