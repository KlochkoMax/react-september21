import './App.css';
import {Routes, Route} from "react-router-dom";


import AllUsersPage from "./pages/AllUsers/AllUsersPage";
import AllPostsPage from "./pages/AllPosts/AllPostsPage";
import Header from "./components/Header/Header";
import UserDetails from "./pages/UserDetails/UserDetails";
import PostDetails from "./pages/PostDetails/PostDetails";
import AllUserPosts from "./pages/AllUserPosts/AllUserPosts";
import PostAllComments from "./components/PostAllComments/PostAllComments";

function App() {


  return (
    <div>

        <div>
            <Routes>
              <Route path={'/'} element={<Header/>}>
                  <Route path={'/users'} element={<AllUsersPage/>}>
                      <Route path={'/users/:id'} element={<UserDetails/>}>
                          <Route path={':user_posts'} element={<AllUserPosts/>}/>
                      </Route>
                  </Route>
                  <Route path={'/posts'} element={<AllPostsPage/>}>
                      <Route path={'/posts/:id'} element={<PostDetails/>}>
                          <Route path={':post_comments'} element={<PostAllComments/>}/>
                      </Route>
                  </Route>
              </Route>
            </Routes>
        </div>

    </div>
  );
}

export default App;
