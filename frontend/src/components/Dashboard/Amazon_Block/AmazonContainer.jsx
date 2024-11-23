import React from "react";
import PageTitle from "../PageTitle";

function AmazonContainer({pageTitle}) {
  return (
    <section>
      <PageTitle pageTitle={pageTitle}/>
        <div>
          Temporary unavailable
        </div>
    </section>
  );
}

export default AmazonContainer;
