import React, { useEffect, useState } from "react";
import { getAllPosts, createPost } from "../api/mainIntegration";
import { Post } from "../interfaces/Post";

const YourComponent: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [newPost, setNewPost] = useState<Partial<Post>>({
        title: "",
        body: "",
        userId: 1,
    });

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            setError(null); // Reset error before fetching
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

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;
        setNewPost((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const createdPost = await createPost(newPost);
            setPosts((prevPosts) => [...prevPosts, createdPost]);
            setNewPost({ title: "", body: "", userId: 1 });
        } catch (err) {
            setError("Failed to create post.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Posts</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="body"
                    placeholder="Body"
                    value={newPost.body}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};
export default YourComponent;
