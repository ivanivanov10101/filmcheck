import Header from "../components/Header";
import {useState, useContext, useEffect} from 'react';
import { Helmet } from "react-helmet-async";
import Model from "../components/Model";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Movies from "../components/Movies";
import NewsFeed from "../components/news/NewsFeed";
import Footer from "../components/footer/Footer";
import Reviews from "../components/reviews/Reviews";

const Home = () => {
  const {dispatch} = useContext(ModelContext);

  const [state] = useState({
    heading: 'FilmCheck, the social media for film nerds',
    paragraph: 'Join us today! And share your film experiences with other film nerds!'
  })
  const [registerModel] = useState('registerModel');
  const [loginModel] = useState('loginModel');
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>FilmCheck - The Social Media for Film Nerds</title>
        <meta name="description" content="The Social Media for Film Nerds"/>
        <meta name='keywords' content='films, movies, fans, actors'/>
      </Helmet>
      <Header heading={state.heading} paragraph={state.paragraph}>
        <button className="btn-default"  onClick={()=> dispatch({type: OPEN_MODEL, payload: registerModel})}>Register</button>
      </Header>
      <Model current={registerModel}><Register currentModel={loginModel}/> </Model>
      <Model current={loginModel}><Login currentModel={registerModel} /> </Model>
      <Movies/>
      <Reviews/>
      <NewsFeed/>
      <Footer/>
    </>
  )
}

export default Home;
