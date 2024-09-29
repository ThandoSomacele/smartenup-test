import Button from '../ui/Button';
import filter1 from '/filters-images/filter-1.png';
import filter2 from '/filters-images/filter-2.png';
import filter3 from '/filters-images/filter-3.png';
import filter4 from '/filters-images/filter-4.png';
import filter5 from '/filters-images/filter-5.png';
import filter6 from '/filters-images/filter-6.png';

import filterPro1 from '/filters-images/filter-1-profile.png';
import filterPro2 from '/filters-images/filter-2-profile.png';
import filterPro3 from '/filters-images/filter-3-profile.png';
import filterPro4 from '/filters-images/filter-4-profile.png';
import filterPro5 from '/filters-images/filter-5-profile.png';
import filterPro6 from '/filters-images/filter-6-profile.png';

export default function FiltersSection() {
  const filters = [
    {
      img: filter1,
      name: 'core philosophies',
      gamer: { img: filterPro1, name: 'Cameron Williamson', brand: 'Gillette' },
    },
    {
      img: filter2,
      name: 'core philosophies',
      gamer: { img: filterPro2, name: 'Dianne Russell', brand: 'Louis Vuitton' },
    },
    {
      img: filter3,
      name: 'core philosophies',
      gamer: { img: filterPro3, name: 'Jane Cooper', brand: 'MasterCard' },
    },
    {
      img: filter4,
      name: 'core philosophies',
      gamer: { img: filterPro4, name: 'Cody Fisher', brand: 'The Walt Disney Company' },
    },
    {
      img: filter5,
      name: 'core philosophies',
      gamer: { img: filterPro5, name: 'Wade Warren', brand: 'Gillette' },
    },
    {
      img: filter6,
      name: 'core philosophies',
      gamer: { img: filterPro6, name: 'Robert Fox', brand: "L'Oréal" },
    },
  ];

  return (
    <div className='container flex items-center flex-col text-center pb-24 gap-16'>
      <div className='w-3/5 flex items-center flex-col gap-4'>
        <h2 className='h1'>
          Welcome to the top <span className='gradient-text'>games</span>
        </h2>
      </div>
      <div className='flex gap-5'>
        <Button btnStyle='fill' btnText='Newest Games' />
        <Button btnStyle='outline' btnText='Latest Games' />
        <Button btnStyle='outline' btnText='Fight Games' />
        <Button btnStyle='outline' btnText='Sport Games' />
      </div>
      <div className='cards flex gap-x-5 gap-y-10 flex-wrap justify-center text-left'>
        {/* --- Filter Cards --- */}
        {filters.map((filter, i) => (
          <div
            key={i}
            className='flex flex-col gap-5 border card-shadow p-5 rounded-lg shadow-[0px 4px 20px -1px #000]'>
            <img src={filter.img} alt={`${filter.name} filter image`} />
            <h3 className='title capitalize'>{filter.name}</h3>
            {/* --- Gamer Profile --- */}
            <div className='flex gap-x-3 items-center'>
              <img src={filter.gamer.img} className='object-contain' />
              <div className='leading-normal'>
                <p>{filter.gamer.name}</p>
                <p className='text-[10px]'>{filter.gamer.brand}</p>
              </div>
            </div>
            <Button className={'py-[1rem]'} btnStyle='fill' btnText='Live Demo' />
          </div>
        ))}
      </div>
    </div>
  );
}
