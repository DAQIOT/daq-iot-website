---
title: " Equipment IoT data collection and OEE digitalization project technical
  proposal"
summary: To help enterprises become benchmark lean digital factories and to
  further advance the development of lean digital factories, we will integrate
  daily management, lean production, and digitalization. This will enable
  real-time data collection on products, equipment, personnel, output, quality,
  processes, warehousing, and other aspects, as well as real-time tracking of
  order progress. These measures will enhance production efficiency, optimize
  bottleneck processes, and address production issues, thereby creating a
  transparent and efficient digital factory that generates tangible and
  effective value. Our goal is to build an outstanding operational enterprise
  where customers are satisfied, employees feel comfortable, and managers can
  operate with confidence.
category: Smart Manufacturing
subcategory: Device Networking & Data Acquisition
image: /images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm8.png
hidden: false
---
# **1. Project Background**

To help enterprises become benchmark lean digital factories and to further advance the development of lean digital factories, we will integrate daily management, lean production, and digitalization. This will enable real-time data collection on products, equipment, personnel, output, quality, processes, warehousing, and other aspects, as well as real-time tracking of order progress. These measures will enhance production efficiency, optimize bottleneck processes, and address production issues, thereby creating a transparent and efficient digital factory that generates tangible and effective value. Our goal is to build an outstanding operational enterprise where customers are satisfied, employees feel comfortable, and managers can operate with confidence.

In the digital age, the **value** of OEE digitalization is primarily reflected in the following aspects:

Ø Improving production efficiency: OEE can quantify various forms of equipment loss, including time wasted, downtime due to equipment failures, and defective products. This enables companies to identify the bottlenecks and underlying issues affecting production efficiency. By addressing these issues, companies can improve production efficiency, reduce waste, lower costs, and enhance their competitiveness.

Ø Facilitating digital transformation: As Industry 4.0 advances, digital transformation has become an inevitable trend in the manufacturing sector. The digitalization of OEE can help enterprises digitally manage and monitor production equipment, enable real-time collection and analysis of production data, and provide strong support for their digital transformation.

Ø Optimizing equipment management: OEE digitization can help enterprises establish equipment records, documenting operational data, maintenance records, fault information, and other relevant details, thereby enabling comprehensive equipment management and maintenance. This not only extends the service life of the equipment but also reduces the impact of equipment failures on production.

Ø Improving production quality: The digitalization of OEE can help enterprises monitor quality issues during the production process, promptly identify and resolve problems related to defective products, and enhance product quality. At the same time, by analyzing production data, enterprises can identify the key factors affecting product quality and thereby implement more effective quality control measures.

The **pain points** associated with OEE data collection in actual equipment management and operations mainly include the following aspects:

Ø Challenges in obtaining data: Factories need to access real-time production data from equipment or integrate data from different sources. However, traditional equipment may lack the sensors or connectivity required to provide real-time data, necessitating data integration efforts.

Ø Inaccurate and untimely data: Accurate and timely data collection is crucial for calculating OEE. However, organizations may face challenges in consistently and reliably collecting data, such as manual data entry, reliance on operator input, or inadequate data-tracking systems.

Ø Insufficient understanding of the OEE metric: Interpreting the OEE metric and understanding its implications can be challenging for an organization. A lack of appropriate training and knowledge makes it difficult to identify the root causes of low OEE, prioritize improvement initiatives, and implement effective solutions.

Ø Low organizational acceptance of OEE: Implementing OEE improvements requires organizational coordination and a culture that supports continuous improvement. However, some organizations may face resistance to change, a lack of employee buy-in, or a cultural emphasis on short-term productivity rather than long-term efficiency, all of which could hinder the implementation of the OEE initiative.

    This project plans to implement an OEE data collection system that will connect and collect data from all critical process equipment and production lines. The equipment processing data will be linked to MES production task data, enabling end-to-end OEE tracking of batch and individual product processing. In addition, three-dimensional visualization and data dashboards will be integrated to provide on-site production management personnel with dynamic product quality data, thereby offering data support for product quality control and analysis.

# **2. Project Requirements Analysis**

## **2.1  Phase I Project Requirements**

Based on the research and planning conducted, the scope of implementation for this project encompasses four sub-factories: the Punching and Welding Sub-factory, the Machining Sub-factory, the Assembly Sub-factory, and the Gear Sub-factory. The overall plan comprises four modules and 28 functions, including equipment IoT data collection, equipment OEE monitoring, and 3D information visualization for equipment.

order number	module	function	Deployment Area	Refer to the expected outcomes

