import Image from 'next/image'
import React from 'react'
import IMAGE from '../../public/Image.png'
import PDF from '../../public/Pdf.png'
import DOC from '../../public/DOC.png'
import VIDEO from '../../public/Video.png'
import OTHER from '../../public/Other.png'

const FILETYPE = ({ type, size, count }) => {
  return (
    <div className="flex flex-col justify-center border-2 rounded-lg p-2 ">
      <div className=" flex justify-between items-center">
        {' '}
        <Image
          src={
            type == 'pdf'
              ? PDF
              : type == 'image'
              ? IMAGE
              : type == 'document'
              ? DOC
              : type == 'mp4'
              ? VIDEO
              : OTHER
          }
          alt="Image"
          width={48}
          height={48}
        />
        <h1 className=" text-slate-700 font-bold">{size.toFixed(2)} MB</h1>
      </div>
      <h1 className=" text-slate-700 font-bold"> {count} Files</h1>
    </div>
  )
}

export default FILETYPE
