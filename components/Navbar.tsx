import Link from "next/link";
import SignOutButton from "./Authentication/SignOut";
import { useUser } from "../hooks/useUser";
import { useSidebarState } from "../hooks/useSidebar";
import { HamburgerIconElement } from '../public/static/icons';

interface P {
  text?: string;
}

interface ColorInput {
  color: string;
}

const Navbar: React.FC<P> = ({ text }) => {
  const { name } = useUser();
  const { sidebarOpen, setSidebarOpen, windowWidth } = useSidebarState();
  const onSubmit = (data: ColorInput) => {
    console.log(data);
  } 

  return (

    <div className="flex justify-center p-2 shadow-md bg-highlight-secondary mb-2">
      <div className="flex items-center justify-between w-5/6 lg:w-3/4">
        <Link href="/">
            <h1 className="text-white font-serif tracking-wider text-2xl cursor-pointer">Serenime</h1>
        </Link>
          {name && windowWidth >= 768 && <SignOutButton />}
      </div>
      { windowWidth < 768 && <p className="cursor-pointer" onClick={() => { setSidebarOpen(!sidebarOpen) } }>
        { HamburgerIconElement }
      </p> }
    </div>
  );
};

export default Navbar;
