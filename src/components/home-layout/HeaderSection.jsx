import Button from '../ui/Button';

export default function HeaderSection() {
  const records = [
    { number: '300+', title: 'Unique Style' },
    { number: '200+', title: 'Project Finished' },
    { number: '500+', title: 'Happy Customer' },
  ];

  return (
    <header className='h-[100vh] w-full bg-[url("/main-images/home-hero.png")] lg:bg-cover mix-blend-color-dodge flex items-center justify-start bg-[100% 10%] bg-no-repeat'>
      <div className='container flex flex-col gap-5 flex-wrap'>
        <h1 className='h1 w-full lg:w-1/2'>
          Let your mind&nbsp;<span className='gradient-text'>explore</span> new world
        </h1>
        <p className='w-full lg:w-1/2'>
          Playing electronic games, whether through consoles, computers, mobile&nbsp;phones or another medium
          altogether. Gaming is a nuanced term&nbsp;that suggests regular gameplay, possibly as a hobby.
        </p>
        <div className='flex gap-5'>
          <Button btnStyle='fill' btnText='Buy Now' />
          <Button btnStyle='outline' btnText='Play Now' />
        </div>
        <div className='flex gap-8 mt-12 justify-start'>
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
