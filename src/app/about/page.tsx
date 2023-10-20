import Hero from "@/components/hero-service/hero"
import Testomonial from "@/components/testomonial/testomonial";
import Content from "@/components/content/content";
import Why from "@/components/whyus/why"
import Abilities from "@/components/abilities/abilities";
import Clients from "@/components/client-about/clients"
import Award from "@/components/awards/awards";

import React from 'react';

const About = () => {
  return (
    <div className="bg-[#FDFEFF] overflow-x-hidden">
            <Hero />
            <Testomonial /> 
            <Content />
            <Why />
            <Abilities />
            <Clients/>
            <Award />
            
          

    </div>
  );
};

export default About;