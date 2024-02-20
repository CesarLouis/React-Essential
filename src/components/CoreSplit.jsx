import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
export default function CoreSplit() {
  return (
    <section id="core-concepts">
      <h2> Core Concept</h2>
      <div>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </div>
    </section>
  );
}
