---
title: "4G/WiFi Wireless Infrared Meter Reader"
summary: >-
  SC-GP-IR4G wireless infrared meter reading terminal is a general-purpose electricity and gas meter reading terminal launched by Shanghai DAQ IoT Technology Co., Ltd., based on infrared communication, 4G wireless transmission and w…
image: "/images/products/1692783460789795.jpg"
order: 227
category: "instrument-acquisition"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1692783437150705.jpg)

![](/images/products/1692774499220025.png)

SC-GP-IR4G wireless infrared meter reading terminal is a general-purpose electricity and gas meter reading terminal launched by Shanghai DAQ IoT Technology Co., Ltd., based on infrared communication, 4G wireless transmission and wide DC voltage power supply. It can collect electrical parameter data such as energy, voltage, current and power factor from State Grid electricity meters.

Brief introduction to the infrared meter reading principle: the infrared optical probe periodically reads the parameter information of the smart meter through the infrared optical port and uploads it. The infrared meter reader has the function of infrared signal modulation and demodulation: it modulates a binary digital signal into a pulse sequence at a frequency of 38KHz and drives an infrared emitting diode to send it out in the form of infrared light pulses; the transceiver converts the received light pulses into electrical signals, which after amplification and filtering are sent to the demodulation circuit to be demodulated back into a binary digital signal. After message parsing, it is sent to the server in a specified format (such as JSON).

The wireless infrared meter reading terminal supports 4G/NB-IoT/LoRa communication, greatly simplifying on-site deployment time and reducing construction costs. This terminal supports meter reading scenarios for various meters with infrared communication interfaces, such as electricity meters and gas meters. It is suitable for electricity meter data acquisition, smart city data acquisition, power monitoring data acquisition, energy-saving and emission-reduction data monitoring systems, energy consumption monitoring systems, PV systems, intelligent monitoring, robots, smart security systems and cloud platform systems; and for electricity meter calibration and testing benches. It is especially suitable for PV power generation system energy meter reading and for meter reading when the main meter of a State Grid electricity meter is in a completely sealed state with no seal allowed to be opened.

# 2 Ordering Specifications & Model Selection

| Model | Transmission | Description |
| --- | --- | --- |
| SC-LP-IRNB | Wireless | NB-IoT/LoRa communication, long-life lithium battery power supply. Suitable for occasions with low acquisition frequency and difficult external power supply. |
| SC-GP-IR4G | Wireless | 4G communication, 220V AC / 12V DC power supply. Suitable for occasions with high acquisition frequency or convenient external power supply. Because the device is online for a long time by default, it supports remote parameter configuration and debugging; on site you only need to install and power it. |
| SC-GP-IR485 | Wired | Standalone infrared probe, RS485-to-infrared transceiver, transparent transmission. Users need to handle the electricity meter protocol integration themselves. |
| SC-GP-IR485-modbus (customized) | Wired | Infrared acquisition, RS485 interface, universal Modbus protocol. Users do not need to handle electricity meter protocol integration. |
| SC-GP-IRLAN | Wired Ethernet | Infrared acquisition, RJ45 interface, supports Modbus RTU protocol (virtual serial port) or JSON-format data reporting. |
| SC-GP-IRWiFi | Wireless | WiFi communication, supports Modbus RTU protocol (virtual serial port) or JSON-format data reporting. |

# 4 Executive Standards

"Q/GDW 1365—2013 Technical Specification for Information Exchange Security Authentication of Smart Electricity Meters" — State Grid standard

"Multi-function Electricity Meter Communication Protocol DLT645-2007" — national standard

"Three-phase Smart Electricity Meter Type Specification Q/GDW1356-2013" — State Grid standard

# 5 Product Features & Parameters

## 5.1 Acquisition Characteristics

- Infrared carrier frequency: 38 kHz

- Communication baud rate: 1200~115200 bps, adaptive according to the electricity meter communication parameters

- Infrared communication distance: ≤10 m

- Communication angle: ≤15 degrees

- Infrared communication protocol: compliant with IEC62056-21 (IEC1107) and DL/T-645 1997 and 2007 standards; Modbus protocol supported

## 5.2 Electrical Characteristics

- Power supply: 12V DC (power interface: DC5.5*2.1mm female socket, center positive, outer negative)

- Operating power consumption: less than 5W

## 5.3 Communication Characteristics

