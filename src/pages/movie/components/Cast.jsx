import ActorCard from "./ActorCard"

function Cast({ cast }) {
  return (
    <section id="cast-container">
      <h2>Elenco</h2>
      <div>
        {cast.map(actor => {
          return (
          <ActorCard 
          key={actor.id} 
          imgPath={actor.profile_path} 
          name={actor.name} 
          />
        )})}
      </div>
    </section>
    
  )
}

export default Cast
