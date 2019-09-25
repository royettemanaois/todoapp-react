import React from 'react';
import Article from './Article';

class ArticlesGrid extends React.Component {
    state = {
        articles: [],
        isReading: false
    };

    componentDidMount() {
        const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=R48jeMzW9YTA4YywIkWMyGh50o1mQdJ9';
        this.setState({
            isReading: true
        }, () => {
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((response) => {
                    this.setState({
                        articles: this.parse(response),
                        isReading: false
                    })
                    console.log(response)
                })
        })
    }

    parse(results) {
        if (!results || !results.response) {
            return [];
        }
        let articles = results.response.docs;
        let xlArticles = articles.filter(article => article.multimedia.find(this.isXL));
        return xlArticles.map((article) => {
            return {
                id: article._id,
                title: article.headline.main || "Untitled",
                imageURL: article.multimedia.find(this.isXL).url || "#",
                webURL: article.web_url || "#"
            }
        })
    }


    isXL(image) {
        return image.subtype === "xlarge";
    }

    render() {
        return this.state.articles && (
            <div className="articles">
                <p>{this.state.isReading ? "...." : "Done Reading"}</p>
                {this.state.articles.map(article =>
                    (<Article article={article} key={article._id} />)
                )
                }
            </div>)
    }


}

export default ArticlesGrid;