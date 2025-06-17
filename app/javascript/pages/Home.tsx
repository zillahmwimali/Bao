import React from 'react'
import { PageProps } from '@inertiajs/inertia'

type HomeProps = {
  message: string
}

const Home: React.FC<PageProps & HomeProps> = ({ message }) => {
  console.log("Home component rendered");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome to Bao 🚀</h1>
      <p className="mt-4 text-red-600">{message}</p>
    </div>
  )
}

export default Home
