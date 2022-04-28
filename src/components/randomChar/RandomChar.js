
import { Component } from 'react/cjs/react.production.min';

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';
import MarvelService from '../../servesers/MarvelService';
import Spinner from '../spinner/Spinner.js';
import ErrorMessage from '../errorMessage/ErrorMessage';



class RandomChar extends Component{
    constructor(props){
        super(props);
        
    }
    state={
        char:{},
        loading:true,
        error:false,

    }
    marvelService= new MarvelService();

    componentDidMount(){
        this.updateChar();
    }

    onError=()=>{
        this.setState({
            loading:false,
            error:true
        })
    }

    onCharLoad=(char)=>{
      
        this.setState({char,
        loading:false
    })
    }

    updateChar=()=>{
        const id=Math.floor(Math.random()*(1011400-1011000)+1011000);
        this.marvelService
                .getCharacter(id)
                .then(this.onCharLoad)
                .catch(this.onError)
    }
    render(){
        const {char,loading,error}=this.state
       const errorMessage=error?<ErrorMessage/>:null;
       const spinner = loading?<Spinner/>:null;
       const content = !(loading||error)?<View char={char}/>:null
      
        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                {/* {loading?<Spinner/>:<View char={char}/>} */}
                {/* <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img"/>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            {description}
                        </p>
                        <div className="randomchar__btns">
                            <a href={homePage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div> */}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner" onClick={this.updateChar}>try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View=({char})=>{
    
const {name,description,thumbnail,homepage,wiki}=char

    return(
        <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" style={(thumbnail==="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg")?{objectFit: 'contain'}:null} className="randomchar__img"/>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            {description}
                        </p>
                        <div className="randomchar__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
    )
}

export default RandomChar;