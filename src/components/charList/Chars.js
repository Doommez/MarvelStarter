




const Chars=(props)=>{


const {name,thumbnail}=props
  return(
    
      <li className="char__item">
          <img src={thumbnail} alt="abyss"/>
          <div className="char__name">{name}</div>
       </li>
     )
  
}

export default Chars