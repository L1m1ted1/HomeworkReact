import style from './Todo.module.css'

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo
    return (
        <div className={style.container}>
            <h2>{id}. {title}</h2>
            <p>User id: {userId}</p>
            <p>Completed: {completed}</p>
        </div>
    );
};

export {Todo};
