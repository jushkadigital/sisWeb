import React from "react"
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import type { InputProps } from "@material-tailwind/react";

// A debounced input react componen
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  outlined,
  Width,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
  outlined: string
    Width:string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  // return (
  //     <div className=" bg-white rounded-lg  ">
  //       <Input
  //           variant={"outlined"}
  //           color={"red"}
  //           value={value}
  //           onChange={e => setValue(e.target.value)}
  //           labelProps={{
  //               className: "hidden",
  //           }}
  //           // placeholder="Busqueda"

  //           // icon={<i className="fas fa-heart" />}
  //           icon={<MagnifyingGlassIcon />}
  //           className={"border-0"}
  //       />
  //     </div>
  // )
  return (
    <Input {...props} variant="outlined" containerProps={props.type== "number" ? {className:Width}: {className:"!w-max !min-w-0"}} label={outlined}  color={"red"} icon={!Width && <MagnifyingGlassIcon />} value={value} onChange={e => setValue(e.target.value)} />)
}

export default DebouncedInput
