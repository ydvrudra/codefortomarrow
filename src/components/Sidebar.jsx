import React from 'react'
import ViewToggle from './ViewToggle';


function Sidebar({onOpenFeedBack}) {
  return (
    <>
    <div className="w-80 p-6 space-y-6">
        <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <img className='rounded-full'
                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="" />
                </div>
                <div className="font-bold">Hi Reader</div>
                <div className="text-sm text-gray-600">Here's Your News! </div>
            </div>
        </div>
    </div>

    <div className="bg-white rounded-lg p-4 shadow-md">
        <h3 className="text-xl font-semibold mb-3">View Toggle</h3>
        <ViewToggle />
    </div>

    <div className="bg-white rounde-lg p-4 shadow-md"></div>
    <h3 className="text-xl font-semibold mb-3">Have A feedBack</h3>
    <button onClick={onOpenFeedBack}
    className='w-full bg-gradient-to-t from-teal-300 to-green-200 rounded-lg py-3 font-bold'
    >We're Listening!</button>
    </>
  )
}

export default Sidebar