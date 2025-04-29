import CardPokemon from "../components/card.poke.app";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const HomeScreen = () => {

    const [poke, setPoke] = useState("");
    const [loading, setLoading] = useState(true);

    const FetchDataPoke = () => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`).then((response) => response.json()).then((data) => {
            setPoke(data);
            setLoading(false);
        })
    };

    const navigate = useNavigate();

    return(
        <>
            <h1>Gestión de Batallas Pokémon Interactivas</h1>
            <h2>¡Bienvenido al mundo de Pokémon!</h2>

            <input onChange={e => setPoke(e.target.value)} type="search" name="search_pokemon_user" id="search-pokemon" placeholder="Buscar por nombre o ID"></input><br />
            <button onClick={FetchDataPoke} type="submit" id="search-poke">Buscar</button>
            {loading ? <p>Loading...</p> : <p>Pokemon: {poke?.name}</p>}

            <button onClick={() => navigate("/ranking")}>Ver Ranking</button>

            { loading ? <p>busca un poke </p> : <CardPokemon 
                HP={poke.stats[0].stat.base_stat}
                attack={poke.stats[0].stat.attack}
                url={poke.stats[0].stat.url}>

            </CardPokemon>}
        </>
    );
};

export default HomeScreen;