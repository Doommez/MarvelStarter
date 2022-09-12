
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';

const App =()=>{
    const [selectedChar,setChar]=useState(0)
   

    const onCharSelected=(id)=>{
       setChar(id)
    }

   


        return (
            <div className="app">
                <AppHeader/>
                <main>
               
                   <ErrorBoundary>
                      <RandomChar/>
                    </ErrorBoundary>  
                    <div className="char__content">
                    <ErrorBoundary><CharList onCharSelected={onCharSelected}/></ErrorBoundary>   
                     <ErrorBoundary >  
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>  
                    </div> 
                    <img className="bg-decoration" src={decoration} alt="vision"/> 
                </main>
            </div>
        )
    
   
}

export default App;