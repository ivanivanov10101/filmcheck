import {Helmet} from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/footer/Footer";
import ProfileBody from "../components/ProfileBody";

const Profile = () => {

  return <>
    <Helmet>
      <title>{'Ivan Ivanov'}</title>
    </Helmet>
    <Header>
    </Header>
    <ProfileBody/>
    <Footer/>
  </>
}

export default Profile;
