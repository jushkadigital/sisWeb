import { Typography } from "@material-tailwind/react";

export function FooterPDS() {
    return (
        <footer className="w-full bg-red-900 p-4 mt-20 flex flex-row justify-center items-center">
            <hr className="my-2 border-blue-gray-50"/>
            <img src="/src/assets/logo-pds.svg" alt="logo-ct" className=" mr-4 h-10"/>
            <Typography color="white" className="text-center font-normal font-roboto">
                SISTEMA HECHO POR JUSHKA
            </Typography>
        </footer>
    );
}