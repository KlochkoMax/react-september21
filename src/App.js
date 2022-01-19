import {Route, Routes} from "react-router-dom";

import Layout from "./components/UsersComponent/Layout/Layout";
import Users from "./pages/UsersPages/Users/Users";
import Posts from "./pages/UsersPages/Posts/Posts";
import Albums from "./pages/UsersPages/Albums/Albums";
import Photos from "./pages/UsersPages/Photos/Photos";


function App() {
  return (
    <div>
        <div>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                <Route path={'/users'} element={<Users/>}>
                    <Route path={':albums'} element={<Albums/>}>
                        <Route path={':photos'} element={<Photos/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<Posts/>}>

                </Route>
              </Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
