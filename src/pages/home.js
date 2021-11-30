import React from "react";
import Meta from "./../components/Meta";
import NewsletterSection from "./../components/NewsletterSection";

function HomePage(props) {
  return (
    <>
      <Meta title="Home" />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default HomePage;
