import React, { Component } from "react";
import { FaRegUserCircle } from "react-icons/fa";
class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comentarios: ["hola este es un comentario", "hola este es un comentario"]
    };
  }
  newComment(event) {
    const e = event.target.value;
    this.setState({
      comentarios: e
    });
  }
  render() {
    const comentarios = this.state.comentarios;
    return (
      <div>
        {this.state.comentarios.length !== 0 ? (
          <div>
            {this.state.comentarios.map((comment, index) => (
              <div className="media" key={`comment - ${index}`}>
                <FaRegUserCircle
                  className="m-3 "
                  style={{ height: "30px", width: "30px" }}
                />
                <div className="media-body align-self-center">{comment}</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="form-group">
          <input
            type="text"
            onChange={this.newComment.bind(this)}
            className="form-control"
            id="Comentar"
            placeholder="Tu Comentario..."
          />
        </div>
      </div>
    );
  }
}
export default Comments;
