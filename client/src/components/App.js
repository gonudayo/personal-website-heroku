import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
// pages for this product
import MainPage from "./views/MainPage/MainPage.js";
import Footer from "./views/Footer/Footer"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
