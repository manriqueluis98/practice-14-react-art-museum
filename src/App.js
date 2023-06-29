import harvardArt from "./data/hardvardArt";
import GalleryNavigation  from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

import { Route, Switch } from "react-router-dom";

function App() {
  console.log(harvardArt)
  return (
    <>
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records} />

      <Switch>
        <Route exact path='/'>
          <h2>Hardvart Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>

        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records}></GalleryView>
        </Route>

        <Route >
          <h2>Page Not found</h2>
        </Route>
      </Switch>

      

    </>
    
  );
}

export default App;
