"use client"
import Tiptap from "./components/Tiptap"
import { useState } from 'react';

export default function Home() {

  const [content, setContent] = useState<string>('')
  const handleContentChange = (reason: any) => {
    setContent(reason)
  }

  return (
    <main className="w-full p-9 min-h-screen pb-10">
        <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </main>
  )
}
