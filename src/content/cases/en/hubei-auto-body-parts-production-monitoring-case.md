---
title: "Hubei Auto Body Parts Company Production Equipment Status Monitoring Case"
summary: "Hubei Auto Body Parts Co., Ltd. — Production Equipment Operating-Status Monitoring Case"
image: "/images/cases/1780282220214477.png"
industry: "智能制造"
order: 44
---
**Hubei Auto Body Parts Co., Ltd. — Production Equipment Operating-Status Monitoring Case**

**1. Project Background**

To actively respond to the manufacturing digital transformation and intelligent manufacturing development strategy, a Hubei auto body parts company is committed to improving the refined management and operational efficiency of its production workshop. Currently, the real-time operating status, performance indicators and efficiency data of various key equipment (stamping, welding, painting robots, etc.) are not effectively acquired or used, making it hard for management to quantify the real utilization rate (availability) of equipment and to support OEE (overall equipment effectiveness)-centered production efficiency analysis, constraining further exploration of production potential.

**2. Project Objectives**

The core objective is to establish a stable, efficient production-equipment data acquisition and analysis system. By acquiring key data from equipment PLCs in real time, it achieves accurate calculation and visual monitoring of OEE core indicators such as equipment availability, performance rate and quality rate, thereby providing data support for production decisions, identifying production bottlenecks and continuously optimizing production efficiency.

**3. Technical Solution Overview**

(1) Acquisition method: a localized deployment to ensure production data does not leave the factory, safeguarding information security and network independence.
(2) Communication protocol: compatible with mainstream industrial communication protocols, mainly Modbus TCP and OPC UA, covering the vast majority of production equipment in the workshop.
(3) Acquisition frequency: 1 second per acquisition, to precisely capture and analyze instantaneous equipment states (start/stop, faults).
(4) Data storage: acquired data is persisted in relational databases — SQL Server (for core business data) and MySQL (for high-frequency time-series or log data) — forming a unified data resource pool and providing stable, reliable data services for upper-layer applications.

**4. Expected Value**

Once built, the system will give the enterprise data-driven decision-making capability, transparent production-process management and precise identification of efficiency losses, ultimately improving OEE, reducing downtime and optimizing production takt.

**5. Solution Design**

Considering the different equipment types, communication protocols and on-site construction environments, the project uses the IOT Gateway series PLC acquisition gateway together with the general industrial data acquisition system (DAQ FOR IIOT) to acquire data from different equipment types and store it in designated databases for the customer's analysis.

- Maximum compatibility: the gateway's powerful multi-protocol parsing capability ensures that equipment of different brands (Siemens, Mitsubishi, Omron, etc.) and protocols (Modbus TCP/OPC UA) can be connected quickly, greatly improving implementation efficiency and coverage.
- Maximum stability: industrial-grade hardware combined with professional acquisition software forms a stable, reliable data link that resists industrial-site interference and guarantees 7x24 uninterrupted data supply for accurate OEE analysis.
- Optimal maintainability: the platform's centralized management provides "one-stop" monitoring and configuration of distributed gateways, greatly reducing later O&M difficulty and cost. The system is highly scalable, and future devices can be added quickly and smoothly.

This selection ensures high quality and reliability in the data acquisition stage and is the key technical guarantee for successful implementation.

![](/images/cases/1780282220214477.png)

**PLC Equipment Acquisition Solution**

![](/images/cases/1780282354130693.png)

The IOT Gateway is an industrial protocol-conversion data acquisition gateway from Shanghai Daq-IoT Technology. It has built-in standard acquisition protocols, industry protocols and acquisition protocols for mainstream PLCs, CNC machine tools and Haitian injection molding machines, supporting data acquisition from over a hundred industrial devices. No software installation is needed — configuration is done in a browser.

It supports MQTT, HTTP, Modbus, OPC UA, TCP, databases and DL/T645 smart meters; data can be converted to JSON and uploaded to a cloud server. It can also work as an ordinary transparent serial server and Modbus gateway. It provides Ethernet/4G/Wi-Fi interfaces and RS232/485/422 serial ports.

DAQ for IIOT is a device data acquisition and management software running on edge computers, used for acquisition, control, storage, query, display and upload of data from various instruments and devices (PLCs, injection molding machines, CNC machine tools, meters, flow meters, etc.).

Main system functions:

- Flexible transmission configuration (link, storage, device, factor, upload service)
- Data acquisition and upload
- Real-time monitoring (device, upload)
- Alarm configuration and monitoring
- Data storage and query (tables, charts, Web API)
- SCADA and visualization design
- User and permission management
- Multi-language interface

Some supported communication links:

| Link type | Communication link |
| --- | --- |
| TCP | TCP client, TCP server |
| Serial | UART |
| UDP | UDP |
| HTTP | HTTP server, HTTP client |
| OPC | OPC-UA, OPC-DA |
| MQTT | MQTT-TCP, MQTT-WebSocket |

Some supported communication protocols:

| Protocol type | Main protocol | Sub-protocol |
| --- | --- | --- |
| PLC protocols | Modbus | Modbus-RTU, Modbus-TCP, Modbus-ASCII |
| | Siemens S7 | - |
| | Mitsubishi MELSEC | MELSEC-1E, -3C, -3E, -4C, -4D, Mitsubishi-Fx |
| OPC protocols | OPC-UA, OPC-DA | - |
| MQTT protocol | MQTT-JSON | - |
| Power meter protocols | DL/T645 | - |
| | DLMS | DLMS-LN, DLMS-SN |
| IEC protocols | IEC62056-21 | - |
| | Edmi Command-Line | - |
| | IEC103, IEC104 | - |
| Environmental monitoring protocols | HJ212 | - |
| | SL651, SZY206 | - |

**6. On-Site Acquisition Implementation**

![](/images/cases/1780282559438245.png)

![](/images/cases/1780282597769275.png)

DAQ FOR IIOT system acquisition; PLC acquisition gateway acquisition

![](/images/cases/1780282714450295.png)

Data storage result

**OEE Data Display**

![](/images/cases/1780282796116459.png)

![](/images/cases/1780282849206481.png)

![](/images/cases/1780282986196798.png)

![](/images/cases/1780283076838990.png)

**Customer Platform Display**

![](/images/cases/1780283143212082.png)

![](/images/cases/1780283184614869.png)

![](/images/cases/1780283250158547.png)

![](/images/cases/1780283318213444.png)

![](/images/cases/1780283389162690.png)

![](/images/cases/1780283431293643.png)
