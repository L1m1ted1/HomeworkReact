import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import postService from "../../service/postService";
import style from './Post.module.css'


const Post = () => {

    const {state:{i,postId}} = useLocation()
    const [posts, setPosts] = useState({})

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPosts(data))
    }, [i]);

    console.log(posts)

    const {userId, id, title, body} = posts

    return (
        <div className={style.container}>
            <h2>{id}. {title}</h2>
            <p>userId: {userId}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Post};
