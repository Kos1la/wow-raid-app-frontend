import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className='bg-neutral-900 border-b-2 border-b-red-950 py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-3xl font-bold tracking-tight text-red-500'>
          WowRaid.com
        </Link>
        <div className='md:hidden'>
          <MobileNav />
        </div>
        <div className='hidden md:block'>
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
