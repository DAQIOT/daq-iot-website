---
title: "Factory Production Number/Model/Actual-Target Output Electronic Kanban with Infrared Sensor Display"
summary: "LED production board"
image: "/images/products/1773280084587575.png"
order: 253
category: "plcacquisition"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1773280036129746.png)

LED production board

![](/images/products/1773280059108678.png)

Control-room large-screen board

This electronic display board, model DAQ-GP-Dashboard, is designed by Shanghai Daq-IoT Technology for real-time visual management of workshop production lines. It uses a high-brightness LED dot-matrix display and works with infrared sensors to automatically collect actual output. It supports production-model entry, planned/real-time target output setting, production takt monitoring and automatic completion-rate calculation, and retains data after power loss. It suits production lines and single-machine capacity monitoring in all kinds of manufacturing workshops.

**2 Ordering Specifications and Selection**

Custom manufacturing service — Daq-IoT provides one-to-one dedicated customization to support efficient production and easy management. Customization includes:

(1) Dedicated solution design: board content tailored to the user's production scenario
(2) Multiple sizes: choose the size that matches the installation requirement
(3) Multiple data-collection methods: adapt to different factories' acquisition needs
(4) Complete accessories: optional accessories selected as required

**Configurable Field Names (Reference)**

| Field | Field | Field |
| --- | --- | --- |
| Line / production line name | Actual output | Production takt |
| Achievement rate | Date and time | Standard efficiency |
| Cumulative completion | Standard hourly output | Downtime |
| Output per capita | Notification bar | Team leader (manager) |
| Output value per capita | Defect quantity | Expected attendance |
| Defect rate | Equipment number | Actual efficiency |
| Production date | Actual hourly output | Units started |
| Remarks | Target output | Timely output |
| Actual attendance | Utilization rate | First-pass yield |
| Monthly plan | Faulty station | Running time |
| Order number | Product model | Remaining output |

Display can also be defined by the user.

**4 Product Characteristics**

**4.1 Electrical Characteristics**

- Operating voltage: AC220V +-10%, 50Hz
- Overall power consumption: <= 50W
- Standby power consumption: <= 5W
- Fuse rating: 5A/250V

**4.2 Communication Characteristics**

- Communication interfaces: RS485/RS232/Ethernet (optional)
- Communication protocol: Modbus-RTU/TCP (default); user-defined protocols supported
- Transmission rate: 9600bps-115200bps (RS485), 10/100Mbps (Ethernet)
- Communication distance: RS485 <= 1200 m, Ethernet <= 100 m

**4.3 Structural Characteristics**

- Display material: LED dot-matrix screen, readable in strong outdoor light
- External dimensions: customized (standard 600 x 400 x 50 mm / 800 x 500 x 70 mm)
- Mounting: wall-mounted
- Protection rating: IP54 (indoor)

**4.4 Operating Environment**

- Operating temperature: -10 degC to 40 degC
- Storage temperature: -20 degC to 60 degC
- Relative humidity: <= 85% RH (non-condensing)
- Altitude: <= 2000 m

**5 Core Advantages**

1. Accurate counting: infrared sensor response <= 200 ms, counting error <= 0.1%, with anti-jitter filtering.
2. Flexible configuration: production model, target output, takt and other parameters can be changed quickly with a remote control, suiting high-mix low-volume production.
3. Data interoperability: integrates with MES, ERP and similar systems for automatic upload and analysis of production data.
4. High reliability: industrial-grade components with an MTBF of >= 50,000 hours.
5. Easy maintenance: modular design for fast fault location; parts can be replaced without special tools.
6. Core function: improves production efficiency and optimizes the management system, helping factories achieve visualized production-data management. Custom manufacturing, simple operation and a five-year warranty are provided.

# **6 Data Reporting Communication Protocol**

**6.1 Protocol Parsing**

- Protocol type: Modbus-RTU/TCP (default); user-defined protocols supported
- Data-frame structure: address code + function code + data field + check code
- Reported data: production model, planned output, real-time target, actual output, completion rate, line status, etc.
- Reporting period: 1s-60s (configurable)

**6.2 Protocol Reception Test**

- Test tools: Modbus Poll / serial debugging assistant
- Test steps:
(1) Configure communication parameters (baud rate, data bits, parity).
(2) Send a read command and verify the data-frame format and content.
(3) Simulate changes in line status and check that the reported data updates accordingly.

**6.3 Protocol Customization**

- Protocol fields, data format and reporting logic can be customized to the user's platform requirements.
- Customization lead time: about 7-15 working days, with protocol documentation and test tools provided.

7 Platform Integration

**7.1 Default Platform**

- Platform: the company's own production management platform (ProMan)
- Connection: Ethernet / RS485
- Functions: real-time data display, historical queries, report generation, abnormal-condition alarms

**7.2 User-Specified Platform**

- Supports integration with mainstream industrial software such as MES, ERP and SCADA.
- Process: requirement confirmation -> protocol development -> joint debugging and testing -> go-live acceptance.
- Deliverables: integration documentation, SDK, test report.

# **8 Precautions**

1. Installation, wiring and repair must be carried out by a professional electrician; never work with the power on.
2. Do not expose the device to rain, water immersion or direct sunlight; keep it away from heat and ignition sources.
3. Avoid squeezing, pulling or scratching the sensor cable.
4. Clean the screen and sensor probe regularly; do not use corrosive solvents.
5. Cut off the power during long shutdowns and protect against moisture and dust.
6. Do not disassemble or modify the device yourself, otherwise the warranty is void.
7. If smoke, odor or abnormal noise occurs, cut off the power immediately and contact our after-sales service.
