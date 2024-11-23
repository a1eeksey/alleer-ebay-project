import React from "react";
import PageTitle from "../PageTitle";

function ComposeContainer({pageTitle}) {
  return (
    <section>
      <PageTitle pageTitle={pageTitle}/>
        <div>
          Temporary unavailable
        </div>
    </section>
  );
}

export default ComposeContainer;