1	DA	device status	Four workshops	Equipment data collection

2		Equipment output	Four workshops	Equipment data collection

3		process parameters	Four workshops	Equipment data collection

4	Digitalization of Equipment OEE	data base	Four workshops	Equipment operation and maintenance efficiency

5		product management	Four workshops	Equipment operation and maintenance efficiency

6		Time utilization rate	Four workshops	Equipment operation and maintenance efficiency

7		Performance utilization rate	Four workshops	Equipment operation and maintenance efficiency

8		yield	Four workshops	Equipment operation and maintenance efficiency

9		Analysis Report	Four workshops	Equipment operation and maintenance efficiency

10	3D visualization	3D modeling	Four workshops	Abnormal response time

11		data connection	Four workshops	Abnormal response time

12		Signage system	Four workshops	Abnormal response time

13		value added service	Four workshops	Abnormal response time

14	Notification Module	Text messages and emails	Four workshops	Visualization

15		WeChat, DingTalk	Four workshops	Visualization

16		Electronic Kanban Board	Four workshops	Visualization

## **2.2 Device IoT data acquisition requirements**

At present, data collection from the equipment in all production processes across the various workshops has not yet been implemented. Within the scope of this project, there are a total of 62 pieces of equipment; the information collected via networked data acquisition is as follows:

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm1.png)

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm2.png)

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm3.png)

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm4.png)

## **2.3  Data analysis requirements**

After the equipment was connected to the network for data collection, the machining process data for batch-produced products were linked to OEE production work orders. By setting different indicator parameters, visual statistical analysis data were provided to on-site workshop managers, thereby improving product quality throughout the production process.

The project implementation phase will include, but is not limited to, the following categories of analytical reports:  

order number	name	field

1	Equipment Historical Monthly Uptime Rate Report (Year/Month/Day) – Level 3 Status	Workshop, equipment, month, equipment utilization rate, total equipment operating time, utilization rate after abnormal maintenance repair

2	Equipment Performance Mobility Report	Workshop, equipment, month, performance utilization rate, theoretical cycle time, actual cycle time

2	Alarm Information Statistical Report	Workshop equipment abbreviations, alarm numbers, alarm messages, alarm start time, alarm end time, and cumulative duration

3	Production order type	Workshop, order number, equipment abbreviation, personnel, order processing start time, order processing end time, cumulative time

4	Daily Status Time Statistics Report (24-hour period)	Abbreviations for workshops, units, production lines, and equipment; dates; operating time; standby time; maintenance time; shutdown time; operating rate; standby rate; maintenance rate; shutdown rate

5	Production yield	Total production volume, number of good products

## **1.1  3D visualization requirements**

By installing and deploying a large display screen on-site and setting up a digital command center in the production management center, the workshops, equipment, production lines, and other elements involved in the production process are presented using electronic dashboards. At the same time, equipment production data, the kanban system, and OEE information are mapped onto these dashboards, thereby providing a real-time, three-dimensional visual representation of workshop production operations. Management personnel can therefore gain real-time insight into the current status of the workshop equipment directly through the large display screen.

## **2.4  OEE Digitalization Requirements**

This maintenance, servicing, and repair system for production and equipment systems is based on a comprehensive preventive maintenance framework, uses employee behavioral standards as its process, and relies on the participation of all personnel. It ensures the normal operation of equipment and improves equipment operating efficiency, overall efficiency, and full effective productivity.

Overall Equipment Effectiveness (OEE) is a core indicator used to measure the level of efficiency in manufacturing processes; it represents the ratio of actual production capacity to theoretical production capacity. In recent years, alongside the development of the Industrial Internet, OEE has become increasingly widespread, and Hefei Meiqiao has placed significant emphasis on the OEE metric. However, in practical application, challenges such as difficulties in data collection and the lack of uniform standards persist, meaning that OEE cannot effectively provide data support to enterprises for equipment management and production operations.

Focusing on the production of Hefei Meiqiao products, the overall objective is to enhance product quality in a data-driven manner through the establishment of a networked equipment data-collection system, OEE digitization, three-dimensional visualization, and other initiatives. At the same time, once the specific systems are implemented and put into operation, the following specific objectives will be achieved:

1) Equipment data collection: Complete the network-based data collection for key equipment within the project scope, and use the data dashboard to analyze and display in real time the status information of all equipment.

2) OEE digitization: The TPM-based equipment management system aims to improve OEE and is grounded in technical management. It provides a comprehensive 

platform for optimizing and improving business processes and on-site management. The system consists of three components: a technical management platform, a business management platform, and an on-site improvement and knowledge management platform. The issues identified through the OEE metrics can be used as annual continuous improvement objectives.

