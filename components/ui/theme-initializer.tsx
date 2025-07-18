"use client"

import { useEffect } from "react"

const getRandomColor = () => {
  const colors = ['#2563eb', '#dc2626', '#10b981', '#f59e0b', '#9333ea']
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function ThemeInitializer() {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', getRandomColor())
    root.style.setProperty('--color-background', getRandomColor())
    root.style.setProperty('--color-text', getRandomColor())
  }, [])

  return null
}
