import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookmark}) => {
    const [Blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[]);

    return (
        <div className="md:w-2/3">
            <h2 className="font-bold text-2xl">Blogs: {Blogs.length}</h2>
            {
                Blogs.map(blog=><Blog key={blog.id} handleBookmark={handleBookmark} blog={blog}></Blog>)
            }

        </div>
    );
};

export default Blogs;