import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.tsx";

import Header from "./components/Header/Header.tsx";
import CoreConcept from "./components/CoreConcept.tsx";
import TabButton from "./components/TabButton.tsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  function handleSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    const example = EXAMPLES[selectedTopic];

    tabContent = (
      <div id="tab-content">
        <h3>{example.title}</h3>
        <p>{example.description}</p>
        <pre>{example.code}</pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>{" "}
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>{" "}
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
