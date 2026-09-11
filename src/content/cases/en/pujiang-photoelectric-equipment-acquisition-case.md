---
title: "Pujiang XX Photoelectric Equipment Acquisition Case"
summary: "Pujiang Photoelectric Equipment Acquisition Project Case"
image: "/images/cases/1742541077118693.png"
industry: "智能制造"
order: 35
---
**Pujiang Photoelectric Equipment Acquisition Project Case**

**1. Project Background**

With the rapid development of IoT technology, Pujiang XX Photoelectric Technology Co., Ltd., a leading enterprise in LED displays and lighting, is actively embracing digital transformation. By introducing an IoT platform with an MES system it optimizes production processes, improves product intelligence and opens new business models, aiming to stay ahead in fierce market competition.

**2. Project Requirements and On-Site Survey**

Acquire equipment process parameters and, together with the MES system, build an intelligent digital workshop with real-time kanban display of workshop conditions.

Plant situation: low equipment utilization, lack of real-time monitoring and early warning, delayed problem discovery and resolution, difficult quality control, and no good method for efficiency improvement.

![](/images/cases/1742541077118693.png)

Injection molding workshop

![](/images/cases/1742541099466620.png)

SMT workshop

![](/images/cases/1742541115183308.png)

![](/images/cases/1742541150111996.png)

![](/images/cases/1742541170540892.png)

Wave soldering equipment

![](/images/cases/1742541196147713.png)

Equipment list (22 devices):

| No. | Equipment | Model | Requirement | Acquisition method | Network |
| --- | --- | --- | --- | --- | --- |
| 1-3 | Lead-free hot-air reflow oven | FLW-KR1060 | Zone temperature, ambient temperature, actual temperature | OCR recognition acquisition | Wireless |
| 4 | Reflow oven | JTR-1000 (10 zones) | Zone set temperature, zone actual temperature | - | Wireless |
| 5 | Full hot-air reflow oven | HS-0802 | Zone temperature, ambient temperature, actual temperature | HTTP protocol | Wireless |
| 6 | Wave soldering | E-FLOW-350 | Process parameters | - | Wireless |
| 7-11, 13-15, 22 | Injection molding machine | JM258T, JM328-MK6 Chen Hsong, JM168-MK6, JM258-MK6, VE1500, VE1900, AZ300T-S529 | Process parameters | Chen Hsong gateway Modbus TCP; OPC UA; Modbus TCP | Wireless |
| 12 | All-electric injection molding machine | VE1500 | Process parameters | OPC UA | Wireless |
| 16 | Injection molding machine | PT400 | Process parameters | SCPI command-format serial acquisition | Wireless |
| 17 | LCR digital bridge | ZX8516B-1X | Process parameters | - | Wireless |
| 18 | Leakage current tester | ZX6589-800V | Process parameters | - | Wireless |
| 19-21 | Power meter | AWE1611 (Zhaoqing Aite) | Process parameters | Modbus RTU | Wireless |

**3. Data Acquisition Architecture**

Data from Anteng, Haitian Changfeiya and Chen Hsong injection molding machines connects directly to KingView. Reflow and wave soldering equipment data is recognized by OCR and integrated with KingView over MQTT. LK injection molding machines and performance testers are acquired through private protocols and integrated with KingView over MQTT.

![](/images/cases/1742541230299574.png)

**4. Data Acquisition Display**

- Wave soldering data

![](/images/cases/1742541314165928.png)

- LK injection molding machine data

![](/images/cases/1742541377164252.png)

- Reflow oven screenshot recognized by OCR

![](/images/cases/1742541419414630.png)

- LCR digital bridge data

![](/images/cases/1742541488268181.png)

![](/images/cases/1742541536194019.png)

- Power meter data

![](/images/cases/1742541579242629.png)

**5. Data Storage and Display**

- Data written to SQL Server database

![](/images/cases/1742541629156965.png)

- KingView data display

![](/images/cases/1742541659729589.png)

![](/images/cases/1742541662184234.png)

**7. Project Results**

Through deep integration of IoT data acquisition with the MES system, the workshop successfully achieved digital transformation, solving problems of low efficiency, high cost and difficult management in traditional manufacturing and achieving a digital, intelligent production process. Through real-time data acquisition, analysis and optimization, the workshop improved production efficiency, reduced costs and improved quality.