3) Data visualization: Through 3D modeling, real-time production data can be collected and the real-time status of production equipment as well as the data visualization can be optimized. This can reduce the additional workload operators must undertake to monitor production progress or investigate the causes of unplanned downtime.

# **3. System Development Plan**

This project leverages key technologies—including heterogeneous network information transmission and interconnectivity, universal interfaces and interoperability, real-time communication, and the reliability and security of IoT data—to communicate with various non-standard devices and other physical entities. It enables the real-time and accurate collection of diverse data from these devices and facilitates the analysis and visualization of data at the device layer.

## **3.1  System Architecture**

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm5.png)

Figure – Platform Architecture

(1) Acquisition layer

The data acquisition layer is primarily responsible for communicating directly with various types of equipment. Data acquisition encompasses equipment status and parameter data, process parameter data, product quality data, material usage data, personnel operation data, tooling and fixture data, as well as environmental and safety monitoring data. This data is then converted into a unified, standardized machine-readable format. The manufacturing information acquisition and analysis platform provides standardized solutions and supports the development of corresponding access drivers for different types of equipment. The access driver for new equipment will not affect the stability or reliability of the acquisition platform or the other access drivers.

(2) Platform layer

The platform layer is responsible for device monitoring, system authorization, and the cleansing and transformation of standardized device data, as well as edge computing, data management, and data storage. It provides third-party application systems at the application layer with standardized data interfaces and bidirectional communication channels, and offers data support for scientific decision-making.

(3) Application layer

The application layer provides data collection, management, and analysis functions for end users and administrators. In conjunction with the manufacturing information collection and analysis platform, it offers standardized equipment data interfaces to enable the display and analysis of equipment-related information, such as equipment status, equipment parameters, production progress, and production output. This supports the improvement of equipment utilization in workshop management.

## **3.2  Data Architecture**

The equipment data acquisition system uses technologies such as equipment networking, barcode collection, IoT sensors, wireless network communication, and voice and video systems to link manufacturing plans with information regarding manufacturing resources—including people, machinery, materials, methods, and environmental factors. This enables the identification, localization, tracking, monitoring, and management of these manufacturing resources, thereby meeting the management requirements of enterprises in areas such as command and dispatch and environmental monitoring.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm6.png)

Through the system platform, data from multiple systems are aggregated, enabling the decomposition of data and business processes, the on-demand customization of data presentation, and the implementation of cross-system process applications.

## **3.3  Equipment data acquisition**

The equipment data acquisition system incorporates multiple data acquisition methods and supports the collection of production task information, such as work orders, parts, processes, and personnel data. Depending on factors such as the underlying control systems, data storage types, application scenarios, and hardware conditions, the system can employ different data acquisition approaches.

Based on past experience, this proposal categorizes and analyzes the mainstream equipment control systems that may be encountered as follows:

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm7.png)

Figure – Various methods of data collection and presentation

order number	device type	Related equipment (example)	Collection protocol (to be determined)

1	non-standard equipments	Standard machining and production equipment, standard inspection equipment	Data acquisition is performed by installing various sensors, data acquisition cards, or industrial control equipment; this can be achieved, for example, using various PLC controllers, PCI cards, RS232 and RS485 interfaces, USB, Ethernet I/O interfaces, CNC instruments, and other means.

2	Online inspection equipment	Testing equipment (such as Zeiss, Brown, Sharpe, etc.), optical inspection, flying-pin testing, high-and low-temperature testing, vibration testing, vacuum testing, magnetic particle flaw detection, test benches, etc.	Data are collected separately based on whether the equipment is CNC or non-CNC. Typically, CNC equipment automatically generates inspection reports or database files, Excel files, TXT files, and other types of files; analysis and data collection can be carried out using file recognition methods. For non-CNC equipment, data collection devices must be added.

3	Video and multimedia devices	Utilize multimedia cameras and video recording equipment to capture images and videos at key workstations.	Integration with the video capture system is required to obtain the relevant files or images. The development of the camera driver must ensure that the capture of video image files occurs in synchronization with the system.

4	Upload and collect files or attachments	Records or documents containing various on-site measured values shall be used to collect information via Excel import or by uploading attachments.

The system provides a customizable data acquisition function for configuring and collecting measured-value data during on-site inspections. Specifically, data acquisition rules must be set for a particular process or inspection item; these rules specify the relevant fields, character types, acquisition content, and so on. Complex calculations can be performed using expressions.	Process documents, quality documents, production plans, material supply plans, machining records, record forms, etc.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm8.png)

