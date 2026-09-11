---
title: "Atlas Air Compressor Cluster Intelligent Linkage Control & Data Visualization System Case"
summary: "Atlas Air Compressor Cluster Intelligent Linkage Control and Data Visualization System Case"
image: "/images/cases/1780034545315895.png"
industry: "智能制造"
order: 40
---
**Atlas Air Compressor Cluster Intelligent Linkage Control and Data Visualization System Case**

**1. Project Background** — Project time: January 2026

Customer background and pain points:

- The plant has 4 ATLAS brand air compressors (currently 2 on site, with 2 more to be added) supplying stable air to the production line.
- Each compressor runs independently, relying on manual inspection rounds to record operating parameters (pressure, temperature, etc.); data is scattered and cannot be centrally monitored.
- Equipment start/stop and rotation depend on manual operation, risking forgotten switching and uneven loading, affecting equipment life.
- When one machine fails, the operating strategy cannot be adjusted automatically in time, possibly affecting the production air supply.
- Lack of historical data traceability makes energy-efficiency analysis and preventive maintenance difficult.

**2. Project Objectives and Customized Requirements**

The customer wanted a centralized monitoring and intelligent linkage-control system with the following functions:

1. Centralized data visualization: real-time operating status of each unit, including running time and the low-pressure and high-pressure main machine's inlet temperature, outlet temperature, inlet pressure, outlet pressure, oil pressure and oil temperature, acquired in real time from the controllers and displayed centrally on a unified large-screen kanban.
2. Intelligent rotation control: automatic sequential rotation of the 4 machines, each running in turn for 6 hours (configurable), with 1 running and the other 3 off — balancing equipment wear and extending overall life. Rotation time is flexibly configurable.
3. On-demand intelligent start/stop: automatically control equipment start/stop based on pipe-network pressure. When the end pressure falls below the set lower limit (configurable), a standby machine starts automatically to supplement; when the target pressure is reached, the original main machine keeps running and the standby stops. If the main machine fails and stops, it is automatically removed and the other machines continue automatic sequential control, achieving energy-saving operation.
4. High availability: when a running main machine fails, the system must safely isolate it from the running queue automatically and automatically enable a standby device to keep the air supply uninterrupted.
5. Flexible control modes: manual control is retained, with switching between "auto" and "manual" modes; both upper and lower pressure limits are configurable for special operating needs.

**3. Solution**

We provided an integrated hardware-software customized solution based on "intelligent industrial gateway + self-developed data acquisition platform + SCADA visualization software".

1. Hardware interface layer: using the Atlas air compressor data acquisition gateway (DAQ-GP-AMmodbus) to communicate stably with each compressor's controller over the standard Modbus RTU protocol. The gateway connects to the compressor panel through a DB9 compressor interface for one-to-many data acquisition, protocol conversion and preliminary data processing, and uploads data over Modbus RTU to a locally deployable offline general industrial data acquisition system.

![](/images/cases/1780034545315895.png)

Figure 1 Air compressor gateway

![](/images/cases/1780034633128796.png)

Figure 2 On-site Atlas air compressor panel

2. Data and logic core layer: deploy our self-developed general industrial data acquisition system to accurately parse the device point table and achieve second-level real-time acquisition and storage of all compressor parameters (with support for various databases). A custom-developed linkage-control logic engine is built in to reliably execute core control strategies such as "automatic rotation", "on-demand start/stop" and "faulty-device removal", ensuring stable and accurate logic.

3. Application display layer: a tailor-made industrial SCADA monitoring large screen, intuitively designed with:

- Device status overview: the running/stopped/fault status of the four machines at a glance.
- Real-time data panel: centralized display of all key temperature and pressure parameters.
- Intelligent linkage panel: set rotation time and pressure upper/lower limits, and show the current main machine and queue order.
- Manual control panel: independent device start/stop buttons and manual/auto mode switching.
- Historical trend curves: queryable trends of key parameters for fault analysis and energy-efficiency management.
- Automatic alarm system: pops up and records alarm information when equipment is abnormal.

![](/images/cases/1780037502316076.png)

Figure 3 General industrial data acquisition system page

![](/images/cases/1780037668861947.png)

Figure 4 Large-screen interface in manual control mode

![](/images/cases/1780037709906685.png)

Figure 5 Large-screen interface in automatic control mode

**4. Project Results**

- Visualization of management: duty staff fully grasp each compressor's status at the industrial PC, ending manual inspection rounds and improving management efficiency.
- Automated control: full automatic rotation and on-demand start/stop avoid human operating errors, balance equipment utilization and extend overall equipment life.
- Energy-saving operation: precise on-demand start/stop control avoids ineffective running and achieves significant energy savings.
- High system availability: rapid isolation of faulty equipment and seamless takeover by standby equipment greatly ensure the stability of the production air supply and reduce unplanned downtime risk.
- Digitalized maintenance: complete operating history provides accurate data support for preventive maintenance, shifting from "repair after failure" to "early-warning maintenance".

**5. On-Site Photos**

![](/images/cases/1780037825133580.png)
