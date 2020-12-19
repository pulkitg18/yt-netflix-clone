import React from "react";
import { Home } from "./pages";
import { Footer, Header, Signin, Signup } from "./components/index";
import { BrowserRouter as Router } from "react-router-dom";
import Browse from "./pages/Browse";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./context/AuthListener";
function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath="/browse" path="/signin" exact>
        <Header show={false}>
          <Signin />
        </Header>
        <Footer />
      </IsUserRedirect>

      <IsUserRedirect user={user} loggedInPath="/browse" path="/signup" exact>
        <Header show={false}>
          <Signup />
        </Header>
        <Footer />
      </IsUserRedirect>

      <ProtectedRoute user={user} path="/browse" exact>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect user={user} loggedInPath="/browse" path="/" exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}

export default App;
