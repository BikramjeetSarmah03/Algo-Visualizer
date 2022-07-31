import { Footer, Header, Visualizer } from "./components/layout";

function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Visualizer />
      </main>
      <Footer />
    </>
  );
}

export default App;
