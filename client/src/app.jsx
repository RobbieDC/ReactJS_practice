var React = require('react');
var ReactDOM = require('react-dom');
var FilmBox = require('./components/FilmBox')

window.onload = function(){
  ReactDOM.render(
    <h1> ReactJS IMDB </h1>,
    <FilmBox />,
    document.getElementById('app')
  );
}
