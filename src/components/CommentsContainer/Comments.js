import {useEffect, useState} from "react";
import commentService from "../../service/commentService";
import {Comment} from "./Comment/Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll.then(({data}) => setComments(data));
    },[])
    
    return (
        <div>
            {comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
            <Outlet/>
        </div>
    );
};

export {Comments};
