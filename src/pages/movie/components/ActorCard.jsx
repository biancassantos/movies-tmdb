function ActorCard({ imgPath, name }) {
  const pfpUrl = `https://image.tmdb.org/t/p/original${imgPath}`

  return (
    <div className="actor-card">
      <img src={pfpUrl} alt={name} />
      <span>{name}</span>
    </div>
  )
}

export default ActorCard
