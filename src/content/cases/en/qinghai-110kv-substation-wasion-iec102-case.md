---
title: "Qinghai 110kV Substation Wasion Energy Terminal IEC102 Data Acquisition Case"
summary: "Qinghai 110kV Substation — Wasion Energy Metering Terminal IEC102 Protocol Data Acquisition Case"
image: "/images/cases/1748570454190429.png"
industry: "光伏新能源"
order: 25
---
**Qinghai 110kV Substation — Wasion Energy Metering Terminal IEC102 Protocol Data Acquisition Case**

**1. Project Background and Requirements**

Location: Xiyu Nonferrous Metals 110kV substation, Golmud City, Haixi Prefecture, Qinghai Province.

Background: a Beijing technology company approached us to acquire data from the substation's Wasion (Wasion Information Technology) energy metering terminal (WFET-3000). The terminal's internal protocol is IEC102, and IEC102 data acquisition had to be implemented.

Purpose and challenges: acquire data from the Wasion energy metering terminal, convert the IEC102 protocol to MODBUS TCP and interface with the host computer — at low cost. IEC102 differs from conventional protocols: it is the standard protocol for transmitting accumulated electrical energy in power systems and uses a layered design with application layer, link layer and other layers, each with strict format and interaction requirements, making it difficult to understand and implement. Data types are diverse (energy data, status data, parameter data, etc.), each with different encoding and transmission rules, adding complexity; protocol details are intricate, including frame format definition, error control mechanisms and link establishment/release procedures — a misreading of any link can cause acquisition failure.

![](/images/cases/1748570454190429.png)

Wasion energy metering terminal

![](/images/cases/1748570504136092.png)

Sample Wasion 102 protocol message

To address the IEC102 acquisition challenges, we developed a custom IEC102 acquisition software and driver, enabling the customer to acquire data in both software and hardware form.

**2. Technical Implementation**

With on-site cooperation from the customer, our DAQ-IoT host-computer data-acquisition software was used. On site, serial wiring connects to the local server (host-computer PC); the host-computer software is installed on the local server and connected by serial cable; test acquisition succeeded, resolving the protocol reading and parsing difficulty. The final deployment was implemented with hardware.

![](/images/cases/1748570593317873.png)

![](/images/cases/1748570604616328.png)

**R&D and testing process**

According to the supplied protocol description and point table, the relevant points were configured in the host software and, after joint debugging, acquisition was implemented.

![](/images/cases/1748570688168254.png)

![](/images/cases/1748570688100322.png)

**Data acquisition example**

After successful protocol acquisition, the Modbus TCP conversion function is provided by hardware — our communication management unit (DAQ-GP-DPU102). The networking is shown below.

![](/images/cases/1748570722177403.png)

Acquisition scheme topology

**3. On-Site Installation and Data Integration**

On site, the energy metering terminal is connected to the communication management unit through a serial port; the unit is powered and wired, and the upper-layer network port outputs Modbus TCP.

![](/images/cases/1748570812108028.png)

![](/images/cases/1748570813119938.png)

![](/images/cases/1748570815796670.png)

Product and on-site installation

**4. Final Data Acquisition Display**

For the acquired data fields, the customer mainly needed the energy values; other data was not pushed. The integrated data example is shown below — data integration was successful.

![](/images/cases/1748570923173364.png)

![](/images/cases/1748570923158184.png)
