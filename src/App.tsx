import Content from "./components/Content";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
