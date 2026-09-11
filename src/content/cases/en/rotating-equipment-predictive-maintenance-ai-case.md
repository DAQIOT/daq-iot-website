---
title: "Rotating Equipment Predictive Maintenance Case (Temperature & Vibration AI Analysis)"
summary: >-
  Rotating Equipment Predictive Maintenance Project Case (Based on Temperature and Vibration AI Analysis)
image: "/images/cases/1788249602178153.png"
industry: "智能制造"
order: 50
---
**Rotating Equipment Predictive Maintenance Project Case (Based on Temperature and Vibration AI Analysis)**

**1. Project Background**

1.1 Customer overview

This is an industrial internet platform project in Henan Province, implemented at the chemical production bases of several enterprises in a city in the province, mostly producing fine chemicals and key chemical enterprises in the region.

1.2 Business pain points

In chemical production plants, motor-driven centrifugal pumps, canned-motor pumps and compressors are core power equipment. Running long-term in harsh high-temperature, high-pressure, flammable and explosive environments, an abnormal shutdown causes:

1. Production interruption losses: a single unplanned shutdown can cause direct economic losses of hundreds of thousands to millions of RMB.
2. Safety risk: failure of key pump groups may cause medium leakage, fire and explosion and other major safety accidents.
3. High maintenance cost: the traditional scheduled-maintenance model suffers from over-maintenance or under-maintenance, with high spare-part inventory and labor costs.
4. Data blind spots: lacking real-time monitoring, equipment status relies on manual inspection, making early fault signs hard to detect.

1.3 Project objectives

- Real-time acquisition of vibration (three-axis acceleration) and temperature for 13 core devices, with an acquisition period of <= 5 minutes.
- Build a fully wireless transmission chain of "sensor -> explosion-proof gateway -> 5G router -> platform" with a packet loss rate < 1%.
- Connect to an industrial equipment health management platform for fault warning push and historical trend analysis.
- Drive the enterprise from "planned maintenance" to "predictive maintenance", reducing maintenance cost by more than 20%.

**2. Solution**

2.1 Overall system architecture

A four-layer wireless transmission architecture with no signal cabling at all, minimizing construction difficulty and production impact in hazardous areas:

| Layer | Core equipment | Location | Function |
| --- | --- | --- | --- |
| Sensing layer | Intrinsically safe wireless temperature-vibration sensor | Motor bearing housing / pump body | Vibration + temperature acquisition |
| Aggregation layer | Explosion-proof wireless gateway Exd IIC T4 Gb | Wall-mounted in each pump area | Wireless data aggregation/forwarding |
| Transmission layer | 5G/LTE industrial router | Distribution room / control room | Remote data transmission |
| Platform layer | Vibration fault diagnosis system platform | Enterprise intranet / cloud | Data analysis / warning display |

2.2 Core product: intrinsically safe wireless temperature-vibration sensor

![](/images/cases/1788249602178153.png)

| Parameter | Specification |
| --- | --- |
| Explosion-proof mark | Ex ia IIC Ga / Ex ia IIC T4 Db (intrinsically safe) |
| Certificate | CCRI 23.7515X |
| Vibration range | Acceleration 0-200 m/s2, velocity RMS 0-10 mm/s |
| Frequency response | 10-5000 Hz (-3dB), covering common mechanical fault frequencies |
| Temperature range | -40 to +125 degC, accuracy +/-1 degC |
| Wireless communication | Sub-1GHz (470-510 MHz), strong penetration and good anti-interference |
| Power | Built-in lithium-thionyl chloride battery, life > 3 years, external 3.6V supply supported |
| Protection rating | IP68, suitable for harsh industrial environments |
| Mounting | Magnetic or M8 stud mounting, no drilling, zero damage to equipment |

2.3 Explosion-proof design

The chemical plant area is an explosive gas environment (Zone 1/Zone 2), with gas groups mainly IIC (involving butadiene, styrene, acrylates and other high-risk media). All electrical equipment has national explosion-proof certification:

- Sensors use intrinsically safe (ib/ia) design, so even an internal fault will not ignite surrounding explosive gas.
- The gateway box uses a flameproof (Exd) explosion-proof junction box, isolating ignition sources with an increased-safety enclosure.
- All construction strictly follows the hot-work/temporary-power permit system, ensuring zero safety accidents.

2.4 Wireless communication scheme

A Sub-1GHz industrial wireless protocol (470-510 MHz) is used between sensors and the explosion-proof gateway, with strong penetration and good anti-interference, particularly suitable for the dense metal piping environment of chemical plants. A single gateway can connect up to 37 sensor nodes with a coverage radius of about 100-300 m. This project configured 3 explosion-proof gateways covering the butadiene pump shed area (13 sensors), the latex unit area (16 sensors) and the circulating water pump house/incinerator area (8 sensors).

![](/images/cases/1788249699129873.png)

**3. Implementation**

3.1 Monitoring coverage

The project covers 13 core power devices across 5 functional areas, with about 37 sensor points installed in total:

| Equipment | Motor power | Area | Points |
| --- | --- | --- | --- |
| Butyl acrylate transfer/unloading pump | 11 kW | Latex pump shed area | 4 |
| Styrene transfer/unloading pump | 11-37 kW | Latex unit area | 6 |
| Butadiene canned-motor pump | 18.5 kW | Butadiene pump shed area | 4 |
| Butadiene unloading pump | 18.5 kW | Butadiene pump shed area | 4 |
| Butadiene compressor | 22 kW | Butadiene area | 2 |
| Circulating water pump | 110 kW | Circulating water pump house | 2 |
| Incinerator combustion-supporting fan | 7.5 kW | Incinerator area | 2 |
| Acrylic acid transfer pump | 7.5 kW | Latex unit area | 2 |

