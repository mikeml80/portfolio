"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, ChartNoAxesCombined, Check, ChevronRight, Code2, ExternalLink, Github, Handshake, Heart, Mail, Menu, Puzzle, Sparkles, Target, X, CarFront, CalendarClock, Castle, Layers3, Download, FileText } from "lucide-react";
import Visual from "./visual";
import { projects, ui, type Locale, type Project } from "@/lib/projects";
import {site} from "@/lib/site";
import "swiper/css";
import "swiper/css/pagination";
const icons:Record<string,typeof Target> = {car:CarFront,chart:ChartNoAxesCombined,heart:Heart,calendar:CalendarClock,puzzle:Puzzle,castle:Castle};
export default function Showcase({locale}:{locale:Locale}) {
 const router=useRouter(); const copy=ui[locale];
 const [active,setActive]=useState<Project|null>(null);
 const [index,setIndex]=useState(0);
 const [swiper,setSwiper]=useState<SwiperInstance|null>(null);
 const [menuOpen,setMenuOpen]=useState(false);
 useEffect(()=>{document.documentElement.lang=locale},[locale]);
 useEffect(()=>{if(!active)return;function onKey(e:KeyboardEvent){if(e.key==="Escape")setActive(null)} window.addEventListener("keydown",onKey);document.body.style.overflow="hidden";return()=>{window.removeEventListener("keydown",onKey);document.body.style.overflow=""}},[active]);
 const changeLocale=(next:Locale)=>{router.push(`/${next}`)};
 const pdfUrl=(id:string,kind:"technical"|"business")=>`/downloads/${id === "mathquest" ? "mathquest-arcade" : id}-${kind}-en.pdf`;
 const docs=(id:string)=> <div className="project-documents" onClick={e=>e.stopPropagation()}><a href={pdfUrl(id,"technical")} target="_blank" rel="noopener noreferrer" download><FileText size={16}/>{locale==="en"?"Technical Case Study":"Informe técnico"}<Download size={15}/></a><a href={pdfUrl(id,"business")} target="_blank" rel="noopener noreferrer" download><BriefcaseBusiness size={16}/>{locale==="en"?"Product & Business Brief":"Informe comercial"}<Download size={15}/></a></div>;
 const close=()=>{setActive(null);setSwiper(null);setIndex(0)};
 const open=(p:Project)=>{setActive(p);setIndex(0);setSwiper(null)};
 return <main>
  <header className="site-header"><a className="wordmark" href={`/${locale}`}><span className="brand-mark"><Code2 size={19}/></span><span>MM<span className="wordmark-dot">.</span> <small>PROJECTS</small></span></a>
    <nav className={menuOpen?"header-actions is-open":"header-actions"} aria-label="Navigation">
      <a href="#projects" onClick={()=>setMenuOpen(false)}>{copy.projects}</a>
      {site.email && <a href={`mailto:${site.email}`}>{copy.contact}</a>}
      <div className="language" aria-label="Language"><button className={locale==="en"?"current":""} onClick={()=>changeLocale("en")} aria-pressed={locale==="en"}>EN</button><span>/</span><button className={locale==="es"?"current":""} onClick={()=>changeLocale("es")} aria-pressed={locale==="es"}>ES</button></div>
    </nav>
    <button className="mobile-menu" aria-label="Open menu" onClick={()=>setMenuOpen(!menuOpen)}><Menu/></button>
  </header>
  <section className="hero"><div className="hero-content"><span className="eyebrow"><span className="eyebrow-light"/>{copy.eyebrow}</span><h1>{copy.heroTitle}</h1><p>{copy.heroText}</p><div className="hero-actions"><a className="primary-button" href="#projects">{copy.projects}<ArrowRight size={18}/></a>{site.email && <a className="secondary-button" href={`mailto:${site.email}`}>{copy.contact}<Mail size={16}/></a>}</div></div><div className="hero-art" aria-hidden="true"><div className="hero-grid"/><div className="hero-graphic hero-graphic-one"><Code2/></div><div className="hero-graphic hero-graphic-two"><Puzzle/></div><div className="hero-graphic hero-graphic-three"><ChartNoAxesCombined/></div><div className="hero-center"><Layers3 size={54}/></div><div className="hero-orbit hero-orbit-one"/><div className="hero-orbit hero-orbit-two"/></div></section>
  <section className="intro-strip"><div><BriefcaseBusiness size={22}/><div><strong>{copy.recruiter}</strong><p>{copy.recruiterText}</p></div></div><div><Handshake size={22}/><div><strong>{copy.sponsor}</strong><p>{copy.sponsorText}</p></div></div></section>
  <section className="projects-section" id="projects"><div className="section-heading"><span className="eyebrow"><Sparkles size={15}/>{copy.eyebrow}</span><h2>{copy.projects}</h2><p>{copy.select}</p></div><div className="project-grid">{projects.map((p,i)=>{const Icon=icons[p.icon]||Code2;return <motion.div key={p.id} className={`project-card-wrap theme-${p.theme}`} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.14}} transition={{delay:(i%3)*.08}}><button className={`project-card theme-${p.theme}`} onClick={()=>open(p)}><div className={`card-preview ${(["gig-goal-tracker", "petinha", "metricforge", "bills-reminder", "mathquest", "career-town"].includes(p.id)) ? "card-preview-real" : ""}`}>
    {(["gig-goal-tracker","petinha","metricforge","bills-reminder","mathquest","career-town"].includes(p.id)) ? <div className={`triple-preview triple-${p.id}`} aria-label={locale === "en" ? `Three project screens of ${p.name}` : `Tres pantallas del proyecto ${p.name}`}>
      {(p.id === "mathquest" ? ["mathquest-tavern.webp","mathquest-character.webp","mathquest-cows.webp"] : p.id === "career-town" ? ["career-town-world.webp","career-town-map.webp","career-town-skill.webp"] : [`${p.id}-left.webp`,`${p.id}-center.webp`,`${p.id}-right.webp`]).map((file,n)=><div key={file} className={`triple-frame triple-frame-${n===0?"left":n===1?"center":"right"}`}><img src={`/images/projects/${file}`} alt={p.id === "mathquest" ? (locale === "en" ? ["Tavern and game hub","Character selection","Cows and Bulls mini-game"][n] : ["Taberna y selección de juegos","Selección de personaje","Minijuego Vaca y Toro"][n]) : (locale === "en" ? `${p.name}, screen ${n+1}` : `${p.name}, pantalla ${n+1}`)} loading="lazy" /></div>)}
    </div> : <><span className="preview-blur preview-blur-a"/><span className="preview-blur preview-blur-b"/><div className="preview-icon"><Icon size={44} strokeWidth={1.5}/></div><span className="preview-bars"><i/><i/><i/><i/></span></>}
  </div><div className="card-content"><span className="category">{p.category[locale]}</span><h3>{p.name}</h3><p>{p.summary[locale]}</p><div className="tags">{p.stack.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div><div className="card-bottom"><span className="status"><i/>{p.status==="prototype"?copy.prototype:copy.status}</span><span className="explore">{copy.explore}<ChevronRight size={17}/></span></div></div></button>{docs(p.id)}</motion.div>})}</div></section>
  <footer><div className="footer-top"><div><strong>{site.owner}</strong><p>{copy.subtitle}</p></div><div className="footer-links">{site.github && <a href={site.github} target="_blank" rel="noopener noreferrer"><Github size={17}/>GitHub</a>}{site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}{site.resume && <a href={site.resume} target="_blank" rel="noopener noreferrer">Resume</a>}{site.email && <a href={`mailto:${site.email}`}><Mail size={17}/>{copy.contact}</a>}</div></div><small>{copy.footer}</small></footer>
  <AnimatePresence>{active && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget)close()}}><motion.section key={active.id} className={`project-modal theme-${active.theme}`} role="dialog" aria-modal="true" aria-label={`${active.name} ${copy.slides}`} initial={{opacity:0,scale:.97,y:14}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.97,y:14}} transition={{duration:.22}}>
    <div className="modal-toolbar"><div className="modal-project"><span className="modal-mini-icon">{(()=>{const Icon=icons[active.icon]||Code2;return <Icon size={21}/>})()}</span><div><strong>{active.name}</strong><small>{active.category[locale]}</small></div></div><div className="modal-top-right"><span className="step-count">{copy.step} {index+1} / {active.slides.length}</span><button className="icon-button" aria-label={copy.close} onClick={close}><X size={20}/></button></div></div>
    <Swiper key={active.id} className="feature-swiper" modules={[Pagination,Keyboard,A11y]} keyboard={{enabled:true,onlyInViewport:false}} pagination={{clickable:true,el:".custom-pagination"}} onSwiper={setSwiper} onSlideChange={s=>setIndex(s.activeIndex)} slidesPerView={1} speed={430}>
      {active.slides.map((slide,i)=><SwiperSlide key={`${active.id}-${i}`}><div className="onboarding-slide"><div className="visual-panel"><Visual type={slide.visual} locale={locale}/></div><div className="slide-copy"><span className="slide-kicker">{String(i+1).padStart(2,"0")} / {String(active.slides.length).padStart(2,"0")}</span><h2>{slide.heading[locale]}</h2><p>{slide.detail[locale]}</p></div></div></SwiperSlide>)}
    </Swiper>
    <div className="modal-nav"><button className="back-button" disabled={index===0} onClick={()=>swiper?.slidePrev()}><ArrowLeft size={18}/>{copy.previous}</button><div className="custom-pagination"/><button className="next-button" onClick={()=>index===active.slides.length-1?close():swiper?.slideNext()}>{index===active.slides.length-1?copy.finish:copy.next}<ArrowRight size={18}/></button></div>
    {docs(active.id)}
    <div className="modal-bottom"><div><span>{copy.audience}</span><strong>{active.audience[locale]}</strong></div><div className="modal-tech"><span>{copy.tech}</span><div>{active.stack.map(x=><em key={x}>{x}</em>)}</div></div>{active.links?.demo && <a href={active.links.demo} target="_blank" rel="noopener noreferrer">Demo <ExternalLink size={15}/></a>}{active.links?.source && <a href={active.links.source} target="_blank" rel="noopener noreferrer">GitHub <ExternalLink size={15}/></a>}</div>
  </motion.section></motion.div>}</AnimatePresence>
 </main>;
}
