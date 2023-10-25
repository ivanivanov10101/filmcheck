import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "../../scss/components/_tabs.scss";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const MovieTabs = ({ cast, crew }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Cast</Tab>
        <Tab>Crew</Tab>
        <Tab>Details</Tab>
      </TabList>
      <TabPanel>
        <div className="flex">
          {cast &&
            cast.map((cast, i) => (
              <div className="" key={i}>
                <Link to={`/person/${cast.id}`} className="members__link">
                  <div
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={cast.character}
                    className="members"
                  >
                    {cast.name}
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex">
          {crew &&
            crew.map((crew, i) => (
              <div className="" key={i}>
                <Link to={`/person/${crew.id}`} className="members__link">
                  <div className="members">
                    {crew.department}
                    {": "}
                    {crew.name}
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </TabPanel>
      <TabPanel>{/*<h2>{details.details}</h2>*/}</TabPanel>
      <Tooltip id="my-tooltip" />
    </Tabs>
  );
};

export default MovieTabs;
