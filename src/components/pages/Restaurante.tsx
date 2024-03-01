import { Card, Input, Textarea, Typography } from "@material-tailwind/react";
import RowTable from "../compo/rowTable";
import NotificationToast from "../compo/notification";
import { AuthData } from "../../provider/authProvider";
import { AuthProviderType } from "../../@types/authTypes";
import { useNavigate } from "react-router-dom";
import { RenderInfo } from "../structure/RenderNavigation";
import { createHotel, createRest, deleteHotel, deleteRest, updateHotel, updateRest } from "../lib/api";

export const Restaurante = () => {
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
    {name:"ciudad",extra:"none",type: "text"},
    {name:"nombre",extra:"none",type: "text"},
    {name:"categoria",extra:"none",type: "text"},
    {name:"especialidad",extra:"none",type: "text"},
    {name:"tipoDeServicio",extra:"none",type: "text"},
    {name:"horarioDeAtencion",extra:"time",type: "text"},
    {name:"direccion",extra:"none",type:"text"},
    {name:"telefonoReserva",extra:"tel",type:"text"},
    {name:"telefonoRecepcion",extra:"tel",type:"text"},
    {name:"precioCarta",extra:"sol",type:"number"},
    {name:"precioMenu",extra:"sol",type:"number"},
    { name: "fichaTecnica", extra: "link", type: "text" },
    { name: "pdfProveedor", extra: "link", type: "text" },
  ]

  const baseColumnsV = [
    {name:"ciudad",extra:"none",type: "text"},
    {name:"nombre",extra:"none",type: "text"},
    {name:"categoria",extra:"none",type: "text"},
    {name:"especialidad",extra:"none",type: "text"},
    {name:"tipoDeServicio",extra:"none",type: "text"},
    {name:"horarioDeAtencion",extra:"time",type: "text"},
    {name:"direccion",extra:"none",type:"text"},
    {name:"telefonoReserva",extra:"tel",type:"text"},
    {name:"telefonoRecepcion",extra:"tel",type:"text"},
    {name:"precioCarta",extra:"sol",type:"number"},
    {name:"precioMenu",extra:"sol",type:"number"},
    { name: "fichaTecnica", extra: "link", type: "text" },
    // { name: "pdfProveedor", extra: "link", type: "text" },
  ]


  return (
    <div>
      <Typography>
        RESTAURANTE
      </Typography>
      {/* <Input type={"number"} onChange={(e)=>setCurrencyRate(Number(e.target.value))}/> */}
      <NotificationToast />
      <RowTable baseColumns={user.role == "Operaciones" ? baseColumns : baseColumnsV} user={user} permission={user.role == "Operaciones" ? true : false} url={`${import.meta.env.VITE_URL_BACK}/apiCrud/restaurantes/restaurante/`} methods={{ create: createRest, update: updateRest, delete: deleteRest }} />
    </div>
  );
}
