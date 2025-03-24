import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from "@mui/material";

const faqData = [
  {
    question: "What is Lucky Ads?",
    answer: "Lucky Ads is a fun and exciting platform where you can win amazing prizes just by participating! With every click, you get the chance to unlock rewards such as gift cards, in-app currency, exclusive discounts, and even high-end prizes like smartphones."
  },
  {
    question: "How can we use Lucky Ads?",
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta fugit magni eligendi similique unde praesentium voluptas vitae in, facere qui totam ad at vero, error harum deserunt. Enim neque nesciunt, accusantium maiores voluptatibus commodi animi autem eos, blanditiis, ullam dignissimos?"
  },
  {
    question: "Is Lucky Ads free to use?",
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta fugit magni eligendi similique unde praesentium voluptas vitae in, facere qui totam ad at vero, error harum deserunt. Enim neque nesciunt, accusantium maiores voluptatibus commodi animi autem eos, blanditiis, ullam dignissimos?"
  },
  {
    question: "How can I download Lucky Ads?",
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta fugit magni eligendi similique unde praesentium voluptas vitae in, facere qui totam ad at vero, error harum deserunt. Enim neque nesciunt, accusantium maiores voluptatibus commodi animi autem eos, blanditiis, ullam dignissimos?"
  }
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h6" sx={{color:'white',marginBottom:4,fontSize:{xs:'16px',sm:'18px',md:'20px'}}} gutterBottom>
      Everything you need to know about Lucky Ads.
      </Typography>

      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{ bgcolor: "#282b30", boxShadow: "none",py:'4px',color:'white' }}
          
        >
          <AccordionSummary
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="body1"  sx={{fontWeight:{xs:'500',md:"bold"},fontSize:{xs:'14px',md:'16px'}}}>{faq.question}</Typography>
            <Typography fontWeight="bold" sx={{ ml: "auto",color:'#ceb03e',fontSize:'20px' }}>
              {expanded === index ? "-" : "+"}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography  sx={{fontWeight:{xs:'500'},fontSize:{xs:'14px',md:'16px'}}}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};
export default FAQSection;