On-site data collection plan for the workshop

For different types of equipment, control systems, and on-site operating conditions, different technical approaches must be employed to establish network connectivity and collect data from the equipment. These approaches include:

Ø The TCP/IP protocol

The TCP/IP protocol stack is the collective term for a series of network protocols and serves as the core framework underlying network communications. It defines how electronic devices connect to the Internet and how data is transmitted between them. The TCP/IP protocol stack adopts a four-layer architecture: the application layer, the transport layer, the network layer, and the link layer. Each layer invokes the protocols provided by the layer below it to fulfill its own requirements.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm9.png)

The four-layer network transmission process based on TCP/IP

Most of the equipment in this project features open network interfaces (100/1000 Mbit/s). These devices can be directly connected via the on-site network switches to form the enterprise industrial control network, with the relevant data transmitted and exchanged through the switches.

Ø RS232/485 serial port

The RS-232-C interface (also known as EIA RS-232-C) is currently one of the most widely used serial communication interfaces. Since RS-232 employs serial transmission and converts the TTL levels of microcomputers into RS-232-C levels, its transmission distance generally reaches up to 30 m. It is currently widely used in applications such as connections between printers, industrial control computers, certain data acquisition boards, and network devices. The RS-485 communication protocol extends the capabilities of RS-232 by incorporating features such as integration and multiconductor transmission.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm10.png)

RS-232 and RS-485 serial communication cards and data acquisition pathways

For certain pieces of equipment in this project—such as electronic scales used for weighing, pressure sensors, temperature and humidity sensors, industrial cameras, and endoscopes—this communication method can be employed. By installing a serial port server, the sensor data can be transmitted to the network switch; the switch then connects to the field terminals to enable data exchange.

Ø PLC/OPC Server Communication

A PLC (Programmable Logic Controller) is an electronic system for digital computational operations, designed specifically for use in industrial environments. It employs a type of programmable memory to store programs internally and to execute user-oriented instructions such as logical operations, sequential control, timing, counting, and arithmetic operations. It controls various types of machinery or production processes via digital or analog input/output interfaces. Generally, industrial robots, CNC equipment, online inspection systems, and similar devices use PLC controllers to manage their operation, distribute commands, and execute actions.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm11.png)

Use the OPC communication protocol to establish a connection from the device to the terminal.

OPC (OLE for Process Control) technology refers to the establishment of an interface standard to facilitate communication between industrial control system applications, and the creation of a unified data access specification between industrial control devices and control software. It provides the industrial control sector with a standardized data access mechanism, effectively separating hardware from application software. OPC consists of vendor-independent software data exchange standards, interfaces, and protocols. It primarily addresses data exchange between process control systems and their data sources, enabling transparent data access across various applications.

Generally speaking, PLCs are used for control, while OPC is a standard communication protocol. In this project, certain pieces of equipment—such as high-and low-temperature test chambers—use PLC control technology to perform various operations on the test equipment. Since remote control is required, the OPC communication protocol is used to connect the terminal computer to the equipment's PLC controller (industrial control computer), enabling the issuance of commands, the transmission of parameters, and the execution of commands—such as actions, switching operations, and data acquisition.

Ø Data collection is performed via barcode scanning.

During the process of digital transformation, the materials, semi-finished products, finished products, equipment, tools, and other items in the workshop can all be labeled with corresponding barcode identification information. On this basis, to reduce errors in manual operations and improve efficiency, relevant data can be entered using handheld devices such as wired or wireless scanners and inventory-counting devices.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm12.png)

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm13.png)

Ø Manual data entry

Given the wide variety of equipment, for certain devices with a low degree of automation, production and status data can be collected using handheld scanners or manual data entry. Barcode scanning terminals can be used to scan batch or material barcodes and to quickly enter data related to the production process and quality inspections. Barcode-based data collection can be performed via wired or wireless methods; in this solution, only the wireless method is recommended.

Ø Add sensor data acquisition

Device data can be collected by adding sensors or data acquisition devices. For equipment without a network card, hardware sensors or data acquisition devices can be installed to collect data generated during production. Based on the signals fed back from the equipment, the sensors or acquisition devices can convert electrical signals into digital signals and transmit them to the system for data collection. Existing robotic systems, welding machines, cutting machines, and test benches can also be monitored and have their data collected using sensors.

External sensor data acquisition refers to the installation of externally mounted sensors inside the equipment to collect data such as current, voltage, temperature, and liquid level.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm14.png)

