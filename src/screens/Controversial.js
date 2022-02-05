import React, { useState, useEffect } from 'react';
import { getPostApi } from '../api/post';
import PostList from '../components/PostList';
import { pushPost } from '../utils/pushPost';

export default function Controversial() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            await loadPosts();
        })()
    }, [])

    const loadPosts = async () => {
        try {
            const postsArray = [];
            const response = await getPostApi();
            pushPost(postsArray, response);
            postsArray.sort((a, b) => (a.num_comments < b.num_comments) ? 1 : -1)
            setPosts(...posts, postsArray);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PostList posts={posts} />
    );
}
