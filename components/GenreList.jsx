import React from 'react'
import GenreCard from './GenreCard';

const GenreList = () => {

    const genres = ["Rap", "Pop", "EDM", "Rock", "Hip Hop", "Most Popular"];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-16">
        {genres.map((genre, index) => (
            <GenreCard key={index} genre={genre} />
        ))}
    </div>
  )
}

export default GenreList;