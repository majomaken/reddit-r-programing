import React, { useState, useEffect } from 'react';
import { getPostApi } from '../api/post';
import PostList from '../components/PostList';
import { pushPost } from '../utils/pushPost';

export default function New() {
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
            postsArray.sort((a, b) => (a.date_created_mili < b.date_created_mili) ? 1 : -1)
            setPosts(...posts, postsArray);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PostList posts={posts} />
    );
}
