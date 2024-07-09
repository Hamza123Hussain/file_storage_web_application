'use client'
import { Sidebaritems } from '@/utils/ArrayforSideBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import CreateFileBTN from './Files/CreateFile'
import Folderbtn from './Folder/CreateFolderBtn'

const SideNav = () => {
  const [activeindex, setindex] = useState(null)
  const { user, error, isLoading } = useUser()
  console.log(user)
  return (
    <div className=" flex flex-col  h-screen border-2 py-4 sticky top-0 ">
      <div className=" flex items-center ">
        <Image
          src={'/cloud_cabinet_logo_green_blue-removebg-preview.png'}
          alt="Logo"
          width={70}
          height={70}
        />
        <h1 className=" text-xl text-blue-500 font-bold capitalize">
          Cloud Cabinet
        </h1>
      </div>
      <div className=" p-4">
        <CreateFileBTN />
      </div>

      <div className=" p-4 flex flex-col gap-2">
        {Sidebaritems.map((element, index) => {
          return (
            <div
              key={index}
              onClick={() => setindex(index)}
              className={`flex w-48 p-2 items-center gap-2 rounded-lg bg-white hover:bg-blue-400 ${
                index == activeindex ? 'bg-green-700 text-white ' : ''
              }`}
            >
              {element.Icon} <span className=" text-xl">{element.Name}</span>
            </div>
          )
        })}
      </div>
      <div className=" p-4">
        <Folderbtn />
      </div>
      <div>
        {user?.name !== '' ? (
          <div className=" flex gap-5 p-4 items-center">
            <h2 className=" font-bold text-xl">{user?.name}</h2>
            <button>
              <a href="/api/auth/login">
                <LogOut />
              </a>
            </button>
          </div>
        ) : (
          <a href="/api/auth/login">
            <button className=" p-3 rounded-lg bg-green-500">Login</button>
          </a>
        )}
      </div>
    </div>
  )
}

export default SideNav