The approach of adding external sensors is not only applicable to unit-type equipment; it can also be used with certain complete sets of equipment, such as high-temperature furnaces, forging equipment, and material feeding equipment.

Types of data collected: digital signals (switch states, alarms), analog signals (current, voltage), temperature and humidity data, etc.

## **1.1  OEE Digital Management Platform**

The primary objective of TPM  lies in "total efficiency"; "total efficiency" entails restricting and reducing the six major losses.

The six major losses referred to in TPM are:

(1)   Loss due to equipment downtime: the loss resulting from sudden or chronic failures; it

There are both losses in terms of time and losses in product quantity.

(2)  Prepare for and adjust shutdown losses: losses incurred due to the replacement and adjustment of tooling and molds.

(3) Losses due to idling, idling operation, and short-term shutdowns.

(4)  Losses resulting from the difference between the designed speed of the equipment and its actual operating speed, due to a reduction in speed.

(5) Losses from residual, substandard, and scrap products, as well as losses due to defects.

(6)  Production loss: the losses incurred during the period from the start of production until production becomes stable.

These six major losses directly affect the overall equipment effectiveness(Overall Equipment Effectiveness,

OEE), it is used to measure the availability, performance efficiency, and quality rate of a particular piece of equipment; it can also be used to measure

Factors limiting equipment operation. By improving  OEE, the stability of the production process can be enhanced and production performance can be improved.

This enhances predictability and, consequently, improves the plan completion rate. The reduction in rework rates and waste costs, as well as improvements in production capacity...

Improvements in efficiency can all help reduce total costs. Therefore, the ultimate goal of improving equipment efficiency is to make full use of and

Maintain the inherent capabilities of the equipment—that is, maintain the optimal state of both people and machines. Strive for "zero defects" in the equipment,

The goals of "zero failures and zero accidents" and "reducing defective and substandard products to zero" aim to promptly identify and eliminate equipment-related issues.

Therefore, by fully leveraging the performance of the equipment and eliminating potential hazards, the equipment resources can achieve optimal economic benefits.

The relationship between the six major types of losses and  OEE 

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm15.png)

TPMEight Pillars

To achieve the  TPM  objectives, it is necessary to carry out  8 activities; as shown in the figure, the following TPMactivities need to be implemented:

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm16.png)

### **3.4.1  OEE Digital Platform**

Through a large number of TPM activities, advanced management concepts are embedded into digital OEE tools and methods.

The main functions are as follows:
1. Breakdown of equipment OEE data:

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm17.png)

2. Influencing factors of the OEE metric

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm18.png)

3. OEE System Architecture

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm19.png)

4. In the breakdown of OEE management data, the time utilization rate is divided into data pertaining to planned and unplanned periods.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm20.png)

5. OEE Application Metrics

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm21.png)

The calculation formula is as follows: **OEE = Availability × Performance Rate × Product Quality Rate**

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm22.png)

By collecting data on product counts, planned downtime, and unplanned downtime, the system automatically calculates the equipment OEE and enables real-time monitoring via apps, kanban boards, and work platforms, among other means.

In conjunction with the equipment data collector, all equipment output and downtime distributions are collected, reducing the involvement of personnel and improving data accuracy and real-time performance. The system analyzes and presents data related to the six major OEE losses; the data analysis proceeds layer by layer to identify root causes, thereby effectively improving the OEE level. The OEE system architecture diagram is shown below:

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm23.png)

Ø The PAD OEE data collection system uses multi-factor analysis within the OEE model to make equipment efficiency transparent: it shows how much loss occurs at each stage of production and identifies the improvement measures that can be taken. Enterprises can easily identify the bottlenecks affecting production efficiency, implement improvements, and track their progress, thereby enhancing production efficiency while helping the company avoid unnecessary waste.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm24.png)

Ø Schematic diagram of hardware system connections:

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm25.png)

Ø Schematic diagram of the OEE digital pad page:

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm26.png)

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm27.png)

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm28.png)

## **3.5  Equipment Data Dashboard**

The dashboard module supports categorized dashboard displays for personnel with different roles. Senior management, management staff, and operators are provided with tiered query and analysis capabilities based on their respective permissions, as well as dashboard and report displays appropriate to their levels. The dashboard can take the following forms, among others:

1. Workshop-level Kanban: Displays comprehensive data collected from workshop equipment.

2. Team-level Kanban: Used to display the team's current operational data, equipment utilization rate, equipment status, faults, personnel status, and other relevant information.

3. Production-line-level kanban: Used to display real-time equipment status information within the production line, including equipment rotational speed, the current status of the parts being processed, uptime, fault frequency, and Gantt charts depicting equipment operation, among other data.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm29.png)

