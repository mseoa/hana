import { ChangeEvent, useId } from "react";

type Props ={
    label:string;
    type?: string;
    placeholder?: string,
    onChange?:(e:ChangeEvent<HTMLInputElement>)=>void;
    classNames?: string;
}

export default function LabelInput({ label, type='text', placeholder=`${label}...`, onChange=()=>{}}: Props, classNames='') {
const id = useId();
return (<div className='flex'>
<label htmlFor={id} className='w-32'>{label}</label>
<input
  id={id}
  type={type}
  placeholder={placeholder}
  className={`inp ${classNames}`}
    onChange={onChange}
/>
</div>)
}
