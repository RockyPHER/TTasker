interface PageButtonProps {
    name: string;
    href: string;
}
export function PageButton( {name, href} : PageButtonProps) {
    return (
        <li className="text-black hover:bg-gray-500 cursor-pointer p-3"><a className="p-auto" href={href} >{name}</a></li>
    )
}