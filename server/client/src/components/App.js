import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
// pages for this product
import MainPage from "./views/MainPage/MainPage.js";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Route exact path="/" component={MainPage} />
    </Suspense>
  );
}

export default App;
