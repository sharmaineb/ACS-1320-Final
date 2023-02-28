import { useState } from 'react';
import './Like.css';

function Like() {
    const [likes, setLikes] = useState(0)
    
    return (
        <div className='bandLikes'>
            <button onClick={() => setLikes(likes - 1)}>👍</button>
            <h2>{likes}</h2>
            <button onClick={() => setLikes(likes + 1)}>👎</button>
        </div>
    )
}

export default Like