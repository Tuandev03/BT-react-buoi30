import React from "react";
import Header from "./components/baiTapThucHanhLayout/Header";
import Item from "./components/baiTapThucHanhLayout/Item";
import Footer from "./components/baiTapThucHanhLayout/Footer";
import Banner from "./components/baiTapThucHanhLayout/Banner";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Item></Item>
      <Footer></Footer>
    </div>
  );
};

export default App;
