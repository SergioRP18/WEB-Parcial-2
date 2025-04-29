import { useNavigate } from "react-router-dom";
import CardRanking from "../components/card.ranking.app";

const RankingScreen = () => {

    const navigate = useNavigate();

    return(
        <>
            <h1>Ranking de los 5 Pokémon más fuertes</h1>
            <ul>
                <li><CardRanking></CardRanking></li>
            </ul>
            <button onClick={() => navigate("/")}>Volver al inicio</button>
        </>
    );
};

export default RankingScreen;