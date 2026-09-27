import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronDown, Menu, X, Plane, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const navGroups = [
  { label: 'Home', items: [['Overview', 'home']] },
  { label: 'Understand', items: [['What is AIRIX?', 'understand'], ['How it works', 'how-it-works'], ['CPI & airfare', 'cpi'], ['Methodology', 'methodology']] },
  { label: 'Explore', items: [['Data explorer', 'explorer'], ['Route example', 'example'], ['Backtesting', 'backtesting']] },
  { label: 'Learn', items: [['Glossary', 'glossary'], ['Calculators', 'calculator'], ['Visual learning', 'visual-learning']] },
  { label: 'Ecosystem', items: [['Government & institutions', 'ecosystem'], ['Leadership', 'leadership']] },
  { label: 'Technology', items: [['Data sources', 'sources'], ['Limitations', 'limitations']] },
  { label: 'Research', items: [['Methodology', 'methodology'], ['Backtesting', 'backtesting']] },
  { label: 'About', items: [['About AIRIX', 'about']] },
] as const;

export function Brand() { return <span className="brand-lockup"><Plane aria-hidden="true" className="brand-plane" strokeWidth={1.7} /><span><strong>AIRIX</strong><small>Airfare Intelligence Hub</small></span></span>; }
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  return <header className="site-header"><div className="nav-inner">
    <Link to="/" hash="home" className="brand-link" onClick={() => setOpen(false)} aria-label="AIRIX home"><Brand /></Link>
    <span className="nav-tagline">Understand. Explore. Measure.</span>
    <nav className="desktop-nav" aria-label="Main navigation">{navGroups.map(group => group.items.length === 1 ? <a key={group.label} href={`#${group.items[0][1]}`}>{group.label}</a> : <div className="nav-group" key={group.label}><button type="button" aria-haspopup="true" aria-expanded={expanded === group.label} onClick={() => setExpanded(expanded === group.label ? null : group.label)}>{group.label}<ChevronDown size={13} /></button><div className="nav-dropdown">{group.items.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setExpanded(null)}>{label}</a>)}</div></div>)}</nav>
    <Button variant="nav" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navGroups.map(group => <div key={group.label} className="mobile-nav-group"><button type="button" onClick={() => setExpanded(expanded === group.label ? null : group.label)} aria-expanded={expanded === group.label}>{group.label}<ChevronDown size={16} /></button>{expanded === group.label && <div>{group.items.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => { setOpen(false); setExpanded(null); }}>{label}</a>)}</div>}</div>)}</nav>}</header>;
}
export function SectionHeader({ number, eyebrow, title, description }: { number: string; eyebrow?: string; title: string; description?: string }) { return <div className="section-heading"><div className="section-index">{number} / {eyebrow ?? 'AIRIX RESEARCH PORTAL'}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
export function InfoCard({ icon: Icon, title, children, className = '' }: { icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; title: string; children?: React.ReactNode; className?: string }) { return <div className={`info-card ${className}`}><span className="icon-tile"><Icon size={21} strokeWidth={1.8} /></span><h3>{title}</h3>{children && <p>{children}</p>}</div>; }
export function MetricCard({ label, value, note }: { label: string; value: string; note?: string }) { return <div className="metric-card"><span>{label}</span><strong>{value}</strong>{note && <small>{note}</small>}</div>; }
export function ChartCard({ title, children, note }: { title: string; children: React.ReactNode; note?: string }) { return <div className="chart-card"><div className="chart-card-head"><h3>{title}</h3><span>Illustrative data</span></div><div className="chart-frame">{children}</div>{note && <p className="chart-note">{note}</p>}</div>; }
export function SourceLink({ url }: { url: string }) { return url ? <a className="text-link" href={url} target="_blank" rel="noopener noreferrer">Official Website <ArrowUpRight size={14} /></a> : <span className="text-muted-foreground text-xs">Official link to be verified</span>; }
export function Footer() { return <footer className="site-footer"><div className="container footer-grid"><div><Brand /><p>Better Data. Smarter Decisions. A Stronger India.</p><small>Proposed project concept · Not an official Government of India index</small></div><div className="footer-links"><a href="#home">Home</a><a href="#sitemap">Sitemap</a><a href="#privacy">Privacy</a><a href="#contact">Contact</a></div></div><div className="container footer-bottom">© 2026 AIRIX <span>Illustrative research portal</span></div></footer>; }
