import React from 'react';
import useFetch from '../hooks/useFetch';

const PostsList = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
