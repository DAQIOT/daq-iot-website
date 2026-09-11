---
title: "Shanxi Coal Washing Plant C&I PV Station Self-Consumption & Virtual Power Plant AGC/AVC Application Case"
summary: >-
  Shanxi Coal Washing Plant — Commercial & Industrial PV Station (Self-Consumption with Surplus to Grid) and Virtual Power Plant Group Dispatch / Group Control AGC/AVC 'Four-Able' Device Case
image: "/images/cases/1780292076117500.png"
industry: "光伏新能源"
order: 26
---
**Shanxi Coal Washing Plant — Commercial & Industrial PV Station (Self-Consumption with Surplus to Grid) and Virtual Power Plant Group Dispatch / Group Control AGC/AVC "Four-Able" Device Case**

**1. Project Background**

**1.1 Policy-driven "four-able" requirement for PV**

As the "dual carbon" goals advance, China's distributed PV installed capacity has grown by more than 20% for five consecutive years. However, the intermittency and volatility of PV generation challenge grid safety. In 2023 the National Energy Administration explicitly required that newly built commercial and industrial PV stations must implement the "four-able" functions (observable, measurable, controllable, dispatchable). On 17 January 2025 the National Energy Administration issued the "Measures for the Development and Construction Management of Distributed PV Power Generation". Article 29 explicitly requires newly built distributed PV projects to achieve "observable, measurable, adjustable and controllable", improving the grid's hosting capacity and regulation capability for distributed PV.

Per the Q&A on the 2025 version of the Measures, all newly built distributed PV projects of every type should achieve "observable, measurable, adjustable and controllable" to improve the grid's hosting capacity and regulation capability. For existing projects where conditions allow, grid companies and project investors should increase investment in construction and retrofit based on the property-rights demarcation point, improving informatization, digitalization and intelligence so as to achieve the "four-able" capability and ensure efficient, reliable use of distributed PV and safe, stable operation of the power system.

**1.2 Industry pain points**

Traditional PV stations "generate but do not control", facing curtailment, power-limitation and penalty risks; lacking data support, O&M efficiency is low and benefits are hard to quantify.

A station should be able to acquire real-time grid-connection information, electrical analog quantities and energy data. Real-time grid-connection information mainly includes the connection-point switch state, voltage, current, active power and reactive power, uploaded to the dispatch authority. The basic information a station provides should include, but is not limited to:

**Electrical analog quantities**

Mainly: connection-point voltage, current, active power, reactive power, power factor and frequency.

Status quantities: connection-point circuit-breaker status, fault information, distributed-source communication status and similar signals.

**Energy data**

Mainly: active and reactive energy at the gateway metering point, time-of-use values, measured demand, event records and similar information.

**2. Project Scale**

- 30kW inverter x 2
- 40kW inverter x 1
- 110kW inverter x 6
- 3 grid-connection cabinets & bus-tie cabinets
- 0.4kV grid-connection project (low-voltage grid connection), 760kW installed capacity

**3. Project Requirements**

The project is a newly built commercial and industrial PV station with 0.4kV grid connection. Per the Measures, the station needed AGC/AVC group dispatch and group control equipment to improve hosting and regulation capability and ensure efficient, reliable PV use and stable power-system operation. Installation, commissioning and integration had to be completed before 30 May 2025, assisting the owner with project acceptance.

**4. Technical Solution**

![](/images/cases/1780292076117500.png)

Project topology

The owner had already completed project filing and similar preliminary work; the wireless private-network card used by the multi-in-one converged terminal (DAQ-GP-VCMT5G) was obtained by the owner from the local dispatch authority.

The project uses a 5G multi-in-one smart converged terminal (integrating telecontrol, AGC/AVC, longitudinal encryption and 5G routing). It uses the Modbus protocol to acquire telemetry, telesignaling, telecontrol, teleregulation and tele-pulse data of the grid-connection cabinet anti-islanding device, multifunction meters, inverters and related electrical equipment, and forwards it over the 5G network using the 104 protocol to the power supply bureau's distribution dispatch system. The multi-in-one device provides the dispatch system with remote open/close control of all grid-connection cabinets in the station, protection-action monitoring and remote start/stop, generation monitoring and active power, reactive power, power factor and voltage regulation of inverters — meeting the "four-able" standardization requirements for PV stations.

