import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import Footer from "./components/Footer";
import { usePreferencesStore } from "./store/useStore";

// Below-the-fold bo'limlar lazy-load qilinadi — dastlabki bundle hajmi kichrayadi (Performance)
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const GithubProjects = lazy(() => import("./components/GithubProjects"));
const Certificates = lazy(() => import("./components/Certificates"));
const Blog = lazy(() => import("./components/Blog"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const AITools = lazy(() => import("./components/AITools"));
const Stats = lazy(() => import("./components/Stats"));
const Contact = lazy(() => import("./components/Contact"));

function SectionFallback() {
  return <div className="container-x py-24" aria-hidden="true" />;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const theme = usePreferencesStore((s) => s.theme);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <Projects />
          <GithubProjects />
          <Certificates />
          <Blog />
          <Testimonials />
          <AITools />
          <Stats />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
