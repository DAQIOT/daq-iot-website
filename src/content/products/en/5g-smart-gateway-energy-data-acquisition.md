---
title: "5G Smart Gateway for Energy Consumption Data Acquisition"
summary: >-
  The project is centered on a Shanghai Daq-IoT 5G smart gateway (5G communication management unit). Leveraging the device hardware and its built-in industrial data-acquisition system, it performs Modbus protocol parsing of electric…
image: "/images/products/1788168585517856.jpg"
order: 259
category: "plcacquisition"
hidden: false
---
**Product Details**

## 1. Project Overview

The project is centered on a **Shanghai Daq-IoT 5G smart gateway (5G communication management unit)**. Leveraging the device hardware and its built-in industrial data-acquisition system, it performs Modbus protocol parsing of electricity meters and edge data processing, then uploads energy-consumption data to an energy-and-carbon management platform over a plant 5G private network using the MQTT protocol, building a full-chain digital energy management system.

## 2. Key On-Site Challenges

- The electromagnetic environment of the distribution room is complex; conventional gateway serial communication is easily disturbed and data transmission is unstable.
- Meter data is isolated, lacking a protocol-conversion and remote-transmission carrier, and cannot connect to a cloud platform.
- Cabling in the plant is difficult and wired-network retrofit costs are high; ordinary wireless networks cannot meet industrial-grade transmission requirements.
- Traditional acquisition devices have no local caching or fault self-healing, so network fluctuations easily cause data loss and system downtime.

## 3. Solution Design

### 3.1 Overall Architecture

A three-layer architecture of **edge acquisition - 5G transmission - cloud application** is used. The **5G smart gateway is the edge core of the whole system**, handling data acquisition, protocol conversion, edge computing and network transmission: 25 Acrel meters -> RS485 bus -> 5G smart gateway (acquisition, parsing, pre-processing, storage, protocol conversion) -> 5G private network (MQTT) -> energy-and-carbon management platform.

![](/images/products/1781144763199209.png)

3.2 Smart Gateway (5G Communication Management Unit)

![](/images/products/1781144820140234.png)

The industrial-grade 5G smart gateway selected for this project is purpose-built for industrial power distribution and IoT acquisition scenarios, with hardware performance fully matched to the harsh on-site environment:

**Anti-interference acquisition interfaces:** four fully independent isolated RS485 interfaces, each able to host multiple meters, equipped with three-level lightning and ESD protection circuits that meet the GB/T17626.5-2019 4KV lightning protection standard — fully resisting the strong electromagnetic interference of the distribution room and guaranteeing long-term stable communication for 25 meters. Two RS232 interfaces are also provided for future device expansion.

**Industrial-grade reliable protection:** supports DC9-48V/AC12-30V ultra-wide voltage input with reverse-polarity, over-voltage and burst protection; operating temperature **-40 degC to 85 degC**, suiting the high-temperature and large-temperature-swing conditions of a distribution room. The chassis is galvanized steel and supports standard DIN-rail mounting, allowing direct embedding in the distribution cabinet for easy installation and maintenance.

**High-performance edge computing:** a 4-core 1.4GHz A9 processor, 512MB DDR3 memory and 8GB onboard eMMC storage provide ample computing power for concurrent data acquisition from 25 meters, protocol parsing and data aggregation. An onboard TF-card slot enables local caching of massive energy-consumption data; during network outages data is stored automatically and re-transmitted from the breakpoint when connectivity returns, eliminating data loss.

**Native 5G communication:** an industrial-grade 5G module supporting **SA/NSA dual mode** and mainstream domestic 5G bands, with two standard SMA antenna interfaces for strong signal reception. Leveraging the low latency, high bandwidth and high security of the 5G private network, it transmits data over MQTT with latency below 20ms, meeting real-time industrial data reporting requirements. The module supports multi-antenna MIMO and 256QAM modulation, with transmission rate and stability far exceeding 4G and traditional wired networks.

