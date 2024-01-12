// HomeContainer.tsx
import { getPokemon, Pokemon } from '../../api/getPokemon';
import { Card } from '../../components';
import styles from './HomeContainer.module.css';
import { useQuery } from 'react-query';
import { useState } from 'react';

const HomeContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;

    const { data, isSuccess } = useQuery(['getPokemon', currentPage], async () => {
        const offset = (currentPage - 1) * pageSize;
        const pokemonIds = Array.from({ length: pageSize }, (_, index) => offset + index + 1);
        const pokemonData = await Promise.all(pokemonIds.map((id) => getPokemon(id)));
        return pokemonData;
    });

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {isSuccess &&
                    data?.map((pokemon) => (
                        <Card key={pokemon.id}>
                            <Card padding={15}>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <p>Name: {pokemon.name}</p>
                                <p>HP: {pokemon.stats.find((stat) => stat.stat.name === 'hp')?.base_stat}</p>
                                <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
                                <p>Attack: {pokemon.stats.find((stat) => stat.stat.name === 'attack')?.base_stat}</p>
                                <p>Defense: {pokemon.stats.find((stat) => stat.stat.name === 'defense')?.base_stat}</p>
                            </Card>
                        </Card>
                    ))}
            </div>
            <div className={styles.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <span>{`Page ${currentPage}`}</span>
                <button onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    );
};

export default HomeContainer;
