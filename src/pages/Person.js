import { Helmet } from "react-helmet-async";
import Footer from "../components/footer/Footer";
import {Fragment, useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {getPerson} from "../api/tmbd-data";
import PersonBody from "../components/person/PersonBody";
import SmallHeader from "../components/SmallHeader";

const Person = () => {
  const id = useParams();
  const currentPage = useLocation();

  const [person, setPerson] = useState([])

  const fetchPersonData = async (id) => {
    const person = await getPerson(id.id)
    setPerson(person)
  }

  useEffect(() => {
    fetchPersonData(id)
  }, [id, currentPage]);

  return (
    <Fragment>
      <Helmet>
        <title>{person.name}</title>
      </Helmet>
      <SmallHeader/>
      <PersonBody person={person}/>
      <Footer />
    </Fragment>
  );
};

export default Person;
