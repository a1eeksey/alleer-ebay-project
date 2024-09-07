import React from "react";
import FAQToggleItem from "./FAQToggleItem";

function FAQ_SecondToggleSection({activeId, toggleItem}) {

  const faqItems = [
    {
      id: "6-toggle",
      title: "What plan am I on during the trial period?",
      text: "It depends on how many active listings you have on eBay. For private sellers with up to 20 active listings, the usage is completely free. If you have more than 20 active listings, you will need to choose an affordable plan after the trial period to continue using dewabit.",
    },
    {
      id: "7-toggle",
      title: "How do I start my trial period",
      text: "It depends on how many active listings you have on eBay. For private sellers with up to 20 active listings, the usage is completely free. If you have more than 20 active listings, you will need to choose an affordable plan after the trial period to continue using dewabit.",
    },
    {
      id: "8-toggle",
      title: "What happens if I exceed the maximum number of active listings?",
      text: "If you exceed the maximum number of active listings...",
    }
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

export default FAQ_SecondToggleSection;
