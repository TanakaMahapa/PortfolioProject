import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HourGlassBackground from './HourGlassBackground';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  // Organized content with three sections
  const content = useMemo(() => ({
    "Who I Am": [
      "Hi I'm Tanaka Mahapa",
      "Welcome to my Software Development Journey",
      "I'm a hands-on software development student at Belgium Campus who geeks out over turning complex problems into elegant solutions."
    ],
    "What I Do": [
      "Breaking (and fixing) code late into the night",
      "Approaching challenges with creativity and grit",
      "Celebrating small wins in tech"
    ],
    "What I've Built": [
      "Solutions that make people's lives easier",
      "Projects with real-world impact",
      "Skills through late-night study sessions and tricky algorithms"
    ]
  }), []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = window;

    // Container animation
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: 3 },
      {
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    // Word animations
    const wordElements = el.querySelectorAll('.word');
    const contentElements = el.querySelectorAll('.content-section');

    // Fade in words
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
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    // Blur effects
    gsap.fromTo(
      contentElements,
      { filter: 'blur(0px)' },
      {
        filter: 'blur(8px)',
        scrollTrigger: {
          trigger: contentElements,
          scroller,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
          onLeave: () => gsap.to(contentElements, { filter: 'blur(8px)' }),
          onEnterBack: () => gsap.to(contentElements, { filter: 'blur(0px)' })
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div className="home-container">
      <HourGlassBackground />
      <div ref={containerRef} className="scroll-reveal">
        {Object.entries(content).map(([title, points], sectionIndex) => (
          <div key={sectionIndex} className="content-section">
            <h3 className="section-title">{title}</h3>
            <p className="scroll-reveal-text">
              {points.map((point, i) => (
                <span key={i} className="word">
                  {point}
                  {i < points.length - 1 ? ' • ' : ''}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;