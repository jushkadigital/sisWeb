import { Card, Input, Textarea, Typography } from "@material-tailwind/react";
import RowTable from "../compo/rowTable";
import NotificationToast from "../compo/notification";
import { AuthData } from "../../provider/authProvider";
import { AuthProviderType } from "../../@types/authTypes";
import { useNavigate } from "react-router-dom";
import { createTour, deleteTour, getFicha, updateTour } from "../lib/api";
import Title from "../compo/title/Title.tsx"
import { useEffect } from "react";

export const Tour = () => {
  // const notification = useSWR(
  //   // "https://siswebbackend.pdsviajes.com/apiCrud/tours/tour",
  //   "http://127.0.0.1:8000/apiCrud/notification/notification/",
  //   // fetcher,{ refreshInterval: 1000 }
  //   fetcher
  // );


  const { user, roleMode } = AuthData() as AuthProviderType

  if (!user.isAuthenticated) {
    const ga = useNavigate()
    ga("/login")
  }

  const baseColumns = [
    { name: "ciudad", extra: "none", type: "text" },
    { name: "excursion", extra: "none", type: "text" },
    { name: "provedor", extra: "none", type: "text" },
    { name: "pe", extra: "sol", type: "number" },
    { name: "ppp", extra: "sol", type: "number" },
    { name: "ppe", extra: "dolar", type: "number" },
    { name: "pvp", extra: "sol", type: "number" },
    { name: "pve", extra: "dolar", type: "number" },
    { name: "recomendacionesImagen", extra: "link", type: "text" },
    { name: "fichaTecnica", extra: "link", type: "text" },
    { name: "pdfProveedor", extra: "link", type: "text" },
  ]

  const baseColumnsV = [
    { name: "ciudad", extra: "none", type: "text" },
    { name: "excursion", extra: "none", type: "text" },
    { name: "provedor", extra: "none", type: "text" },
    // {name:"pe",extra:"sol",type:"number"},
    { name: "ppp", extra: "sol", type: "number" },
    { name: "ppe", extra: "dolar", type: "number" },
    { name: "pvp", extra: "sol", type: "number" },
    { name: "pve", extra: "dolar", type: "number" },
    { name: "recomendacionesImagen", extra: "link", type: "text" },
    { name: "fichaTecnica", extra: "link", type: "text" },
  ]


  const roles:{[key:string]:any} = {
    "Operaciones":baseColumns,
    "Ventas":baseColumnsV,
  }

  const permisos:{[key:string]:boolean} = {
    "Operaciones":false,
    "Ventas": false
  }

  console.log(import.meta.env.VITE_URL_BACK)
  console.log(roleMode)
  console.log(user.role)


  // useEffect(()=>{
  //   console.log("role Mod")
  // },[roleMode])

  return (
    <div className={"mt-5 ml-10"}>
      <Typography>
        <Title title={"TOURS"} />
      </Typography>
      <NotificationToast />
      <RowTable baseColumns={user.role == "Administrator" ? roles[roleMode] : roles[user.role]} user={user} permission={permisos[user.role]} url={`${import.meta.env.VITE_URL_BACK}/apiCrud/tours/tour/`} methods={{ create: createTour, update: updateTour, delete: deleteTour }} />
    </div>
  );
}
