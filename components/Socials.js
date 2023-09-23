// links
import Link from 'next/link';

// icons
import {
  RiGithubLine,
  RiLinkedinLine,
  RiGitlabLine,
  RiTwitterLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/estevam5s'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiGitlabLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/estevam-souza/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://twitter.com/estevamSouza199'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Socials;
