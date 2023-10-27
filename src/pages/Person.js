import { Helmet } from "react-helmet-async";
import Footer from "../components/footer/Footer";
import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPerson, getPersonMovies} from "../api/tmbd-data";
import PersonBody from "../components/person/PersonBody";
import SmallHeader from "../components/SmallHeader";

const Person = () => {
  const id = useParams();
  const [person, setPerson] = useState([])
  const [personMovies, setPersonMovies] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchPersonData = async (id) => {
    const person = await getPerson(id.id)
    setPerson(person)
    const movies = await getPersonMovies(id.id)
    setPersonMovies(movies)
    setIsLoaded(true)
  }

  useEffect(() => {
    fetchPersonData(id)
  }, [id]);

  return (
    <Fragment>
      <Helmet>
        <title>{person.name}</title>
      </Helmet>
      <SmallHeader/>
      <PersonBody person={person} movies={personMovies} isLoaded={isLoaded}/>
      <Footer />
    </Fragment>
  );
};

export default Person;
