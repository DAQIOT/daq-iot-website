---
title: "Mechanical Roller Gas Meter Intranet Image Recognition Case"
summary: "Mechanical Roller Gas Meter Intranet Image Recognition Case"
image: "/images/cases/1780039810271011.png"
industry: "智能制造"
order: 41
---
**Mechanical Roller Gas Meter Intranet Image Recognition Case**

**1. Project Background**

Four gas meters managed by a Beijing Ruihang Technology Co., Ltd. are located in a stable intranet industrial scenario. Traditional manual transcription has poor data real-time performance, low accuracy and insufficient efficiency, and cannot meet modern energy management's need for refinement and intelligence. A safe, efficient and easily deployed local intelligent recognition solution was urgently needed to seamlessly connect traditional mechanical instrument data to a modern energy management platform for automatic acquisition and analysis.

![](/images/cases/1780039810271011.png)

![](/images/cases/1780039861371253.png)

**2. Project Requirements**

Within the customer's intranet environment, acquire the real-time operating data of roller-type gas meters (mechanical counters) and integrate it using the Modbus TCP protocol, finally connecting to the energy management platform through a standardized interface.

![](/images/cases/1780039983117242.png)

**3. Solution Architecture**

1. Hardware deployment: according to the customer's specific installation-distance requirements, a high-definition network-port explosion-proof camera (SC-GP-CAMLANEX) with a matching distance was customized as the data acquisition terminal. The camera is fixed on a bracket to ensure an accurate, unobstructed shooting angle and position, and connects directly to the customer's intranet via a network cable, capturing high-definition images of the gas meter dial at the customer-required frequency of two shots per minute.

![](/images/cases/1780040069117100.png)

![](/images/cases/1780040301966327.png)

![](/images/cases/1780040248744570.png)

2. Data recognition: an image-recognition all-in-one machine is deployed on the customer's on-site intranet, running the instrument-specific recognition software independently developed by Shanghai Daq-IoT Technology. The software integrates the core image-recognition algorithm, receives the high-definition images taken by the camera and performs real-time automatic recognition and parsing of the mechanical roller reading, converting image information into structured digital data.

![](/images/cases/1780040387156500.png)

3. Data platform integration: the recognition software encapsulates the structured data in the standardized Modbus TCP/IP protocol format and stably pushes it through an encrypted intranet channel to the customer's energy management platform server, seamlessly integrating the acquired data with the upper-level business system for centralized display, analysis and comprehensive application.

**4. On-Site Camera Installation and Debugging**

The customer carried out the on-site implementation themselves, with our remote guidance.

![](/images/cases/1780040472496022.png)

![](/images/cases/1780040508145264.png)

On-site hardware installation examples

Local image recognition debugging process:

![](/images/cases/1780040624467595.png)

![](/images/cases/1780040688472850.png)

![](/images/cases/1780040751656678.png)

**5. Local Image Recognition Software**

![](/images/cases/1780040867201736.png)

![](/images/cases/1780040889194316.png)

**6. Customer Energy Management Platform Display**

![](/images/cases/1780040929153448.png)

![](/images/cases/1780040956156154.png)
