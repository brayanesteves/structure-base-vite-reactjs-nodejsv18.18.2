import { NavLink as NavLinkCustom } from 'react-router-dom';

export const NavLink = ({ to, children, ...props }) => {
    return (
        <NavLinkCustom {...props} className={({isActive}) => {
            return isActive ? 'is-active' : '';
        }} to={to}>{children}</NavLinkCustom>
    );
};