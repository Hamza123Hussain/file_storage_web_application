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
import NavForSmall from './NavForSmall'

const SideNav = () => {
  const [activeindex, setindex] = useState(null)
  const { user, error, isLoading } = useUser()
  const { setSearchState } = useContext(ParentIdContext)
  console.log(user)
  return (
    <>
      <NavForSmall />
      <div className="flex flex-col h-screen border-2 py-4 sticky top-0 hidden sm:inline ">
        <div className="flex items-center">
          <Image
            src={'/cloud_cabinet_logo_green_blue-removebg-preview.png'}
            alt="Logo"
            width={70}
            height={70}
          />
          <h1 className="text-xl text-blue-500 font-bold capitalize">
            Cloud Cabinet
          </h1>
        </div>
        <div className="p-4">
          <CreateFileBTN />
        </div>
        <div className="p-4">
          <Folderbtn />
        </div>

        <div className="p-4 flex flex-col gap-2">
          {Sidebaritems.map((element, index) => (
            <Link
              href={element.href}
              key={index}
              onClick={() => {
                setindex(index)
                setSearchState(false)
              }}
              className={`flex w-48 p-2 items-center gap-2 rounded-lg  border-2 hover:bg-blue-400 ${
                index == activeindex ? 'bg-pink-600 ' : ''
              }`}
            >
              {element.Icon} <span className="text-xl">{element.Name}</span>
            </Link>
          ))}
        </div>

        <div className="p-4 mt-auto">
          <div className="flex gap-5 items-center">
            <h2 className="font-bold text-xl">{user?.name}</h2>
            <a href="/api/auth/logout">
              <LogOut />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNav
