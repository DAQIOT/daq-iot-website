---
title: Factory Water, Electricity and Gas Consumption Monitoring and Energy
  Management Platform
summary: Industrial IoT acquisition of water, electricity and gas consumption,
  with the data reported to government platforms through standard interfaces and
  analyzed on an energy management platform.
category: 智能制造
subcategory: Energy Consumption & Management
image: /images/plans-en/factory-water-electricity-and-gas-consumption-monitoring-and-energy-management-platform/1qa.png
---
Industrial IoT for water, electricity and gas data acquisition, connected directly to government platforms

As the global energy crisis deepens and environmental awareness grows, energy saving and emission reduction have become a shared focus for governments and enterprises. China has issued a series of policies in recent years requiring enterprises to strengthen energy management and to report water, electricity, gas and other energy consumption data to government platforms in real time. Industrial IoT data acquisition meets that requirement, giving enterprises an efficient and accurate way to collect consumption data and report it.

## 1. Policy Background

### 1.1 Policy Requirements

In recent years the Chinese government has issued the Energy Development Strategic Action Plan (2014–2020), the 14th Five-Year Comprehensive Work Plan for Energy Conservation and Emission Reduction and other policy documents, which explicitly call for stronger monitoring and management of energy consumption at key energy-using units. Under these policies, enterprises must upload water, electricity, gas and other consumption data to government platforms in real time so that the government can supervise and analyze it centrally.

| Issue date | Policy                                                                                       | Scope                                                                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| May 2024   | Energy Saving and Carbon Reduction Action Plan 2024–2025                                     | Sets out 27 tasks in 10 areas, including action to reduce and substitute fossil energy consumption and action to raise non-fossil energy consumption                        |
| Feb 2024   | Green and Low-Carbon Transition Industry Guidance Catalogue (2024 Edition)                   | Guides industry toward a green, low-carbon transition and optimizes the energy consumption mix                                                                              |
| Mar 2024   | Work Plan for Accelerating Energy Saving and Carbon Reduction in the Building Sector         | Advances energy saving and carbon reduction in buildings and the transition of construction methods                                                                         |
| Mar 2022   | 14th Five-Year Plan for Building Energy Efficiency and Green Buildings                       | Targets energy-efficiency retrofit of more than 350 million m² of existing buildings and more than 50 million m² of ultra-low-energy and near-zero-energy buildings by 2025 |
| Aug 2021   | Report Card on Regional Completion of Dual Energy Control Targets for the First Half of 2021 | Issued by the NDRC; reports each region's progress on dual energy control targets and sets requirements for regions where energy intensity rose rather than fell            |
| Sep 2021   | Plan for Improving the Dual Control System for Energy Consumption Intensity and Total Volume | Requires strict provincial dual-control targets, a national reserve of targets, market trading of energy-use quotas and improved management and assessment                  |

### 1.2 Data Reporting Requirements

Government platforms set strict requirements for energy data reporting, covering timeliness, accuracy and completeness. Enterprises must ensure that collected consumption data reaches the platform promptly and accurately and meets its data format and interface requirements.

| Code                     | Name                       | Data type | Format |
| ------------------------ | -------------------------- | --------- | ------ |
| USCC                     | Unified social credit code | varchar   |        |
| YEAR                     | Year                       | varchar   |        |
| QUARTER                  | Quarter                    | varchar   |        |
| ENERGY_VARIETY_CODE      | Energy variety code        | varchar   |        |
| UNIT_CODE                | Unit of measure code       | varchar   |        |
| CONSUMPTION              | Consumption                | double    |        |
| CONVERSION_COEFFICIENT   | Conversion coefficient     | double    |        |
| CONVERSION_STANDARD_COAL | Standard coal equivalent   | double    |        |
| DESCRIPTION_OFF_USE      | Purpose description        | varchar   |        |
| REMARK                   | Remarks                    | varchar   |        |
| PROCESS_TYPE             | Request type               | varchar   |        |

### 1.3 Enterprise Responsibility

