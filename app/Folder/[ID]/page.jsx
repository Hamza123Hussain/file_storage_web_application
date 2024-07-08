// pages/Folder.jsx
'use client'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ParentIdContext } from '@/utils/Context'
import { createClient } from '@supabase/supabase-js' // Import createClient from Supabase

const supabaseUrl = 'https://msmetpsnmkznujcdtqub.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseKey) // Initialize Supabase client

const Folder = ({ params }) => {
  const { setParentId } = useContext(ParentIdContext)
  const [folderData, setFolderData] = useState(null)

  const getFolderData = async () => {
    try {
      const { data, error } = await supabase
        .from('Folder')
        .select('*')
        .eq('parentID', params.ID) // Use params.ID directly here

      if (error) {
        console.error('Error fetching data from Supabase:', error.message)
      } else {
        console.log('Data fetched successfully:', data)
        setFolderData(data) // Update state with fetched data
      }
    } catch (error) {
      console.error('Unexpected error occurred:', error)
    }
  }

  useEffect(() => {
    setParentId(params.ID)
    getFolderData()
  }, [])

  return (
    <div>
      <h1>HELLO FOLDER {params.ID}</h1>
      {/* Display folderData here */}
      {folderData && (
        <div>
          <h2>Folder Name: {folderData.FolderName}</h2>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  )
}

export default Folder
