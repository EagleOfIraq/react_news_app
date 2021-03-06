import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class Todos extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            inputValue: 'hello '
        };
    }

    oninputchange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    onkeyup(event) {
        let articles = this.state.articles;
        if (event.key === 'Enter') {
            articles.push({
                title: this.state.inputValue,
                time: new Date().getTime(),
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A distinctio esse eveniet excepturi expedita illo laboriosam quia',
            });
            this.setState({
                articles: articles,
                inputValue: ''
            });
        }
    }

    render() {
        return (
            <div className="container">
                <input type="text" value={this.state.inputValue} onKeyUp={this.onkeyup.bind(this)}
                       onChange={this.oninputchange.bind(this)}/>
                {
                    this.state.articles.map((article, i) => {
                        return (
                            <article id={i}>
                                <img width="124" height="124"
                                     src={'https://picsum.photos/20' + i + '/200'}/>
                                <div id="text"><h1>{article.title}</h1>
                                    <p>{article.text} </p>
                                    <time> {article.time} </time>
                                </div>
                                <div id="voter"><img width="13" height="13"/>
                                    <div id="counter1">0</div>
                                    <img width="13" height="13"/>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        );
    }
}
function App() {
    return (
        <Todos/>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))
