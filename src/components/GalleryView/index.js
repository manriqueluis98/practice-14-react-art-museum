import {useParams} from 'react-router-dom'
import ArtImageTitle from '../ArtImageTitle'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import ArtDescription from '../ArtDescription'

function GalleryView({galleries}){
    const {galleryId} = useParams() 

    const {url} = useRouteMatch()

    const gallery = galleries.find(gall => gall.id == galleryId)
    return (
        <>
            <h2>{gallery.name}</h2>

            <Switch>
                <Route exact path={url}>
                    <div className='img-grid'>
                        {gallery.objects.map(art => {
                            return (
                                <ArtImageTitle key={art.id} art={art}></ArtImageTitle>
                            )
                        })}
                    </div>
                    
                </Route>

                <Route path={`${url}/art/:artId`}>
                    <ArtDescription arts={gallery.objects}></ArtDescription>
                </Route>
            </Switch>
            
        </>
    )
}   

export default GalleryView