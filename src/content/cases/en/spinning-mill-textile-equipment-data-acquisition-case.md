---
title: "Spinning Mill Textile Equipment Data Acquisition Case"
summary: "Spinning Mill Textile Equipment Data Acquisition Case"
image: "/images/cases/1788251033110224.png"
industry: "智能制造"
order: 51
---
**Spinning Mill Textile Equipment Data Acquisition Case**

**1. Project Background**

In recent years, with continuous national policy support and funding for intelligent manufacturing, digital workshop construction in Xinjiang has flourished. Cotton spinning enterprises are eager to use technology to improve production efficiency, stabilize product quality and optimize user experience, ultimately transforming from "traditional manufacturing" to "intelligent manufacturing" and holding their ground in fierce competition.

However, ideals are rich while reality is lean — many textile mills enthusiastically bought MES and installed large screens, only to find that workshop equipment still "fights its own battle" and data simply cannot come out.

With policy and funding support, Xinjiang digital workshops aim to improve production efficiency, product quality and user experience, ultimately achieving intelligent transformation and high-quality development of manufacturing and enhancing enterprise competitiveness.

**2. Project Requirements and On-Site Survey**

Requirements:
- Full-parameter acquisition: acquire equipment process parameters, operating status and output information — all of it.
- Real-time analysis: data must not sleep inside the equipment; acquire and analyze it in real time.
- Deep MES integration: integrate seamlessly with the enterprise's existing MES system to jointly build an intelligent, digital workshop.
- Cost reduction and efficiency: improve production efficiency, reduce operating costs and achieve an efficient, intelligent and customized production mode.

Current plant situation:
- Isolated equipment with no information exchange, relying on manual equipment management — serious waste of human resources and low efficiency. Equipment brands are mixed with a wide age span and diverse communication protocols, forming "data chimneys".

| Process | Equipment type |
| --- | --- |
| Opening and cleaning | Bale plucker |
| Blowing | Foreign-fiber remover |
| Carding | Carding machine |
| Drawing | Breaker drawing frame |
| Roving | Roving frame |
| Spinning | Spinning frame (1568 spindle / 129 spindle / 503 spindle mixed multi-model lines) |

1 Bale plucker

![](/images/cases/1788251033110224.png)

2 Foreign-fiber remover

![](/images/cases/1788251064163628.png)

3 Carding machine

![](/images/cases/1788251087331753.png)

4 Breaker drawing frame

![](/images/cases/1788251119182414.png)

5 Roving frame

![](/images/cases/1788251172703184.png)

6 Spinning frame 1568

![](/images/cases/1788251209877426.png)

7 Spinning frame 129

![](/images/cases/1788251250505294.png)

8 Spinning frame 503

![](/images/cases/1788251368559384.png)

![](/images/cases/1788251404192573.png)

Equipment list:

| No. | Equipment | System | Brand | Model | Available interface | Authorization required |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Bale plucker trolley | PLC | Mitsubishi | FX3U | Serial occupied | No |
| 2 | Blowing | PLC | Mitsubishi | FX3U | Serial occupied | No |
| 3 | Foreign-fiber remover | PC | / | / | RJ45 | No |
| 4 | Carding machine | PLC | Mitsubishi | FX3U | Serial occupied | No |
| 5 | Breaker drawing frame | PLC | Delta | DVP60 | Serial occupied | No |
| 6 | Roving | Board card | / | / | Serial occupied | No |
| 7 | Spinning frame 1568 | PLC | Delta (black) | DVP24 | Serial | No |
| 8 | Spinning frame 1568 | PLC | Delta (white) | DVP24 | Serial occupied | No |
| 9 | Spinning frame 129 | PLC | Hexin | CTSC | Serial occupied | No |
| 10 | Spinning frame 503 | Legacy equipment | / | / | None | No |

**3. Data Acquisition Architecture**

