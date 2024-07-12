'use client'
import FileItem from '@/components/Files/FileItem'
import Loader from '@/components/Loader'
import { GetImporant } from '@/functions/GetImportant'
import { ParentIdContext } from '@/utils/Context'
import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useContext, useEffect } from 'react'

const Important = () => {
  const { important, setimportant, loading, setLoading } =
    useContext(ParentIdContext)

  const { user } = useUser()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetImporant(user?.email)
        console.log('IMPORANT : ', data)
        setimportant(data)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )
  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl font-extrabold">Recent Files</h1>
      <div className=" grid grid-cols-1 gap-2   ">
        {important.map((element) => {
          return (
            <div key={element.id}>
              <FileItem File={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Important
