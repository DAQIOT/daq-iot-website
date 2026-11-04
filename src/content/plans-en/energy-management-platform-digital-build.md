---
title: Technical Plan for Digitalizing an Enterprise Energy Management Platform
summary: Local deployment of an energy data platform that acquires and monitors
  water, steam, chilled water and compressed air consumption together with PLC
  data from 13 types of production equipment.
category: 智能制造
subcategory: EnergyConsumption & Management
---
## Project Background

The project covers acquisition and monitoring of water, steam, chilled water, compressed air and related energy data at one site, plus PLC data from selected equipment. The whole system is deployed locally. Every meter on site reports over wired communication to the digital energy management system, while several dozen wireless steam trap monitoring devices report over wireless links.

Monitoring point counts by energy system:

Workshop mains water system: 2 water flow meters on the main pipe, 1 flow meter at the condensate outlet after the pumps

Workshop steam system and others: 24 steam flow meters across production lines, 16 steam traps, 3 humidity sensors, 8 temperature sensors, 1 pressure sensor

Workshop compressor room and others: 2 compressed air flow meters on the main compressed air pipe

Workshop chilled water system and others: 3 chilled water flow meters on the supply pipe, 6 temperature sensors on the supply and return pipes

Workshop PLC equipment: data acquisition from 13 types of PLC equipment.

## Solution Design

Because the meters and devices to be connected are of many types, run inconsistent protocols and require different network access methods, this plan uses several kinds of acquisition terminals and routes all data into a data acquisition gateway. The gateway runs the DAQ for IIOT general-purpose industrial data acquisition system, which supports multiple protocol conversions. It converts device data from different protocols into the format the customer requires and forwards it to the energy management platform.

### Design Principles

Advanced: built on industrial IoT, cloud computing and big data technologies.

Reliable: hardware and software must be highly reliable and run 7×24 without interruption.

Open: standard protocols and interfaces for future expansion and third-party integration.

Secure: security ensured at network, data and application levels.

Easy to use: friendly human-machine interface, simple operation, straightforward maintenance.

### Equipment List

| No. | Item                                                | Qty | Remarks                                                                          |
| --- | --------------------------------------------------- | --- | -------------------------------------------------------------------------------- |
| 1   | WiFi / wired acquisition terminal                   | 50  | For metering instruments and sensors with a communication port                   |
| 2   | Data acquisition gateway                            | 7   | For connecting wireless steam trap monitoring devices on site                    |
| 3   | Meter camera                                        | 16  | For devices without a communication port, used with the image recognition system |
| 4   | Local image recognition system                      | 1   | Parses ordinary photos, recognizes readings and outputs results                  |
| 5   | General-purpose industrial data acquisition gateway | 17  | For acquiring on-site PLC data                                                   |

### Acquisition System Architecture

![Technical Plan for Digitalizing an Enterprise Energy Management Platform](/images/plans-en/technical-plan-for-digitalizing-an-enterprise-energy-management-platform/1ac.png)

*WiFi and wired acquisition terminal approach*

![Technical Plan for Digitalizing an Enterprise Energy Management Platform](/images/plans-en/technical-plan-for-digitalizing-an-enterprise-energy-management-platform/2ac.png)

The WiFi / wired acquisition terminal is a classic dual-serial-port device server with high stability, strong cost-performance and low power consumption. The product ships with its peripheral circuitry complete and uses plug-in terminal blocks for direct RS-485/232 serial communication. Its main frequency reaches 240 MHz and it supports RS-232 and RS-485 operation at the same time. Other products in the series support analog and digital input as well as dry-contact and wet-contact switch input and control. Internally it runs a deeply optimized TCP/IP stack. Configuration is done through a web page or a visual host-system tool, which makes evaluation, testing and volume deployment straightforward.

### Local Image Recognition Approach

![Technical Plan for Digitalizing an Enterprise Energy Management Platform](/images/plans-en/technical-plan-for-digitalizing-an-enterprise-energy-management-platform/3ac.png)

