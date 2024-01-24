import { useState, useEffect } from 'react';
import Image  from 'next/image';
import bar from '/Icons/bar.svg'

const Header = () => {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    // Set initial viewport width after the component mounts
    setViewportWidth(window.innerWidth);

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const head = ["Home", "About", "Services", "Contact", "Career"];
  const dashboard = ["Admin", "Cpanel", "Change Password", "Forget Account"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='header'>
        <ul className='flex bg-blue-500 p-4 text-white mx-auto myheader'>
          {head.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      
      <div>
        {viewportWidth <= 426 ? (
          <div>
            <div onClick={toggleMenu}>
              <Image className='bar-icon' src={bar} alt='bar'></Image>
            </div>
            {isMenuOpen && (
              <div>
                <ul className='block bg-blue-500 p-4 text-white mx-auto'>
                  {head.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : null}
      </div>

      {/* dashboard */}
      {/* Uncomment the following code if you want to use the dashboard section
      <div>
        <ul className='dashboard'>
          {dashboard.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='w-10/12 content'>
        <h1>Hello! welcome to the London:</h1>
        <p>Hello how are you ?</p>
      </div>
      */}
    </>
  );
};

export default Header;
