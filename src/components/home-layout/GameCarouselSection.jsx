import Button from '../ui/Button';
import gameImg1 from '/games-images/game-1.png';
import gameImg2 from '/games-images/game-2.png';
import gameImg3 from '/games-images/game-3.png';

// Game card elements

import topBorderElement from '/games-images/card-elements/top-border-element.svg';
import leftBorderElement from '/games-images/card-elements/left-border-element.svg';
import rightBorderElement from '/games-images/card-elements/right-border-element.svg';

export default function GameCarouselSection() {
  const records = [
    { number: '300+', title: 'Unique Style' },
    { number: '200+', title: 'Project Finished' },
    { number: '500+', title: 'Happy Customer' },
  ];

  return (
    <div className='flex items-center flex-col text-center pt-10 lg:pt-32 pb-24 gap-16 p-'>
      <div className='lg:w-[52%] flex items-center flex-col gap-4 md:px-16 lg:px-24'>
        <div className='flex lg:hidden gap-5 '>
          <Button btnStyle='fill' btnText='Buy Now' />
          <Button btnStyle='outline' btnText='Play Now' />
        </div>
        <div className='flex lg:hidden gap-8 mt-4 mb-10 justify-start'>
          {records.map(record => (
            <div key={record.title} className='text-center'>
              {record.number.includes('200') ? (
                <p className='h2 gradient-text'>{record.number}</p>
              ) : (
                <p className='h2 text-[13px]'>{record.number}</p>
              )}
              <p className='text-[13px]'>{record.title}</p>
            </div>
          ))}
        </div>
        <h2 className='h1'>
          Choose Your <span className='gradient-text'>Favorite</span>&nbsp;Games
        </h2>
        <p>
          Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about
          release.
        </p>
      </div>
      <div className='flex justify-between gap-x-10 w-full'>
        <img src={gameImg1} className='w-1/4 object-contain' alt={`Game 1 image`} />
        {/* ---  Active Image Element --- */}

        {/* --- Tried my best here if I had a bit more time and also access to group elements --- */}
        <div className='w-2/4 bg-[url("/games-images/card-elements/game-card-bg.png")] p-[1%] relative'>
          <img src={topBorderElement} className='absolute -top-[2%] right-[54%] translate-x-[50%]' />
          <img src={leftBorderElement} className='absolute bottom-[49%] -left-[1.5%] translate-y-[50%]' />
          <img src={rightBorderElement} className='absolute bottom-[50%] -right-[2%] translate-y-[50%]' />
          {/* --- Main Image --- */}
          <img src={gameImg2} className='w-full' alt={`Game 3 image`} />
          <div className='absolute bottom-0 right-[49.6%] translate-x-[50%] gradient-bg py-2 px-12'>
            <p className='text-[28.06px] font-extrabold uppercase'>sneak peeks</p>
          </div>
        </div>
        <img src={gameImg3} className='w-1/4 object-contain' alt={`Game 3 image`} />
      </div>
      <div className='flex gap-5 px-8 md:px-16 lg:px-24'>
        <Button btnStyle='fill' btnText='View All' />
        <Button btnStyle='outline' btnText='Play Now' />
      </div>
    </div>
  );
}
