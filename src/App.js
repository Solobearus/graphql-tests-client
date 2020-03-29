import React, { useState } from 'react';
import './App.css';
import { getAllPosts, addPostToPosts, editPostToPosts, deletePostFromPosts } from "./API";
import Post from './components/Post/Post'

function App() {
  const [posts, setPosts] = useState([]);
  const [authorInput, setAuthorInput] = useState('testauthor')
  const [textInput, setTextInput] = useState('testtext');

  const handleAddPostButton = async () => {
    await addPostToPosts(authorInput, textInput);
    const newPosts = await getAllPosts();

    setPosts(newPosts);
  }

  const handleEditPostButton = async (id, author, text) => {

    await editPostToPosts(id, author, text);
    const newPosts = await getAllPosts();

    setPosts(newPosts);
  }

  const handleDeletePostButton = async (id, author, text) => {

    await deletePostFromPosts(id, author, text);
    const newPosts = await getAllPosts();

    setPosts(newPosts);
  }

  const handleGetAllPosts = async () => {
    const posts = await getAllPosts();
    setPosts(posts);
  }



  return (
    <div className="App">

      <input type="text" value={authorInput} onChange={(e) => setAuthorInput(e.target.value)} />
      <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
      <button onClick={e => { handleGetAllPosts() }}>getAllPosts</button>

      <button onClick={e => { handleAddPostButton() }}>addPost</button>

      {console.log(posts)}

      {posts && posts.map(post =>
        <Post
          key={post.id}
          post={post}
          handleEditPostButton={handleEditPostButton}
          handleDeletePostButton={handleDeletePostButton}>
        </Post>
      )}
    </div>
  );
}

export default App;
