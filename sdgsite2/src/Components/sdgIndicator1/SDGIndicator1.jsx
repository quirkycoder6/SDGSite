import "./sdgIndicator1.scss";
import React from "react";

export default function SDGIndicators() {
  return (
    <div className="indicator-container1" id="indicator-container1">
      <div className="poverty-ind">
        <div className="heading-container">
          <h1>Poverty</h1>
          <img src="https://sdg-kyrgyzstan.github.io/open-sdg-site-starter/assets/img/goals/en/1.png" alt=""/>
        </div>
        <h3>
          Proportion of population living below the national poverty line, by
          sex and age, employment status and geographic location
        </h3>
        <p>
          Before 2020, only 27% of countries with comparable national poverty
          rates across 10 years or more had halved the proportion of their
          populations living in poverty. Yet an additional 52% of countries had
          reduced their national poverty rate while the remaining 22% had
          experienced increase in poverty. Current trends suggest linear
          extrapolation until 2030, i.e., only 40% of countries with available
          data will have halved poverty by 2030.
        </p>
        <h3>
          The working poverty rate increased in 2020 for the first time in two
          decades
        </h3>
        <p>
          Although the working poverty rate decreased slightly in 2021, at 6.9
          per cent, it remains higher than the pre-pandemic rate. The share of
          global working poor had been steadily declining, from 26.1 per cent in
          2000 to 6.7 per cent in 2019. Youth and women are more likely to be in
          working poverty compared to adults and men. Globally, youth have been
          twice as likely as adults to be working poor. As youth and women were
          disproportionately impacted by working-hour losses and pay cuts in
          2020, the pre-existing disparities in working poverty rates are likely
          to widen.
        </p>
        <p>
          It is important to note that this indicator does not fully reflect the
          impact of the COVID-19 pandemic on overall poverty rates, as it does
          not account for those who were pushed out of employment. By 2030, we
          must eradicate extreme poverty for all people everywhere. Currently it
          is considered as people living on less than $1.25 a day.
        </p>
      </div>
    </div>
  );
}
