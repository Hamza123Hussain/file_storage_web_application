import { LogInIcon } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <div>
      {' '}
      <div className="p-4 mt-auto">
        <div className="flex gap-5 items-center">
          <a href="/api/auth/login">
            <LogInIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
