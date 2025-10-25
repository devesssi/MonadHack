"use client";

import { motion } from "framer-motion";
import { Rocket, Code2, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* ===== NAVBAR ===== */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-purple-400">AI</span> Web3 Sandbox
        </h1>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Launch App
        </Button>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Build Smart Contracts <br />
          <span className="text-purple-400">Just From a Prompt</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-400 max-w-xl mb-8"
        >
          Type your idea. Our AI generates, audits, and deploys your contract
          instantly on Monad or any EVM network — all inside your personal sandbox.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl">
            Get Started 🚀
          </Button>
        </motion.div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-20 py-20 border-t border-gray-800">
        {[
          {
            icon: Brain,
            title: "AI Code Generation",
            desc: "Generate fully functional smart contracts from natural language prompts using fine-tuned LLMs.",
          },
          {
            icon: Code2,
            title: "Foundry Sandbox",
            desc: "Compile, test, and deploy directly in an isolated environment powered by Foundry + Monad Testnet.",
          },
          {
            icon: Zap,
            title: "Instant Deployment",
            desc: "Deploy with a single click — our system handles private keys, gas, and verification automatically.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-900 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <feature.icon className="h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="text-center py-24 bg-gradient-to-t from-purple-950 to-black">
        <h2 className="text-4xl font-bold mb-6">Ready to Create the Future?</h2>
        <p className="text-gray-400 mb-10">
          Join developers redefining Web3 with AI-driven smart contract automation.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 text-lg rounded-xl">
          Join the Sandbox
        </Button>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AI Web3 Sandbox. Built for the builders.
      </footer>
    </div>
  );
}
