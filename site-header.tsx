import { Link, NavLink } from 'react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { logo, divisions } from '@/data/divisions';
import { useDisclosure } from '@/hooks/use-disclosure';
export function SiteHeader() {
 const menu = useDisclosure();
 return <><div className="topline"><span>HONG KONG BASED. GLOBALLY CONNECTED.</span><a href="mailto:info@antmhk.com">info@antmhk.com <ArrowUpRight size={12}/></a></div><header className="site-header"><Link to="/" className="brand" aria-label="ANTM Hong Kong Limited home"><img src={logo} width="54" height="60" alt="ANTM logo"/><span>ANTM<span className="brand-sub">HONG KONG LIMITED</span></span></Link><nav className="desktop-nav" aria-label="Main navigation"><NavLink to="/" end>Home</NavLink><a href="/#divisions">Our divisions</a><a href="/#approach">Our approach</a><a className="button gold small" href="/#inquiry">Trade inquiry <ArrowUpRight size={15}/></a></nav><button className="menu-toggle" {...menu.triggerProps} aria-label="Toggle navigation">{menu.isOpen ? <X/> : <Menu/>}</button>{menu.isOpen && <nav className="mobile-nav" {...menu.panelProps} aria-label="Mobile navigation"><Link to="/" onClick={menu.close}>Home</Link>{divisions.map(d => <Link key={d.slug} to={'/divisions/'+d.slug} onClick={menu.close}>{d.title}</Link>)}<a href="/#inquiry" onClick={menu.close}>Trade inquiry</a></nav>}</header></>;
}
