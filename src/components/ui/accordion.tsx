"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

export function Accordion({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("border rounded-md p-2", className)}>
      {children}
    </div>
  )
}