Example of the main dashboard at the plant site

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm30.png)

  Workshop-level Kanban Case Study

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm31.png)

Production Line and Equipment Kanban Board

Accurate and comprehensive collection of production-process data, combined with the system's data-analysis capabilities, enables statistical analysis of the workload and operating time of each device within the network. Depending on the chosen time period, the system can generate tabular and graphical statistics on the device's power-on time, effective processing time, downtime, fault duration, and other metrics, thereby providing a solid basis for improving production management measures.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm32.png)

Comprehensive Statistical Analysis of Equipment Utilization Rates

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm33.png)

Equipment Operation Weekly Analysis Dashboard

 

## **1.1  3D visualization**

The system developed for this project enables three-dimensional visualization across the entire workshop area. It creates scale-model representations of the workshop, equipment, and production lines and reconstructs them within a 3D environment. Additionally, it establishes an equipment model library; the information in this library can be updated and loaded via system update packages.

The system supports the import of device models. By importing models in FBX format (.fbx) or Unity 3D prefab format (.prefab), the system allows the configuration of the model's position, after which the models are automatically displayed in the 3D scene. The models can be moved, rotated, and their visibility can be toggled on or off.

The system supports the intuitive display of equipment status, processing parameters, ongoing processing tasks, and personnel within a 3D factory environment. It supports viewpoint switching (primary viewpoint/free viewpoint), cruising, and rapid equipment localization functions. The system enables interaction between 3D models and data: through 3D scene reconstruction, users can visually observe the real-time data and operating status of every piece of equipment in the workshop, achieving integrated linkage between the scene and the data. The system supports real-time viewing of detailed asset information for each piece of equipment and provides early warning alerts when equipment maintenance or servicing is due. It enables the display and viewing of data dashboards and reports at various levels of the dashboard interface, based on user permissions. Functions for grouped viewing of equipment status and grouped viewing by work team are supported; in the 3D scene, the four operating states—running, standby, alarm, and stopped—can be displayed with grouped highlighting. The work-team grouping feature supports grouped highlighting of various states for each work team and production line. The system's grouped highlighting function supports custom grouping and configuration. It also supports interactive navigation between 3D visualization and dashboards/reports, and enables data drill-down and page navigation within both the 3D and dashboard environments.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm34.png)

Workshop-level 3D visualization

The system calculates the operating status of all equipment in the workshop and displays the equipment utilization rate in real time.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm35.png)

Equipment Uptime Kanban Board

The system can perform virtual scenario modeling based on the actual conditions at the workshop site, integrate with the underlying automation system, and obtain real-time information on equipment operating status and parameters. By clicking on each piece of equipment in the model, users can check whether the equipment is in good condition, its current status, its ongoing inspection tasks, and its detection parameters, among other details. This enables real-time monitoring of production status, such as whether the equipment is in use, awaiting scheduling, under maintenance, or decommissioned. The system can also display in real time, through color coding or other means, information such as the current production task at that station, the process step, the current status, the operator, the operation duration, and the completion progress.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm36.png)

3D Scene Device Data Display

When you click on a single device in a 3D scene, you can be redirected to the status monitoring dashboard for that device.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm37.png)

Monitoring of the operating status of individual devices

Three-dimensional visualization enables equipment-level modeling at four levels—enterprise-level, workshop-level, production-line-level, and equipment-level—and associates the corresponding data with the physical models. There are interconnections among all four levels, allowing them to interact and call each other's functions. Users can navigate through the layers to access different monitoring objects and different types of monitoring information. The visual monitoring system promptly reveals on-site issues and facilitates follow-up resolution. The system provides statistical analysis capabilities for problems related to workshops, production lines, workstations, equipment, materials, and the environment. It reflects in real time the most prominent issues at the production site and provides a basis for the normal operation of the production line, as well as for monitoring and scheduling.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm38.png)

Overall architecture of the 3D visualized monitoring system platform

The production information overview is a functionality that extracts relevant data and information from the company's various management systems, consolidates them into a collection of reports, visualized charts, documents, and other content, and displays and analyzes this information via large-screen dashboards at the site or on individual computer terminals. The relevant data and information from each management system are processed and aggregated in the visual dashboard, where they can be viewed by production management personnel and company executives, who can then promptly implement appropriate strategies. The workshop-level 3D visualized model and its application scenarios are shown in the figure below; they provide a detailed depiction of the overall operational status of the workshop.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm39.png)

Factory Production Status Overview

