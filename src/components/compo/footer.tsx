import { Typography } from "@material-tailwind/react";

export function FooterPDS() {
    return (
        <footer className="w-screen mt-auto  bg-gray-600 p-5 justify-center items-center">
            <hr className="my-1 border-blue-gray-50"/>
            <img src="./logo-pds.svg" alt="logo-ct" className=" mr-4 h-10"/>
            <Typography color="white" className="text-center font-normal font-roboto">
                SISTEMA HECHO POR JUSHKA
            </Typography>
        </footer>
    );
}