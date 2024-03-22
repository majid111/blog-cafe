import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='md:w-1/3 rounded-xl bg-[#1111110D] p-8 ml-8'>
            <h3>Bookmarked Blog: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;