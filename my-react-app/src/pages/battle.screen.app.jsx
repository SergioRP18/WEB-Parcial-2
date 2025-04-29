import { useNavigate } from 'react-router-dom';

const BattleScreen = () => {

    const navigate = useNavigate();

    return(
        <>
            <h1>Batalla de Pokes</h1>

            <button id="fight-button-poke">A pelear</button><br />
            <button id="go-select-new-poke" onClick={() => navigate("/")}>Selecciona otro Poke</button>
        </>
    );
};

export default BattleScreen;