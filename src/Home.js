import {useState , useEffect} from 'react';
import BlogList from './BlogList.js';
import useFetch from './useFetch.js';

const Home = () => {  
 const {data: blogs , isPending } =  useFetch('http://localhost:3000/blogs');
 const [filteredBlogs, setFilteredBlogs] = useState([]);

 
 useEffect(() => {
   if (blogs) {
     setFilteredBlogs(blogs);
   }
 }, [blogs]);

 const handleDelete = (id) => {
   const newBlogs = filteredBlogs.filter(blog => blog.id !== id);
   console.log({newBlogs,id});
   setFilteredBlogs(newBlogs); 
 } 

  return ( 
    <div className="home">
        { isPending && <div>Loading...</div> }

        
        {!isPending && filteredBlogs.length > 0 && (
          <BlogList blogs={filteredBlogs} title="All Blogs" handleDelete={handleDelete} />
        )}

        
        {!isPending && filteredBlogs.length === 0 && <div>No blogs available</div>}
    </div>
   );
};
 
export default Home;

