import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonCollection from "./components/PokemonCollection";
import { Detail, Pokemon } from "./interface";

interface Pokemons {
    name: string;
    url: string;
}

function App() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [nextUrl, setNextUrl] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [detail, setDetail] = useState<Detail>({
        id: 0,
        isOpened: false,
    });

    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20");
            setNextUrl(res.data.next);
            res.data.results.forEach(async (pokemon: Pokemons) => {
                const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                setPokemons((p) => [...p, poke.data]);
                console.log(poke.data);
                setLoading(false);
            });
        };
        getPokemon();
    }, []);

    const nextPage = async () => {
        setLoading(true);
        const res = await axios.get(nextUrl);
        setNextUrl(res.data.next);
        res.data.results.forEach(async (pokemon: Pokemons) => {
            const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            setPokemons((p) => [...p, poke.data]);
            setLoading(false);
        });
    };

    return (
        <div className="App">
            <div className="container">
                <header className="pokemon-header">Pokemon</header>
                <PokemonCollection pokemons={pokemons} detail={detail} setDetail={setDetail} />
                {!detail.isOpened && (
                    <div className="btn">
                        <button onClick={nextPage}>{loading ? "Loading..." : "Load more"}</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
