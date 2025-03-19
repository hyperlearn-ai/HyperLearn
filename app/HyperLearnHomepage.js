"use client";

import { useEffect } from 'react';

export default function HyperLearnHomepage() {
  // This code runs when the component mounts (appears on screen)
  useEffect(() => {
    // Create main container
    const app = document.createElement('div');
    app.id = 'app';
    app.className = 'dark-mode';
    document.body.appendChild(app);

    // Create header
    const header = document.createElement('header');
    header.className = 'header';
    app.appendChild(header);

    // Create logo
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.textContent = 'HyperLearn';
    header.appendChild(logo);

    // Create navigation
    const nav = document.createElement('nav');
    nav.className = 'nav';
    header.appendChild(nav);

    // Add navigation links
    const navItems = ['Features', 'Pricing', 'About', 'Login'];
    navItems.forEach(item => {
      const navItem = document.createElement('button');
      navItem.className = 'nav-item blur-button';
      navItem.textContent = item;
      nav.appendChild(navItem);
    });

    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle blur-button';
    themeToggle.innerHTML = '<i class="sun-icon">☀️</i>';
    header.appendChild(themeToggle);

    // Create main content section
    const main = document.createElement('main');
    main.className = 'main';
    app.appendChild(main);

    // Create hero section
    const hero = document.createElement('section');
    hero.className = 'hero';
    main.appendChild(hero);

    // Create hero title
    const heroTitle = document.createElement('h1');
    heroTitle.className = 'hero-title';
    heroTitle.textContent = 'Learn Smarter with AI';
    hero.appendChild(heroTitle);

    // Create hero subtitle
    const heroSubtitle = document.createElement('p');
    heroSubtitle.className = 'hero-subtitle';
    heroSubtitle.textContent = 'An AI learning assistant that adapts to your learning style';
    hero.appendChild(heroSubtitle);

    // Create CTA buttons
    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'cta-container';
    hero.appendChild(ctaContainer);

    // Create Get Started button
    const getStartedBtn = document.createElement('button');
    getStartedBtn.className = 'cta-button blur-button primary';
    getStartedBtn.textContent = 'Get Started';
    ctaContainer.appendChild(getStartedBtn);

    // Create Demo button
    const demoBtn = document.createElement('button');
    demoBtn.className = 'cta-button blur-button secondary';
    demoBtn.textContent = 'See Demo';
    ctaContainer.appendChild(demoBtn);

    // Create features section
    const features = document.createElement('section');
    features.className = 'features';
    main.appendChild(features);

    // Create features title
    const featuresTitle = document.createElement('h2');
    featuresTitle.className = 'section-title';
    featuresTitle.textContent = 'Key Features';
    features.appendChild(featuresTitle);

    // Create feature cards
    const featuresList = [
      {
        title: 'Adaptive Learning',
        description: 'AI that adjusts to your unique learning style and pace'
      },
      {
        title: 'File Analysis',
        description: 'Upload and analyze any learning material instantly'
      },
      {
        title: 'Smart Summaries',
        description: 'Get concise summaries of complex topics'
      }
    ];

    const featureCards = document.createElement('div');
    featureCards.className = 'feature-cards';
    features.appendChild(featureCards);

    featuresList.forEach(feature => {
      const card = document.createElement('div');
      card.className = 'feature-card blur-element';
      
      const cardTitle = document.createElement('h3');
      cardTitle.className = 'feature-title';
      cardTitle.textContent = feature.title;
      
      const cardDescription = document.createElement('p');
      cardDescription.className = 'feature-description';
      cardDescription.textContent = feature.description;
      
      card.appendChild(cardTitle);
      card.appendChild(cardDescription);
      featureCards.appendChild(card);
    });

    // Create footer
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = '&copy; 2025 HyperLearn AI • <a href="#">Terms</a> • <a href="#">Privacy</a>';
    app.appendChild(footer);

    // Add CSS
    const style = document.createElement('style');
    style.textContent = `
      /* Base styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        transition: background-color 0.5s ease, color 0.5s ease;
      }
      
      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
      
      #app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      
      .dark-mode {
        background-color: #111;
        color: #f5f5f5;
      }
      
      .light-mode {
        background-color: #f8f5e6;
        color: #333;
      }
      
      /* Header styles */
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        position: sticky;
        top: 0;
        z-index: 100;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
      
      .dark-mode .header {
        background-color: rgba(17, 17, 17, 0.8);
      }
      
      .light-mode .header {
        background-color: rgba(248, 245, 230, 0.8);
      }
      
      .logo {
        font-size: 1.8rem;
        font-weight: 700;
        letter-spacing: -0.5px;
      }
      
      .nav {
        display: flex;
        gap: 1rem;
      }
      
      /* Button styles */
      .blur-button {
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 8px;
        padding: 0.75rem 1.25rem;
        color: inherit;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: all 0.3s ease;
      }
      
      .dark-mode .blur-button:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }
      
      .light-mode .blur-button:hover {
        background-color: rgba(0, 0, 0, 0.05);
        transform: translateY(-2px);
      }
      
      .theme-toggle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin-left: 1rem;
      }
      
      /* Main content styles */
      .main {
        flex: 1;
        padding: 2rem 2rem 4rem;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
      }
      
      .hero {
        text-align: center;
        padding: 4rem 1rem 6rem;
      }
      
      .hero-title {
        font-size: 3.5rem;
        font-weight: 800;
        letter-spacing: -1px;
        margin-bottom: 1.5rem;
        line-height: 1.1;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
        max-width: 600px;
        margin: 0 auto 3rem;
        line-height: 1.5;
        opacity: 0.9;
      }
      
      .cta-container {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
      }
      
      .cta-button {
        padding: 0.875rem 1.75rem;
        font-size: 1rem;
        font-weight: 600;
      }
      
      .cta-button.primary {
        background: linear-gradient(135deg, #7928CA, #FF0080);
        color: white;
      }
      
      .cta-button.secondary {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .light-mode .cta-button.secondary {
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
      
      /* Features section */
      .features {
        padding: 2rem 0 4rem;
      }
      
      .section-title {
        text-align: center;
        font-size: 2.25rem;
        margin-bottom: 3rem;
        font-weight: 700;
      }
      
      .feature-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      
      .feature-card {
        padding: 2rem;
        border-radius: 16px;
        height: 100%;
      }
      
      .dark-mode .feature-card {
        background-color: rgba(255, 255, 255, 0.05);
      }
      
      .light-mode .feature-card {
        background-color: rgba(0, 0, 0, 0.03);
      }
      
      .blur-element {
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .dark-mode .blur-element:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      }
      
      .light-mode .blur-element:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
      
      .feature-title {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        font-weight: 600;
      }
      
      .feature-description {
        line-height: 1.6;
        opacity: 0.8;
      }
      
      /* Footer styles */
      .footer {
        padding: 2rem;
        text-align: center;
        font-size: 0.875rem;
        opacity: 0.7;
      }
      
      .footer a {
        color: inherit;
        text-decoration: none;
      }
      
      .footer a:hover {
        text-decoration: underline;
      }
      
      /* Responsive styles */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }
        
        .nav {
          display: none;
        }
        
        .feature-cards {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(style);

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
      const isCurrentlyDark = app.classList.contains('dark-mode');
      
      // Toggle theme classes
      if (isCurrentlyDark) {
        app.classList.remove('dark-mode');
        app.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="moon-icon">🌙</i>';
      } else {
        app.classList.remove('light-mode');
        app.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="sun-icon">☀️</i>';
      }
      
      // Add animation effect
      app.style.transition = 'background-color 0.8s ease, color 0.8s ease';
      setTimeout(() => {
        app.style.transition = '';
      }, 800);
    });

    // Add hover effect to feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });

    // Make buttons interactive
    const buttons = document.querySelectorAll('.blur-button');
    buttons.forEach(button => {
      button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.98)';
      });
      
      button.addEventListener('mouseup', () => {
        button.style.transform = '';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = '';
      });
    });

    // Add cleanup function to remove everything when component unmounts
    return () => {
      if (document.getElementById('app')) {
        document.body.removeChild(document.getElementById('app'));
      }
      if (document.querySelector('style')) {
        document.head.removeChild(document.querySelector('style'));
      }
    };
  }, []); // Empty array means this runs once when component mounts

  // Return an empty div - our code adds all the content
  return <div id="root"></div>;
}