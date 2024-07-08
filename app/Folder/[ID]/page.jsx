'use client'
import { ParentIdContext } from '@/utils/Context'
import React, { useContext, useEffect } from 'react'

const Folder = ({ params }) => {
  const { setParentId } = useContext(ParentIdContext)

  useEffect(() => {
    setParentId(params.ID)
  }, [])
  return (
    <div>
      <h1>HEELO FOLDER {params.ID}</h1>
    </div>
  )
}

export default Folder
