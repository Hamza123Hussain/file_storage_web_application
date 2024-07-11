'use client'
import React, { useState } from 'react'
import LOGO from '../public/ICON.webp'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import { Sidebaritems } from '@/utils/ArrayforSideBar'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import CreateFileBTN from './Files/CreateFile'
import Folderbtn from './Folder/CreateFolderBtn'
import { useUser } from '@auth0/nextjs-auth0/client'
const NavForSmall = () => {
  const { user } = useUser()
  const [activeindex, setindex] = useState(null)
  return (
    <div className=" sm:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center gap-5  mt-10">
            <div className=" border-2 border-black rounded-lg hover:bg-black   p-2">
              {' '}
              <Image src={LOGO} alt="Logo" width={40} height={40} />
            </div>
            <h1 className="text-4xl text-blue-500 font-bold capitalize font-bold">
              Cloud Cabinet
            </h1>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {' '}
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
            </SheetTitle>
            <SheetDescription>
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
                    {element.Icon}{' '}
                    <span className="text-xl">{element.Name}</span>
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
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className=" flex flex-col">
        <div className="p-4">
          <CreateFileBTN />
        </div>
        <div className="p-4">
          <Folderbtn />
        </div>
      </div>
    </div>
  )
}

export default NavForSmall
