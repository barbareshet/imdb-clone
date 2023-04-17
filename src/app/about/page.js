import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div>
      <h1 className="text-5xl text-cyan-700">About Page</h1>
    </div>
  )
}