3.2 On-site installation

Construction started in May 2026 and went through site survey, equipment installation and system commissioning, completing all construction and passing acceptance in July 2026. Key milestones:

3.2.1 Sensor installation — sensors were mounted with magnetic bases on the drive-end/non-drive-end bearing housings and key pump-body points; contact surfaces were ground and cleaned to bare metal before installation to ensure signal accuracy. For stainless-steel canned-motor pumps, M8 stud fixing was used.

![](/images/cases/1788249760159351.png)

![](/images/cases/1788249784534571.png)

![](/images/cases/1788249991107264.png)

3.2.2 Explosion-proof gateway deployment — 3 explosion-proof wireless gateways were deployed on walls near each pump area, wall-mounted with external LoRa antennas for coverage. The gateway enclosure is Exd flameproof with a "no opening while energized" warning label.

![](/images/cases/1788250031206875.png)

![](/images/cases/1788250055180512.png)

![](/images/cases/1788250085604114.png)

Exd flameproof explosion-proof wireless gateway box exterior and module installation details

3.2.3 Completed installation — after all equipment was installed the site presented a standard, tidy result. Gateway boxes drew power nearby with reliable grounding, and sensors were evenly distributed with clear labeling.

![](/images/cases/1788250200179773.png)

Two explosion-proof gateway boxes installed side by side

![](/images/cases/1788250357992503.png)

Electrical connection between the gateway box and the distribution cabinet completed

3.2.4 Equipment area overview

![](/images/cases/1788250410464988.png)

Indoor pump shed area panorama with sensors added to multiple motors

**4. Platform Application Results**

4.1 Vibration fault diagnosis system

All sensor data is uploaded in real time through the explosion-proof gateways and 5G network to the "vibration fault diagnosis system" of the industrial equipment health management platform. The platform provides a complete set of functions including equipment monitoring dashboard, trend analysis, spectrum analysis and fault warning:

![](/images/cases/1788250444136822.png)

Main interface of the vibration fault diagnosis system — all 13 devices monitored online and normal

4.2 Data analysis capability

The platform provides multi-dimensional data analysis including time-domain waveforms, frequency-domain analysis and performance-parameter trends, helping O&M staff precisely locate equipment anomalies:

![](/images/cases/1788250491888082.png)

Comprehensive analysis interface — amplitude trend, time-domain waveform, performance parameters and spectrum analysis in four linked views

![](/images/cases/1788250549521853.png)

Detailed spectrum analysis — identifying typical fault characteristic frequencies such as unbalance, misalignment and bearing faults

4.3 Project results

| Indicator | Target | Achieved |
| --- | --- | --- |
| Devices monitored | >= 10 | 13 (30% over target) |
| Sensor online rate | >= 95% | 100% (all online) |
| Data acquisition period | <= 5 min | <= 5 min (met) |
| Wireless signal strength | RSSI >= -80 dBm | -65 to -78 dBm (excellent) |
| Temperature accuracy | deviation <= 2 degC | <= 1.5 degC (better than target) |
| Grounding resistance | <= 4 ohm | 1.2-2.8 ohm (qualified) |
| Construction period | ~15 working days | 7 days (ahead of schedule) |
| Safety accidents | 0 | 0 (met) |

**5. Application Value**

5.1 Economic benefits

- Reduced unplanned downtime: with early fault warning, an estimated 2-3 sudden shutdown events avoided per year with indirect economic benefits exceeding RMB 1 million.
- Optimized spare-part management: spare-part procurement planned on actual equipment health, reducing spare-part inventory capital by about 25%.
- Extended equipment life: early defects detected and handled in time, preventing minor faults from becoming major damage and extending key equipment life by 15%-20%.
- Reduced O&M manpower: shifting from passive inspection to active warning improved inspection efficiency by more than 40%.

5.2 Safety benefits

- Intrinsically safe design: intrinsically safe explosion-proof sensors can be used safely even in hazardous areas without adding risk.
- Leak prevention: pump seal failure and bearing overheating can be detected early, effectively preventing hazardous-chemical leakage accidents.
- Compliance: meets the requirements of the Guidelines for Hazardous Chemical Enterprise Safety Risk Inspection, Investigation and Governance for condition monitoring of key equipment.

5.3 Digital transformation value

- Data asset accumulation: a complete equipment operation database provides a data foundation for later AI model training and intelligent decision-making.
- Transparent management: management can view equipment health at any time on mobile devices, with data-based decisions.
- Replicable: the project forms a mature predictive-maintenance solution for the chemical industry that can be quickly replicated to other units and bases.

**6. Summary and Outlook**

The project successfully achieved wireless temperature-vibration online monitoring of 13 core power devices at the chemical production base, building a complete technical chain from sensing and transmission to analysis and warning. Its smooth implementation fully validated key technical capabilities: the reliability of intrinsically safe wireless sensing in Zone 1/Zone 2 explosive hazardous environments; the stable penetration of Sub-1GHz wireless communication in dense metal piping environments; the effective identification of typical rotating-machinery fault modes by vibration fault diagnosis algorithms; and the feasibility and safety of a no-production-stop construction scheme in continuous-production enterprises.

Looking ahead, the project will deepen its application: expanding monitoring coverage to progressively include all class-A key equipment in the plant, and introducing AI fault-prediction models to leap from "condition monitoring" to "remaining-life prediction", helping the enterprise move fully into the era of intelligent manufacturing.
