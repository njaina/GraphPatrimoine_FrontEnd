import "./App.css";
import React from "react";
import PostsPage from "./components/GetAllComponent";
import CreateNewPost from "./components/NewPostComponent";

const App: React.FC = () => {
    return (
        <div>
            {/*<CreateNewPost />*/}
            <PostsPage />
        </div>
    );
};

export default App;
