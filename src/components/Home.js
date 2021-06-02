import BlogList from './BlogList'

import useFetch from './useFetch'
const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isLoading && (
          <div>
            <img
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              alt="Loading..."
            />
          </div>
        )}
        {blogs && <BlogList blogs={blogs} />}
      </div>
    );
}
 
export default Home;