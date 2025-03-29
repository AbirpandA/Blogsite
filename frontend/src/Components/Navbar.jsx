

import { motion } from "framer-motion"
import { History, Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1"
        >
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <History className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">HistoryOops!</span>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1"
        >
            <Input type="text" placeholder="Find"  className=""/>
            <Button><Search /></Button>
            
        </motion.div>
        </div>
    </header>
  )
}

export default Navbar
