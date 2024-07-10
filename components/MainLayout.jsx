'use client'
import { useUser } from '@auth0/nextjs-auth0/client'
import SideNav from '@/components/SideNav'
import Storage from '@/components/Storage'
import Home from '@/components/Home' // Import your Home component
import Loader from './Loader'

export default function MainLayout({ children }) {
  const { user, isLoading } = useUser()

  // Show a loading state while checking authentication status
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  // If there's no user, render the Home component
  if (!user) {
    return <Home />
  }

  // If the user is logged in, render the SideNav, Storage, and children
  return (
    <div className="gap-5 flex">
      <SideNav />
      <div className="grid grid-cols-1 p-2 sm:p-0 md:grid-cols-3 w-full gap-3">
        <div className="col-span-2">{children}</div>
        <div className="p-5 bg-transparent border-2">
          <Storage />
        </div>
      </div>
    </div>
  )
}
