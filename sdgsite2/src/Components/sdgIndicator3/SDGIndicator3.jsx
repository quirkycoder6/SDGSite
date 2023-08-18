import "./sdgIndicator3.scss";
import React from "react";

export default function SDGIndicators() {
  return (
    <div className="indicator-container3" id="indicator-container3">
      <div className="education-ind">
        <div className="heading-container">
          <h1>Education</h1>
          <img src="https://mmepl.com/img/csr/sdg4.png" alt="" />
        </div>
        
         <h3> Proportion of children and young people (a) in grades 2/3; (b) at the
          end of primary; and (c) at the end of lower secondary achieving at
          least a minimum proficiency level in (i) reading and (ii) mathematics,
          by sex
         </h3>
       
        <p>
          The COVID-19 pandemic has caused a global education crisis, with UN
          Secretary-General António Guterres describing it as a 'generational
          catastrophe.' Around 59% of grade 3 children (132 million) were
          proficient in reading in 2019, as per SDG indicator 4.1.1. The
          pandemic is expected to reduce this to 49%, pushing 14 million
          children below proficiency. Across grades 1 to 8, nearly 100 million
          children could fall below proficiency due to the pandemic, especially
          in Central/Southern Asia and Eastern/Southeastern Asia, while Latin
          America and the Caribbean see a significant decline in proficiency.
          Sub-Saharan Africa's impact is mostly on children already struggling
          with proficiency.
        </p>
        <h3>
          Completion rate primary education, lower secondary education, upper
          secondary education
        </h3>
        <p>
          Before the pandemic, global secondary school completion stood at
          around 50%, with sub-Saharan Africa lagging at 25%. In 2019,
          approximately 85% completed primary school and 53% completed secondary
          school. Europe and North America achieved 88% secondary completion
          over two decades.
        </p>
        <p>
          In sub-Saharan Africa, primary completion improved to 62%, while
          secondary completion only reached 29%, indicating a significant gap.
          COVID-19's impact on completion rates is uncertain, but prolonged
          disruptions increase the risk of dropouts. Future monitoring should
          focus on both timely and ultimate completion, with sub-Saharan Africa
          already showing an 11-point difference between the two.
        </p>
      </div>
    </div>
  );
}
