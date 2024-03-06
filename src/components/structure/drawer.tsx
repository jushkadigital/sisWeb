import {
  Navbar,
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Radio,
} from "@material-tailwind/react";
import React, { useState } from "react";
// import { MiniNavbar } from "./miniNavBarDash";
import { UserIcon, PlayCircleIcon, ArrowDownTrayIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
// import { usePathname } from "next/navigation";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from "framer-motion";
import { RenderLogout } from "./RenderNavigation";
import { NavbarSimple } from "../compo/SimpleNavBar.tsx";
import { AuthData } from "../../provider/authProvider.tsx";
import { AuthProviderType } from "../../@types/authTypes";
import {FooterPDS} from "../compo/footer.tsx";
import RestaurantIcon from "../../assets/icons/Restaurant.tsx";
import BoletoIcon from "../../assets/icons/Boleto.tsx";
import GuideIcon from "../../assets/icons/Guide.tsx";
import TrainIcon from "../../assets/icons/Train.tsx";
import TransportIcon from "../../assets/icons/Transport.tsx";
import MapIcon from "../../assets/icons/Map.tsx";

// import Link from 'next/link'
const NamesNavbar2URL: { [key: string]: string } = {
  "Cambio": "/cambio",
  "TOURS": "/tours",
  "HOTELES": "/hoteles",
  "RESTAURANTES": "/restaurantes",
  "BOLETOS": "/boletos",
  "TRASLADOS": "/traslados",
  "TRENES": "/trenes",
  "TRANSPORTES": "/transportes",
  "UPSELLINGS": "/upsellings",
  "GUIADOS": "/guiados",
  "Account": "/account",
}

export function NavigationDash({ children }: { children: React.ReactNode }) {

  const { user, roleMode, setRoleMode } = AuthData() as AuthProviderType
  const [open, setOpen] = useState(true);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const toggleDrawer = () => {
    if (open == true) {
      closeDrawer()
    } else {
      openDrawer()
    }
  }

  // const currentPage = usePathnajme();
  const location = useLocation()
  const currentPage = location.pathname
  const currentSlug = (currentPage.split("/").slice(-1))
  console.log(currentPage)
  // console.log(currentSlug)
  const navNameICon = [
    { logo: <MapIcon className="w-5 text-white" />, name: "TOURS" },
    { logo: <BuildingOfficeIcon className="w-5 text-white" />, name: "HOTELES" },
    { logo: <RestaurantIcon className="w-5 text-white" />, name: "RESTAURANTES" },
    { logo: <BoletoIcon className="w-5 text-white" />, name: "BOLETOS" },
    { logo: <TransportIcon className="w-5 text-white" />, name: "TRASLADOS" },
    { logo: <TrainIcon className="w-5 text-white" />, name: "TRENES" },
    { logo: <TransportIcon className="w-5 text-white" />, name: "TRANSPORTES" },
    { logo: <MapIcon className="w-5 text-white" />, name: "UPSELLINGS" },
    { logo: <GuideIcon className="w-5 text-white" />, name: "GUIADOS" }
  ]

  const navNames = navNameICon.map(ele => ele.name)
  const [idxNav, setIdxNav] = useState<number>(navNames.indexOf(currentSlug[0].toUpperCase()))


  const variants: Variants = {
    visible: (custom: number) => ({
      translateY: custom * 55
    })
  }


  const changeRoleMode =(e)=>{
      setRoleMode(e.target.value)
  }

  return (

    <div>
      <NavbarSimple />
      
      <div className="flex flex-row">
        <Drawer open={open} onClose={() => { }} overlay={false} className="top-22  bg-black flex-col items-center justify-center mt-[150px]">
          { user.role == "Administrator" &&

        <div className="">
          <Radio name="rol" label={<Typography color="white" >Operaciones</Typography>} color="red" value="Operaciones" checked={roleMode == "Operaciones"} onChange={changeRoleMode} />
          <Radio name="rol" label={<Typography color="white" >Ventas</Typography>} value="Ventas" checked={roleMode == "Ventas"} color="red" onChange={changeRoleMode}/>
          <Radio name="rol" label={<Typography color="white" >Admin</Typography>} value="Administrator" checked={roleMode == "Administrator"} color="red" onChange={changeRoleMode}/>

        </div> 
      }
          <div className={"flex justify-center mt-3"}>
            <Typography color={"white"} className={"font-bold"} children={"PDS DASHBOARD"} />
          </div>

          {/* <div> */}
          {/*   <Radio name="type" label="HTML" /> */}
          {/*   <Radio name="type" label="React" defaultChecked /> */}
          {/* </div> */}

          <div className="flex flex-row">
            <motion.div custom={idxNav} animate="visible" variants={variants} className="h-7 w-2 bg bg-[#D20000] mt-4"></motion.div>
            <List>
              {navNameICon.map((ele, idx) => (
                <Link to={NamesNavbar2URL[ele.name]}>
                  <ListItem key={idx} onClick={() => setIdxNav(idx)} >
                    <ListItemPrefix >
                      {ele.logo}
                    </ListItemPrefix>
                    <Typography className={"font-roboto"} color={"white"}>
                      {ele.name}
                    </Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>

          <div className={"w-full flex justify-start items-start ml-2"}>
            <RenderLogout />
          </div>
        </Drawer>
        {children}
      </div>


      <FooterPDS />

    </div>
  )
}




