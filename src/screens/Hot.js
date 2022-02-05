import React, { useState, useEffect } from 'react';
import { getPostApi } from '../api/post';
import PostList from '../components/PostList';
import { pushPost } from '../utils/pushPost';

export default function Hot() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            await loadPosts();
        })()
    }, [])

    const loadPosts = async () => {
        try {
            const response = await getPostApi();
            const postsArray = [];
            pushPost(postsArray, response);
            setPosts(...posts, postsArray);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PostList posts={posts} />
    );
}
