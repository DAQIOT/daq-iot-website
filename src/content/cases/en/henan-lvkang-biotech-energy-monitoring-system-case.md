---
title: "Henan Lvkang Biotechnology Energy Monitoring Management System Project"
summary: >-
  Henan Lvkang Biotechnology — Energy Consumption Monitoring and Management System Construction Project
image: "/images/cases/1788248173812908.png"
industry: "智能制造"
order: 48
---
**Henan Lvkang Biotechnology — Energy Consumption Monitoring and Management System Construction Project**

Project name: Henan Lvkang Biotechnology Co., Ltd. Energy Consumption Monitoring and Management System Construction Project

Service provider: Shanghai Daq-IoT Technology Co., Ltd.

Customer background: Henan Lvkang Biotechnology Co., Ltd. is located in Hebi City and is a local small and medium-sized biological-products manufacturer. It has several production workshops whose lines run all year round with a large electrical load. The company actively responds to Hebi's pilot policy for digital transformation of SMEs and plans to achieve refined energy management through intelligent retrofit, while advancing digital and green upgrading.

![](/images/cases/1788248173812908.png)

**1. Project Background**

1. Regional policy background

This project aligns with the requirements of the Hebi SME Digital Transformation City Pilot Work Plan (Hebi Government Office [2024] No. 24). As a national pilot city for SME digital transformation, during the two-year pilot period Hebi focuses on promoting digital transformation of SMEs in three industries — intelligent electrical and electronic information manufacturing, new-material products manufacturing and green food processing — and explicitly requires promoting digital transformation in no fewer than 600 SMEs, achieving full coverage of digital transformation among specialized, refined, distinctive and innovative SMEs in the pilot industries. After transformation, enterprises must reach digital maturity level 2 or above. It strongly promotes low-cost, lightweight, fast-result "small, fast, light, precise" digital products and solutions, encouraging enterprises to digitalize production, energy consumption and equipment, cultivate digital transformation benchmark enterprises, build digital workshops and smart factories, and back this with central and local fiscal subsidies.

Under this policy direction, Hebi encourages local SMEs to review their production and operating pain points, carry out "one enterprise, one policy" digital transformation with quality service providers, move to the cloud, build intelligent management systems and strengthen digital capabilities in energy control, equipment O&M and safety warning to help enterprises reduce cost, increase efficiency and save energy. As a key local manufacturing SME, Henan Lvkang Biotechnology actively responds to the city-wide digital transformation deployment and lists energy-monitoring intelligent retrofit as the core project of its digital upgrading.

2. On-site status

The company's production workshops are geographically scattered and far apart, making cabling difficult and traditional wired networking expensive. Each workshop has independent power distribution, with many types of electrical equipment and a wide total power range; production loads differ markedly between workshops and overall electricity conditions are complex.

3. Original management pain points

No metering instruments are installed at key energy points, there is no systematic energy-data acquisition, and there is a lack of accurate energy data by workshop, device and time period. It is impossible to distinguish the actual electricity consumption of each area and device, and energy accounting relies entirely on experience-based estimation. Energy management suffers multiple prominent problems.

4. Project requirements

The company officially launched the construction of the energy consumption monitoring and management system with two levels of requirements:

- Basic functional requirements: first achieve automatic electricity-data acquisition for all 9 workshops, 7x24 real-time monitoring, intelligent analysis and abnormal alarms; fully replace manual meter reading; complete refined workshop-level energy control; reduce manpower and energy costs and avoid electrical and equipment safety risks.
- Digital transformation adaptation requirements: following the local policy's promotion of "small, fast, light, precise" digital products, choose a solution that is easy to deploy, cost-effective, has a short implementation cycle and does not affect normal production. The platform must be well compatible and extensible, with reserved interfaces for later connection of water meters, gas meters, steam meters and other energy instruments, ultimately building an integrated water-electricity-gas-steam full-category energy digital management system. This meets the enterprise's long-term digital development needs, ensures the digital maturity reaches the level required by policy, complies with Hebi's acceptance requirements for SME digital transformation and supports applying for related policy subsidies.

**2. Technical Solution and On-Site Implementation**

(1) Core hardware configuration

For the different total powers of the 9 workshops, the project precisely matched corresponding three-phase energy meters, current transformers and 4G smart acquisition gateways to fit metering accuracy to each site, as follows:

| No. | Workshop | Total power (kW) | Matching CT | Supporting equipment |
| --- | --- | --- | --- | --- |
| 1 | Workshop 1 | 330 | 750/5A | Three-phase energy host + 4G acquisition gateway |
| 2 | Workshop 2 | 440 | 1000/5A | Three-phase energy host + 4G acquisition gateway |
| 3 | Workshop 3 | 360 | 750/5A | Three-phase energy host + 4G acquisition gateway |
| 4 | Workshop 5 | 200 | 400/5A | Three-phase energy host + 4G acquisition gateway |
| 5 | Workshop 6 | 350 | 750/5A | Three-phase energy host + 4G acquisition gateway |
| 6 | Workshop 7 | 450 | 1000/5A | Three-phase energy host + 4G acquisition gateway |
| 7 | Workshop 8 | 150 | 300/5A | Three-phase energy host + 4G acquisition gateway |
| 8 | Workshop 9 | 700 | 1500/5A | Three-phase energy host + 4G acquisition gateway |
| 9 | Workshop 10 | 300 | 600/5A | Three-phase energy host + 4G acquisition gateway |

