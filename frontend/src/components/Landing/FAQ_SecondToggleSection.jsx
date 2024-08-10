import React from "react";
import FAQToggleItem from "./FAQToggleItem";

function FAQ_SecondToggleSection() {
  return (
      <div className="col-lg-6 mb-5">
            <h4>About Your Trial Period</h4>
            
            <FAQToggleItem id="6-toggle" title="What plan am I on during the trial period?" text="During the trial period, you are on the plan, which allows you to test dewabit with all features without restrictions."/>
            <FAQToggleItem id="7-toggle" title="How do I start my trial period?" text="You don't need to make any payment or enter into a binding contract to start your trial period. Simply link your eBay account and download our software. There are no hidden costs."/>
            <FAQToggleItem id="8-toggle" title="What happens after the trial period ends?" text="After your trial period ends, you will automatically switch to the free plan, which allows you to manage up to 20 active listings. If you want to manage more than 20 listings, you will need to choose an affordable plan with more active listings. There is no automatic switch to a paid plan."/>
      </div>
  );
}

export default FAQ_SecondToggleSection;
