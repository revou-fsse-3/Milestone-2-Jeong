
import { getMovies } from '../../api/getMovies'
import { Card } from '../../components'
import styles from './HomeContainer.module.css'
import { useQuery } from 'react-query'

const HomeContainer = () => {

    const { data } = useQuery('getMovies', getMovies);

    console.log(data)

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {data?.results.map((result) => (
                    <Card key={result.id}>
                        
                        <Card padding={15}>
                            <p>{result.title}</p>
                        </Card>
                        
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default HomeContainer