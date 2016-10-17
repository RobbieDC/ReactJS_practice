var React = require("react");
var Film = require( "./Film.jsx" );

var FilmList = React.createClass({

  render: function() {
    var filmNodes = this.props.data.map(function(film){
      return (
        <Film filmName={film.filmName} key={film.id}>
          {film.text}
        </Film>
      );
    });
    return (
      <div className="filmList">
        {filmNodes}
      </div>
    );
  }
});

module.exports = FilmList;
