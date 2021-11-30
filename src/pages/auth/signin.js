import React from "react";
import Meta from "./../../components/Meta";
import AuthSection from "./../../components/AuthSection";

function AuthSigninPage(props) {
  return (
    <>
      <Meta title="Auth Signin" />
      <AuthSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        type="signup"
        providers={["google"]}
        afterAuthPath="/characters"
      />
    </>
  );
}

export default AuthSigninPage;
