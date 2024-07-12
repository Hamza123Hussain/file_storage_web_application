'use client'
import { Sidebaritems } from '@/utils/ArrayforSideBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import CreateFileBTN from './Files/CreateFile'
import Folderbtn from './Folder/CreateFolderBtn'
import Link from 'next/link'
import { ParentIdContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [activeindex, setindex] = useState(null)
  const { user } = useUser()
  const { setSearchState, totalsize } = useContext(ParentIdContext)
  const router = useRouter()
  console.log('THE TOTAL SIZE', totalsize)

  return (
    <header className="p-2 bg-white shadow-md w-full flex flex-col  sm:gap-2 gap-3">
      <div className="flex flex-col sm:flex-row items-center justify-between ">
        <div
          onClick={() => router.push('/')}
          className="flex items-center mb-4 sm:mb-0 cursor-pointer"
        >
          <Image
            src={'/cloud_cabinet_logo_green_blue-removebg-preview.png'}
            alt="Logo"
            width={70}
            height={70}
          />
          <h1 className="text-xl text-blue-500 font-bold  capitalize ml-2">
            Cloud Cabinet
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <nav className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end ">
            {Sidebaritems.map((element, index) => (
              <Link
                href={element.href}
                key={index}
                onClick={() => {
                  setindex(index)
                  setSearchState(false)
                }}
                className={`p-2 rounded-lg flex flex-col items-center  gap-2  hover:bg-blue-400 ${
                  index === activeindex ? 'bg-pink-600 ' : ''
                }`}
              >
                {element.Icon}
                <span className=" text-xs sm:inline text-center">
                  {element.Name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  justify-between items-center gap-4 mb-4 sm:mb-0">
        <div className="flex flex-col sm:flex-row  justify-start items-center gap-4 mb-4 sm:mb-0">
          {totalsize <= 5000 ? (
            <>
              <CreateFileBTN />
              <Folderbtn />
            </>
          ) : (
            <h1 className=" font-bold sm:text-lg text-xs text-justify ">
              You Have Reached Your Storage Limit. Free up Some Space, If you
              want to Add More Files
            </h1>
          )}
        </div>
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-xl">{user?.name}</h2>
          <a href="/api/auth/logout">
            <LogOut />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
