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

const Header = () => {
  const [activeindex, setindex] = useState(null)
  const { user, error, isLoading } = useUser()
  const { setSearchState } = useContext(ParentIdContext)

  return (
    <header className="p-4 bg-white shadow-md w-full flex flex-col gap-5 sm:gap-2">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 ">
        <div className="flex items-center mb-4 sm:mb-0">
          <Image
            src={'/cloud_cabinet_logo_green_blue-removebg-preview.png'}
            alt="Logo"
            width={70}
            height={70}
          />
          <h1 className="text-xl text-blue-500 font-bold capitalize ml-2">
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
                className={`p-2 rounded-lg hover:bg-blue-400 ${
                  index === activeindex ? 'bg-pink-600 ' : ''
                }`}
              >
                {element.Icon}
                <span className="hidden sm:inline">{element.Name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-xl">{user?.name}</h2>
          <a href="/api/auth/logout">
            <LogOut />
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  justify-start items-center gap-4 mb-4 sm:mb-0">
        <CreateFileBTN />
        <Folderbtn />
      </div>
    </header>
  )
}

export default Header
