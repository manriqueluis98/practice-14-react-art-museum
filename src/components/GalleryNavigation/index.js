import {NavLink} from 'react-router-dom'

import './GalleryNavigation.css'

function GalleryNavigation({galleries}){
    console.log(galleries)
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            {galleries.map(gallery => <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>)}
        </nav>
    )
}

export default GalleryNavigation