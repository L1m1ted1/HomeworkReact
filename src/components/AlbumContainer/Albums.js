import {useEffect, useState} from "react";

import albumService from "../../service/albumService";
import {Album} from "./Album/Album";

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        albumService.getAll.then(({data}) => setAlbums(data));
    },[])


    return (
        <div>
            {albums.map((albom) => <Album key={albom.id} albom={albom}/>)}
        </div>
    );
};

export {Albums};
