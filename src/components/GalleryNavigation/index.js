import {NavLink} from 'react-router-dom'

import './GalleryNavigation.css'

function GalleryNavigation({galleries}){
    console.log(galleries)
    return (
        <nav className='nav'>
            <NavLink className='link-home' exact to='/'>Home</NavLink>
            {galleries.map(gallery => <NavLink className='link-gallery' key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>)}
        </nav>
    )
}

export default GalleryNavigation