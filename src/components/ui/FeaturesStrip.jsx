/* eslint-disable react/prop-types */
import starIcon from '/icons/star.svg';

export default function FeaturesStrip({ isTilted, isGrainy }) {
  const features = ['Gaming spaning', 'Action - Packed', 'Mind - Bending', 'Collection Og Games'];

  if (isGrainy && isTilted)
    return (
      <div className='relative overflow-x-clip -mt-[1.5%]'>
        {/* --- Tilted Version --- */}
        <span className='flex gap-x-16 w-[200%] -skew-y-2 p-6 backdrop-blur-[5px] before:grainy-bg'>
          {features.map((feature, i) => (
            <span key={i} className='flex gap-x-5 text-3xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' />
              {feature}
            </span>
          ))}
        </span>
      </div>
    );

  if (!isGrainy && !isTilted)
    return (
      <div className='relative overflow-x-clip'>
        {/* --- Tilted Version --- */}
        <span className='flex gap-x-16 w-[200%] p-6'>
          {features.map((feature, i) => (
            <span key={i} className='flex gap-x-5 text-3xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' />
              {feature}
            </span>
          ))}
        </span>
      </div>
    );

  if (isGrainy && !isTilted)
    return (
      <div className='relative overflow-x-clip -mb-[1%]'>
        {/* --- Tilted Version --- */}
        <span className='flex gap-x-16 w-[200%] p-6 backdrop-blur-[5px] before:grainy-bg'>
          {features.map((feature, i) => (
            <span key={i} className='flex gap-x-5 text-3xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' />
              {feature}
            </span>
          ))}
        </span>
      </div>
    );
}
