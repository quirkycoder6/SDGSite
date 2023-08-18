import { useEffect, useState } from "react";
import SDGList from "../sdgList/SDGList";
import "./sdgs.scss";
import {
  Poverty,
  Education,
  GenderEquality,
} from "../../data";


export default function SDGs() {
  const [selected, setSelected] = useState("poverty");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "poverty",
      title: "Poverty",
      summary: "Poverty is a complex and multidimensional challenge. Some countries have also adopted national multidimensional poverty indicators to capture other aspects of poverty such as those related to health, employment, education and access to basic services as well as to reveal the interconnections between deprivations across multiple Goals within households.\n: Proportion of the population living below the international poverty line by sex, age, employment status and geographic location .\nPrior to 2020, only 27% of countries with comparable national poverty rates across 10 years or more had halved the proportion of their populations living in poverty. Yet an additional 52% of countries had reduced their national poverty rate while the remaining 22% had experienced increases in poverty. \n" 
    },
    {
      id: "education",
      title: "Education",
      summary: "Why should we care of other people economic condition?\nThere are many reasons, but first in short as human beings, our well-being is linked to each other. Growing inequality is detrimental to economic growth and undermines social cohesion, increasing political and social tensions and in some circumstances, driving instability and conflicts.\n\tSo what can I do about it? Your active engagement in policy making can make a difference in adressing povert . This ensures that our right are promoted and your voice is heard, that internal general knowledge is shared, and that our critical thinking and innovation are encouraged in all stages to support transformational changes in people lives and communities.\n Role of education in overcoming poverty.\n Early schooling is recognised to stimulate childrens readiness for school and foster their future learning experience, yet participation in organised learning ,one year before the official primary entry age remains far from being universal. In 2019, three out of every four children (73%) globally participated in such learning, but participation is uneven across regions. The enrolment rate was 96% in Latin America and the Caribbean, and 93% in Europe and Northern America. On the other hand, about one-half or fewer of all children participated in this type of learning programme in sub-Saharan Africa (43%), Northern Africa and Western Asia (52%), Landlocked Developing Countries (40%), and Least Developed Countries (50%)By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondaryeducation leading to relevant and effective learning outcomes . Proportion of children and young people (a) in grades 2/3; (b) at the end of primary; and (c) at the end of lower secondary achieving at least a minimum proficiency level in (i) reading and (ii) mathematics."
    },
    {
      id: "gender-equality",
      title: "Gender Equality",
      summary: ""
    }
  ];

  useEffect(() => {
    switch(selected) {
      case "poverty":
        setData(Poverty);
        break;
      case "education":
        setData(Education);
        break;
      case "gender-equality":
        setData(GenderEquality);
        break;
      default:  
        setData(Poverty);
    }
}, [selected])

  return (
    <div className="sdgs" id="sdgs">
      <h1>SDGs</h1>
      <ul>
        {list.map((item) => (
          <SDGList 
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}        
      </div>
    </div>
  );
}
