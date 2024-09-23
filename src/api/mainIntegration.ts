import axios from "axios";
import { Post } from "../interfaces/Post";
//const baseURL = process.env.REACT_APP_API_URL;
const baseURL = "https://jsonplaceholder.typicode.com";

export const getAllPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get(`${baseURL}/posts`);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

export const createPost = async (postData: Partial<Post>) => {
    try {
        const response = await axios.post(`${baseURL}/posts`, postData);
        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};
