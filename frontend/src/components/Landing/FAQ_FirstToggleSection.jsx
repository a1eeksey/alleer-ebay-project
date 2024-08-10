import React from "react";
import FAQToggleItem from "./FAQToggleItem";

function FAQ_FirstToggleSection() {
  return (
        <div className="col-lg-6 mb-5">
          <h4>Prices and Plans</h4>
            <FAQToggleItem id="1-toggle" title="Does using dewabit cost anything?" text="It depends on how many active listings you have on eBay. For private sellers with up to 20 active listings, the usage is completely free. If you have more than 20 active listings, you will need to choose an affordable plan after the trial period to continue using dewabit."/>
            <FAQToggleItem id="2-toggle" title="What are considered active listings?" text="Active listings are the listings that are currently live on eBay. The time period doesn't matter. For example, as a private seller, you could have 20 auctions with a duration of 7 days each. After the 7 days expire, you could list another 20 items."/>
            <FAQToggleItem id="3-toggle" title="What happens if I exceed the maximum number of active listings?" text="If you exceed the maximum number of active listings, you will receive a warning message. You will then have 48 hours to reduce the number of active listings. If the number does not decrease after 48 hours, your account will be temporarily deactivated until the number of active listings is within your plan limit. To prevent deactivation, you have the option to upgrade to a higher plan. Don't worry, there is no automatic plan upgrade."/>
            <FAQToggleItem id="4-toggle" title="Are there any hidden costs or surprises at the end of the month?" text="There are no additional or hidden costs. There are no transaction fees or other limits. You only pay the base fee for your chosen plan, and the 'Private' plan is free of charge."/>
            <FAQToggleItem id="5-toggle" title="Am I bound to a contract?" text="If you decide to subscribe to a paid plan after the trial period, you will pay in advance for the desired period. There is no automatic contract renewal. If you no longer want to use dewabit after your subscription expires, you don't need to do anything; your account will be automatically deactivated."/>
          </div>
  );
}

export default FAQ_FirstToggleSection;