Through Shanghai Daq-IoT's smart gateways and serial servers, data from the four device types — PLC, PC, board card and legacy equipment — is acquired to an edge server and then forwarded over MQTT to a cloud platform. The MES system reads the data from the cloud platform, analyzes and processes it and displays it on a large screen.

![](/images/cases/1788251444735289.png)

**4. On-Site Implementation**

PLC: 1) The Mitsubishi and Delta (white) PLCs have built-in serial ports, but the port is occupied by the HMI; the Daq-IoT smart gateway connects via a special serial monitoring cable (without affecting the original communication) and then joins the workshop network over Wi-Fi for data acquisition. 2) The Delta (black) PLC has a free serial port, so the smart gateway connects via serial and then over Wi-Fi. 3) The Hexin PLC has a built-in serial port occupied by the HMI; the serial server connects via a special serial monitoring cable and then over Wi-Fi.

PC: for the foreign-fiber remover PC, a wireless bridge connects through the network port and then joins the workshop network over Wi-Fi.

Board card: the roving equipment board has a built-in serial port occupied by the HMI; the serial server connects via a special serial monitoring cable and then over Wi-Fi.

Legacy equipment: for the legacy spinning frame 503, the serial server acquires equipment status and operating parameters through a speed sensor and then joins the workshop production network over Wi-Fi.

1 Mitsubishi PLC serial monitoring

![](/images/cases/1788251547116295.png)

2 Delta PLC serial acquisition

![](/images/cases/1788251604739382.png)

3 Delta PLC serial monitoring

![](/images/cases/1788251649818068.png)

4 Hexin PLC serial monitoring

![](/images/cases/1788251863106340.png)

5 Roving board serial monitoring

![](/images/cases/1788251965129725.png)

6 Legacy spinning frame

![](/images/cases/1788252041205659.png)

**5. Data Acquisition, Storage and Display**

- Gateway acquires Mitsubishi PLC data

![](/images/cases/1788252122500336.png)

- Gateway acquires Delta PLC data

![](/images/cases/1788252160145378.png)

- Acquisition of foreign-fiber remover PC data

![](/images/cases/1788252197210600.png)

- Acquisition of roving board data

![](/images/cases/1788252282524715.png)

- Acquisition of Hexin PLC data

![](/images/cases/1788252336926231.png)

- Acquisition of legacy spinning frame data

![](/images/cases/1788252384128895.png)

- Data forwarded to MQTT cloud platform

![](/images/cases/1788252451161175.png)

- Data display

![](/images/cases/1788252557111556.png)

**6. Equipment Connection Status**

| No. | Equipment | System | Brand | Model | Interface | Acquisition | Connected |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Bale plucker trolley | PLC | Mitsubishi | FX3U | Serial occupied | Wireless | Yes |
| 2 | Blowing | PLC | Mitsubishi | FX3U | Serial occupied | Wireless | Yes |
| 3 | Foreign-fiber remover | PC | / | / | RJ45 | Wireless | Yes |
| 4 | Carding machine | PLC | Mitsubishi | FX3U | Serial occupied | Wireless | Yes |
| 5 | Breaker drawing frame | PLC | Delta | DVP60 | Serial occupied | Wireless | Yes |
| 6 | Roving | Board card | / | / | Serial occupied | Wireless | Yes |
| 7 | Spinning frame 1568 | PLC | Delta (black) | DVP24 | Serial | Wireless | Yes |
| 8 | Spinning frame 1568 | PLC | Delta (white) | DVP24 | Serial occupied | Wireless | Yes |
| 9 | Spinning frame 129 | PLC | Hexin | CTSC | Serial occupied | Wireless | Yes |
| 10 | Spinning frame 503 | Legacy equipment | / | / | None | Wireless | Yes |

**7. Project Results**

One-sentence summary of the project's value: this combination of IoT and MES not only helped the customer improve production efficiency and product quality but genuinely reduced production cost and resource consumption — digital transformation is not about spending money on concepts but about real, tangible efficiency gains.
