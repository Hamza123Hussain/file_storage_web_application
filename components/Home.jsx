import { LogInIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white  text-black shadow-md">
        <div className="flex items-center mb-4 sm:mb-0">
          <Image
            src={'/cloud_cabinet_logo_green_blue-removebg-preview.png'}
            alt="Cloud Cabinet Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-bold ml-2">Cloud Cabinet</h1>
        </div>
        <a
          href="/api/auth/login"
          className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200 shadow"
        >
          <LogInIcon />
          <span>Login</span>
        </a>
      </header>

      {/* Body */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4 bg-green-400">
        <h2 className="text-3xl font-bold mb-4">Welcome to Cloud Cabinet</h2>
        <div className="grid gap-6 sm:grid-cols-2  max-w-6xl">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Store up to 5 GB
            </h3>
            <p className="text-gray-700">
              Securely store your files with a total storage capacity of up to 5
              GB. Enjoy ample space for all your important documents, images,
              and videos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Secure Storage
            </h3>
            <p className="text-gray-700">
              Your data is stored in a secured database, ensuring that your
              files are protected from unauthorized access.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Easy-to-Use Interface
            </h3>
            <p className="text-gray-700">
              Experience a seamless and intuitive interface that makes managing
              your files effortless.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              Fast Uploads and Downloads
            </h3>
            <p className="text-gray-700">
              Enjoy fast upload and download speeds, making it easy to access
              and share your files whenever you need them.
            </p>
          </div>
        </div>
        <a
          href="/api/auth/login"
          className="flex items-center gap-2 mt-8 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 shadow"
        >
          <LogInIcon />
          <span>Get Started</span>
        </a>
      </main>
    </div>
  )
}

export default Home
