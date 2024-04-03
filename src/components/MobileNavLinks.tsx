import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to='/user-orders'
        className='flex text-white items-center font-bold hover:text-red-500'
      >
        My Orders
      </Link>
      <Button
        onClick={() => logout()}
        className='flex bg-red-600 text-white items-center px-3 font-bold hover:bg-neutral-800'
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
