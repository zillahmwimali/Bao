import { PageProps } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

type DashboardProps = {
  message: string
}

const Dashboard: React.FC<PageProps & DashboardProps> = ({ message }) => {
  return (
    <div className="p-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Bao 🚀</h1>
      
        <p className="mt-4 text-red-600">{message}</p>
      
      </div>

      <Link href="/">
      Home
      </Link>
    </div>
  )
}

export default Dashboard
