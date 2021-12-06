import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { SiAngular, SiFlutter, SiMysql, SiPython, SiSpring, } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id= "technologies">
   <SectionDivider /> 
   <SectionTitle> Technologies</SectionTitle>
 
     <List>
       <ListItem> 
         <SiFlutter size="3rem"/>
          <ListContainer>
            <ListTitle> Flutter</ListTitle>
            <ListParagraph> Experience with <br />
            Flutter
            </ListParagraph>
          </ListContainer>
       </ListItem>
       <ListItem> 
         <SiAngular size="3rem"/>
          <ListContainer>
            <ListTitle> Angular</ListTitle>
            <ListParagraph> Experience with <br />
            Angular
            </ListParagraph>
          </ListContainer>
       </ListItem>
       <ListItem> 
         <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle> React</ListTitle>
            <ListParagraph> Experience with <br />
            React
            </ListParagraph>
          </ListContainer>
       </ListItem>
       <ListItem> 
         <SiSpring size="3rem"/>
          <ListContainer>
            <ListTitle> Spring</ListTitle>
            <ListParagraph> Experience with <br />
            Spring
            </ListParagraph>
          </ListContainer>
       </ListItem>
       <ListItem> 
         <SiMysql size="3rem"/>
          <ListContainer>
            <ListTitle> MySql</ListTitle>
            <ListParagraph> Experience with <br />
            mySql
            </ListParagraph>
          </ListContainer>
       </ListItem>
       <ListItem> 
         <SiPython size="3rem"/>
          <ListContainer>
            <ListTitle> Python</ListTitle>
            <ListParagraph> Experience with <br />
            Python
            </ListParagraph>
          </ListContainer>
       </ListItem>
     </List>
 </Section>

);

export default Technologies;
