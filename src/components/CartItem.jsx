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
    <div className={`bg-white rounded-lg shadow-md p-4 relative ${view === 'list' ? 'flex items-start gap-4' : ''}`}>
        <button onClick={handleDelete} className="absolute top-2 right-2 text-pink-500 font-bold">x</button>

        {view === 'grid' ? (
            <>
            <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-3 ">{post.body}</p>
            <div className="text-xs text-blue-600 mb-2">Mon, 21 Dec 2020 14:57 GMT</div>
            <div className="h-28 w-full bg-gray-200 rounded overflow-hidden">
                <img alt='cardimg' src={`https://picsum.photos/seed/${post.id}/400/200`} className="w-full h-full object-cover" />
            </div>
            </>
        ) : (
            <>
            <div className="w-full h-full rounded-full overflow-hidden flex-shrink-0">
                <img alt='avatar' src={`https://picsum.photos/seed/av${post.id}/80/80`} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
               <h3 className="text-lg font-bold mb-1 line-clamp-2">{post.title}</h3>
               <p className="text-gray-600 text-sm line-clamp-3 ">{post.body}</p>
               <div className="text-xs text-blue-600 mb-2">Mon, 21 Dec 2020 14:57 GMT</div>
            </div>
            </>
        ) 

        }
    </div>
    </>
  )
}

export default CartItem