Three-phase energy meter: acquires all-dimension electrical parameters in real time — three-phase current, voltage, real-time power and cumulative energy — supports mainstream industrial communication protocols such as Modbus, has data caching and suits long-term stable operation in industrial production.

4G acquisition gateway: uses Shanghai Daq-IoT's SC-GP-GWRTU smart acquisition gateway in a one-to-one deployment per workshop, supporting 4G wireless transmission. No extensive cabling is needed on site, perfectly solving the cabling difficulty caused by the long distances between workshops, achieving real-time stable upload of meter data and supporting remote device management and fault troubleshooting.

![](/images/cases/1788248246207079.png)

(2) On-site construction

Wiring and installation strictly followed the one-to-one correspondence between workshop, meter and transformer to ensure metering accuracy meets national industrial standards. After installation, the position and device number correspondence of each 4G gateway was configured for rapid integration with the back-end platform.

The non-invasive wireless deployment greatly reduced on-site cabling construction cost and lead time, without affecting the normal operation of the workshops' existing production equipment, achieving fast go-live and fast results.

![](/images/cases/1788248290210368.png)

![](/images/cases/1788248366302954.png)

![](/images/cases/1788248506340411.png)

**3. Core Platform Functions**

The project uses the Daq-IoT enterprise-level energy management platform, with a dedicated enterprise management account and tiered permission system configured for Lvkang Biotechnology. Core functions:

(1) Full-time energy data acquisition and monitoring — the platform automatically acquires all-dimension electrical parameters from the three-phase meters in the 9 workshops, achieving 7x24 uninterrupted workshop-level real-time energy monitoring without manual on-site meter reading. This completely solves the pain points of high manual meter-reading cost, lagging data and large statistical error, making energy data real-time and transparent.

![](/images/cases/1788248570200022.png)

![](/images/cases/1788248623170321.png)

(2) Multi-dimensional energy statistics and automatic report generation.

Time-dimension analysis: automatic statistics of daily/monthly/yearly cumulative energy with one-click standardized energy reports; energy trend curves intuitively show consumption fluctuations in different periods, precisely identifying the difference between production peaks and non-production periods and supporting off-peak power use and optimized scheduling.

![](/images/cases/1788248652726289.png)

Space-dimension analysis: automatic breakdown of energy share by workshop, clearly showing the energy ranking and consumption of each workshop, precisely locating high-consumption workshops and achieving refined workshop-level energy quota control.

![](/images/cases/1788248695195822.png)

(3) Intelligent abnormal warning and risk control — the platform supports multi-scenario intelligent warnings with user-defined energy thresholds and equipment operating-parameter thresholds. When a workshop's energy exceeds the normal range or equipment runs abnormally or loses power, the platform triggers an alarm automatically and notifies managers through multiple channels for timely troubleshooting. This avoids ineffective energy consumption and preemptively avoids production safety risks caused by equipment failure, ensuring stable production.

![](/images/cases/1788248743477326.png)

![](/images/cases/1788248763897742.png)

(4) Full lifecycle management of acquisition devices — the platform manages the full lifecycle of all acquisition devices such as meters and 4G gateways, showing online status, working conditions and data transmission in real time, and supporting remote device debugging, parameter configuration and fault troubleshooting, greatly reducing on-site O&M cost and improving O&M efficiency.

![](/images/cases/1788248787177946.png)

(5) Tiered permissions and user management — the platform supports multi-role tiered permission management, configuring differentiated view and operation permissions for senior management, energy management specialists, workshop supervisors and O&M staff. This safeguards the security of enterprise energy data and achieves tiered energy management with clear responsibility.

![](/images/cases/1788248814125984.png)

![](/images/cases/1788248835141266.png)

(6) Full-category energy extensibility — beyond electricity, the platform has strong horizontal extensibility and can seamlessly connect water meters, steam meters, gas meters and other energy instruments to achieve integrated acquisition, statistics, analysis and control of water, electricity, gas and steam. This provides a mature platform for the enterprise to build a complete energy digital management system later without rebuilding, greatly reducing long-term digital construction cost.

![](/images/cases/1788248873169592.png)

**4. Core Value**

- Cost reduction and efficiency: fully replaces traditional manual meter reading, greatly reducing labor cost, and automates energy data statistics and analysis, improving overall energy management efficiency.
- Refined control: achieves workshop-level refined energy monitoring and quota control, precisely locating high-consumption links and abnormal high-consumption points, providing accurate data support for energy saving and effectively reducing energy cost.
- Risk control: through intelligent abnormal warnings, energy anomalies and equipment faults are discovered in time, preemptively avoiding ineffective energy consumption and production safety risks and safeguarding long-term stable production.
- Long-term digital value: the platform's full-category energy extensibility allows it to progressively achieve integrated digital management of water, gas and steam as the enterprise grows, providing long-term stable technical and platform support for digital transformation and green, low-carbon development.
