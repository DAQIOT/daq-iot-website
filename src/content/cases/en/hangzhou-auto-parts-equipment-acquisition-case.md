---
title: "Hangzhou XX Auto Parts Equipment Acquisition Case"
summary: "Hangzhou Auto Parts Equipment Acquisition Project Case"
image: "/images/cases/1742539246129094.png"
industry: "智能制造"
order: 33
---
**Hangzhou Auto Parts Equipment Acquisition Project Case**

**1. Project Background**

Through policy and funding support, Hangzhou digital workshops aim to improve production efficiency, product quality and user experience, ultimately achieving intelligent transformation and high-quality development of manufacturing and enhancing enterprise competitiveness.

**2. Project Requirements and On-Site Survey**

Requirements: acquire machine process parameters; remote upload/download of machine NC programs; remote PLC control of equipment start/stop. Real-time data acquisition and analysis together with the MES system to build an intelligent, digital workshop, improving production efficiency, reducing operating costs and achieving an efficient, intelligent and customized production mode.

Plant situation: isolated equipment with no information exchange, relying on manual equipment management — serious waste of human resources and low production efficiency.

![](/images/cases/1742539246129094.png)

![](/images/cases/1742539276761476.png)

![](/images/cases/1742539332752607.png)

![](/images/cases/1742539365207154.png)

![](/images/cases/1742539486157311.png)

Equipment list:

| No. | Equipment | System | Brand | Model | Available interface | Authorization required |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FANUC machine tool | CNC | FANUC | 0i-TF | RJ45 | No |
| 2 | KND machine tool | CNC | KND | K2000TFi | RJ45 | No |
| 3 | PLC | PLC | Omron | CP1E | Serial | No |
| 4 | Device without interface | MCU | / | / | None | No |

**3. Data Acquisition Architecture**

Through Shanghai Chengying Zhitong's smart gateway, data from the three device types (machine tools, PLC and MCU) is acquired to an edge server and stored in a SQL Server database; the MES system reads the data from the database, analyzes and processes it and displays it on a large screen.

![](/images/cases/1742539534104077.png)

**4. On-Site Implementation**

Machine tools: the FANUC and KND machine tools have built-in serial ports; the smart gateway connects to them with a network cable and then joins the workshop production network over Wi-Fi, achieving data acquisition and NC program upload/download. PLC: the Omron controller connects to the smart gateway through a serial port and then joins the workshop network over Wi-Fi for data acquisition; the MES issues device start/stop signals according to work orders, achieving device reverse control. Legacy equipment: the MCU controller has no interface; an IO module acquires device status signals through relays and then joins the workshop network over Wi-Fi.

![](/images/cases/1742539583138838.png)

![](/images/cases/1742539623155468.png)

The smart gateway acquires machine process parameters and uploads/downloads NC programs through the network port

![](/images/cases/1742539685860896.png)

![](/images/cases/1742539702368164.png)

![](/images/cases/1742539723189971.png)

**5. Data Acquisition, Storage and Display**

- Gateway acquires KND machine tool data

![](/images/cases/1742539762331624.png)

- Gateway acquires FANUC machine tool data

![](/images/cases/1742539812871260.png)

- IO module acquires device signal data

![](/images/cases/1742539832201439.png)

- Data written to SQL Server database

![](/images/cases/1742539892824127.png)

- Data display

![](/images/cases/1742539923488281.png)

**6. Equipment Connection Status**

| No. | Equipment | System | Brand | Model | Interface | Acquisition | Connected |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | FANUC machine tool | CNC | FANUC | 0i-TF | RJ45 | Wireless | Yes |
| 2 | KND machine tool | CNC | KND | K2000TFi | RJ45 | Wireless | Yes |
| 3 | PLC | PLC | Omron | CP1E | Serial | Wireless | Yes |
| 4 | Device without interface | MCU | / | / | None | Wireless | Yes |

**7. Project Results**

Combining IoT and MES to build an intelligent workshop delivered benefits in data acquisition and real-time monitoring, production-process optimization, quality control, equipment maintenance and management, resource optimization, production visualization, collaborative work, safety and compliance, and innovation and continuous improvement. This combination helped the customer improve production efficiency and product quality while reducing production costs and resource consumption.
