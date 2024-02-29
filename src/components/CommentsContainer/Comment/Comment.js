import style from './Comment.module.css'
import {useNavigate} from "react-router-dom";


const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate()

    return (
        <div className={style.container}>
            <div>
                <h2>{id}. {name}</h2>
                <p>Post id: {postId}</p>
                <p>Email: {email}</p>
                <p>Body: {body}</p>
            </div>
            <div>
                <button onClick={() => navigate('/post', {state: {i:id,postId}})}>Show Post</button>
            </div>
        </div>
    );
};

export {Comment};
