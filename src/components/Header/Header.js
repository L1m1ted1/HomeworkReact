import {NavLink} from "react-router-dom";

import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <NavLink to={'/albums'}>Albums</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
            <NavLink to={'/todos'}>Todos</NavLink>
        </div>
    );
};

export {Header};
