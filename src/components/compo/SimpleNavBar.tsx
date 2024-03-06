import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RenderInfo } from "../structure/RenderNavigation.tsx";

function NavList() {
  return (
    <RenderInfo />
  );
}

interface Props {
  action: () => void
}
export function NavbarSimple({ action }: Props) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="max-w-full fixed z-20 lg:px-8 bg-[#D20000]  h-[150px]" >
      <div className="flex flex-row  items-center justify-between text-white">
        <div className="flex flex-row">
          <div className="w-2/12 lg:w-2/12 flex items-center">
            <Bars3Icon className="w-8" onClick={action} />      
          </div>
          <div className={"w-40"}>
            <img className=" max-w-32 max-h-32" src="./logo-pds.svg" />
          </div>
        </div>

        <Typography className={"font-roboto font-bold text-3xl self-center"} children={"SISTEMA DE REGISTRO PDS VIAJES"} />
        <NavList />
      </div>
    </Navbar>
  );
}
