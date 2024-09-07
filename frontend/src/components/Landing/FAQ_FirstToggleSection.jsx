import React from "react";
import FAQToggleItem from "./FAQToggleItem";

function FAQ_FirstToggleSection({activeId, toggleItem}) {

  const faqItems = [
    {
      id: "1-toggle",
      title: "Does using dewabit cost anything?",
      text: "It depends on how many active listings you have on eBay. For private sellers with up to 20 active listings, the usage is completely free. If you have more than 20 active listings, you will need to choose an affordable plan after the trial period to continue using dewabit.",
    },
    {
      id: "2-toggle",
      title: "What are considered active listings?",
      text: "It depends on how many active listings you have on eBay. For private sellers with up to 20 active listings, the usage is completely free. If you have more than 20 active listings, you will need to choose an affordable plan after the trial period to continue using dewabit.",
    },
    {
      id: "3-toggle",
      title: "What happens if I exceed the maximum number of active listings?",
      text: "If you exceed the maximum number of active listings...",
    },
    {
      id: "4-toggle",
      title: "Are there any hidden costs or surprises at the end of the month?",
      text: "There are no additional or hidden costs...",
    },
    {
      id: "5-toggle",
      title: "Am I bound to a contract?",
      text: "If you decide to subscribe to a paid plan after the trial period...",
    },
  ];

  return (
    <div className="col-lg-6 mb-5">
    <h4>Prices and Plans</h4>
    {faqItems.map(item => (
      <FAQToggleItem
            id={item.id}
            title={item.title}
            text={item.text}
            isActive={activeId === item.id}
            onClick={() => toggleItem(item.id)}
          />
    ))}
    </div>
  );
}

export default FAQ_FirstToggleSection;
