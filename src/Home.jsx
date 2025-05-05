import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HourGlassBackground.css';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

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

    // Rotate container
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

    // Animate words (opacity + blur)
    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      {
        opacity: 0.1,
        filter: 'blur(8px)',
        willChange: 'opacity, filter',
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'none',
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

  return (
    <div className="home-container">
      <div ref={containerRef} className="scroll-reveal">
        {Object.entries(content).map(([title, points], sectionIndex) => (
          <div key={sectionIndex} className="content-section">
            <h3 className="section-title">{title}</h3>
            {points.map((sentence, sentenceIndex) => (
              <p key={sentenceIndex} className="scroll-reveal-text">
                {sentence.split(/(\s+)/).map((word, wordIndex) =>
                  word.match(/^\s+$/) ? word : (
                    <span key={wordIndex} className="word">
                      {word}
                    </span>
                  )
                )}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
