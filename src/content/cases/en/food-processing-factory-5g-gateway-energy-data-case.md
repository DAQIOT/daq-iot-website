---
title: "Noodle/Food Processing Factory 5G Smart Gateway Energy Data Acquisition Case"
summary: >-
  Noodle / Food Processing Factory Distribution Room — 5G Smart Gateway Energy Data Acquisition with Private-Network Reporting
image: "/images/cases/1788249078593365.png"
industry: "智能制造"
order: 49
---
**Noodle / Food Processing Factory Distribution Room — 5G Smart Gateway Energy Data Acquisition with Private-Network Reporting**

**1. Project Overview**

Driven by "dual carbon" and green manufacturing policies, a noodle/food processing factory is advancing its energy digital upgrading. Twenty-five Acrel multifunction electricity meters are deployed in the plant's distribution room for zonal statistics of production equipment and workshop circuit energy. The original manual meter-reading mode suffered from lagging data, large errors and no real-time supervision, and could not support energy-carbon analysis and energy-saving control.

![](/images/cases/1788249078593365.png)

![](/images/cases/1788249084201805.png)

![](/images/cases/1788249122153772.png)

![](/images/cases/1788249150682799.png)

On-site instrument types and distribution

The project core uses the Shanghai Daq-IoT 5G smart gateway (5G communication management unit). Leveraging the device hardware and its built-in industrial data acquisition system, it performs Modbus protocol parsing of meters and edge data processing, then uploads energy data to the energy-carbon management platform over the plant 5G private network using MQTT, building a full-chain digital energy management system.

**2. Key On-Site Challenges**

- The distribution room's electromagnetic environment is complex; conventional gateway serial communication is easily disturbed and data transmission unstable.
- Meter data is isolated, lacking protocol conversion and remote transmission, and cannot connect to a cloud platform.
- Plant cabling is difficult and wired-network retrofit costly; ordinary wireless networks cannot meet industrial-grade transmission requirements.
- Traditional acquisition devices have no local caching or fault self-healing, so network fluctuations easily cause data loss and system downtime.

![](/images/cases/1788249212980215.png)

![](/images/cases/1788249219206315.png)

**3. Solution Design**

3.1 Overall architecture

A three-layer architecture of edge acquisition - 5G transmission - cloud application is used, with the 5G smart gateway as the edge core of the whole system handling data acquisition, protocol conversion, edge computing and network transmission: 25 Acrel meters -> RS485 bus -> 5G smart gateway (acquisition, parsing, pre-processing, storage, protocol conversion) -> 5G private network (MQTT) -> energy-carbon management platform.

![](/images/cases/1788249234143983.png)

3.2 Smart gateway (5G communication management unit)

![](/images/cases/1788249271149617.png)

The industrial-grade 5G smart gateway selected is purpose-built for industrial power distribution and IoT acquisition scenarios, fully matched to the harsh on-site environment:

- Anti-interference acquisition interfaces: four fully independent isolated RS485 interfaces, each able to host multiple meters, with three-level lightning and ESD protection meeting the GB/T17626.5-2019 4KV standard, fully resisting strong electromagnetic interference and guaranteeing long-term stable communication for 25 meters. Two RS232 interfaces are also provided for future expansion.
- Industrial-grade reliable protection: DC9-48V/AC12-30V ultra-wide voltage input with reverse-polarity, over-voltage and burst protection; operating temperature -40 to 85 degC, suiting the high temperature and large temperature swings of the distribution room. Galvanized steel chassis with standard DIN-rail mounting for direct embedding in the distribution cabinet.
- High-performance edge computing: 4-core 1.4GHz A9 processor, 512MB DDR3 memory and 8GB onboard eMMC for concurrent acquisition from 25 meters, protocol parsing and data aggregation. An onboard TF-card slot allows local caching of massive energy data with automatic storage during outages and breakpoint re-transmission when connectivity returns.
- Native 5G communication: an industrial-grade 5G module supporting SA/NSA dual mode and mainstream domestic 5G bands, with two standard SMA antenna interfaces. Using the 5G private network's low latency, high bandwidth and high security, it transmits data over MQTT with latency below 20ms, meeting real-time industrial reporting. The module supports multi-antenna MIMO and 256QAM, far exceeding 4G and traditional wired networks.
- Long-term maintenance design: integrated hardware watchdog, fault self-recovery circuit and RTC backup battery for 7x24 unattended operation with automatic restart on abnormal states. A built-in encryption chip and unique device ID protect acquired data against tampering and leakage. Maximum average power consumption <= 10W.

3.3 Gateway built-in software system

The gateway comes pre-installed with a self-developed general industrial data acquisition system in an integrated hardware-software design, with no extra acquisition devices required:

![](/images/cases/1788249308655800.png)

1. Natively supports Modbus-RTU and connects directly to Acrel multifunction meters, quickly reading voltage, current, energy consumption, power factor and other electrical parameters, with customizable acquisition frequency and communication parameters.
2. Integrates a standard MQTT upload driver; one-click configuration of the reporting topic and encryption rules connects seamlessly to the energy-carbon platform and automatically performs Modbus-to-MQTT conversion.
3. Supports data cleaning, unit conversion and edge pre-processing to reduce invalid uploads and cloud-side load; a built-in threshold alarm triggers a local buzzer alarm for electrical overload or communication loss.
4. Provides a web visual management page supporting remote configuration, parameter changes and system upgrades.

**4. Project Implementation**

Based on the meter locations, the gateway installation position and antenna layout were planned, a 5G private-network MicroSIM card was activated and the corresponding Modbus and MQTT drivers were pre-loaded. The gateway was DIN-rail mounted in the distribution cabinet with power supply and reliable grounding completed. Four 5G antennas were installed separately to avoid signal obstruction, and shielded twisted-pair cable connected the 25 meters to the gateway RS485 interfaces in daisy-chain fashion.

![](/images/cases/1788249338133431.png)

![](/images/cases/1788249374559828.png)

Gateway system configuration: log in to the gateway management page through a browser to configure serial communication parameters, meter device information, acquisition factors and local storage policy; set MQTT reporting parameters to connect to the cloud energy-carbon platform; configure alarm rules for abnormal power use and communication faults.

Joint debugging and testing: observe the 5G module indicator to confirm connectivity and data transmission; simulate a network outage to verify local caching and breakpoint re-transmission; run a 72-hour trial to optimize acquisition and transmission parameters.

**5. Project Results**

5.1 Core functions delivered

![](/images/cases/1788249403177700.png)

5.2 Scenario fit — the gateway's industrial-grade hardware and multiple protection designs fit the distribution room's strong electromagnetic, wide-temperature, unattended environment perfectly, running stably for the long term with no frequent on-site maintenance. The integrated solution reduces device count, lowering hardware cost and cabling complexity compared with a "collector + router + transmission terminal" combination.

5.3 Business value — the full energy data aggregated by the gateway provides an accurate data source for the energy-carbon platform, supporting energy statistics, load analysis and carbon-emission accounting. Using the analysis, the enterprise optimized its energy strategy and achieved a comprehensive power-saving rate of 8%-12%; abnormal power use triggers linked alarms through the gateway, allowing timely troubleshooting of distribution hazards and stable production-line operation.

5.4 Scalability and O&M value — the gateway reserves multiple interfaces and rich protocol drivers, allowing fast later connection of water meters, gas meters and other metering devices for unified multi-energy acquisition. It supports remote debugging, configuration import/export and system upgrades; across plants, data can be aggregated centrally over the 5G private network.
