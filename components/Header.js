import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          {/* logo */}
          <Link href={'/'} className='p-0 m-0'>
            <h1 className='h1 text-[18px] xl:text-[25px] pt-5 text-center pb-0'>
              Riki Muhammad <span className='text-slate-300 font-light'>Nurhidayat</span>
            </h1>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
