import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './PickMeStyles';
import { data } from '../../constants/constants';

const PickMe = () => (

  <Section>
    <SectionDivider />
  <SectionTitle> 
    Why I want to work at SovTech
  </SectionTitle>

  <Boxes> 
    {data.map((card, index) =>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText> {card.text} </BoxText>
        </Box>
    ))}
    </Boxes>
    <SectionText> 
    As a Computer Science student, I have always wanted to align myself with whatever opportunity that would ensure my growth. After taking a look at SovTech's Spex, I knew that it was the perfect fit for me, as it presents me with the opportunities to grow and become an excellent software engineer. I believe that this can all be achieved at SovTech. I hope to bring my growing expertise to a company that also values growth and innovation as much as I do. I believe that I am a good fit for SovTech and hope that my application is considered.   </SectionText>
</Section>

);

export default PickMe;
