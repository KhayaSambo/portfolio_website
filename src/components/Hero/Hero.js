import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       This is <br /> 
       Sithembiso Khaya Sambo
      
       </SectionTitle>
       <SectionText>
        Welcome to my profile. 
         </SectionText> 
   </LeftSection>
 </Section>
);

export default Hero;