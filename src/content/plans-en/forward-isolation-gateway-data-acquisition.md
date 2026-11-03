---
title: "Forward Isolation Device (Network Gap) Data Acquisition Solution"
summary: "With national policies such as the dual-carbon (carbon peaking and carbon neutrality) goals, advances in PV technology and the largely idle rooftops of commercial and industrial (C&I) companies, installing PV plants can turn those rooftops into power stations, revitalize fixed assets and generate steady revenue."
---
Forward Isolation Device (Network Gap) Data Acquisition Solution

## Solution Background

With national policies such as the dual-carbon (carbon peaking and carbon neutrality) goals, advances in PV technology and the largely idle rooftops of commercial and industrial (C&I) companies, installing PV plants can turn those rooftops into power stations, revitalize fixed assets and generate steady revenue. Together, these factors have driven rapid growth in domestic C&I PV projects.

The network system involved in grid connection of a distributed PV plant is a typical cyber-physical system that integrates generation, distribution and consumption. Its core task is to keep the production, transmission, monitoring and consumption of electricity safe, stable and efficient. The network can be understood as two parts: the in-station system and the out-of-station system.

In a grid-connected PV project, the in-station system contains many real-time control devices, such as inverters and protection devices. If it is interconnected with the out-of-station system (usually connected to the Internet or the corporate office network), hackers could exploit vulnerabilities in the management information zone to intrude into the production control zone, tamper with control commands, disrupt normal equipment operation, or even cause widespread outages. Grid-connected PV projects must therefore comply with mandatory national standards such as the Code for Grid-Connection Operation and Control of PV Power Stations (GB/T33599—2017) and the Regulations on the Security Protection of Electric Power Secondary Systems. These standards explicitly require a physical isolation device between the in-station system (for example, the PV plant intranet with inverters and combiner boxes) and the out-of-station system (for example, the dispatch master station and the corporate O&M system). Horizontal data transmission must use a "one-way isolation" model: a forward isolation device carries data from the in-station system to the out-of-station system (such as PV output and equipment status), while a reverse isolation device carries data from the out-of-station system to the in-station system (such as dispatch commands).

## Solution Description

Forward and reverse isolation devices (network gaps) are the core line of defense for network security. They strictly block direct communication between internal and external networks (physical-layer disconnection) and keep data exchange between the in-station and out-of-station systems "one-way and controllable, with no virus penetration". However, IoT acquisition systems need real-time access to key information such as sensor data and equipment status on the other side of the isolation device (for example, intranet devices). Conventional "direct-connection acquisition" breaks the isolation rules and is prohibited, which interrupts data acquisition and leaves business systems starved of data.

To address this pain point, we developed a dedicated data acquisition device for the forward isolation scenario. It can still deliver data to the customer's O&M platform through a forward isolation device. The product is secure and compliant, has low latency, and is easy to commission, letting data flow safely across the isolated network!

Solution Core

This solution uses a technical architecture based on "isolated-side proxy relay + secure protocol adaptation". A dedicated acquisition gateway deployed on the external-network side of the isolation device works with a pre-installed "data forwarding gateway" on the internal-network side. While strictly following the communication rules of the isolation device, it completes the data acquisition required by IoT devices. In this way it works around isolation limits and achieves reliable, secure and compliant acquisition.

### Solution Topology Diagram

![Forward Isolation Device (Network Gap) Data Acquisition Solution](/images/plans/forward-isolation-gateway-data-acquisition/img-01.webp)

*Technical Principle*

#### 1. Isolation Device Compatibility Design

• Deep compatibility with mainstream forward isolation devices (brands such as NARI, Westone, Zhuhai Hongrui and Xingtang)

• Strict adherence to the isolation device's "one-way physical disconnection + two-way logical ferrying" mechanism: intranet data passes through our acquisition management machine, is "forward-ferried" by the forward isolation device to the external forwarding management machine, and never uses a direct network connection. This meets Classified Protection of Cybersecurity 2.0 (MLPS 2.0) and industry security specifications.

#### 2. Acquisition Process: Four Steps to "Safe Data Flow"

① Intranet data preparation: the in-station acquisition management machine acquires data from intranet IoT devices (such as inverters, environmental monitoring devices, power quality analyzers, or other power secondary equipment) using standard Modbus RTU or other standard protocols.

② Forward ferrying (internal → external): the in-station acquisition management machine ferries the acquired raw data (or structured data parsed as needed) to the out-of-station forwarding management machine through a forward channel allowed by the forward isolation device (such as a fixed port or a specific protocol format);

③ External-network acquisition and processing: the out-of-station forwarding management machine receives the ferried data, performs protocol conversion (for example, to MQTT/HTTP/JSON formats) and data cleaning (removing redundancy and checking abnormal values), and uploads it to a cloud platform or local server over 4G/5G/Ethernet.

## Solution Advantages

#### 1. Secure and Compliant, Validated Against Rigorous Requirements

• 100% compliance with the requirements of the Regulations on the Security Protection of Electric Power Monitoring Systems and Classified Protection of Cybersecurity 2.0 (MLPS 2.0) for the use of forward and reverse isolation devices. Supports whitelist IP/port, data content filtering, ferry log auditing and other functions of the isolation device.

#### 2. Low Latency, High Reliability, and No Packet Loss

• The in-station acquisition management machine supports data caching to avoid data loss during brief isolation interruptions, and automatically retransmits data after recovery.

• Measured end-to-end latency is <500 ms in typical scenarios, meeting the timeliness requirements of industrial control and real-time monitoring.

#### 3. Flexible Protocol Adaptation for Multiple Scenarios

• Supports standard TCP (custom messages) and mainstream industrial protocols (Modbus TCP, OPC UA, MQTT, etc.) for fast adaptation to in-house devices.

• Compatible with acquisition from a single device up to multi-device clusters. A single gateway supports ≥50 concurrent connections, meeting large-scale IoT scenarios.

#### 4. Easy Deployment, No Commissioning, and Lower Implementation Cost

• The acquisition and forwarding communication management machines are compact and easy to install, with no added cost for other peripheral equipment

• Supports remote commissioning (access through a secure channel). Our technical team helps configure isolation device rules and add IP whitelists, responds to on-site issues within 2 hours, and can go live the same day at the earliest.

## Typical Application Scenarios

▶ Power industry: data acquisition from power secondary equipment in PV plants, including inverters, anti-islanding devices, environmental monitoring devices, grid-connection cabinets and power quality analyzers (data must be uploaded through a forward isolation device to the dispatch cloud platform and forwarded to the enterprise energy monitoring cloud platform)

▶ Petrochemicals: secure ferrying of DCS system data from the production zone to MES/ERP systems in the management zone

▶ Rail transit: station equipment monitoring data (such as temperature, humidity and door access status) transmitted to the control center through an isolation device

▶ Smart manufacturing: data acquisition from robots and sensors in factories (meeting MLPS compliance while connecting to industrial Internet platforms)

### Why Choose Us?

Our engineering team has 10 years of experience focused on combining IoT data acquisition with industrial network security. We have provided IoT data acquisition solutions to thousands of customers in China.

• Technical Expertise

Our team has in-depth knowledge of the communication protocols of mainstream isolation devices (such as the "ferrying engine API" of NARI gaps and the "secure channel configuration" of Westone). The solution has been proven in a large number of projects.

• Customization Capability

Supports parsing of customer private protocols, custom data format conversion, and edge computing (local data preprocessing).

• Full Lifecycle Service

Provides one-stop service covering solution design → deployment and commissioning → O&M training → security upgrades, giving you peace of mind.
