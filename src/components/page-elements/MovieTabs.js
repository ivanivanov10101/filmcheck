import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import '../../scss/components/_tabs.scss';

const MovieTabs = ({details}) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Cast</Tab>
        <Tab>Crew</Tab>
        <Tab>Details</Tab>
        <Tab>Genres</Tab>
      </TabList>
      <TabPanel>
        <h2>{details.actors}</h2>
      </TabPanel>
      <TabPanel>
        <h2>{details.director}</h2>
      </TabPanel>
      <TabPanel>
        <h2>{details.details}</h2>
      </TabPanel>
      <TabPanel>
        <h2>{details.genres}</h2>
      </TabPanel>
    </Tabs>
  );
};

export default MovieTabs;
