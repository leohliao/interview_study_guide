/*
    API
    Get topic information: https://api.khanacademy.org/api/v1/topic/<topic_slug>
    Get topic videos: https://api.khanacademy.org/api/v1/topic/<topic_slug>/videos
*/


class Something extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articleIds: [],
      articleLimit: 5,
    }
    
    this.fetchArticles = this.fetchArticles.bind(this);
  }
  
  componentDidMount() {
    const self = this;
    
    $.ajax({
      url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
      method: "GET",
    }).then(
      (articleIds) => {
        this.setState({
          articleIds,
        });
      }
    ).then(
      () => self.fetchArticles();
    );
  }
  
  fetchArticles() {
    const self = this;
    
    this.state.articleIds.splice(0, this.state.articleLimit).forEach(articleId => {
      $.ajax({
        url: `https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`,
        method: "GET",
        }).then(
          (articleDetail) => {
            newArticles = self.state.articles.concat([articleDetail]);
            self.setState({
              articles: newArticles,
            });
          }
        )
      });
    }
  
  render() {
    const articles = this.state.articles.map(article => {
      return (
        <li key={ article.id } >
          <h2>{ article.title }</h2>
          <p>{ article.title[0].toUpperCase() }</p>
          <p>{ article.by }</p>
          <p>{ article.type }</p>
          <p>{ article.score }</p>
        </li>
      );
    });
    
    return (
      <div>
        <ul>
          { articles }
        </ul>
        <button onClick={ this.fetchArticles } >Load More</button>
      </div>
    );
  }
}

ReactDOM.render(
    <Something />,
    document.getElementById('root')
);
