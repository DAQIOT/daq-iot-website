---
title: OPC UA and OPC DA Integration for DCS, SIS and SCADA Remote Monitoring
summary: An OPC UA/DA acquisition client and an MQTT link move production data
  out of DCS, SIS and SCADA systems across a one-way isolation gateway, with
  custom API access on top.
category: 智能制造
subcategory: Device Networking & Data Acquisition
---
DCS/SIS/SCADA remote monitoring: production data acquisition, OPC UA/DA protocol, custom API development and MQTT integration

In industrial automation, efficient acquisition, reliable transport and flexible integration of production data from DCS (distributed control system), SIS (safety instrumented system) and SCADA (supervisory control and data acquisition) remote monitoring systems are essential. The solution from Shanghai Daq IoT Technology Co., Ltd. builds on OPC UA/DA and MQTT to deliver customized data acquisition for industrial sites, supporting intelligent production and management.

## 1. Background

Industrial production leaves DCS, SIS and SCADA systems holding large volumes of critical data, yet data exchange between those systems is difficult. OPC UA/DA is widely used in industrial data acquisition and connects equipment and systems from different vendors effectively. MQTT is lightweight and highly reliable, which suits data transport. Combined, the two form an efficient and stable acquisition and transport chain.

## 2. Technical Principle

### (1) OPC UA/DA Protocol

OPC DA: built on COM/DCOM and aimed at Windows, it provides real-time data access for industrial automation. Its client connects to an OPC server and collects data by subscription or polling at a specified rate. It is well established for shop-floor data acquisition.

OPC UA: independent of the operating system, it supports cross-platform data exchange with strong security and extensibility. Its rich data model and service interfaces carry and manage complex data types, which suits enterprise-level integration and remote monitoring.

| Feature                | OPC DA         | OPC UA                    |
| ---------------------- | -------------- | ------------------------- |
| Platform dependency    | Windows only   | Cross-platform            |
| Communication protocol | COM/DCOM       | TCP/SOAP/HTTPS            |
| Security mechanisms    | Limited        | End-to-end encryption     |
| Data modeling          | Flat structure | Hierarchical object model |
| Discovery service      | None           | Built-in discovery server |

### (2) MQTT Protocol

MQTT uses a publish/subscribe model over TCP/IP. A publisher sends data to a specified topic, and clients subscribed to that topic receive it. Low bandwidth, low power and high reliability make it common in IoT and industrial data transport.

## 3. Acquisition Design

### (1) System Architecture

An OPC UA/DA acquisition client is deployed between the DCS/SIS/SCADA systems and the target server. The client connects to the OPC server of the DCS and other systems and collects data. The data passes a firewall and a one-way isolation gateway, is published to the server over MQTT, and is then available to upper-layer applications.

![OPC UA and OPC DA Integration for DCS, SIS and SCADA Remote Monitoring](/images/plans-en/opc-ua-and-opc-da-integration-for-dcs-sis-and-scada-remote-monitoring/architecture_diagram_en.png)

*(2) Acquisition Workflow*

1. Data acquisition: acquisition software supporting OPC UA/DA is installed on the acquisition-side server and configured — OPC server address, device ID, acquisition mode, update rate, monitoring point information. A file cache holds data locally when the network drops and resumes transmission once it recovers.
2. Data transmission: collected data crosses the isolation gateway over TCP, which keeps transport secure. At the receiving end the software converts it into MQTT messages and publishes them to the MQTT server under preset topics.
3. Data reception and processing: clients subscribed to those topics receive the data from the MQTT server and store, analyze and visualize it, supporting production decisions.

![OPC UA and OPC DA Integration for DCS, SIS and SCADA Remote Monitoring](/images/plans-en/opc-ua-and-opc-da-integration-for-dcs-sis-and-scada-remote-monitoring/bc5ee541-0e94-4c62-869b-d7292ef3aebd.png)

*4. Custom Development and API Interfaces*

### (1) Custom Development

The OPC UA/DA acquisition client is customized to the industrial scenario. The acquisition strategy is optimized — polling rate follows the rate at which device data actually changes, for example, which raises acquisition efficiency. For complex device data structures, parsing and preprocessing functions are developed to keep data accurate and complete.

An MQTT client program is developed to interface with the OPC acquisition client. Flexible topic configuration meets different data classification and management needs, and the publish/subscribe mechanism is optimized for real-time, reliable transport.

### (2) API Interfaces

A unified API simplifies integration for upper-layer applications. It covers configuration interfaces for OPC server connection parameters and monitoring point information, read interfaces that let an application retrieve acquired data, and subscription interfaces that let an application subscribe to a specific topic and receive real-time pushes.

The API follows RESTful style or other common interface conventions, which keeps it portable across platforms and easy to use. Detailed documentation — interface descriptions, parameter definitions, call examples — keeps development effort low.

## 5. Solution Advantages

### (1) Broad Compatibility

OPC UA/DA supports a wide range of industrial equipment and systems and adapts to DCS, SIS and SCADA systems from different vendors, which lowers integration effort. MQTT is widely used across IoT platforms and back-end systems, so integration with the existing enterprise architecture is straightforward.

### (2) Secure and Reliable

A one-way isolation gateway and a firewall secure the data link against network attack and data leakage. The file cache in the OPC acquisition software keeps data from being lost, and the MQTT QoS mechanism guarantees reliable message delivery.

### (3) Efficient and Real-Time

Optimized acquisition strategy and transport mechanisms deliver fast collection and real-time transmission. Through topic subscription, upper-layer applications receive exactly the data they need in time, which meets the monitoring and decision requirements of industrial production.

## 6. Application Case

The DCS of a green power environmental protection plant uses this solution for data acquisition and transport. DCS data from the control room is collected over OPC DA, passes the isolation gateway and firewall, and is forwarded to the application-layer SCADA server over MQTT. Operating parameters such as main steam flow, temperature and pressure are monitored in real time, which supports optimized operation and fault warning, improves generation efficiency and cuts O&M cost.

![OPC UA and OPC DA Integration for DCS, SIS and SCADA Remote Monitoring](/images/plans-en/opc-ua-and-opc-da-integration-for-dcs-sis-and-scada-remote-monitoring/e7ff5137-9825-489b-b783-4f83fa88365f.png)

Main steam flow (cumulative) (main_fow「ate_sum)

Steam temperature (steam_ temperature)

Main steam pressure (steam_pressure)

Generation load (load)

Generation today (day_electricity amount)

Generation this month, total (month_electricity_total)

Generation this month, total (month electricity_origin)

Generation this year, total (year_electricitytotal)

Generation this year, total (year_electricityorigin
