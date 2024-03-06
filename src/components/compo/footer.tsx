import { Typography } from "@material-tailwind/react";

export function FooterPDS() {
    return (
        <footer className="w-screen static bg-gray-600 p-5 mt-5 mb-0  flex flex-row justify-center items-center">
        {/*<footer className="flex w-full flex-row bg-gray-600 flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">*/}
            <hr className="my-2 border-blue-gray-50"/>
            <img src="/src/assets/logo-pds.svg" alt="logo-ct" className=" mr-4 h-10"/>
            <Typography color="white" className="text-center font-normal font-roboto">
                SISTEMA HECHO POR JUSHKA
            </Typography>
        </footer>
    );
}