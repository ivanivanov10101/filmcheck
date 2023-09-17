import { useContext, useState } from 'react';
import NewsBlock from "./NewsBlock";
import newsContext from "../../context/NewsContext";

const NewsFeed = () => {
    const {
        newsData: { news },
    } = useContext(newsContext);
    const [heading] = useState('Film news from around the world');
    return (
        <div className="news">
            <div className="container">
                <div className='news__block'>
                    <h2 className='heading'>{heading}</h2>
                    <div className='row ml-minus-15 mr-minus-15 cl'>
                        {news.map((glr, index) => (
                          <NewsBlock
                            news={glr}
                            key={index}
                          />
                        )).slice(0, 8)}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewsFeed;
