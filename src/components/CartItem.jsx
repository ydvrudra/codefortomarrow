import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from '../slices/postSlice';


function CartItem({post, view}) {
    

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePost(post.id));
    };

    if (!post) {
        return null;
    };
  return (
    <>
    <div
      className={`bg-white rounded-2xl shadow-md p-5 relative transition-all duration-300 hover:shadow-lg ${
        view === 'list' ? 'flex items-center gap-5' : 'flex flex-col'
      }`}
    >
      {/* delete button */}
      <button
        onClick={handleDelete}
        className="absolute top-3 right-4 text-pink-500 text-lg font-bold"
      >
        ×
      </button>

      {/* List View */}
      {view === 'list' ? (
        <>
          <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-gray-100">
            <img
              alt="avatar"
              src={`https://picsum.photos/seed/av${post.id}/100/100`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-1">
              {post.body}
            </p>
            <div className="text-xs text-gray-500">
              Mon, 21 Dec 2020 14:57 GMT
            </div>
          </div>
        </>
      ) : (
        // Grid View
        <>
          <div className="h-40 w-full rounded-xl overflow-hidden mb-3 bg-gray-100">
            <img
              alt="cardimg"
              src={`https://picsum.photos/seed/${post.id}/400/300`}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 flex-grow mb-3">
            {post.body}
          </p>
          <div className="text-xs text-gray-500">
            Mon, 21 Dec 2020 14:57 GMT
          </div>
        </>
      )}
    </div>
  </>
  )
}

export default CartItem