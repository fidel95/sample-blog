import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const PostDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data: post, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);
    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + post.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })

    }


    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error} </div>}

            {post && (
                <article>
                    <h2>{post.title}</h2>
                    <p>Written by {post.author}</p>
                    <div>{post.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default PostDetails;