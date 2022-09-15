
import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage,ComicsPage } from "../pages/index";


const App =()=>{
   
   


        return (
            <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>

                        <Route  path="/MarvelStarter/" element={<MainPage/>}/>
                        <Route  path="/MarvelStarter/comics" element={<ComicsPage/>}/>
  
                    </Routes>
                </main>
            </div>
        </Router>
        )
    
   
}

export default App;