import Link from 'next/link';
import { RiInstagramLine, RiGithubLine, RiLinkedinLine, RiMailLine, RiFacebookLine, RiWhatsappLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'mailto:rikimuhammadnurhidayat@gmail.com'} className='hover:text-accent transition-all duration-300' target='blank'>
        <RiMailLine />
      </Link>
      <Link href={'https://github.com/rikimuhammadasli021299'} className='hover:text-accent transition-all duration-300' target='blank'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/rikinurhidayat/'} className='hover:text-accent transition-all duration-300' target='blank'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://wa.me/628562087360'} className='hover:text-accent transition-all duration-300' target='blank'>
        <RiWhatsappLine />
      </Link>
      <Link href={'https://www.instagram.com/nurhidayat.riki/'} target='blank' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100010171321999&mibextid=ZbWKwL'} className='hover:text-accent transition-all duration-300' target='blank'>
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
