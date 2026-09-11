---
title: "Auto Parts Manufacturing PLC Data Acquisition & Host Computer Display Case"
summary: "Auto Parts and Accessories Manufacturing PLC Data Acquisition and Host Display Case"
image: "/images/cases/1780033454703399.png"
industry: "智能制造"
order: 39
---
**Auto Parts and Accessories Manufacturing PLC Data Acquisition and Host Display Case**

**1. Project Background and Requirements**

Background: in the production of precision automotive pipes, control of process parameters in core processes such as copper plating and machining leak testing is the key factor determining product quality. The temperature in copper plating and the pressure and pressure drop in machining leak testing directly affect the yield rate. To solve the problems of traditional production mode — inefficient manual recording of core-process data, large errors, poor real-time performance, and the inability to automatically collect and count good products — the company proposed targeted data monitoring and set out to carry out industrial data acquisition and visualization in its copper pipe manufacturing workshop.

Site: Qingdao, Shandong. Qingdao Seah Precision Pipe Fittings Co., Ltd. is a wholly foreign-owned enterprise under the Korean SEAH Group specializing in automotive precision pipe fittings. Founded in August 2007 in Huangdao District, Qingdao, its core products are automotive brake pipes and high-pressure fuel steel pipes, and it is a supply-chain partner of several well-known automakers.

![](/images/cases/1780033454703399.png)

Requirement: data monitoring for the copper pipe manufacturing workshop — acquire temperature data from 2 PLCs and 1 heating furnace. The Mitsubishi PLC is associated with the lead-acid battery steel-pipe copper-plating process temperature, and the Omron PLC with the machining workshop's leak tester. Acquired data is displayed on a host-computer large screen, ultimately achieving automatic collection and recording of good production counts.

![](/images/cases/1780033515213114.png)

![](/images/cases/1780033528178611.png)

On-site associated PLCs (Mitsubishi PLC CPU Q06H and Omron PLC NX1P2-PORT1)

Implementation difficulties: 1) PLC data acquisition must judge status from multiple data items and display the result once the criteria are met, but the production data status bit is retained only briefly — data acquisition, status judgment and result presentation must be completed within 5 seconds. 2) The imported Japanese temperature instrument has no accompanying point table; the point table of a similar domestic instrument had to be used for repeated trial and error to find the correct point table and achieve data acquisition.

![](/images/cases/1780033583143150.png)

On-site temperature instrument (Japanese CHINO DB600 series digital instrument)

**2. Technical Solution**

With the customer's on-site cooperation, hardware acquisition is implemented with our DAQ-IoT communication management unit (IOT Gateway) and a Wi-Fi/network-port smart acquisition terminal (DAQ-GP-LAN). The host computer uses our general industrial data acquisition system (DAQ FOR IIOT) to finally acquire and display the temperature instrument and PLC data.

![](/images/cases/1780033639165807.png)

![](/images/cases/1780033705609679.png)

Based on the supplied point table, acquisition was implemented after joint debugging. After successful data acquisition, the host-computer general industrial data acquisition system performs logical judgment of data status bits and page configuration display; the networking is shown below.

![](/images/cases/1780033761351966.png)

Data acquisition solution diagram

**3. On-Site Installation and Debugging**

On site, the data signal lines of the Mitsubishi and Omron PLCs have already been aggregated to a switch. Our PLC acquisition gateway is configured to access the PLCs directly through the switch without occupying the PLCs' original communication interfaces.

![](/images/cases/1780033819534746.png)

![](/images/cases/1780033830188420.png)

For host-computer data presentation and integration debugging, the on-site touchscreen process data was compared, the corresponding status bits were acquired for logical judgment, and the data display page was debugged and integrated.

![](/images/cases/1780033925206458.png)

![](/images/cases/1780033954135921.png)

![](/images/cases/1780033975109501.png)

For the temperature instrument, based on past acquisition experience and existing reference point-table material, an RS485 wiring connection was used to acquire the temperature values.

![](/images/cases/1780033993147209.png)

**4. Final Data Display**

Grouped by PLC process channel, with temperature and similar values grouped, the final display presents production temperatures and pressures, the number of qualified good products, and so on, with the results below.

![](/images/cases/1780034082180563.png)

![](/images/cases/1780034108170736.png)

As required by the customer, the host-computer software also retains an external API for later integration with third-party systems, and historical data can be stored in mainstream databases.
