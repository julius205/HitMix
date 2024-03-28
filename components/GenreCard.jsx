import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const GenreCard = ({ genre }) => { 
    const searchParams = useSearchParams();
    const selectedGenre = searchParams.get("genre");

    // Prüfen, ob das Genre ausgewählt ist
    const isSelected = genre === selectedGenre;

    return (
        <div className={`bg-${isSelected ? '[#B51D93]' : ''} text-white p-4 rounded-2xl border-2 border-[#B51D93] cursor-pointer`}>
            <Link 
                href={`?genre=${genre}`}
                passHref
            >
                <p className="text-center text-xl">{genre}</p>
            </Link>
        </div>
    );
};

export default GenreCard;
