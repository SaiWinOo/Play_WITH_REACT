import React from 'react'
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="max-w-[800px] bg-gray-200 min-h-screen mx-auto">
      <Outlet />
    </div>
  )
}

export default UserLayout;