For different types of equipment and station layouts, the system displays, respectively, the shift/batch information, progress information, and status-monitoring information corresponding to each station. The completion progress of the production processes at each station is displayed in the form of progress bars and percentages (based on the number of processes). At the same time, information such as the number of personnel on duty at each station, the number of pulsations, the number of alarms, the number of quality-issue feedbacks, and the number of technical changes is presented on the production-line overview interface.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm40.png)

Production Line Monitoring

The system can perform virtual scenario modeling based on the actual conditions in the workshop, integrate with the underlying automation system, and obtain in real time information regarding the operational status and parameters of the equipment. By clicking on each piece of equipment in the model, users can query whether the equipment is in good condition, its current status, its current inspection tasks, and its detection parameters, among other details. This enables real-time monitoring of the production status, such as whether the equipment is in use, awaiting scheduling, under maintenance, or scrapped. The current production tasks, processes, status, operators, operation duration, and completion progress at each station can be displayed in real time using color coding or other visual methods. The 3D visualization of the equipment allows users to interactively view its operational status.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm41.png)

Equipment status monitoring incorporates an inspection function defined along a specific route, enabling automatic cruising and visual switching. Through planar navigation, a three-level inspection traversal—from the workshop to the production line and then to the equipment—is possible, supporting one-click viewing of any production line, equipment, or activity point.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm42.png)

Scene browsing and automatic cruise control

Overall, based on the aggregation and presentation of information across the multiple levels mentioned above, enterprises can be provided with layered penetration query capabilities spanning from the panoramic level down to the workshop level, then to the process level and equipment level. Furthermore, through system integration, data from upstream and downstream information systems can be integrated into a seamless whole.

## **3.2  Basic Data Management**

### **3.2.1  Factory Modeling**

The physical model of the factory encompasses enterprises, workshops, work teams, equipment, tooling, tools, personnel, and so on. The system can rapidly establish the physical model through configuration, thereby creating the enterprise's basic physical architecture and defining the logical relationships among various physical resources and business objects.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm43.png)

Logical relationships among enterprise physical object models

### **3.2.2  User Management**

The platform supports the management of basic user information, including, but not limited to, the user's name, employee ID, job category, barcode, and assigned work team; it also allows the addition of other attribute fields through extensible fields. Furthermore, the system is capable of integrating with the MES system and provides functionality for bulk-importing user information via electronic spreadsheets.

The platform supports the creation of an organizational hierarchy within the system based on the enterprise's existing organizational structure, enabling the classification of personnel. In addition, the system provides a flexible group management mechanism that allows users to create organizational structures tailored to actual business needs atop the existing organizational framework, thereby enabling flexible business models in the front-end operations.

The platform supports adding, deleting, and modifying users; it implements security policies for user addition and deletion, and allows accounts to be frozen or enabled.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm44.png)

System User Management Page

The system supports identity authentication and password configuration tailored to different users, as well as permission management rules, thereby meeting Jiangshan Heavy Industry's basic requirements regarding personnel and user security and confidentiality:

l The username and password are not transmitted in plaintext;

l Configurable security policies for the system: these include password complexity requirements (by default, the password must be more than 10 characters long and must include at least three of the following: uppercase letters, lowercase letters, numbers, and special characters); password change intervals (by default, the password must be changed every 7 days and must not be the same as the previous password); the number of incorrect password attempts before account locking (by default, after five incorrect attempts, the account is locked; once locked, it must be unlocked by a security administrator); and the requirement that users must change their password upon their first login, among other settings.

l Users and administrators of the application system can log in using methods such as scanning employee codes, swiping cards, entering account passwords, and using CA authentication; the system also supports the authorization mechanism for Windows domain user accounts.

l All pages must determine whether the current user has permission to access the page; access must be denied to users without such permission.

### **3.2.3  Role Management**

The definition of role and position assignments can be configured according to the enterprise's authorization model: by hierarchy, based on functional menus, based on rule types, or based on objects, among other criteria. Assignments can be structured hierarchically according to the personnel associated with organizational roles and positions, allowing different roles and positions to be granted to different objects. Role and object assignments can be created, modified, deleted, or locked.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm45.png)

Assignment of System User Roles and Positions

Permissions can be configured based on user roles. The scope of controllable permissions includes menu navigation, functional operations, data access, and maintenance permissions, among others.

Permissions can be configured based on the user's job role. When the employee begins work, the system scans and records the employee's ID. In accordance with the requirements specified in the process documentation, the system automatically matches this ID against the information for personnel assigned to that role and checks whether the employee meets the requirements for performing the task.