Wireless transmission mode: 4G / NB-IoT / LoRa / WiFi

Communication protocol: MQTT / TCP / UDP / HTTP / SSL / Modbus RTU; other protocols customizable

Data forwarding: any public network server

Number of server centers: supports reporting data to up to 7 cloud servers simultaneously

Heartbeat packet: supports custom heartbeat packets, which can be set to the signal strength

Registration packet: supports custom registration packets, which can be set to the IMEI code

Positioning: supports LBS base station positioning, making it easy to query device location

## 5.4 Structural Characteristics

Antenna type: suction-cup or rubber-rod external antenna (internal antenna optional)

![](/images/products/1692774600355702.png)

Suction-cup antenna

![](/images/products/1692774583119710.png)

Small "chili" rubber-rod antenna

- Material: ABS plastic (housing)

- Main body protection rating: IP64

- Main body installation: adhesive mounting

## 5.5 Operating Environment

- Temperature -30°C ~ 75°C, humidity 0 ~ 95%

# 6 Core Advantages

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- Supports any IoT cloud platform and configuration software, with data protocol integration

- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud

- Supports external connection of multiple sensors

- Non-invasive acquisition, without affecting the normal operation of equipment

- Supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

# 7 Data Reporting Communication Protocol

## 7.1 Protocol Parsing Description

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP address and port number of the cloud server.

**Example JSON data message:**

{"Energy":3456.71,"ID":"868956048640233"}

**Message parsing:**

{

"Energy": 3456.71, // total energy, unit kWh

"ID": "860344048491162" // device ID

}

**Multi-parameter acquisition version data format:**

{

"Fflat": 0, // forward flat energy

"Fpeak": 28.91, // forward peak energy

"Fsharp": 105.6, // forward sharp energy

"Ftotal": 105.15, // forward total energy

"Fvalley": 23.29, // forward valley energy

"ID": "865650045071202", // wireless infrared meter reader ID

"Rflat": 0, // reverse flat energy

"Rpeak": 0, // reverse peak energy

"Rsharp": 0, // reverse sharp energy

"Rtotal": 0, // reverse total energy

"Rvalley": 0, // reverse valley energy

"actPower": 13.715, // total active power

"actPowerA": 4.524, // phase A active power

"actPowerB": 0, // phase B active power

"actPowerC": 9.191, // phase C active power

"currentA": 40, // phase A current

"currentB": 70, // phase B current

"currentC": 50, // phase C current

"fac": 0.414, // total power factor

"facA": 0.707, // phase A power factor

"facB": 0, // phase B power factor

"facC": 0.707, // phase C power factor

"lastMRtotal": 0, // last month reverse total energy

"lastMtotal": 0, // last month forward total energy

"reactPower": 13.715, // total reactive power

"reactPowerA": 4.524, // phase A reactive power

"reactPowerB": 0, // phase B reactive power

"reactPowerC": 9.191, // phase C reactive power

"volA": 210, // phase A voltage

"volB": 221, // phase B voltage

"volC": 217 // phase C voltage

}

## 7.2 Protocol Reception Test

Reception testing can be performed with the network debugging assistant NetAssist.

## 7.3 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 8 Platform Integration

## 8.1 Default Platform

By default, the product connects to our designated open industrial IoT platform, whose interface is shown below:

![](/images/products/1692774729352877.png)

PC browser interface

![](/images/products/1692774746145285.png)

Mobile WeChat access interface

## 8.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

Taking OneNet platform integration as an example: after the user creates a product and adds a device on China Mobile's OneNet platform, the user needs to provide the product ID and device registration code. For example:

ID: 332590

Registration code: DGRUa7Vr9KYGunwJ

# 9 Application Cases

![](/images/products/1692774781929302.png)

External power supply mode

![](/images/products/1692774832132854.png)

# 10 Installation Notes

1) For the installation tutorial, refer to: https://jingyan.baidu.com/article/a65957f4bf778565e77f9b47.html, or search Baidu with the keyword "State Grid electricity meter infrared acquisition non-contact remote meter reading solution".

2) Simply align the infrared emitting/receiving port with the infrared device to be communicated with. During communication, ensure the communication distance and tilt angle are within the technical requirements, otherwise the communication effect will be seriously affected.

3) This product has a built-in SIM card. The annual data traffic fee is about 10~20 RMB, depending on the reporting frequency. You may also use your own SIM card, which must be confirmed in advance.
