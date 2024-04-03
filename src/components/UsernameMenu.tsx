import { useAuth0 } from "@auth0/auth0-react";

import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center px-3 font-bold text-white hover:text-red-500 gap-2 '>
        <CircleUserRound className='text-red-500' />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to='/user-profile' className='fint-bold hover: text-red-500'>
            My Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className='flex flex-1 font-bold bg-red-500'
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;

// import { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { CircleUserRound } from "lucide-react";
// import { Link } from "react-router-dom";
// import {
//   DropdownMenuItem,
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { Separator } from "./ui/separator";
// import { Button } from "./ui/button";

// const UsernameMenu = () => {
//   const { user, logout } = useAuth0();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMenuClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger
//         className='flex items-center px-3 font-bold text-white hover:text-red-500 gap-2'
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <CircleUserRound className='text-red-500' />
//         {user?.email}
//       </DropdownMenuTrigger>
//       {isOpen && (
//         <DropdownMenuContent onClose={handleMenuClose}>
//           <DropdownMenuItem>
//             <Link
//               to='/user-profile'
//               className='fint-bold hover: text-red-500'
//               onClick={handleMenuClose}
//             >
//               My Profile
//             </Link>
//           </DropdownMenuItem>
//           <Separator />
//           <DropdownMenuItem>
//             <Button
//               onClick={() => {
//                 logout();
//                 handleMenuClose();
//               }}
//               className='flex flex-1 font-bold bg-red-500'
//             >
//               Log Out
//             </Button>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       )}
//     </DropdownMenu>
//   );
// };

// export default UsernameMenu;
