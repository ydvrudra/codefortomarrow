import React ,{useState} from 'react'
import Loader from '../components/Loader'
import Sidebar from '../components/Sidebar'
import CartItem from '../components/CartItem'
import Pagination from '../components/Pagination'
import FeedbackForm from '../components/FeedbackForm'
import { useSelector } from 'react-redux'

function Home() {

    const {posts, loading, currentPage, pageSize, view} = useSelector((s) => s.posts);
    const [feebackOpen, setIsFeedBackOpen] = useState(false);

    const start = (currentPage - 1) * pageSize;
    const visible = posts.slice(start, start + pageSize);



  return (
    <>
    <div className="min-h-screen bg-gradient-to-t from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto py-12 px-3 flex gap-8">
            {/* SideBar */}
            <div className="flex-shrink-0">
                <Sidebar onOpenFeedBack={() => setIsFeedBackOpen(true)}/>
            </div>
            {/* Main Content */}
            <div className="flex-1">
                {loading ? (
                    <Loader/>
                ) :
                (
                    <>
                    <div className={view === 'grid' ? 'grid grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
                        {visible.map((p) => (
                            <CartItem key={p.id} post={p} view={view}/>
                        ))}
                    </div>

                    <Pagination/>

                    { feebackOpen &&
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                        <FeedbackForm onClose={() => setIsFeedBackOpen(false)}/>
                    </div>
                    }
                    </>
                )}
            </div>
        </div>
    </div>


    </>
  )
}

export default Home
