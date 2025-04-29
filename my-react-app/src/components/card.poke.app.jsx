const CardPokemon = ({attack, defense ,HP, url,}) => {
    return(
        <>
            <div>
                <h2>Name</h2>
                <img src={url} alt="" />
                <label htmlFor="HP">HP:</label>
                <span id="hp-poke">{HP}</span><br />
                <label htmlFor="Ataque">Ataque:</label>
                <span id="attack-poke">{attack}</span><br />
                <label htmlFor="defense">Defensa:</label>
                <span id="defense-poke">{defense}</span><br />

                <button type="submit">Seleccionar</button>
            </div>
        </>
    );
};

export default CardPokemon;