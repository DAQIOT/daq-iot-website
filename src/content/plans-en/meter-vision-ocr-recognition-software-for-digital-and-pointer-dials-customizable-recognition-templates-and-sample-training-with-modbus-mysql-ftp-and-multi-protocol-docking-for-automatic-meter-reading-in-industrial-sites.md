---
title: Meter vision OCR recognition software for digital and pointer dials,
  customizable recognition templates and sample training, with Modbus, MySQL,
  FTP and multi-protocol docking for automatic meter reading in industrial
  sites.
summary: Non-intrusive data acquisition of Thailand EDMI meters via optical
  probe and edge gateway, uploaded over 4G in MQTT+JSON to Skyworth cloud-edge
  platform for remote meter reading of overseas PV stations.
category: Smart Manufacturing
subcategory: Device Networking & Data Acquisition
image: /images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms10.png
hidden: false
---
## 1  Project Background and Requirements

###  1.1  Project Background

Skyworth PV is developing its C&I photovoltaic power plant business in Thailand, with sites distributed across multiple provinces (e.g., Samut Prakan). Each site is equipped with an EDMI Mk6E GENIUS-series electronic electricity meter (CT 400/5, three-phase four-wire) as the gateway metering device, together with a Skyworth SEC3000 microgrid energy controller and local networking equipment. To support remote generation statistics, equipment status monitoring and electricity billing analysis for its overseas plants, Skyworth requires that meter data from all sites be transmitted in real time back to the Skyworth cloud-edge platform.

###  1.2  Project Site

Thailand. The sites are rooftop or ground-mounted PV plants on C&I factory buildings. The local distribution rooms are dominated by international-brand equipment, and the meters are EDMI products (EDMI Group, Australia, a mainstream metering brand in the Southeast Asian market). Communications rely on local Thai 4G carrier networks, and no permanent O&M personnel are stationed on site.

###  1.3  Project Requirements

Without modifying the existing wiring and metering circuits of the EDMI meters, read meter data non-intrusively via the infrared interface and report it over a 4G wireless network using the MQTT protocol in the JSON data format specified by the Skyworth cloud-edge platform, thereby achieving automated acquisition and cross-domain integration of core data such as cumulative energy, three-phase voltage/current and active power.

## 2  Implementation Challenges

Compared with conventional domestic State Grid meter acquisition projects, the challenges of this project are concentrated in two dimensions: the overseas environment and cross-domain protocols.

No ready-made point table for overseas meters: the EDMI Mk6E GENIUS follows the international metering system (not the State Grid DL/T645 protocol), and there are no mature domestic acquisition precedents or reference point tables. The reading methods for fields such as cumulative energy, three-phase voltage and current, and per-phase power had to be reconstructed by trial-reading item by item through the meter's infrared communication interface and comparing the results against the LCD display values.

Cross-domain data integration: the Skyworth cloud-edge platform imposes explicit specifications on reported messages, namely the MQTT transport protocol plus a specific JSON data format. Field names (e.g., energy_total, meter_model, active_power_a) must correspond one-to-one with the platform data model, and the acquisition side must perform field mapping and format conversion at the gateway edge.

Overseas networks and remote O&M: the sites rely on local Thai 4G networks, and the gateways must support local carrier bands (FDD-LTE B1/B3/B5/B8, TDD-LTE B38/B40/B41, etc.). As the sites are far from China, commissioning is performed remotely, which places high demands on remote device O&M and remote upgrade capabilities.

Limited on-site construction conditions: the distribution rooms are installed with the assistance of local electricians, who have no professional commissioning capability. The equipment must therefore be ready to use once powered, minimizing on-site construction and commissioning effort.

##  3  Technical Implementation Plan

This project adopts our company's integrated acquisition solution consisting of the MeterReader optical probe and the DAQ-GP-DPU communication manager. The infrared probe is attached to the infrared communication window of the EDMI meter and reads the meter data non-intrusively. The DAQ-GP-DPU gateway parses the data and assembles JSON packets, which are then reported to the Skyworth cloud-edge platform via the MQTT protocol over the local Thai 4G network.

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms1.png)

Figure: MeterReader optical probe and communication manager

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/a4a.png)

Figure: Networking architecture (acquiring overseas EDMI meters and connecting to the Skyworth cloud-edge platform over 4G)

 The main equipment configuration is as follows:

No.	Equipment	Model / Description	Quantity	Purpose

1	Optical probe	MeterReader (Wiegand / RS485 interface)	Per meter count	Attached to the EDMI meter infrared window to read meter data non-intrusively

2	Edge computing gateway	DAQ-GP-DPU (communication manager)	1 per site	Data parsing and JSON assembly; MQTT reporting to the Skyworth cloud-edge platform over 4G

3	4G SIM card	Local Thai carrier SIM	1 per site	Compatible with local FDD-LTE/TDD-LTE bands for wireless backhaul

Key Gateway Capabilities