This approach targets remote acquisition from instruments without communication capability. The camera captures an image of the meter face; the image is first denoised, then an edge detection algorithm is applied to the preprocessed image. By precisely filtering out non-critical targets, the outline of the meter and its panel is located. A Hough transform detects the scale marks and the pointer, and the same transform can be used to detect liquid level. Targets in the image that require classification are handled with deep learning methods, such as digit recognition, meter style recognition and text position detection in natural scenes. The models use convolutional neural networks (CNN), with different network architectures built according to image characteristics. The product recognizes industrial instruments automatically from video images. It applies to LCD meters, analog gauge meters, roller-counter meters and other electronic or mechanical instruments. Test results show that the localization and recognition algorithm is computationally simple and achieves high accuracy, overcoming the effect of random dial tilt on reading recognition.

### PLC Data Acquisition Approach

![Technical Plan for Digitalizing an Enterprise Energy Management Platform](/images/plans-en/technical-plan-for-digitalizing-an-enterprise-energy-management-platform/4ac.png)

The IOT Gateway is an industrial protocol conversion and data acquisition gateway from Shanghai Daq IoT Technology Co., Ltd.

The gateway includes standard acquisition protocols, industry protocols, mainstream PLC protocols, CNC machine tool protocols and Haitian injection molding machine protocols, and supports data acquisition from more than a hundred types of industrial equipment. No software installation is needed — configuration runs in a browser.

It supports MQTT, HTTP, ModBus, OPC UA, TCP, databases and DL/T645 smart meters, and can convert data to JSON for upload to a cloud server. It also works as a plain transparent serial device server and Modbus gateway. Interfaces include Ethernet, 4G and WiFi, with RS232/485/422 serial ports.

### Protocol Conversion and Data Aggregation

DAQ for IIOT is a general-purpose industrial data acquisition system: device data acquisition and management software that runs on an edge computer. It is used mainly to acquire, control, store, query, display and upload data from instruments and equipment such as PLCs, injection molding machines, CNC machine tools, electricity meters and flow meters.

Main functions of the system:

Flexible transmission configuration (links, storage, devices, factors, upload services)

Data acquisition and upload

Real-time monitoring (devices, uploads)

Alarm configuration and monitoring

Data storage and query (tables, charts, Web API)

SCADA and visualization design

User and permission management

Multi-language interface support

Some of the communication links supported by the system:

| Link Type | Communication Link |
| --------- | ------------------ |
| TCP       | TCP client         |
| TCP       | TCP server         |
| Serial    | Serial UART        |
| UDP       | UDP                |
| HTTP      | HTTP server        |
| HTTP      | HTTP client        |
| OPC       | OPC-UA             |
| OPC       | OPC-DA             |
| MQTT      | MQTT-TCP           |
| MQTT      | MQTT-WebSocket     |

#### Supported Communication Protocols

Some of the communication protocols supported by the system:

| Protocol Category          | Main Protocol     | Sub-protocol  |
| -------------------------- | ----------------- | ------------- |
| PLC communication protocol | Modbus            | Modbus-RTU    |
| PLC communication protocol |                   | Modbus-TCP    |
| PLC communication protocol |                   | Modbus-ASCII  |
| PLC communication protocol | Siemens S7        |               |
| PLC communication protocol | Mitsubishi MELSEC | MELSEC-1E     |
| PLC communication protocol |                   | MELSEC-3C     |
| PLC communication protocol |                   | MELSEC-3E     |
| PLC communication protocol |                   | MELSEC-4C     |
| PLC communication protocol |                   | MELSEC-4D     |
| PLC communication protocol |                   | Mitsubishi-Fx |
| OPC communication protocol | OPC-UA            |               |
| OPC communication protocol | OPC-DA            |               |

(The full table is longer; only the first 12 rows are shown here.)

### Solution Advantages

Non-intrusive: existing instruments are left untouched, so implementation is safe.

Highly adaptable: recognizes many types of mechanical and electronic instruments.

Use in this project: a supplementary approach. Where such instruments need to be read, the work can be carried out with a combination of hardware and software.

## Project Implementation and After-Sales Service

Implementation plan: the project runs through kickoff, site survey, equipment installation and commissioning, system joint commissioning, trial run, and acceptance and training, with a Gantt chart provided.

Training plan: training at different levels for system administrators and general users.

After-sales service: at least one year of free warranty and a 7×24 technical support response mechanism.
