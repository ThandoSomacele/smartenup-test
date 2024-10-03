import Button from '../ui/Button';
import NavBar from './NavBar';

export default function HeaderSection() {
  const records = [
    { number: '300+', title: 'Unique Style' },
    { number: '200+', title: 'Project Finished' },
    { number: '500+', title: 'Happy Customer' },
  ];

  return (
    <header className='hero-bg-lg hero-bg-sm'>
      <NavBar />
      <div className='container flex flex-col gap-5 h-[90vh] max-h-[720px] md:max-h-[1000px] items-start lg:justify-center'>
        <h1 className='h1 w-full lg:w-1/2'>
          Let your mind&nbsp;<span className='gradient-text'>explore</span> new world
        </h1>
        <p className='w-full lg:w-1/2 text-sm lg:text-lg'>
          Playing electronic games, whether through consoles, computers, mobile&nbsp;phones or another medium
          altogether. Gaming is a nuanced term&nbsp;that suggests regular gameplay, possibly as a hobby.
        </p>
        <div className='lg:flex gap-5 hidden'>
          <Button btnStyle='fill' btnText='Buy Now' />
          <Button btnStyle='outline' btnText='Play Now' />
        </div>
        <div className='lg:flex gap-8 mt-12 justify-start hidden'>
          {records.map(record => (
            <div key={record.title} className='text-center'>
              {record.number.includes('200') ? (
                <p className='h2 gradient-text'>{record.number}</p>
              ) : (
                <p className='h2'>{record.number}</p>
              )}
              <p>{record.title}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
