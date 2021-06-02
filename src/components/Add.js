import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Add = () => {
    const [title, setTitle] = useState('Post Title');
    const [body, setBody] = useState('Content');
    const [isLoading, setIsLoading] = useState(false);
    const [author, setAuthor] = useState('fidel');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, body, author };
        setIsLoading(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('new post added');
            setIsLoading(false);
            //history.go(1);
            history.push('/');
        })
    }
    return (
      <div className="create">
        <h2>Add new post</h2>
        <form onSubmit={handleSubmit}>
          <label>Post Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Post Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Post Author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="fidel">fidel</option>
            <option value="jose">jose</option>
          </select>
          {!isLoading && <button>Submit</button>}
          {isLoading && <button disabled>Adding post...</button>}
        </form>
      </div>
    );
}
 
export default Add;