import { Page, PageProps } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { usePage } from '@inertiajs/inertia-react'

type HomeProps = {
  message: string
}

type CurrentUser = {
  id: number;
  name: string;
  email: string;
  user_role: string;
}

interface ExtendedPageProps extends PageProps {
  current_user: CurrentUser;
}

const Home: React.FC< HomeProps> = ({ message }) => {
  const { current_user } = usePage<Page<ExtendedPageProps>>().props;
  return (
    <div className="p-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Bao 🚀</h1>
      
        <p className="mt-4 text-red-600">{message}</p>

      
      </div>
      {current_user?.user_role === "admin" && (
      <Link href="/dashboard/landing">
      Dashboard
      </Link>
      )}
    </div>
  )
}

export default Home
