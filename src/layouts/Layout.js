import Head from "next/head";
import ImageView from "../components/popup/ImageView";
import State from "../context/context";
import { useEffect } from "react";
import { dataImage, preloader } from "../utilits";
import { waves } from "../waves";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import PreLoader from "./PreLoader";

const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
    preloader();
    waves();
  }, []);

  return (
    <State>
      <Head>
        <title>dev2023</title>
      </Head>
      <PreLoader />
      <ImageView />
      <div
        className="edrea_tm_all_wrap"
        data-magic-cursor="hide"
        data-enter="fadeInUp"
        data-exit=""
      >
        <div className="waves" />
        <MobileHeader />
        <Header />
        <div className="edrea_tm_content">{children}</div>
      </div>
    </State>
  );
};
export default Layout;
