import starIcon from '/icons/star.svg';

// eslint-disable-next-line react/prop-types
export default function FeaturesStrip({ isTilted, isGrainy }) {
  const features = ['Gaming spaning', 'Action - Packed', 'Mind - Bending', 'Collection Og Games'];

  return (
    <div className='relative overflow-x-clip -mt-16 '>
      {isTilted && isGrainy ? (
        <span className='flex gap-x-16 w-[200%] -skew-y-2 p-5 backdrop-blur-[5px] before:grainy-bg'>
          {/* --- Tilted Grainy Version --- */}
          {features.map((feature, i) => (
            <span key={i} className='flex gap-x-5 text-3xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' />
              {feature}
            </span>
          ))}
        </span>
      ) : isGrainy ? (
        <span className='flex gap-x-16 w-[200%] -skew-y-2 p-5 backdrop-blur-[5px] before:grainy-bg'>
          {/* --- No Tilt No Grain Version --- */}
          {features.map((feature, i) => (
            <span key={i} className='flex gap-x-5 text-3xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' />
              {feature}
            </span>
          ))}
        </span>
      ) : isTilted ? (
        <span className='flex gap-x-16 w-[200%] -skew-y-2 p-5 backdrop-blur-[5px] before:grainy-bg'>
          {/* --- No Tilt No Grain Version --- */}
          {features.map((feature, i) => (
            <span key={i} className='flex gap-x-5 text-3xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' />
              {feature}
            </span>
          ))}
        </span>
      ) : (
        <span className='flex gap-x-16 w-[200%] -skew-y-2 p-5 backdrop-blur-[5px] before:grainy-bg'>
          {/* --- No Tilt No Grain Version --- */}
          {features.map((feature, i) => (
            <span key={i} className='flex gap-x-5 text-3xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' />
              {feature}
            </span>
          ))}
        </span>
      )}
    </div>
  );
}
