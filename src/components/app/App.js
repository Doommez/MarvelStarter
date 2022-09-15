
import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage,ComicsPage,Page404 } from "../pages/index";


const App =()=>{
   
   


        return (
            <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>

                        <Route  path="/MarvelStarter/" element={<MainPage/>}/>
                        <Route  path="/MarvelStarter/comics" element={<ComicsPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
        )
    
   
}

export default App;