import useFetch from './useFetch';
import BlogList from './BlogList';

const Home = () => {
  const url = 'http://localhost:8000/blogs'
  const { data: blogs, loading, error } = useFetch(url);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
