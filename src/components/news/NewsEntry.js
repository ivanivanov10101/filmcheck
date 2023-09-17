import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Footer from "../footer/Footer";
import Header from "../Header";
import {TYPES, DETAILS} from "../../context/types/MovieTypes";
import NewsContext from "../../context/NewsContext";
import NewsBody from "./NewsBody";

const NewsEntry = () => {
  const {newsData, dispatch} = useContext(NewsContext);
  const {details} = newsData;
  const {id} = useParams();
  useEffect(()=>{
    dispatch({type: DETAILS, payload: id});
    dispatch({type: TYPES, payload: id });
    window.scrollTo(0, 0);
  },[dispatch, id]);
  return <>
    <Helmet>
      <title>{details.name}</title>
    </Helmet>
    <Header
      image={details.bigImage}>
    </Header>
    <NewsBody details={details}/>
    <Footer/>
  </>
}

export default NewsEntry;
