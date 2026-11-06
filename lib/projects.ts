export type Locale = "en" | "es";
export type Localized = { en: string; es: string };
export type Slide = { heading: Localized; detail: Localized; visual: string; eyebrow?: Localized };
export type Project = {
  id: string;
  name: string;
  category: Localized;
  summary: Localized;
  audience: Localized;
  icon: string;
  theme: string;
  status: "development" | "prototype";
  stack: string[];
  slides: Slide[];
  links?: { demo?: string; source?: string };
};
const t = (en:string,es:string):Localized=>({en,es});
export const projects:Project[] = [
  {id:"gig-goal-tracker",name:"Gig Goal Tracker",category:t("Gig-work productivity","Productividad gig"),summary:t("Turn everyday deliveries into measurable progress.","Convierte las entregas diarias en progreso medible."),audience:t("Drivers & independent workers","Conductores y trabajadores independientes"),icon:"car",theme:"emerald",status:"development",stack:["Next.js","React","TypeScript","MongoDB"],slides:[
    {heading:t("Make every week count","Haz que cada semana cuente"),detail:t("Set a realistic earnings goal and see exactly how far you have come.","Define una meta de ingresos y descubre cuánto te falta para alcanzarla."),visual:"goal"},
    {heading:t("Record each delivery","Registra cada entrega"),detail:t("Track trips, earnings and cash tips without getting lost in spreadsheets.","Registra viajes, ganancias y propinas en efectivo sin depender de hojas de cálculo."),visual:"trip"},
    {heading:t("Understand your performance","Comprende tu rendimiento"),detail:t("Review work sessions and progress to spot patterns in your routine.","Revisa jornadas y progreso para reconocer patrones en tu trabajo."),visual:"chart"},
    {heading:t("Keep your records organized","Mantén tus registros organizados"),detail:t("A clear history makes it easier to review earnings and prepare for reporting.","Un historial claro ayuda a revisar ganancias y preparar reportes."),visual:"records"},
    {heading:t("Built for real working days","Diseñada para jornadas reales"),detail:t("A practical tool built with Next.js, TypeScript and MongoDB.","Una herramienta práctica construida con Next.js, TypeScript y MongoDB."),visual:"tech"}
  ]},
  {id:"metricforge",name:"MetricForge",category:t("Social analytics SaaS","SaaS de analítica social"),summary:t("Bring social performance into one workspace.","Centraliza el rendimiento social en un solo lugar."),audience:t("Creators, marketers & teams","Creadores, especialistas de marketing y equipos"),icon:"chart",theme:"violet",status:"development",stack:["Next.js","GraphQL","Apollo","MongoDB"],slides:[
    {heading:t("Too many platforms?","¿Demasiadas plataformas?"),detail:t("Social content and metrics are scattered across separate accounts and dashboards.","El contenido y las métricas quedan repartidos entre cuentas y paneles distintos."),visual:"social"},
    {heading:t("One organized workspace","Un espacio de trabajo unificado"),detail:t("Connect the concepts of social accounts, content and metrics in one system.","Integra cuentas sociales, contenido y métricas en un mismo sistema."),visual:"connections"},
    {heading:t("Capture useful snapshots","Registra métricas importantes"),detail:t("Structure performance snapshots so results can be compared over time.","Organiza capturas de rendimiento para comparar resultados a lo largo del tiempo."),visual:"chart"},
    {heading:t("Designed for growth","Diseñado para crecer"),detail:t("Modular data models support an extensible analytics foundation.","Los modelos de datos modulares permiten ampliar la plataforma."),visual:"records"},
    {heading:t("API-first foundations","Base orientada a API"),detail:t("Next.js, GraphQL Yoga, Apollo and MongoDB power the architecture.","Next.js, GraphQL Yoga, Apollo y MongoDB forman su arquitectura."),visual:"tech"}
  ]},
  {id:"petinha",name:"Petinha",category:t("Interactive virtual pet","Mascota virtual interactiva"),summary:t("A playful character with real-time needs.","Una mascota divertida con necesidades dinámicas."),audience:t("Casual players & digital-pet fans","Jugadores casuales y amantes de mascotas virtuales"),icon:"heart",theme:"rose",status:"development",stack:["Phaser 3","TypeScript","NextAuth","MongoDB"],slides:[
    {heading:t("Meet your little companion","Conoce a tu pequeña mascota"),detail:t("Petinha is a virtual pet that responds to everyday care.","Petinha es una mascota virtual que responde a los cuidados cotidianos."),visual:"pet"},
    {heading:t("Every need matters","Cada necesidad importa"),detail:t("Hunger, health, energy and happiness influence the experience.","Hambre, salud, energía y felicidad influyen en la experiencia."),visual:"pet-stats"},
    {heading:t("Interact with the world","Interactúa con el entorno"),detail:t("Move around a room and use objects to care for your pet.","Recorre la habitación y utiliza objetos para cuidar a tu mascota."),visual:"pet-room"},
    {heading:t("Animation brings it to life","La animación le da vida"),detail:t("Sprite-based interactions give the world personality and motion.","Las interacciones mediante sprites aportan movimiento y personalidad."),visual:"pet"},
    {heading:t("Game-engine architecture","Arquitectura con motor de juego"),detail:t("Phaser 3 handles the game world, with authentication and persistence around it.","Phaser 3 gestiona el mundo del juego, junto con autenticación y persistencia."),visual:"tech"}
  ]},
  {id:"bills-reminder",name:"Bills Reminder",category:t("Personal finance utility","Gestión financiera personal"),summary:t("Remember payments before they become problems.","Recuerda tus pagos antes de que se vuelvan un problema."),audience:t("Households & busy professionals","Familias y profesionales ocupados"),icon:"calendar",theme:"amber",status:"development",stack:["Web App","Recurring Bills","Email Alerts"],slides:[
    {heading:t("Bills add up fast","Las facturas se acumulan"),detail:t("Different due dates can turn a simple month into a guessing game.","Distintas fechas de vencimiento pueden complicar la organización mensual."),visual:"bills"},
    {heading:t("See what is coming","Anticipa los vencimientos"),detail:t("Keep upcoming bills and due dates together in one place.","Reúne próximas facturas y fechas de vencimiento en un solo lugar."),visual:"calendar"},
    {heading:t("Get helpful reminders","Recibe recordatorios útiles"),detail:t("Email notifications help bring payment dates to your attention.","Las notificaciones por correo ayudan a recordar las fechas de pago."),visual:"notify"},
    {heading:t("Review the week ahead","Revisa la semana siguiente"),detail:t("Weekly summaries make it easier to plan recurring expenses.","Los resúmenes semanales facilitan la planificación de gastos recurrentes."),visual:"records"},
    {heading:t("Designed for clarity","Diseñada para ser sencilla"),detail:t("Practical payment organization without unnecessary complexity.","Organización práctica de pagos sin complejidad innecesaria."),visual:"tech"}
  ]},
  {id:"mathquest",name:"MathQuest Arcade",category:t("Educational game collection","Colección de juegos educativos"),summary:t("Make mathematics and logic feel like an adventure.","Convierte las matemáticas y la lógica en una aventura."),audience:t("Curious learners & casual gamers","Estudiantes curiosos y jugadores casuales"),icon:"puzzle",theme:"sky",status:"development",stack:["React","Phaser 3","TypeScript","Vite"],slides:[
    {heading:t("Welcome to the arcade","Bienvenido al arcade"),detail:t("Enter a playful medieval-inspired hub with mathematical challenges.","Entra en un mundo de inspiración medieval con desafíos matemáticos."),visual:"arcade"},
    {heading:t("Pick a challenge","Elige un desafío"),detail:t("Select a mini-game from the hub and start exploring.","Selecciona un minijuego desde el centro de juegos y comienza a explorar."),visual:"minigames"},
    {heading:t("Think, test, improve","Piensa, prueba y mejora"),detail:t("Cows and Bulls rewards logical deduction and careful choices.","Vaca y Toro premia la deducción lógica y las decisiones cuidadosas."),visual:"numbers"},
    {heading:t("Playful visual language","Un lenguaje visual divertido"),detail:t("Pixel-art environments make familiar exercises feel fresh.","Los escenarios pixel art presentan los ejercicios de una forma diferente."),visual:"arcade"},
    {heading:t("Built for interactive learning","Creado para aprender jugando"),detail:t("React, Phaser 3 and TypeScript support the game experiences.","React, Phaser 3 y TypeScript dan soporte a los minijuegos."),visual:"tech"}
  ]},
  {id:"career-town",name:"Career Town — CV RPG",category:t("Interactive résumé experience","Currículum interactivo RPG"),summary:t("Explore a career instead of reading a list.","Explora una trayectoria en lugar de leer una lista."),audience:t("Recruiters & hiring teams","Reclutadores y equipos de contratación"),icon:"castle",theme:"indigo",status:"prototype",stack:["Phaser 3","Tiled","Pixel Art","TypeScript"],slides:[
    {heading:t("A résumé you can explore","Un currículum que puedes explorar"),detail:t("Career Town reimagines a traditional CV as a navigable game world.","Career Town transforma el CV tradicional en un mundo por recorrer."),visual:"town"},
    {heading:t("Walk through experience","Recorre la experiencia"),detail:t("Buildings represent education, skills, projects and professional information.","Los edificios representan formación, habilidades, proyectos e información profesional."),visual:"town-map"},
    {heading:t("Discover the details","Descubre los detalles"),detail:t("Each destination leads to focused information rather than long text walls.","Cada destino presenta información concreta sin grandes bloques de texto."),visual:"records"},
    {heading:t("A distinct visual identity","Una identidad visual única"),detail:t("Handcrafted pixel-art assets and mapped paths bring the concept together.","Recursos pixel art y caminos diseñados en mapas integran la experiencia."),visual:"town"},
    {heading:t("An experience in progress","Una experiencia en desarrollo"),detail:t("The RPG portfolio is being developed; this showcase provides a quick alternative today.","El portafolio RPG está en desarrollo; este portal ofrece una alternativa sencilla."),visual:"tech"}
  ]}
];
export const ui = {
 en:{subtitle:"Software Engineer · Full-Stack Developer · Creative Technologist", heroTitle:"Ideas brought to life through software.",heroText:"Explore the problems I tackle, the products I design, and the technologies behind them — one story at a time.",eyebrow:"INTERACTIVE PORTFOLIO",projects:"Featured projects",select:"Choose a project to explore its story.",explore:"Explore project",audience:"Designed for",tech:"Technology",back:"All projects",next:"Next",previous:"Back",finish:"Back to projects",step:"Step",status:"In development",prototype:"Concept / in progress",recruiter:"For recruiters",sponsor:"For potential partners",recruiterText:"See product thinking, engineering decisions and the technology used.",sponsorText:"Discover real-world problems, intended audiences and opportunities for collaboration.",footer:"Illustrative product screens and example data. Features described may be in development; demos and source code are linked only when publicly available.",contact:"Contact",contactNote:"Add your professional email and public project links in lib/site.ts before publishing.",close:"Close",viewTech:"Tech stack",learnMore:"Project overview",slides:"Feature walkthrough",skip:"View all projects"},
 es:{subtitle:"Ingeniero de software · Desarrollador full-stack · Tecnólogo creativo",heroTitle:"Ideas que cobran vida mediante software.",heroText:"Explora los problemas que abordo, los productos que diseño y sus tecnologías, una historia a la vez.",eyebrow:"PORTAFOLIO INTERACTIVO",projects:"Proyectos destacados",select:"Elige un proyecto para conocer su historia.",explore:"Explorar proyecto",audience:"Pensado para",tech:"Tecnologías",back:"Todos los proyectos",next:"Siguiente",previous:"Anterior",finish:"Volver a proyectos",step:"Paso",status:"En desarrollo",prototype:"Concepto / en progreso",recruiter:"Para reclutadores",sponsor:"Para posibles socios",recruiterText:"Conoce el enfoque de producto, las decisiones técnicas y las tecnologías utilizadas.",sponsorText:"Descubre problemas reales, públicos objetivo y posibilidades de colaboración.",footer:"Pantallas ilustrativas y datos de ejemplo. Algunas funciones están en desarrollo; las demos y el código solo se enlazan cuando son públicos.",contact:"Contacto",contactNote:"Añade tu correo profesional y enlaces públicos en lib/site.ts antes de publicar.",close:"Cerrar",viewTech:"Stack técnico",learnMore:"Sobre el proyecto",slides:"Presentación de funcionalidades",skip:"Ver todos los proyectos"}
};
