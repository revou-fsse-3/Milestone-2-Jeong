
import styles from './Navbar.module.css';

const Navbar = () => {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}>Pokémon Wiki</h1>
            <h2 className={styles.navtext}>About</h2>
            <h2 className={styles.navtext}>Pokédex</h2>
            <h2 className={styles.navtext}>Games</h2>
            <h2 className={styles.navtext}>Anime</h2>
            <h2 className={styles.navtext}>Manga</h2>
            <h2 className={styles.navtext}>TCG</h2>
            <h2 className={styles.navtext}>Events</h2>
        </div>
    )
}

export default Navbar