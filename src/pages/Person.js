import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import ProfileBody from "../components/ProfileBody";
import { Fragment } from "react";

const Person = () => {
  return (
    <Fragment>
      <Helmet>
        <title>{"Ivan Ivanov"}</title>
      </Helmet>
      <Header></Header>
      <ProfileBody />
      <Footer />
    </Fragment>
  );
};

export default Person;
