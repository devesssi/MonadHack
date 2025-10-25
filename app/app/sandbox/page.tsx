"use client";

import { useState } from "react";
import { Editor } from "@/components/Editor";

export default function SandboxPage() {
  const [code, setCode] = useState(`pragma solidity ^0.8.20;

contract MyContract {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }
}`);

  const handleDeploy = async () => {
    const res = await fetch("/api/deploy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: code }),
    });
    const data = await res.json();
    console.log(data);
    alert("Contract deployed! Check console for address & tx hash.");
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">AI Solidity Sandbox</h1>
      <Editor value={code} onChange={(val) => setCode(val || "")} />
      <button
        onClick={handleDeploy}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
      >
        Deploy Contract
      </button>
    </div>
  );
}
