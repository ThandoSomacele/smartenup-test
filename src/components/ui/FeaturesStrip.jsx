/* eslint-disable react/prop-types */
import starIcon from '/icons/star.svg';

export default function FeaturesStrip({ isTilted, isGrainy }) {
  const features = ['Gaming spaning', 'Action - Packed', 'Mind - Bending', 'Collection Og Games'];

  if (isGrainy && isTilted)
    return (
      <div className='relative overflow-x-clip -mt-[8%] lg:-mt-[1.5%]'>
        {/* --- Tilted Version --- */}
        <span className='flex lg:gap-x-16 lg:w-[200%] -skew-y-2 p-6 backdrop-blur-[5px] before:grainy-bg sliding-skewed-element'>
          {features.map((feature, i) => (
            <span key={i} className='flex lg:gap-x-5 text-sm lg:text-2xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' className='w-5 lg:w-auto object-contain' />
              {feature}
            </span>
          ))}
          {features.map((feature, i) => (
            <span key={i} className='flex lg:gap-x-5 text-sm lg:text-2xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' className='w-5 lg:w-auto object-contain' />
              {feature}
            </span>
          ))}
        </span>
      </div>
    );

  if (!isGrainy && !isTilted)
    return (
      <div className='sliding-container'>
        <div className='relative overflow-x-clip'>
          {/* --- Tilted Version --- */}
          <span className='flex lg:gap-x-16 lg:w-[200%] p-6 sliding-element'>
            {features.map((feature, i) => (
              <span key={i} className='flex lg:gap-x-5 text-sm lg:text-2xl uppercase font-extrabold'>
                <img src={starIcon} width={36} height={36} alt='Star icon' className='w-5 lg:w-auto object-contain' />
                {feature}
              </span>
            ))}
            {features.map((feature, i) => (
              <span key={i} className='flex lg:gap-x-5 text-sm lg:text-2xl uppercase font-extrabold'>
                <img src={starIcon} width={36} height={36} alt='Star icon' className='w-5 lg:w-auto object-contain' />
                {feature}
              </span>
            ))}
          </span>
        </div>
      </div>
    );

  if (isGrainy && !isTilted)
    return (
      <div className='relative overflow-x-clip -mb-[1%]'>
        {/* --- Tilted Version --- */}
        <span className='flex lg:gap-x-16 lg:w-[200%] p-6 backdrop-blur-[5px] before:grainy-bg sliding-element'>
          {features.map((feature, i) => (
            <span key={i} className='flex lg:gap-x-5 text-sm lg:text-2xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' className='w-5 lg:w-auto object-contain' />
              {feature}
            </span>
          ))}
          {features.map((feature, i) => (
            <span key={i} className='flex lg:gap-x-5 text-sm lg:text-2xl uppercase font-extrabold'>
              <img src={starIcon} width={36} height={36} alt='Star icon' className='w-5 lg:w-auto object-contain' />
              {feature}
            </span>
          ))}
        </span>
      </div>
    );
}
