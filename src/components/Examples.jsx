import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";

export default function Examples() {
  const [selectedTopic, setselectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    //selected button = "components", "jsx","props","state"
    setselectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  return (
    <Section title="EXAMPLES" id="examples">
      <Tabs
        button={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}>
              State
            </TabButton>
          </>
        }>
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
