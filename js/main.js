// ========================================
// UniverID - Main JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Respect reduced motion preference
  const reduceMotion = (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const canAnimate = typeof gsap !== 'undefined' && !reduceMotion;

  // Initialize GSAP-based animations only when allowed
  if (canAnimate) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animations
    gsap.from(".hero h1", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    });
    
    gsap.from(".hero p", {
      duration: 1,
      y: 30,
      opacity: 0,
      delay: 0.3,
      ease: "power3.out"
    });
    
    gsap.from(".hero .btn", {
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.6,
      stagger: 0.15,
      ease: "power3.out"
    });
    
    // Section animations
    gsap.utils.toArray(".section").forEach(section => {
      gsap.from(section.children, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 40,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out"
      });
    });
    
    // Card hover effects
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          duration: 0.3,
          scale: 1.02,
          ease: "power2.out"
        });
      });
      
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          duration: 0.3,
          scale: 1,
          ease: "power2.out"
        });
      });
    });
  }
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
  
  // Navbar scroll effect (no animation-only side effects)
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.background = "rgba(15, 23, 42, 0.98)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.95)";
      navbar.style.boxShadow = "none";
    }
    
    lastScroll = currentScroll;
  });
  
  // Button click animations (optional: only if GSAP is available and not reduced motion)
  if (typeof gsap !== 'undefined' && !reduceMotion) {
    document.querySelectorAll(".btn").forEach(btn => {
      btn.addEventListener("click", function(e) {
        gsap.to(this, {
          duration: 0.1,
          scale: 0.95,
          onComplete: () => {
            gsap.to(this, {
              duration: 0.1,
              scale: 1
            });
          }
        });
      });
    });
  }
  
  console.log("✅ UniverID loaded successfully");
});
