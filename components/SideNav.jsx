'use client'
import { Sidebaritems } from '@/utils/ArrayforSideBar'
import { useUser } from '@auth0/nextjs-auth0/client'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SideNav = () => {
  const { user, error, isLoading } = useUser()
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
        <button className="w-48 flex gap-2 items-center bg-blue-600 hover:brightness-105 text-white rounded-lg p-3">
          <span className=" text-lg">Add A File</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      <div className=" p-4">
        <button className=" w-48 flex gap-2 items-center bg-green-600 hover:brightness-105 text-white rounded-lg p-3">
          <span className=" text-lg">Add A Folder</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      <div className=" p-4 flex flex-col gap-5">
        {Sidebaritems.map((element, index) => {
          return (
            <div
              key={index}
              className=" flex w-48 p-3 items-center gap-5 rounded-lg bg-white hover:bg-blue-400"
            >
              {element.Icon} <span className=" text-2xl">{element.Name}</span>
            </div>
          )
        })}
      </div>
      <div>
        {user?.name != '' ? (
          <div className=" flex gap-5 p-4 items-center">
            <h2 className=" font-bold text-2xl">{user?.name}</h2>
            <button>
              <a href="/api/auth/logout">
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
