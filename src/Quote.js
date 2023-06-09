import React from "react";
import axios from "axios";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        let i = Math.floor(Math.random() * 1643);
        let { text, author } = response.data[i];
        if (!author) author = "unknown";
        this.setState({ quote: text, author: author });
      })
      .catch((error) => console.log("Error ->", error));
  };

  render() {
    const { quote, author } = this.state;
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div id="text">{quote}</div>
          <div id="author">{author}</div>
          <div id="buttons">
            <button id="new-quote" onClick={this.fetchQuote}>
              <span>New Quote</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
