import { Link, NavLink } from "react-router-dom";
import { headerLinks } from "../data";

const Header = () => {
  return (
    <header className="py-5 bg-gray-50 fixed w-full top-0 left-0 z-10 drop-shadow-gray-400">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="text-2xl font-bold">
            Students blog site
          </Link>


          <nav className="flex items-center gap-5">
            {headerLinks.map((el) => (
              <NavLink key={el.id} to={el.to} className={({ isActive }) => isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-900"}>
                {el.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
