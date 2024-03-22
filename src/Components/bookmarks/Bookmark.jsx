const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    console.log(bookmark,title);
    return (
        <div className="rounded-xl bg-white p-6 mt-4"><h2>{title}</h2></div>
    );
};

export default Bookmark;