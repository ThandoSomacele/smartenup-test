import logo from '/asset-images/logo.svg';

export default function FooterSection() {
  const footerColumnLinks = [
    {
      title: 'Company',
      navItems: [
        { name: 'products', href: '#' },
        { name: 'apps & games', href: '#' },
        { name: 'features', href: '#' },
      ],
    },
    {
      title: 'help',
      navItems: [
        { name: 'support', href: '#' },
        { name: 'about', href: '#' },
        { name: 'contact us', href: '#' },
      ],
    },
    {
      title: 'resources',
      navItems: [
        { name: 'youtube playlist', href: '#' },
        { name: 'how to - blog', href: '#' },
        { name: 'terms & conditions', href: '#' },
      ],
    },
  ];

  return (
    <div className='bg-[url("/asset-images/footer-bg.png")] w-full bg-cover bg-no-repeat mix-blend-color-dodge'>
      <footer className='container flex flex-wrap pt-36 pb-10 w-full justify-start gap-20 '>
        <div className='flex flex-col w-1/4 space-y-10'>
          <img src={logo} width={195} height={45} className='contain' />
          <p className='text-base'>
            A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant
            colors, and dynamic visuals.
          </p>
        </div>
        {/* --- Footer Nav Columns --- */}
        {footerColumnLinks.map((column, i) => (
          <div key={i} className={`col-${i + 1} flex flex-col space-y-5 text-lg`}>
            <p className='uppercase font-extrabold'>{column.title}</p>
            <ul className='space-y-6'>
              {/* --- Footer Links --- */}
              {column.navItems.map((item, i) => (
                <li key={i}>
                  <a className='capitalize' href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <small>© Copyright 2023, All Rights Reserved by board</small>
      </footer>
    </div>
  );
}
