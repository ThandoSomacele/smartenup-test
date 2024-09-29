import Button from '../ui/Button';
import gameImg1 from '/games-images/game-1.png';
import gameImg2 from '/games-images/game-2.png';
import gameImg3 from '/games-images/game-3.png';

export default function GameCarouselSection() {
  const games = [gameImg1, gameImg2, gameImg3];

  return (
    <div className='container flex items-center flex-col text-center py-24 gap-16'>
      <div className='w-3/5 flex items-center flex-col gap-4'>
        <h2 className='h1 '>
          Choose Your <span className='gradient-text'>Favorite</span> Games
        </h2>
        <p className='w-4/5'>
          Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about
          release.
        </p>
      </div>
      <div className='flex gap-x-5'>
        {games.map((img, i) => (
          <img key={i} src={img} alt={`Game ${i} image`} />
        ))}
      </div>
      <div className='flex gap-5'>
        <Button btnStyle='fill' btnText='View All' />
        <Button btnStyle='outline' btnText='Play Now' />
      </div>
    </div>
  );
}
