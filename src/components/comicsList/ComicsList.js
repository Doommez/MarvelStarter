import './comicsList.scss';
import { useEffect, useState } from 'react';
import useMarvelService from '../../servesers/MarvelService';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Spinner from '../spinner/Spinner';
import { Link } from 'react-router-dom';



const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setnewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);


    const {loading, error, getAllComics}= useMarvelService()

    useEffect(()=>{
        onRequest(offset,true)
    },[])

    const onRequest=(offset,initial)=>{
        initial ? setnewItemLoading(false) : setnewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded=(newComicsList)=>{
        let ended=false;
        if(newComicsList.length<8){
            ended=true;
        }
        setComicsList([...comicsList,...newComicsList]);
        setnewItemLoading(false)
        setOffset(offset + 8);
        setComicsEnded(ended);

    }
    function renderItems(arr){
        const items=arr.map((item,i)=>{
          
            return(
                <li className="comics__item" key={i}>
                <Link to={`/MarvelStarter/comics/${item.id}`}>
                    <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                    <div className="comics__item-name">{item.title}</div>
                    <div className="comics__item-price">{item.pageCount}</div>
                    <div className="comics__item-price">{item.language}</div>
                    <div className="comics__item-price">{item.price}</div>
                </Link>
            </li>
            )
        })
        return(
            <ul className="comics__grid">
                {items}

            </ul>
        )
    }


    const items = renderItems(comicsList);
    
    const errorMessage=error?<ErrorBoundary/>:null;
    const spiner=loading&&!newItemLoading?<Spinner/>:null

    return (
        <div className="comics__list">
            {errorMessage}
            {spiner}
            {items}
            <button 
                disabled={newItemLoading} 
                style={{'display' : comicsEnded ? 'none' : 'block'}}
                className="button button__main button__long"
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;