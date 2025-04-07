import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import AppContext from "../../context/AppContext";

import "./App.css";

function App() {
  const [modal, setModal] = useState(null);


  return (
    <AppContext.Provider 
    value={{
      modal,
      setModal
    }}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Modal></Modal>
    </AppContext.Provider>
  );
}

export default App;
