---
title: "PV Grid-Connection Project - PV Protocol Converter Distributed PV Regulation Implementation Case"
summary: "PV Grid-Connection Project — PV Protocol Converter for Distributed PV 'Four-Able' Grid Connection"
image: "/images/cases/1735628236168327.png"
industry: "光伏新能源"
order: 22
---
**PV Grid-Connection Project — PV Protocol Converter for Distributed PV "Four-Able" Grid Connection**

**1. Background**

Driven by favorable national policies for distributed PV, installed capacity has grown rapidly across the country. Distributed PV is intermittent, dispersed and random, and with limited capacity at the grid edge, massive PV grid connection can change power-flow direction, cause local voltage violations and misoperation of protection relays.

![](/images/cases/1735628236168327.png)

PV inverter data has gradually become a controlled object of the State Grid. Because inverters on the market differ in type and interface, unified protocol integration is required to achieve standardized grid connection.

![](/images/cases/1735628289184032.png)

Following State Grid's "Three-Year Action Plan for Building a Modern Advanced Measurement System" and the "Typical Design Scheme for Low-Voltage Distributed PV Metering and Acquisition", it is necessary to build the "four-able" capability for low-voltage distributed PV — grid awareness and flexible control — supporting the construction of a "new power system with new energy as the mainstay".

**2. Requirements**

In Hubei and Shaanxi, distributed PV grid-connection projects use existing metering and acquisition resources to build a physical architecture of "acquisition master station + acquisition terminal + smart electricity meter + post-meter smart circuit breaker", achieving observability, measurability, controllability and adjustability (the "four abilities") for low-voltage distributed PV.

**1. Observable** — build a micro-application for centralized operation control of low-voltage distributed PV, enabling online monitoring of the operating status of station-area terminals, smart meters, smart circuit breakers and PV inverters.

**2. Measurable** — full 15-minute-level load data acquisition for all low-voltage distributed PV users. For important station-area PV users and key data, 5-minute acquisition, with 1-minute-level acquisition piloted.

**3. Controllable** — using the observable and measurable data, formulate different control strategies for immediate remote on/off-grid control.

**4. Adjustable** — through extended acquisition and control of PV inverters, pilot flexible regulation of PV output power; through on-site equipment retrofit, achieve single-household flexible control and group dispatch/group control.

**3. Implementation**

The PV protocol converter (DAQ-GP-485HPLC) converts inverter data from the Modbus RTU protocol to the State Grid 698.45 protocol, and is controlled by State Grid through power-line carrier communication (HPLC).

![](/images/cases/1735628328107752.png)

Implementation network topology

![](/images/cases/1735628355706173.png)

Installation diagram

Depending on the type, model and interface of the on-site inverter, an RS485 direct connection can also be used to connect the PV protocol converter alone (eliminating the interface converter).

**4. Partial Results**

![](/images/cases/1735628394100470.png)

![](/images/cases/1735628404183159.png)

![](/images/cases/1735628425164080.png)

Aishiwei (Aiswei) inverter implementation case

![](/images/cases/1735628441588929.png)

![](/images/cases/1735628449372996.png)

Chint inverter implementation case

![](/images/cases/1735628456707638.png)

![](/images/cases/1735628459138413.png)

GoodWe inverter implementation case (RS485 direct connection)

| No. | Inverter manufacturer | Inverter model | Inverter brand | Collector port | Remark |
| --- | --- | --- | --- | --- | --- |
| 1 | Chint | GFX-A series | Aiswei | 1. USB collector stick 2. Network port (RS485 direct) | Acquisition successful |
| 2 | Chint | GFX-D series | GoodWe | 1. USB collector stick 2. RS485 direct (6-pin / 8-pin / clamp terminal) | Acquisition successful |
| 3 | Chint | GFX-K series | Kstar | 1. RS485 direct (4-pin COM port) | Acquisition successful |
| 4 | - | - | Growatt | 1. USB collector stick 2. RS485 direct (4-pin) | Acquisition successful |
| 5 | - | - | Sofar | 1. USB collector stick 2. RS485 direct (16-pin COM port) | Acquisition successful |
| 6 | - | - | Sineng | 1. RS485 direct (8-pin COM port) | Acquisition successful |
| 7 | GoodWe | GwK100-GT | GoodWe | 1. USB collector stick (not implemented) 2. RS485 direct (8-pin COM port) | Acquisition successful |
| 8 | Maysun (Maitian Energy) | T25Pro, T15Pro | Maitian | 1. RS485 direct (8-pin COM port) | Acquisition successful |

**5. Physical Interfaces of Mainstream Inverters**

![](/images/cases/1735628527103818.png)

Aiswei inverter (RS485 direct to network port; collector stick to USB port)

![](/images/cases/1735628731145162.png)

Kstar (4-pin aviation connector)

![](/images/cases/1735628897785993.png)

Growatt (RS485 direct 4-pin aviation connector; collector stick is USB232)

![](/images/cases/1735628916109607.png)

Sofar (RS485 direct 16-pin COM port; USB232)

![](/images/cases/1735628810109232.png)

GoodWe (RS485 direct 8-pin COM port; collector stick USB)
