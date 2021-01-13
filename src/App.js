import Hero from "./components/Hero";
import FamiliarTopics from "./components/FamiliarTopics";
import RelatedProjects from "./components/RelatedProjects";
import WorkHistory from "./components/WorkHistory";

function App() {
  return (
    <div className="App">
      <Hero />
      <FamiliarTopics />
      {/* <RelatedProjects /> */}
      <WorkHistory />
    </div>
  );
}

export default App;
