import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "../../scss/components/_tabs.scss";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { NumericFormat } from "react-number-format";

const MovieTabs = ({ info, cast, crew }) => {

  // let grouped = []
  // grouped = crew?.reduce(function (r, a) {
  //   r[a.job] = r[a.job] || [];
  //   r[a.job].push(a);
  //   return r;
  // }, [])
  let not_available = "Not available"
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
          {/*{grouped &&*/}
          {/*  grouped.map((cast, i) => (*/}
          {/*    <div className="" key={i}>*/}
          {/*      /!*<Link to={`/person/${cast.id}`} className="members__link">*!/*/}
          {/*      {cast &&*/}
          {/*        cast.map((i) => (*/}
          {/*          <span className="members" key={i}>{cast.name}</span>*/}
          {/*        ))*/}
          {/*      }*/}
          {/*        <div*/}
          {/*          data-tooltip-id="my-tooltip"*/}
          {/*          data-tooltip-content={cast.character}*/}
          {/*          className="members"*/}
          {/*        >*/}
          {/*          {cast.name}*/}
          {/*        </div>*/}
          {/*      /!*</Link>*!/*/}
          {/*    </div>*/}
          {/*  ))}*/}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex">
          {" "}
          <span className="members">
            Budget:{" "}
            {info.budget === 0 ? (
              not_available
            ) : (
              <NumericFormat
                value={info.budget}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            )}
          </span>
        </div>
        <div className="flex">
          {" "}
          <span className="members">
            Revenue:{" "}
            {info.revenue === 0 ? (
              not_available
            ) : (
              <NumericFormat
                value={info.revenue}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            )}
          </span>
        </div>
        <div className="flex">
          <span className="members">
            Homepage:{" "}
            {!info.homepage ? (
              not_available
            ) : (
              <Link to={info.homepage} className="members__link">
                {info.homepage}
              </Link>
            )}
          </span>
        </div>
        <div className="flex">
          <span className="members">
            Tagline: {!info.tag ? not_available : info.tag}
          </span>
        </div>
        <div className="flex">
          {" "}
          <span className="members">
            Production Companies:{" "}
            {info.prodcomp
              ? info.prodcomp.map((detail, i) => (
                  <span key={i}>{(i ? ", " : "") + detail.name}</span>
                ))
              : not_available}
          </span>
        </div>
        <div className="flex">
          {" "}
          <span className="members">
            Production Countries:{" "}
            {info.country &&
              info.country.map((detail, i) => (
                <span key={i}>{(i ? ", " : "") + detail.name}</span>
              ))}
          </span>
        </div>
      </TabPanel>
      <Tooltip id="my-tooltip" />
    </Tabs>
  );
};

export default MovieTabs;