**Long-term maintenance design:** integrated hardware watchdog, fault self-recovery circuit and RTC backup battery enable 7x24 unattended operation with automatic restart and repair on abnormal states. A built-in encryption chip and unique device ID encrypt and protect acquired data against tampering and leakage, meeting industrial information-security requirements. The whole unit is low-power, with maximum average power consumption <= 10W.

### 3.3 Gateway Built-in Software System

The gateway comes pre-installed with a self-developed general industrial data-acquisition system in an integrated hardware-software design, with no extra acquisition devices required:

1. Natively supports the Modbus-RTU protocol and can connect directly to Acrel multifunction meters, quickly reading voltage, current, energy consumption, power factor and other electrical parameters, with customizable acquisition frequency and communication parameters.
2. Integrates a standard MQTT upload driver; one-click configuration of the reporting topic and encryption rules connects seamlessly to the energy-and-carbon management platform and automatically performs Modbus-to-MQTT protocol conversion.
3. Supports data cleaning, unit conversion and edge pre-processing to reduce invalid uploads and cloud-side load; a built-in threshold alarm can trigger a local buzzer alarm for faults such as electrical overload or communication loss.
4. Provides a web visual management page supporting remote configuration, parameter changes and system upgrades for simple, efficient on-site commissioning and later maintenance.

## 4. Project Implementation

Based on the meter locations, gateway installation positions and antenna layout were planned, a 5G private-network MicroSIM card was activated, and the corresponding Modbus and MQTT drivers were pre-loaded in the gateway. The gateway was DIN-rail mounted in the distribution cabinet with power supply and reliable grounding completed. Four 5G antennas were installed separately to avoid signal obstruction, and shielded twisted-pair cable was used to connect the 25 meters to the gateway RS485 interfaces in daisy-chain fashion.

![](/images/products/1781144882148869.png)

**Gateway system configuration:** log in to the gateway management page through a browser to configure serial communication parameters, meter device information, acquisition factors and local storage policy; set MQTT reporting parameters to connect to the cloud energy-and-carbon platform; and configure alarm rules for abnormal power use and communication faults.

**Joint debugging and testing:** observe the gateway's 5G module indicator to confirm 5G connectivity and data-transmission status; simulate a network outage to verify local caching and breakpoint re-transmission; run a 72-hour trial to optimize gateway acquisition and transmission parameters.

## 5. Project Results

### 5.1 Core Functions Delivered

Leveraging the 5G smart gateway, acquisition, parsing, conversion, transmission and storage run as one integrated process. Data from 25 meters is collected automatically 7x24 with 99.9% accuracy; the 5G private network plus MQTT encrypted transmission uploads data in real time and securely, with no packet loss or disconnection throughout. The gateway's local caching completely solves data loss caused by network fluctuations.

![](/images/products/1781144993212345.png)

### 5.2 Scenario Fit

The gateway's industrial-grade hardware and multiple protection designs fit the strong electromagnetic, wide-temperature, unattended environment of the distribution room perfectly, running stably for the long term with no frequent on-site maintenance. The integrated hardware-software solution reduces device count, lowering hardware cost and cabling complexity compared with a "collector + router + transmission terminal" combination.

### 5.3 Business Value

The full energy-consumption data aggregated by the gateway provides an accurate data source for the energy-and-carbon platform, supporting enterprise energy statistics, load analysis and carbon-emission accounting. Using the data analysis, the enterprise optimized its energy-use strategy and achieved a comprehensive power-saving rate of 8%-12%; abnormal power use triggers linked alarms through the gateway, allowing timely troubleshooting of distribution hazards and stable operation of the production line.

### 5.4 Scalability and O&M Value

The gateway reserves multiple interfaces and rich protocol drivers, allowing fast later connection of water meters, gas meters and other metering devices for unified multi-energy acquisition. It supports remote debugging, configuration import/export and system upgrades, and across plants data can be aggregated centrally over the 5G private network — highly scalable.
