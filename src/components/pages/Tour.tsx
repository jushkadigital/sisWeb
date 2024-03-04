import { Card, Input, Textarea, Typography } from "@material-tailwind/react";
import RowTable from "../compo/rowTable";
import NotificationToast from "../compo/notification";
import { AuthData } from "../../provider/authProvider";
import { AuthProviderType } from "../../@types/authTypes";
import { useNavigate } from "react-router-dom";
import { createTour, deleteTour, getFicha, updateTour } from "../lib/api";
import Title from "../compo/title/Title.tsx"

export const Tour = () => {
  // const notification = useSWR(
  //   // "https://siswebbackend.pdsviajes.com/apiCrud/tours/tour",
  //   "http://127.0.0.1:8000/apiCrud/notification/notification/",
  //   // fetcher,{ refreshInterval: 1000 }
  //   fetcher
  // );


  const { user, currencyRate } = AuthData() as AuthProviderType

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

  console.log(import.meta.env.VITE_URL_BACK)

  return (
    <div className={"mt-5 ml-10"}>
      <Typography>
        <Title title={"TOURSSSSSSSSSSSSSSSSS"} />
      </Typography>
      <NotificationToast />
      <RowTable baseColumns={user.role == "Operaciones" ? baseColumns : baseColumnsV} user={user} permission={user.role == "Operaciones" ? true : false} url={`${import.meta.env.VITE_URL_BACK}/apiCrud/tours/tour/`} methods={{ create: createTour, update: updateTour, delete: deleteTour }} />
    </div>
  );
}
