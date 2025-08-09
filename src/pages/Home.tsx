import React from 'react';
import Hero from '../components/Hero';
import FeaturedSimulations from '../components/FeaturedSimulations';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Stats />
      <FeaturedSimulations />
      <Features />
      <Testimonials />
    </div>
  );
}