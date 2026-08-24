---
title: Industrial IoT Data Acquisition & Monitoring System
summary: >-
  Industrial IoT Data Acquisition & Management System for real-time monitoring, remote device management, and data collection. Integrate sensors, meters, PLCs, and industrial equipment with SCADA and cloud platforms.
image: /images/products/1755068741975141.jpg
order: 2
category: dataacquisitionsoftware
---
**1 System overview**

## 1.1 Function Overview
DAQ for IIoT General Industrial Data Acquisition System is a set of equipment data acquisition and management software running on edge computers, mainly used for the acquisition, control, storage, query, display and upload of data from various instruments and equipment (PLC, injection molding machines, CNC machine tools, electric meters, flow meters, etc.).
The main functions of the system include:
- Flexible transmission configuration (link, storage, device, factor, upload service)
- Data acquisition and upload
- Real-time monitoring (device, upload)
- Alarm configuration and monitoring
- Data storage and query (table, chart, Web API)
- Configuration and visualization design
- User and permission management
- Interface multi-language support

## 1.2 **Operating environment**

| **Project** | **Requirement** |
| --- | --- |
| **Operating system** | Windows、Linux |
| **Runtime Environment**** | .NET 6 |
| **Client-side Browser** | Edge、Chrome、Firefox、Safari、Opera等 |
| System Access Link** | http://localhost:16801/scada.html |
| **HMI Visualization Access URL** | http://localhost:16804/diagram.html |

## 1.3 **Supported devices**

### 1.3.1 Support communication links

Some of the communication links supported by the system include:

| Link Type | **Communication Link** |
| --- | --- |
| **TCP** | TCP Client |
|  | TCP Server |
| **Serial Port** | Serial Port UART |
| **UDP** | UDP |
| **HTTP** | HTTP Server |
|  | HTTP Client |
| **OPC** | OPC-UA |
|  | OPC-DA |
| **MQTT** | MQTT-TCP |
|  | MQTT-WebSocket |

### 1.3.2 **Support communication protocols**

Some of the communication protocols supported by the system include:

| **Protocol Type** | **Primary Protocol** | **Sub-Protocol** |
| --- | --- | --- |
| **PLC Protocol** | Modbus | Modbus-RTU |
|  |  | Modbus-TCP |
|  |  | Modbus-ASCII |
|  | Siemens S7 |  |
|  | MELSEC Protocol | MELSEC-1E |
|  |  | MELSEC-3C |
|  |  | MELSEC-3E |
|  |  | MELSEC-4C |
|  |  | MELSEC-4D |
|  |  | Mitsubishi-Fx |
| **OPC Protocol** | OPC-UA |  |
|  | OPC-DA |  |
| **MQTT Protocol** | MQTT-JSON |  |
| Electric Meter Protocol | DL/T645 |  |
|  | DLMS | DLMS-LN |
|  |  | DLMS-SN |
|  | IEC62056-21 |  |
|  | Edmi Command-Line |  |
| **IEC Protocol** | IEC103 |  |
|  | IEC104 |  |
| **Environmental Monitoring Protocol** | HJ212 |  |
|  | SL651 |  |
|  | SZY206 |  |

## 1.4  Noun Explanations
1.4.1  Device
The system collects data from a device, which must have a communication interface and use a specific communication protocol for communication. A device can be a testing instrument, a small meter, a sensor, or even a separate PLC.
1.4.2  Factor
A factor is an attribute of a device, including the device's measured value, status, control unit, etc. For example, for a measuring instrument, the following attributes can be called a factor:
- Latest measured value (measured value)
- Current device status: measuring, standby, fault, etc. (status)
- Start measurement, stop measurement (control unit)
1.4.3  Link
The physical connection method between the system and the device as well as the basic communication protocol, that is, the part below the data link layer in the communication process. For example, it can be using a serial communication cable with the UART communication protocol; or using a network cable with the TCP/IP communication protocol. Multiple devices are supported to share one link.
1.4.4  Driver
A functional module that realizes functions such as collection, upload, storage, etc. According to functional division, it includes acquisition driver (realizing acquisition communication protocol parsing), upload driver (realizing upload communication protocol parsing), link driver (realizing connection and data sending/receiving of specific links), storage driver (realizing storage and operation of specific databases), etc.
1.4.5  Upload Service
The system uploads data to a platform or other devices using a specific link and communication protocol.
1.4.6  Upload Factor
The factor to be uploaded to a platform or other devices.
2  Service Philosophy
Our company solemnly promises:
What you purchase is not just a product, but also meticulous and thoughtful technical support services!!!( =^_^= )
For most of our wireless products, on-site installation only requires ordinary workers to connect the power supply! No debugging is needed!
We provide free remote guidance and remote configuration and debugging services to send data to the cloud platform designated by the user. (Hardware)
Free IoT solution consulting services are provided!

### 1. What devices can be connected?

PLCs, sensors, meters, actuators, and industrial instruments.

### 2. Which protocols are supported?

Modbus RTU/TCP, MQTT, OPC UA, TCP/IP and more.

### 3. Can it integrate with SCADA systems?

Yes, it fully supports SCADA, MES, ERP, and cloud platforms.

### 4. Does it support remote monitoring?

Yes, real-time remote monitoring and control are supported.

### 5. Is it suitable for large-scale systems?

Yes, it is scalable for both small factories and large industrial networks.

### 6. Is the system difficult to install?

No, it supports automatic device detection and fast deployment.
