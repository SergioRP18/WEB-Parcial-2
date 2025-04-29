import {BrowserRouter, Routes, Route} from "react-router";

import { BattleScreen, HomeScreen, RankingScreen } from "../pages";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/battle" element={<BattleScreen/>}/>
                <Route path="/ranking" element={<RankingScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;