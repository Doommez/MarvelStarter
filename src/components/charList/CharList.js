import { useState, useRef, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../servesers/MarvelService';
import './charList.scss';
import propTypes  from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const CharList =(props)=> {

    const [charList,setCharList] = useState([])
    const [newItemLoading,setNewItemLoading] = useState(false)
    const [offset,setOffset] = useState(210)
    const [charEnded,setCharEnded] = useState(false)

    
    const {loading, error, getAllCharacters} =  useMarvelService();

    useEffect(()=>{
          onRequest(offset,true) 
      
    },[])

  

    const onRequest=(offset,initial)=>{
        if(initial){
            setNewItemLoading(false) 
        }else setNewItemLoading(true)
       
        getAllCharacters(offset)
                            .then(onCharListLoaded)
                           
    }

    


    const onCharListLoaded = (newCharList) => {
        
        let ended =false;
        if(newCharList.length<9){
            ended=true
        }

        setCharList(charList=>[...charList, ...newCharList ])
      
        setNewItemLoading(newItemLoading=>false)
        setOffset(offset=>offset+9)
        setCharEnded(charEnded=>ended)
    }

  

    const itemRefs = useRef([])


    const focusOnItem = (id) => {
        // Я реализовал вариант чуть сложнее, и с классом и с фокусом
        // Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
        // На самом деле, решение с css-классом можно сделать, вынеся персонажа
        // в отдельный компонент. Но кода будет больше, появится новое состояние
        // и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов

        // По возможности, не злоупотребляйте рефами, только в крайних случаях
        itemRefs.current.forEach(item => {
            if(item){
                item.classList.remove('char__item_selected')
            }
            });
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    // Этот метод создан для оптимизации, 
    // чтобы не помещать такую конструкцию в метод render
  
    function renderItems(arr) {
       
        const items =  arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <CSSTransition 
                nodeRef={itemRefs.current[i]}
                timeout={500}
                classNames="char__item"
                key={item.id}
                >
               

               
                <li 
                    className="char__item"
                    tabIndex={0}
                    ref={(el=>itemRefs.current[i]=el)}
                    key={item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
                </CSSTransition>
                
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                <TransitionGroup 
                    component={null}
                    > 
                    {items}
                </TransitionGroup>
        

               
            </ul>
        )
    }

  


        
        const items = renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading && !newItemLoading ? <Spinner/> : null;


        if(loading){
            import('./someFunc')
                    .then(obj=>obj.logger())
                    .catch(()=>console.log('err'))
        }

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {items}
 
                <button 
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    
}

CharList.propTypes = {
    onCharSelected: propTypes.func.isRequired
}
export default CharList;