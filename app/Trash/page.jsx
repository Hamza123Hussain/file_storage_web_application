'use client'
import React, { useEffect, useState } from 'react'

import Loader from '@/components/Loader'
import { CreateTrash } from '@/functions/StoreTrash'
import TrashItem from '@/components/TrashItems'
import { GetTrash } from '@/functions/GetTrash'

const Trash = () => {
  const [trashData, settrashData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetTrash()
        settrashData(data.data)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [trashData])

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    )

  // if (trashData.length > 1) console.log('trash data:', trashData)

  return (
    <div className="bg-white mt-4 p-3 rounded-lg ">
      <h1 className=" text-xl mb-5 font-extrabold text-red-500 brightness-110">
        Trash
      </h1>
      <div className=" grid grid-cols-1 gap-2   ">
        {trashData.map((element) => {
          return (
            <div key={element.id}>
              <TrashItem File={element} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trash
