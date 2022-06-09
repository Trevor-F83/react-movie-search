// const MovieDisplay = (props) => {
//     return <h1>Movie Display</h1>
// };

//Above turns into below
//Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
 //You can also destructure your props directly from the parameter list
 const MovieDisplay = ({ movie }) => {
     //The component must return some JSX
     const loaded = () => {
     return (
         <>
         <h1>{movie.Title}</h1>
         <h2>{movie.Genre}</h2>
         <img src={movie.Poster} alt={movie.Title} />
         <h2>{movie.Year}</h2>
         </>
     );
     };
      //function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  //This is basically an "if else" statement
  return movie ? loaded() : loading();

};



export default MovieDisplay; 