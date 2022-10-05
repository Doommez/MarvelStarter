import { lazy, Suspense} from "react";
import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "../spinner/Spinner";


const  Page404 = lazy(()=>import('../pages/404'));
const MainPage=lazy(()=>import('../pages/MainPage'));
const ComicsPage = lazy(()=>import('../pages/ComicsPage'))
const SingleComicPage = lazy(()=>import('../pages/SingleComicPage'))

const App =()=>{
   
   


        return (
            <Router>
            <div className="app">
                <AppHeader/>
                <main>
                  <Suspense fallback={<Spinner/>}>
                        <Routes>
    
                            <Route  path="/MarvelStarter/" element={<MainPage/>}/>
                            <Route  path="/MarvelStarter/comics" element={<ComicsPage/>}/>
                            <Route path="*" element={<Page404/>}/>
                            <Route exact path="/MarvelStarter/comics/:comicId" element={<SingleComicPage />}/>
                                
                           
                        </Routes>
                  </Suspense>
                </main>
            </div>
        </Router>
        )
    
   
}

export default App;