import PostDatail from '../../components/PostDatail'
import {Link} from 'react-router-dom'
import styles from './Search.module.css'


// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/UseQuery'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)
  return (
    <div className={styles.search_container}>
        <h2>Search</h2>
        <div>
            {posts && posts.length === 0 && (
                <div className={styles.noposts}>
                <p>Não foram encontrados posts a partir da sua Busca...</p>
                <Link to="/" className="btn btn-dark">
                    Voltar
                </Link>
                </div>
            )}
            {posts && posts.map((post) => (
                <PostDatail key={post.id} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default Search