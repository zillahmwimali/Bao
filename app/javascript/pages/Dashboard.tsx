import { PageProps } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Container from '../components/layout/Container'

type DashboardProps = {
  message: string
}

const Dashboard: React.FC<PageProps & DashboardProps> = ({ message }) => {
  return (
    <Container>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Bao 🚀</h1>
      
        <p className="mt-4 text-vivid-violet-900">{message}</p>
      
      </div>

      <Link href="/">
      Home  
      </Link>
    </Container>
  )
}

export default Dashboard
