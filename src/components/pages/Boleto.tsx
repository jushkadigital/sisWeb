import { Card, Input, Textarea, Typography } from "@material-tailwind/react";
import RowTable from "../compo/rowTable"; import NotificationToast from "../compo/notification";
import { AuthData } from "../../provider/authProvider";
import { AuthProviderType } from "../../@types/authTypes";
import { useNavigate } from "react-router-dom";
import { RenderInfo } from "../structure/RenderNavigation";
import { createBoleto, createHotel, createRest, deleteBoleto, deleteHotel, deleteRest, updateBoleto, updateHotel, updateRest } from "../lib/api";
import Title from "../compo/title/Title.tsx";

export const Boleto = ({isOpen}:{isOpen:boolean}) => {
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


        // fields = ['id','ciudad','servicio','pppAdulto','ppeAdulto','pppNinio','ppeNinio','pppInfante','ppeInfante','estudinateP','estudianteE']
  const baseColumns = [
    {name:"ciudad",extra:"none",type: "text"},
    {name:"servicio",extra:"none",type: "text"},
    {name:"adultop",extra:"sol",type:"number"},
    {name:"adultoe",extra:"dolar",type:"number"},
    {name:"niniop",extra:"sol",type:"number"},
    {name:"ninioe",extra:"dolar",type:"number"},
    {name:"infantep",extra:"sol",type:"number"},
    {name:"infantee",extra:"dolar",type:"number"},
    {name:"estudiantePeruano",extra:"sol",type:"number"},
    {name:"estudianteExtranjero",extra:"dolar",type:"number"},
  ]
   const baseColumnsO = [
    {name:"ciudad",extra:"none",type: "text"},
    {name:"servicio",extra:"none",type: "text"},
    {name:"adultop",extra:"sol",type:"number"},
    // {name:"adultoe",extra:"dolar",type:"number"},
    {name:"niniop",extra:"sol",type:"number"},
    // {name:"ninioe",extra:"dolar",type:"number"},
    {name:"infantep",extra:"sol",type:"number"},
    // {name:"infantee",extra:"dolar",type:"number"},
    {name:"estudiantePeruano",extra:"sol",type:"number"},
    {name:"estudianteExtranjero",extra:"dolar",type:"number"},
  ]
const baseColumnsV = [
    {name:"ciudad",extra:"none",type: "text"},
    {name:"servicio",extra:"none",type: "text"},
    {name:"adultop",extra:"sol",type:"number"},
    {name:"adultoe",extra:"dolar",type:"number"},
    {name:"niniop",extra:"sol",type:"number"},
    {name:"ninioe",extra:"dolar",type:"number"},
    {name:"infantep",extra:"sol",type:"number"},
    {name:"infantee",extra:"dolar",type:"number"},
  ]
   const roles:{[key:string]:any} = {
    "Operaciones":baseColumnsO,
    "Ventas":baseColumnsV,
    "Administrator":baseColumns
  }

  const permisos:{[key:string]:boolean} = {
    "Operaciones":false,
    "Ventas": false,
    "Administrator":true
  }


  return (
    <div className={`mt-[170px] ml-3 transition ease-in-out delay-100  ${isOpen ? "translate-x-[300px]":""}`}>
      <Typography >
        <Title title={"BOLETOS"} />
      </Typography>
      {/* <Input type={"number"} onChange={(e)=>setCurrencyRate(Number(e.target.value))}/> */}
      <NotificationToast />
      {/* <RowTable baseColumns={user.role == "Operaciones" ? baseColumns : baseColumnsV} user={user} permission={user.role == "Operaciones" ? true : false} url={`${import.meta.env.VITE_URL_BACK}/apiCrud/boletos/boleto/`} methods={{ create: createBoleto, update: updateBoleto, delete: deleteBoleto }} /> */}
      <RowTable baseColumns={user.role == "Administrator" ? roles[roleMode] : roles[user.role]} user={user} permission={user.role == "Administrator" ? permisos[roleMode]: permisos[user.role]} url={`${import.meta.env.VITE_URL_BACK}/apiCrud/boletos/boleto/`} />
    </div>
  );
}
