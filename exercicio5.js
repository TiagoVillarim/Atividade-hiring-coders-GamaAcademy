const filmes = [

  {
    id:1,
    title:"back to the future",
    duration:120 
  },
  
  {
    id:2,
    title:"harry potter",
    duration:130
  },

  {
    id:3,
    title:"star wars",
    duration: 200
  }

]

const [{id, title, duration}] = filmes

filmes.map(movie => console.log(movie.id, movie.title, movie.duration))