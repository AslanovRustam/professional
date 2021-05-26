import HeaderComponent from "./components/header/header";
import MainSection from "./components/main/main";
import Form from "./components/request/request";
import Footer from "./components/footer/footer";
import OptionsNew from "./components/optionsNew/optionsNew";

function App() {
  return (
    <>
      <HeaderComponent />
      <MainSection />
      <OptionsNew />
      <Form />
      <Footer />
    </>
  );
}

export default App;
