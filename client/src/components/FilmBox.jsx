var React = require( "react" );
var FilmList = require( "./FilmList" );

var sampleData = [
  {id: 1, filmName: "Pootie Tang", text: "times"},
  {id: 2, filmName: "Super Troopers", text: "times"}
];

var FilmBox = React.createClass({
  
  getInitialState: function() {
    return {data: sampleData};
  },

  render: function(){
    return (
      <div className="film-box">
        <h2>Films</h2>
        <FilmList data={this.state.data}/>
      </div>
    );
  }

});

module.exports = FilmBox;
