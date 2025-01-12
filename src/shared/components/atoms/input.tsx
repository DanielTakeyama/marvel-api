interface BaseInputInterface{
    type:string;
    name:string;
    placeholder:string;
    className?:string;
}

export default function BaseInput({type, name, placeholder, className}:BaseInputInterface){
    return <input type={type} name={name} placeholder={placeholder} className={className}/>
}