As major energy users, industrial enterprises have a responsibility to respond to government policy and to raise their energy management level through technical means. Industrial IoT data acquisition not only meets the reporting requirements of government platforms but also lets enterprises analyze data to optimize production processes, cut energy consumption and improve profitability.

## 2. Industrial IoT Solution

### 2.1 Solution Overview

The solution uses sensors, data acquisition devices and an IoT platform to collect, transmit and analyze water, electricity and gas consumption data in real time. It connects directly to the enterprise's existing production management systems and uploads the collected data to government platforms through standard interfaces, meeting the policy requirements.

![Factory Water, Electricity and Gas Consumption Monitoring and Energy Management Platform](/images/plans-en/factory-water-electricity-and-gas-consumption-monitoring-and-energy-management-platform/1qa.png)

*Overall architecture*

### 2.2 Solution Flow

![Factory Water, Electricity and Gas Consumption Monitoring and Energy Management Platform](/images/plans-en/factory-water-electricity-and-gas-consumption-monitoring-and-energy-management-platform/2qa.png)

*Electricity acquisition scheme*

![Factory Water, Electricity and Gas Consumption Monitoring and Energy Management Platform](/images/plans-en/factory-water-electricity-and-gas-consumption-monitoring-and-energy-management-platform/3qa.png)

*Water consumption acquisition scheme*

## 3. Solution Detail

### 3.1 Data Acquisition Layer

The acquisition layer is the foundation of the solution and consists of water, electricity and gas sensors plus data acquisition devices. The sensors monitor consumption of water, electricity and gas in real time and pass the data to the acquisition devices, which pre-process and store it to keep it accurate and complete.

Water meter sensor: monitors water flow and records consumption in real time.

Electricity meter sensor: monitors current, voltage, power and other parameters and records consumption in real time.

Gas meter sensor: monitors gas flow and records consumption in real time.

### 3.2 Data Transmission Layer

The transmission layer carries consumption data to the IoT platform over wired or wireless networks. Encryption protects the data in transit against disclosure or tampering.

Wired transmission: Ethernet, RS485 and other wired links, suited to the plant's internal network.

Wireless transmission: 4G, 5G, LoRa and other wireless links, suited to remote or mobile devices.

### 3.3 Data Processing and Analysis Layer

Once the IoT platform receives the data, it processes and analyzes it further. The platform cleans, stores and visualizes the data so the enterprise can see consumption as it happens. Big-data analysis also detects anomalies and suggests energy-saving optimizations.

Data cleaning: removes anomalous data to keep the figures accurate.

Data storage: stores data in the cloud or on a local server for later query and analysis.

Data visualization: presents consumption through charts, dashboards and similar views so managers can see it at a glance.

### 3.4 Government Platform Integration Layer

The IoT platform connects to government platforms through standard interfaces and uploads consumption data in real time. Integration ensures that data formats and transmission frequency meet platform requirements, so reporting does not fail on a data mismatch.

Data format conversion: converts platform data into the format the government platform requires.

Transmission frequency: set to the frequency the government platform requires, keeping the data current.

Data security: encrypted transmission protects the data in transit.

## 4. Solution Advantages

## 1. Efficiency

The solution collects and transmits water, electricity and gas data in real time, which greatly speeds up reporting and lets the enterprise respond to policy requirements on time.

## 2. Accuracy

High-accuracy sensors and acquisition devices ensure the consumption data is correct, meeting the government platform's accuracy requirements.

## 3. Scalability

The solution scales well. Sensors and acquisition devices can be added or adjusted to match actual needs, covering energy monitoring in different scenarios.

## 4. Energy-Saving Optimization

Analysis of consumption data reveals anomalies in the production process, so the enterprise can optimize processes, cut energy use and improve profitability.

## 5. Conclusion

The solution gives enterprises an efficient and accurate way to collect and report consumption data, connecting directly to government platforms and meeting policy requirements. Data analysis then helps optimize production processes and cut energy use, delivering both economic and environmental benefits. As IoT technology develops, industrial IoT data acquisition will play a larger role in energy management and support greener, more sustainable growth.

With this solution, an enterprise can collect and report water, electricity and gas consumption in real time, respond to government policy and move toward green, sustainable development.
