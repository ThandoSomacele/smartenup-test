import arleneImg from '/testimonials-images/arlene.png';
import kathrynImg from '/testimonials-images/kathryn.png';
import starPlainIcon from '/icons/star-plain.svg';
import verifiedIcon from '/icons/verified.png';
import bookmarIcons from '/icons/bookmark-icon.png';

export default function TestimonialsCarouselSection() {
  const testimonials = [
    {
      text: 'One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.',
      img: arleneImg,
      name: 'Arlene McCoy',
      company: "McDonald's",
    },
    {
      text: "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      img: kathrynImg,
      name: 'Kathryn Murphy',
      company: 'General Electric',
    },
  ];

  return (
    <div className='container py-10'>
      <div className='testimonials flex gap-x-8'>
        {testimonials.map((testimonial, i) => (
          <div key={i} className='flex flex-col gap-5 rounded-lg border p-12 relative'>
            <img src={bookmarIcons} className='w-[100.25px] absolute -top-[13%] right-[5%]' />
            <div className='space-y-2'>
              <div className='flex gap-1'>
                <img src={starPlainIcon} alt='plain star icon' />
                <img src={starPlainIcon} alt='plain star icon' />
                <img src={starPlainIcon} alt='plain star icon' />
                <img src={starPlainIcon} alt='plain star icon' />
                <img src={starPlainIcon} alt='plain star icon' />
              </div>
              <p className='text-[16px]'>{testimonial.text}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <div className='flex gap-x-3 items-center'>
                <img src={testimonial.img} className='w-[60px] object-contain' />
                <div className='leading-relaxed'>
                  <p>{testimonial.name}</p>
                  <p className='text-[10px]'>{testimonial.company}</p>
                </div>
              </div>
              <p className='flex gap-1 text-[14.65px] items-center'>
                <span>
                  <img src={verifiedIcon} className='w-[24.77px]' />
                </span>
                Verifed
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
