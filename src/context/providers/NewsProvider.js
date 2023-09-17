import {useReducer} from "react";
import {newsArticles} from "../../data/news";
import NewsContext from "../NewsContext";
import NewsReducer from "../reducers/NewsReducer";

const NewsProvider = (props) =>{
    const [newsData, dispatch] = useReducer(NewsReducer, {
        news: newsArticles,
        details: {},
    },undefined);
    return (
      <NewsContext.Provider value={{newsData, dispatch }}>
          {props.children}
      </NewsContext.Provider>
    )
}

export default NewsProvider;
