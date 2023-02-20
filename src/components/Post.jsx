import React from 'react';
import styles from "./Post.module.css";


// const names=["Nadia", "Max", "Manuel"]

const Post = ({author, body}) => {

 // const chosenName= Math.random() > 0.5 ? names[0] : names[1];

    return (
        <li className={styles.post}>
            <p className={styles.author}>{author}</p>
            <p className={styles.text}>{body}</p>
        </li>
    );
};

export default Post;


