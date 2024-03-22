import PropTypes from 'prop-types';
import markAsRead from '../../assets/images/Vector.png'

const Blog = ({ blog, handleBookmark }) => {

    const { cover, title, author, author_img,
        hashtags, posted_date, reading_time

    } = blog;

    return (
        <div className='mt-12'>
            <img src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between my-8'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='my-6'>
                    <span>{reading_time} min read <img onClick={()=>handleBookmark(blog)} className='inline' src={markAsRead} alt="" /></span>
                </div>
            </div>
            <h2 className="text-4xl text-[#111111]">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href="">#{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;