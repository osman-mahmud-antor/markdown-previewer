import React from "react";
import Badge from "react-bootstrap/Badge";
let marked = require("marked");


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }
  
  render() {

    return (
      <div className="App">
        <div className="container">


          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>




          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center">
                    Enter your HTML
                  </Badge>
                </h4>
              <div className="input"><textarea id="editor" className="input" value={this.state.markdown} onChange={(event) => {this.updateMarkdown(event.target.value);}}></textarea></div>
            </div>
          </div>





            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center">
                    Preview
                  </Badge>
                </h4>
                <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}></div>
              </div>
            </div>



          </div>
        </div>
      </div>
    );
  }
}


export default App;