import React, {useState} from 'react';
import styles from "./PostsList.module.css";
import Post from "./Post";
import {useEffect} from "react";
import {useLoaderData} from "react-router-dom";


const PostsList = () => {

    const posts=useLoaderData()
    // const [posts, setPosts] = useState([]);
    // const [isFetching, setisFetching] = useState(false);

    // useEffect(() => {
    //     async function fetchPosts() {
    //         setisFetching(true);
    //         // const response = await fetch("http://localhost:8080/posts")
    //         // const resData = await response.json();
    //         setPosts(resData.posts);
    //         setisFetching(false)
    //     }
    //
    //     fetchPosts();
    // }, [])

    //добавляет новый пост в аррэй + сохраняет старые
    // function addpostHandler(postData) {
    //     // данные из ивента  + старые посты
    //     // setPosts([postData, ...posts])
    //     fetch("http://localhost:8080/posts", {
    //         method: "POST",
    //         body: JSON.stringify(postData),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });
    //     setPosts((existingPosts) => [postData, ...existingPosts])
    // }

    // Условный рендеринг && либо тернарный ? : null
    return (
        <>
            {/*{showPost && <Modal onClose={onHidePost}>*/}
            {/*    <NewPost*/}
            {/*        // onBodyChange={changeBodyHandler}*/}
            {/*        // onAuthorChange={changeAuthorHandler}*/}
            {/*        onCancel={onHidePost}*/}
            {/*        onAddPost={addpostHandler}*/}
            {/*    />*/}
            {/*</Modal>}*/}

            {posts.length > 0 && (
                <ul className={styles.posts}>
                    {/*<Post author={enteredAuthor} body={enteredBody}/>*/}
                    {/*<Post author="Vasya Prianyk" body='React is good'/>*/}
                    {posts.map((post) => <Post key={post.index} author={post.author} body={post.body}/>)}
                </ul>)}

            { posts.length === 0 && <div style={{textAlign: "center", color: "white"}}>
                <h2> There are no posts yet!</h2>
                <p>Start adding some!</p>
            </div>}
            {/*{isFetching && <div style={{textAlign: "center", color: "white"}}>*/}
            {/*    <p>Loading posts...</p></div>}*/}
        </>
    );
};

export default PostsList;