Classification-level access control: The system supports the configuration of user classification levels and data classification levels. Users with lower classification levels cannot view data classified at higher levels; however, they can view data whose classification level is lower than their own, thereby implementing classification-level access control.

### **3.2.4  Log Management**

The operational logs provide records of all system operations and offer foundational support for the secure and reliable operation of the system. The login logs record all system logins, including information about the logging user, IP address, browser details, operating system, and login time. All login logs can be exported to Excel files.

**Ø Operational Logs**

The operation logs provide a record of all system operations and serve as a foundational support for the secure and reliable operation of the system. The logs record the users who log in and their related information, as well as the system modules accessed by those users and the times at which the operations were performed. All operation logs can be exported in Excel format.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm46.png)

System Operation Logs

**Ø Login logs**

The login logs provide a record of all system logins, including information about the logging user, IP address, browser details, operating system, login time, and other relevant details. All login logs can be exported to an Excel file.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm47.png)

System login logs

### **3.2.5  Menu Management**

The system provides a menu configuration interface for defining menu items. The interface menu can be flexibly configured according to user roles, and the system supports adding, deleting, modifying, and querying menu items based on user permissions.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm48.png)

System Menu Definition

### **3.2.6 Exception Information Maintenance**

The system's exception information maintenance function allows users to define and manage exception alarm information, including exception codes, exception types, and exception descriptions. Users can add, edit, and delete exception records via the exception information list, and can also use the search function to quickly locate the information they need. The permission control and data storage mechanisms ensure the security and reliability of the exception information. This feature will improve the efficiency and accuracy of exception handling and help users better manage exceptions within the system.

### **3.2.7  Data Dictionary Configuration**

A common issue in such systems is how to handle terminology in different languages and across various professional domains. To address this, we could consider using a dictionary to enable switching between language versions and to facilitate flexible access to domain-specific terminology. The system supports data dictionary management, allowing flexible configuration of key system fields, data objects, and other elements.

![](/images/plans-en/equipment-iot-data-collection-and-oee-digitalization-project-technical-proposal/sm49.png)

System Data Dictionary Maintenance

## **3.3  List of Supporting Hardware**

**order number	name	Main Specifications/Models/Description	quantity	remarks**

**1	Data server	8 units (2 × Intel Xeon Gold 5218R processors (2.3 GHz / 16-core / 22 MB / 125 W), 2 × standard heat sinks, 4 × 32 GB of memory, 1 × SR450C-M 2G,6 × 1.8 TB SAS 10K 2.5-inch hard drives, 1 × 3 × 8 component, 1 × single-port 16 Gb HBA card (including one multimode optical module), Ethernet card – 1 Gb copper port (Intel I350) – dual-port – RJ45 – PCIe 2.0 x4, 2 × GE + 2 × 10 GbE (excluding optical modules), 2 × 550 W AC power supplies).	1	provide for oneself**

**2	Mosaic large-screen display	Brand: Huahai**

**Layout configuration: 3×4 module layout, with seam widths on both sides ≤3.5 mm.**

**Single-screen size: 55 inches**

**Resolution: 1920×1080**

**Including the accompanying host system, as well as installation and commissioning costs.	1	provide for oneself**

**3	Equipment Control and Management Terminal	10.1" Android ruggedized tablet with enhanced protection features and an MTK octa-core processor; optional 1D/2D barcode scanning, NFC/RFID, ID card reading, fingerprint recognition, and other data acquisition modules; supports 4G LTE, WLAN, Bluetooth, and GNSS data communications; offers RS232, RJ45 Ethernet, USB, and HDMI I/O interface expansion; equipped with a removable high-capacity battery; IP67 dust and water resistance; capable of surviving a 1.22 m drop test.**

**Note: One OEE data collection point is required per piece of equipment.	62	provide for oneself**

**4	Bluetooth data acquisition device	The production data are collected and transmitted to a tablet computer for OEE calculation.**

**The Bluetooth data collector can collect data on equipment output and defective products. It supports Bluetooth transmission to tablets and computer devices, and supports IO digital input and output signals. It can interface with MES and SCADA systems.**

**•Supports cumulative counting operation mode.**

**•Data such as production output and defective products can be collected.**

**•Supports Bluetooth BLE 5.0.**

**Note: One OEE data collection point is required per piece of equipment.	62**	

**5	handset	Performance processor: Qualcomm octa-core 2.0 GHz processor; Memory: 3 GB + 32 GB, or 4 GB + 64 GB; Expandable storage: Micro SD (up to 128 GB); Operating system: Android 11**

**Supplementary recording data: one entry per item or per workshop.	10**
