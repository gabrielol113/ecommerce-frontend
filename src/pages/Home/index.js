import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import api from '../../services/api'

function Home(){
    const [categories,setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        async function loadCategories(){
            const response = await api.get("/movie/now_playing", {
                params:{
                    api_key:'d35989333ba877bdd2734cd2abab8695',
                    language: "pt-BR",
                    page: 1,
                }
            })
            setCategories(response.data.results.slice(0,10));
            setLoading(false);

        }
        loadCategories();
    },[])

    if(loading){
        return(
            <div className='loading'>
                <h2>Loading website</h2>
            </div>
        )
    }
    return(
        <div className='container'>
            <div className='lista-filmes'>
                {categories.map((filme) =>{
                    return(
                        <article key={filme.id}>
                            <strong>{ filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;