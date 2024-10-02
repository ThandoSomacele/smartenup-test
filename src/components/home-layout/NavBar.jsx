import { useState } from 'react';
import basketIcon from '/icons/basket.svg';
import menuIcon from '/icons/menu.svg';
import closeIcon from '/icons/close.svg';

export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState('right-[-100%]');
  const [showBgFilter, setShowBgFilter] = useState('hidden');

  // Navigation Items
  const navItems = [
    { name: 'Products', href: '#' },
    { name: 'Apps & Games', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'About', href: '#' },
  ];

  const handleSidebarNav = () => {
    setShowSidebar(showSidebar === 'right-[-100%]' ? 'right-0' : 'right-[-100%]');
    setShowBgFilter(showBgFilter === 'hidden' ? 'flex' : 'hidden');
  };

  return (
    <nav className='container flex items-start lg:items-center justify-between w-full py-10 relative'>
      {/* --- Logo --- */}
      <a href={'/'}>
        <img src='/asset-images/logo.svg' width='150' height='34' alt='snap logo' className='object-contain' />
      </a>

      {/* --- Navigation Items/Links --- */}
      <ul className='flex flex-col md:flex-row gap-10 bg-[red] lg:bg-transparent absolute lg:relative top-[10vh] lg:top-0 w-2/3 justify-center items-center right-0 py-10 lg:py-0'>
        {/* --- Close Menu Icon --- */}
        <img src={closeIcon} width='32' height='32' className='' />
        {navItems.map((item, i) => (
          <li key={i}>
            <a href={item.href} className='uppercase text-sm lg:text-lg'>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* --- Shopping/Basket Icon --- */}
      <button className='hidden md:block'>
        <img src={basketIcon} />
      </button>

      {/* --- Mobile Hamburger Icon --- */}
      <button>
        <img className='object-contain lg:hidden' src={menuIcon} width='32' height='32' onClick={handleSidebarNav} />
      </button>
    </nav>
  );
}
