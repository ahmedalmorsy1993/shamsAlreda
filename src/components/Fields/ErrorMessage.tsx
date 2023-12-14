
export default function ErrorMessage({ errors, name }: { errors: { [key: string]: any } | undefined, name: string }) {
    return (
        <p className={`text-red-500 duration-500 transition-all absolute bottom-[-25px] `}>
            {errors && errors[name] && errors[name]['message']}</p>
    )
}