![](/images/cases/1780292198573200.png)

The 5G multi-in-one converged terminal used in the project

**5. Project Implementation**

1. The construction contractor provides the electrical drawings and coordinates the communication-cable routing and equipment installation plan, then wires according to the confirmed plan.
2. Communication protocol documents for all secondary electrical equipment to be connected are provided (by the owner).
3. The communication address of each on-site device is changed according to its manual, to facilitate on-site communication control with the multi-in-one converged terminal.
4. Our engineers carry out wiring and commissioning of the 5G multi-in-one converged terminal and the on-site secondary electrical equipment, either remotely or on site (this project used on-site commissioning).
5. Our engineers carry out device function commissioning and integration with the distribution dispatch system.
6. Assist the owner in providing the commissioning report and other materials required for acceptance.

**6. On-Site Implementation**

![](/images/cases/1780292484800583.png)

![](/images/cases/1780292577259183.png)

Aerial view of the project

![](/images/cases/1780292782165735.png)

![](/images/cases/1780292863169544.png)

Some on-site equipment

![](/images/cases/1780292913958348.png)

![](/images/cases/1780292960111227.png)

Device address modification and parameter configuration; on-site device networking with the multi-in-one converged terminal

![](/images/cases/1780293024204839.png)

![](/images/cases/1780293075151213.png)

On-site device commissioning

![](/images/cases/1780293184748762.png)

![](/images/cases/1780293270575231.png)

Remote-control function commissioning and results

**AGC active-power control**

Dispatch actually issued 2100.

![](/images/cases/1780293382247025.png)

Received AGC active-power regulation 2100, feedback value 2100, actual regulation completed at 2080, error 20kW (1%), completed within 15s.

![](/images/cases/1780293488915152.png)

![](/images/cases/1780293577188333.png)

**AVC reactive-power target regulation**

![](/images/cases/1780293836871733.png)

Current reactive value 5.66; dispatch issued a reactive target of 1500; actual regulated reactive value 1520, error 20kVar; response time met requirements.

![](/images/cases/1780293950152288.png)

![](/images/cases/1780294013164045.png)

![](/images/cases/1780294079116361.png)

**7. Project Summary**

This is a newly built 760kW commercial and industrial PV station State Grid connection project using a 0.4kV low-voltage connection scheme, equipped with 30kW/40kW/110kW inverters and 3 grid-connection cabinets. Strictly following the Measures, AGC/AVC group dispatch and group control equipment was added to improve grid hosting and regulation capability. Equipment installation, commissioning and acceptance were completed before 30 May 2025, helping the owner achieve efficient, reliable grid connection and supporting energy saving, emission reduction and stable power-system operation.

The supporting product is the DAQ-GP-VCMT5G multi-in-one 5G converged terminal, a control terminal integrating 5G communication, longitudinal encryption, telecontrol communication and AGC/AVC functions.

It uses an advanced embedded Linux operating system and flexible modular design, with a fanless, high-performance, low-power, flexibly installable concept. Considering centralized deployment, reduced equipment investment and saved installation space, it is a multifunctional integrated acquisition and communication device combining a 5G communication terminal, longitudinal encryption, telecontrol unit and AGC/AVC control. It meets the requirements for 380V, 10kV and above distributed PV to connect to the dispatch master station by direct acquisition while performing automatic power control. It uses 5G wireless access for grid connection — an important complement to wired access — enabling the power dispatch center to uniformly dispatch all local power plants and distributed PV, connecting distributed PV stations to the power system and meeting the "observable, measurable, adjustable, controllable" requirements.

**8. Project Extension**

Because this is a State Grid connection project, the 5G multi-in-one converged terminal (DAQ-GP-VCMT5G) was chosen. If the station connects to China Southern Power Grid, a Type-II edge-gateway architecture should be selected (see figure below).

![](/images/cases/1780294188119999.png)
