/*
    API
    Get topic information: https://api.khanacademy.org/api/v1/topic/<topic_slug>
    Get topic videos: https://api.khanacademy.org/api/v1/topic/<topic_slug>/videos
*/

let newArticles;

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Something = (function (_super) {
    __extends(Something, _super);
    function Something(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            articles: [],
            articleIds: [],
            articleLimit: 5,
        };
        _this.fetchArticles = _this.fetchArticles.bind(_this);
        return _this;
    }
    Something.prototype.componentDidMount = function () {
        var _this = this;
        var self = this;
        $.ajax({
            url: "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",
            method: "GET",
        }).then(function (articleIds) {
            _this.setState({
                articleIds: articleIds,
            });
        }).then(function () { return self.fetchArticles(); });
        
    };
    Something.prototype.fetchArticles = function () {
        var self = this;
        this.state.articleIds.splice(0, this.state.articleLimit).forEach(function (articleId) {
            $.ajax({
                url: "https://hacker-news.firebaseio.com/v0/item/" + articleId + ".json?print=pretty",
                method: "GET",
            }).then(function (articleDetail) {
                newArticles = self.state.articles.concat([articleDetail]);
                self.setState({
                    articles: newArticles,
                });
            });
        });
    };
    Something.prototype.render = function () {
        var articles = this.state.articles.map(function (article) {
            return (React.createElement("li", { key: article.id },
                React.createElement("h2", null, article.title),
                React.createElement("p", null, article.title[0].toUpperCase()),
                React.createElement("p", null, article.by),
                React.createElement("p", null, article.type),
                React.createElement("p", null, article.score)));
        });
        return (React.createElement("div", null,
            React.createElement("ul", null, articles),
            React.createElement("button", { onClick: this.fetchArticles }, "Load More")));
    };
    return Something;
}(React.Component));
const root = document.getElementById("root");
ReactDOM.render(React.createElement(Something, null), root);
