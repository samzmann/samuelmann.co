import React from 'react'

export const SideBar = ({ content }) => {
  //
  return (
    <div className="fixed flex h-screen w-screen">
      {/* Fixed sidebar */}
      <div className="hidden md:block w-64 px-2 md:px-4 lg:px-6 pt-2 pb-3 border-r-2 border-gray-200" />
      {/* Scroll wrapper */}
      <div className="flex-1 flex overflow-hidden">
        {/* Scrollable container */}
        <main className="flex-1 overflow-y-scroll px-4 md:px-6 lg:px-8 pt-4 pb-64">
          {content}
        </main>
      </div>
    </div>
  )
}
