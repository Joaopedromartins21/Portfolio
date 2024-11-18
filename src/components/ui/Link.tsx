import { Link, LinkProps, useLocation } from "react-router-dom";

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps){
    const { pathname } = useLocation()

    return (
        <Link data-current={pathname === props.to} className="hover:border-green hover:border-b-4 transition-all data-[current=true]:border-green data-[current=true]:border-b-4" {...props} />
    )
}