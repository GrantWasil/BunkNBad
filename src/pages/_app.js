import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import CharactersPage from "./characters";
import AuthSigninPage from "./auth/signin";
import AuthSignupPage from "./auth/signup";
import ContactPage from "./contact";
import { Switch, Route, Router } from "./../util/router";
import FirebaseActionPage from "./firebase-action";
import NotFoundPage from "./404";
import "./../util/analytics";
import { AuthProvider } from "./../util/auth";
import { ThemeProvider } from "./../util/theme";
import { QueryClientProvider } from "./../util/db";

function App(props) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <>
              <Navbar
                color="default"
                logo="https://uploads.divjoy.com/logo.svg"
                logoInverted="https://uploads.divjoy.com/logo-white.svg"
              />

              <Switch>
                <Route exact path="/" component={IndexPage} />

                <Route exact path="/characters" component={CharactersPage} />

                <Route exact path="/auth/signup" component={AuthSignupPage} />

                <Route exact path="/auth/signin" component={AuthSigninPage} />

                <Route exact path="/contact" component={ContactPage} />

                <Route
                  exact
                  path="/firebase-action"
                  component={FirebaseActionPage}
                />

                <Route component={NotFoundPage} />
              </Switch>
            </>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
