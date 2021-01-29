import React from "react";

class Pokecard extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.obj.name} </h1>
        <img src={this.props.obj.sprites.front_default} alt="pokemon" />
        <img src={this.props.obj.sprites.front_shiny} alt="pokemon" />
        <a href={this.props.obj.video}>See video</a>
      </div>
    );
  }
}

export default Pokecard;
