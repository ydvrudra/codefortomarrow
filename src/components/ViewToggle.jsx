import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleview } from '../slices/postSlice'



function ViewToggle() {

    const dispatch = useDispatch();
    const view = useSelector((s) => s.posts.view);
  return (
    <>
    <div className='flex items-center'>
        <div className="flex gap-2 bg-gray-100 rounded-lg p-2">
            <button onClick={() => view !== 'grid' && dispatch(toggleview())}
                className={`px-4 py-3 rounded ${view === 'grid' ? 'bg-green-200' : 'bg-transparent'}`}
                aria-label='grid'
                >
                    <svg width="24" height="24"><rect x='3' y='3' width='7' height='7' fill='#111'/></svg>
                </button>
                <button onClick={() => view !== 'list' && dispatch(toggleview())}
                    className={`px-4 py-3 rounded ${view === 'list' ? 'bg-green-200' : 'bg-transparent'}`}
                     aria-label='grid'
                     >
                     <svg width="24" height="24"><rect x='4' y='4' width='16' height='3' fill='#111'/> <rect x='4' y='' width='16' height='3' fill='#111'/></svg>

                    </button>
        </div>
    </div>
    </>

  )
}

export default ViewToggle