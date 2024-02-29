import style from './Album.module.css'

const Album = ({albom}) => {
    const {userId, id, title} = albom
    return (
        <div className={style.container}>
            <h2>{id}. {title}</h2>
            <p>User id: {userId}</p>
        </div>
    );
};

export {Album};
