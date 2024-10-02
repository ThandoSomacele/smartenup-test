import Button from '../ui/Button';
import gameImg1 from '/games-images/game-1.png';
import gameImg2 from '/games-images/game-2.png';
import gameImg3 from '/games-images/game-3.png';

// Game card elements

import topBorderElement from '/games-images/card-elements/top-border-element.svg';
import leftBorderElement from '/games-images/card-elements/left-border-element.svg';
import rightBorderElement from '/games-images/card-elements/right-border-element.svg';

export default function GameCarouselSection() {
  const games = [gameImg1, gameImg2, gameImg3];

  return (
    <div className='flex items-center flex-col text-center pt-32 pb-24 gap-16 p-'>
      <div className='w-3/5 flex items-center flex-col gap-4 px-8 md:px-16 lg:px-24'>
        <h2 className='h1 '>
          Choose Your <span className='gradient-text'>Favorite</span> Games
        </h2>
        <p className='w-4/5'>
          Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about
          release.
        </p>
      </div>
      <div className='flex justify-between gap-x-10 w-full'>
        <img src={gameImg1} className='object-contain' alt={`Game 1 image`} />
        <div className='bg-[url("/games-images/card-elements/game-card-bg.png")] p-3 relative'>
          <img src={topBorderElement} className='absolute -top-[2%] right-[49.6%] translate-x-1/2' />
          <img src={leftBorderElement} className='absolute bottom-[49%] -left-[1.5%] translate-y-1/2' />
          <img src={rightBorderElement} className='absolute bottom-[50%] -right-[2%] translate-y-1/2' />
          {/* --- Main Image --- */}
          <img src={gameImg2} alt={`Game 3 image`} />
          <div className='absolute bottom-0 right-[49.6%] translate-x-1/2 gradient-bg py-2 px-12'>
            <p className='text-[28.06px] font-extrabold uppercase'>sneak peeks</p>
          </div>
        </div>
        <img src={gameImg3} className='object-contain' alt={`Game 3 image`} />
      </div>
      <div className='flex gap-5 px-8 md:px-16 lg:px-24'>
        <Button btnStyle='fill' btnText='View All' />
        <Button btnStyle='outline' btnText='Play Now' />
      </div>
    </div>
  );
}
