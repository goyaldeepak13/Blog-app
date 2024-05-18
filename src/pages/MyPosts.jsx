import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import authService from "../appwrite/auth";
import appwriteService from "../appwrite/config";
import { Query } from "appwrite";
import { LoadingSpinner } from '../components';

function MyPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCurrentUserPosts() {
            try {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) {
                    const postsData = await appwriteService.getPosts([Query.equal("userId", currentUser.$id)]);
                    if (postsData) {
                        setPosts(postsData.documents);
                    }
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching current user posts:", error);
                setLoading(false);
            }
        }

        fetchCurrentUserPosts();
    }, []);

    return (
        <div className='w-full py-8'>
            <Container>
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <div className='flex flex-wrap'>
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))
                        ) : (

                            <div className="w-full flex justify-center">
                                <p className='text-center font-bold text-4xl text-red-900'>No Post Available</p>
                            </div>

                        )}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default MyPosts;
