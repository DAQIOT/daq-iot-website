---
title: "XX New Energy PLC Equipment Acquisition Project Case"
summary: "New Energy PLC Equipment Acquisition Project Case"
image: "/images/cases/1742540482215838.png"
industry: "智能制造"
order: 34
---
**New Energy PLC Equipment Acquisition Project Case**

**1. Project Background**

A leading new energy enterprise, to fully implement high-quality development requirements and its industrial-strength-province strategy, is promoting manufacturing digital transformation, driven by industrial technology innovation, to accelerate new industrialization.

**2. Project Requirements and On-Site Survey**

Acquire equipment process parameters and build a digital-twin 3D visualization platform to display workshop conditions in real time.

Plant situation:

![](/images/cases/1742540482215838.png)

![](/images/cases/1742540497532084.png)

![](/images/cases/1742540515114821.png)

![](/images/cases/1742540533117719.png)

![](/images/cases/1742540549163790.png)

Equipment list:

| No. | Equipment | System | Brand | Model | Interface | Authorization required |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Kiln | PC | Other | PC | RJ45 | No |
| 2 | MVR | PLC | Siemens | S7-1500 | RJ45 | No |
| 3 | Three-in-one mixer | PLC | Siemens | S7-1200 | RJ45 | No |
| 4 | Press | PLC | Siemens | S7-300 | RS232 | No |

**3. Data Acquisition Architecture**

Through smart gateways, data from the four device types (kiln, press, MVR, three-in-one mixer) is acquired to a central server and stored in a MySQL database, then displayed through a 3D digital-twin platform.

![](/images/cases/1742540583122720.png)

**4. On-Site Implementation**

Press: the controller is a Siemens S7-300 with built-in serial communication; a serial-to-Ethernet module is added and connected to the smart gateway by network cable for data acquisition. Three-in-one mixer: the controller is a Siemens S7-1200; the PLC is accessed directly through the switch in the control cabinet for data acquisition. MVR steam boiler: the controller is a Siemens S7-1500; the PLC is accessed directly through the switch in the control cabinet. Kiln: the controller is an industrial PC, integrated with the smart gateway through a software protocol for data acquisition.

![](/images/cases/1742540664179615.png)

**5. Data Acquisition, Storage and Display**

- Gateway acquires PLC data

![](/images/cases/1742540702162439.png)

- Data written to MySQL database

![](/images/cases/1742540727149681.png)

- 3D large-screen system displays data

![](/images/cases/1742540755439927.png)

**6. Equipment Connection Status**

| No. | Equipment | System | Brand | Model | Interface | Acquisition | Connected |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Kiln | PC | Other | PC | RJ45 | Wired | Yes |
| 2 | MVR | PLC | Siemens | S7-1500 | RJ45 | Wired | Yes |
| 3 | Three-in-one mixer | PLC | Siemens | S7-1200 | RJ45 | Wired | Yes |
| 4 | Press | PLC | Siemens | S7-300 | RS232 | Wired | Yes |
