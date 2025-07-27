import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiHtml5,
  SiJavascript,
  // SiJest,
  SiNextdotjs,
  // SiNodedotjs,
  SiPhp,
  // SiPrisma,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiLaravel,
  SiCypress,
  SiDocker,
  SiVercel,
} from "react-icons/si";

const size = 25;

export const STACKS: JSX.Element[] = [
  <SiNextdotjs size={size} />, //0. NextJs
  <SiReact size={size} />, //1. Reactjs
  <SiExpress size={size} />, //2. Express
  <BiLogoPostgresql size={size} />, //3. PostgreSQL
  <SiTailwindcss size={size} />, //4. Tailwindcss
  <SiJavascript size={size} />, //5. Javascript
  <SiDocker size={size} />, //6. Docker
  <SiVuedotjs size={size} />, //7. Vuejs
  <SiCypress size={size} />, //8. Cypress
  <SiHtml5 size={size} />, //9. HTML
  <SiCss3 size={size} />, //10. CSS
  <SiJavascript size={size} />, //11. JS
  <SiPhp size={size} />, //12. PHP
  <SiLaravel size={size} />, //13. Laravel
  <SiRedux size={size} />, //14. Redux
  <SiVercel size={size} />, //15. Vercel
  <SiReactrouter size={size} />, //16. ReactRouter
  <SiTypescript size={size} />, //17. Typescript
  <SiFramer size={size} />, //18. Framer
  <SiVite size={size} />, // 19, Vite
];