Communication protocols: supports MQTT/TCP/UDP/HTTP and has Node-RED visual programming built in, allowing JSON messages to be flexibly customized to the platform specification.

Network standards: TDD-LTE B34/B38/B39/B40/B41 and FDD-LTE B1/B3/B5/B8, covering mainstream 4G bands in Thailand.

Acquisition interfaces: 4 x RS485, RS232 and CAN, compatible with a wide range of meters and devices.

Reliability: supports local caching during network outages and re-transmission after the network recovers; operating temperature -40 to 80 °C, suitable for overseas site environments.

O&M capabilities: supports remote configuration, remote upgrade and remote management, meeting the remote O&M requirements of cross-border projects.

##  4  On-Site Installation and Commissioning

Before project implementation, our company and the relevant personnel at Skyworth's Thai sites carried out a site survey to confirm the meter installation positions, infrared window orientation, power supply in the distribution cabinets and 4G signal conditions. The following are photographs of the actual site environments at each site.

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms3.png)

Figure: EDMI Mk6E GENIUS gateway electricity meter in the site distribution cabinet

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms4.png)

Figure: Skyworth SEC3000 microgrid energy controller and site networking equipment

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms5.png)

Figure: Site data aggregation cabinet (installation environment for acquisition and communication equipment)

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms6.png)

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms7.png)

Figure: Site factory environment (left) and on-site wireless network information (right)

 **Installation and Commissioning Process**

On-site installation: the MeterReader optical probe is aimed at and attached to the infrared communication window of the EDMI meter, and the probe lead is connected to the DAQ-GP-DPU gateway installed nearby; the gateway is then powered on and connected to the local network. The meter is never dismantled and the original metering circuits and wiring are left untouched, so the installation can be completed by an ordinary electrician.

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms8.png)

Figure: DAQ-GP-DPU acquisition gateway installed next to the EDMI meter

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms9.png)

Figure: MeterReader optical probe aimed at the infrared window of the EDMI Mk6E GENIUS

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms10.png)

Figure: Overall installation result in the site distribution cabinet

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms11.png)

Figure: On-site power-on commissioning

## 5  Cross-Domain Data Integration and Results

During commissioning, meter reading parsing and JSON message assembly were completed in the gateway's visual programming environment, and each field was compared and confirmed against the Skyworth cloud-edge platform data model.

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/a5a.png)

Figure: EDMI meter acquisition fields and their meanings (commissioning record)

Field	Meaning	Field	Meaning

Ftotal	Cumulative energy (kWh)	actpower	Total active power (W)

volA/volB/volC	Phase A/B/C voltage (V)	actpowerA/B/C	Phase A/B/C active power (W)

currentA/currentB/currentC	Phase A/B/C current (A)	meter_model	Meter model (e.g., 2000-6EXX)

In accordance with the Skyworth cloud-edge specification, the gateway assembles the meter readings into a specific JSON format (key fields include energy_total for cumulative energy, meter_model for meter model and active_power_a for per-phase power) and reports them via the MQTT protocol. During commissioning, each message was checked item by item in the Node-RED debugging window to confirm that the field values matched the meter LCD display.

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms12.png)

Figure: Verifying MQTT JSON report messages in the Node-RED debugging window

 After the data is reported to the default cloud platform, the device online status, cumulative energy and historical curves can be viewed in real time on the platform side:

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms13.png)

Figure: Device online status and cumulative energy on the default cloud platform

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms14.png)

Figure: Real-time cumulative energy curve on the platform

![](/images/plans-en/meter-vision-ocr-recognition-software-for-digital-and-pointer-dials-customizable-recognition-templates-and-sample-training-with-modbus-mysql-ftp-and-multi-protocol-docking-for-automatic-meter-reading-in-industrial-sites/ms15.png)

Figure: Data point curve view on the platform

## 6  Project Highlights and Customer Value

### 6.1  Non-Intrusive Acquisition of Overseas Meters

An infrared probe is aimed at the infrared window of the EDMI meter to read data, with no need to dismantle the meter or connect to a secondary metering 

circuit. The original wiring and metering accuracy of the meter remain unchanged, meeting the overseas sites' safety requirements for gateway metering devices.

### 6.2  Cross-Domain Protocol Integration Capability

EDMI meter readings are converted to MQTT + JSON at the gateway edge and integrated directly with the Skyworth cloud-edge platform data model, so no secondary development is required on the customer's platform side, shortening the system integration and testing cycle.

### 6.3  Deployment Approach Adapted to Overseas Environments

The gateway supports local Thai 4G bands as well as breakpoint resume and remote O&M. The equipment is ready to use once installed: local electricians only need to power it up on site, reducing the staffing and time costs of cross-border projects.

### 6.4  A Replicable Overseas Project Model

The solution developed in this project, namely "optical probe + edge computing gateway + MQTT/JSON cloud-edge integration", can be replicated at other overseas sites and in acquisition scenarios involving comparable international meters (EDMI and other brands), providing a low-cost, rapidly deployable path for data backhaul from overseas PV plants.
