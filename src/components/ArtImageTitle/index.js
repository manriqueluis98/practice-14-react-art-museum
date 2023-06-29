import {Link} from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'


function ArtImageTitle({art}){

    let {url} = useRouteMatch()
    return (
        <>
            <Link to={`${url}/art/${art.id}`}>
            <img className='art-img' src={art.primaryimageurl}></img>
            </Link>
            
        </>
    )
}

export default ArtImageTitle