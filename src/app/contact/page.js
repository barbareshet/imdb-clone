import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <div>
      <h1 className="text-5xl text-cyan-700">Contact Page</h1>
    </div>
  )
}
