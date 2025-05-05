import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = window;

    // Rotate on scroll
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: 3 },
      {
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );

    // Word animations
    const wordElements = el.querySelectorAll('.word');

    // Fade in
    gsap.fromTo(
      wordElements,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );

    // Blur
    gsap.fromTo(
      wordElements,
      { filter: 'blur(8px)' },
      {
        filter: 'blur(0px)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const splitWords = (sentence) =>
    sentence.split(/(\s+)/).map((word, i) =>
      word.match(/^\s+$/) ? word : <span key={i} className="word">{word}</span>
    );

  return (
    <div className="home-container">
      <div ref={containerRef} className="scroll-reveal">
        <section className="content-section">
          <h3 className="section-title">Who I Am</h3>
          <p className="scroll-reveal-text">{splitWords("Hi I'm Tanaka Mahapa")}</p>
          <p className="scroll-reveal-text">{splitWords("Welcome to my Software Development Journey")}</p>
          <p className="scroll-reveal-text">
            {splitWords("I'm a hands-on software development student at Belgium Campus who geeks out over turning complex problems into elegant solutions.")}
          </p>
        </section>

        <section className="content-section">
          <h3 className="section-title">What I Do</h3>
          <p className="scroll-reveal-text">{splitWords("Breaking (and fixing) code late into the night")}</p>
          <p className="scroll-reveal-text">{splitWords("Approaching challenges with creativity and grit")}</p>
          <p className="scroll-reveal-text">{splitWords("Celebrating small wins in tech")}</p>
        </section>

        <section className="content-section">
          <h3 className="section-title">What I've Built</h3>
          <p className="scroll-reveal-text">{splitWords("Solutions that make people's lives easier")}</p>
          <p className="scroll-reveal-text">{splitWords("Projects with real-world impact")}</p>
          <p className="scroll-reveal-text">
            {splitWords("Skills through late-night study sessions and tricky algorithms")}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
