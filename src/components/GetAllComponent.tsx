import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api/mainIntegration";
import { Post } from "../interfaces/Post";

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedPosts = await getAllPosts();
                setPosts(fetchedPosts);
            } catch (err) {
                setError("Failed to fetch posts.");
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    return (
        <>
            <h1>Posts</h1>
            <div className="flex items-center justify-center min-h-screen container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <ul>
                        {posts.map((post) => (
                            <div>
                                {loading && <p>Loading...</p>}
                                {error && (
                                    <p style={{ color: "red" }}>{error}</p>
                                )}
                                <div className="rounded-xl shadow-lg">
                                    <div className="p-5 flex flex-col">
                                        <li key={post.id}>
                                            <h2 className="text-2xl md:text-3xl font-medium mt-2">
                                                {post.title}
                                            </h2>
                                            <p>{post.body}</p>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PostsPage;
