import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../slices/postSlice'

function Pagination() {

    const dispatch = useDispatch();
    const { posts, currentPage, pageSize } = useSelector((s) => s.posts);

    const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const go = (p) => dispatch(setPage(p));
  return (
    <>
    <div className="flex items-center justify-center gap-2 mt-6">
        <button onClick={() => go(Math.max(1,currentPage -1))} 
        className="px-3 py-1 rounded bg-gray-200">Prev</button>

        {pages.map((p) => (
           <>
            <button key={p} 
            onClick={() => go(p)}
            className={`px-3 py-1 rounded ${p === currentPage ? 'bg-blue-500 text-white' : 'bg-white border'}`}
            >
            {p}
            </button>
           </>
        ))}
        <button onClick={() => go(Math.min(totalPages, currentPage +1))} 
        className="px-3 py-1 rounded bg-gray-200">Next</button>
    </div>
    </>
  )
}

export default Pagination