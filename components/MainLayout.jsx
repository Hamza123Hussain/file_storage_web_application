'use client'
import { useUser } from '@auth0/nextjs-auth0/client'
import Storage from '@/components/Storage'
import Home from '@/components/Home'
import Loader from './Loader'
import { useContext } from 'react'
import { ParentIdContext } from '@/utils/Context'
import Searchbar from './Search/Searchbar'
import Search from './Search/Search'
import Header from './SideNav'

export default function MainLayout({ children }) {
  const { user, isLoading } = useUser()
  const { SearchState } = useContext(ParentIdContext)

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  if (!user) {
    return <Home />
  }

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col sm:flex-row gap-5 p-2 sm:p-0 w-full">
        <div className="w-full sm:w-2/3">
          {SearchState ? (
            <div className="flex flex-col gap-10 justify-between">
              <Searchbar />
              <Search />
            </div>
          ) : (
            children
          )}
        </div>
        <div className="p-5 bg-transparent border-2">
          <Storage />
        </div>
      </div>
    </div>
  )
}
