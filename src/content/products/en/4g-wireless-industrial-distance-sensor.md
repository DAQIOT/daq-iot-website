---
title: "4G Wireless Industrial Distance Measurement Sensor"
summary: >-
  SC-GP-TF4G wireless industrial distance measurement transmitter terminal is a wireless distance measurement product for industrial fields launched by Shanghai DAQ IoT Technology Co., Ltd. This product is a single-point ranging rad…
image: "/images/products/1783317162909867.png"
order: 222
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1780559031170283.png)

![](/images/products/1780559068231951.png)

SC-GP-TF4G wireless industrial distance measurement transmitter terminal is a wireless distance measurement product for industrial fields launched by Shanghai DAQ IoT Technology Co., Ltd. This product is a single-point ranging radar upgraded based on TOF technology (Time of Flight), optimized and upgraded in terms of communication interface, input voltage and reverse connection protection, and periodically reports data via GPRS or 4G. As a new-generation distance measurement data-to-cloud product, it can widely adapt to the needs of various industrial scenarios.

The sensor terminal supports GPRS/4G/NB-IoT/LoRa/WiFi communication (external power supply defaults to 4G; battery power defaults to NB-IoT/LoRa), overcoming wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs. This terminal supports 12V voltage input with reverse connection protection, high measurement accuracy and easy installation.

| Model | Description |
| --- | --- |
| SC-LP-TFNB / SC-LP-TFLoRa | NB-IoT/LoRa communication, long-life lithium battery power supply. Suitable for occasions with low acquisition frequency and difficult external power supply. |
| SC-GP-TF4G | 4G communication, 220V AC / 12V DC power supply. Suitable for occasions with high acquisition frequency or convenient external power supply. Because the device is online for a long time by default, it supports remote parameter configuration and debugging; on site you only need to install and power it. |

# 3 Product Features

## 3.1 Distance Acquisition Characteristics

Acquisition type: single-point ranging radar

Measurement range: 0.1~40m @ 90% reflectivity; 0.1~13.5m @ 10% reflectivity; 0.1~40m @ 90% reflectivity (100Klux); 0.1~13.5m @ 10% reflectivity (100Klux)

Measurement error: ±5cm (0.1~5m), ±1% (5~40m)

Acquisition frequency: 1 second ~ 24 hours, remotely configurable

## 3.2 Electrical Characteristics

Power supply: 12V DC

## 3.3 Communication Characteristics

Wireless transmission mode: 4G / NB-IoT / LoRa / WiFi

Communication protocol: MQTT / TCP / UDP / HTTP / SSL / Modbus RTU; other protocols customizable

Data forwarding: any public network server

Number of server centers: supports reporting data to up to 7 cloud servers simultaneously

Heartbeat packet: supports custom heartbeat packets, which can be set to the signal strength

Registration packet: supports custom registration packets, which can be set to the IMEI code

Positioning: supports LBS base station positioning, making it easy to query device location

## 3.4 Structural Characteristics

Antenna type: suction-cup or rubber-rod external antenna (internal antenna optional)

![](/images/products/1780559193589454.png)

Suction-cup antenna

![](/images/products/1780559201323382.png)

Small "chili" rubber-rod antenna

Material: PC/ABS/PMMA (housing)

Main body protection rating: IP65

Dimensions: 69mm × 41.5mm × 30mm (L×W×H)

Ranging probe structure: patch type

Main body installation: wall-mounted or screw-fixed

Probe installation: adhesive or screw fixing, or cable-tie bundled installation

## 3.5 Operating Environment

Ambient temperature -20°C ~ 60°C

# 4 Core Advantages

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- Supports any private IoT cloud platform and configuration software, with data protocol integration

- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud

- Supports external connection of multiple sensors

- Non-invasive measurement, without affecting the normal operation of equipment

- Supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

# 5 Data Reporting Communication Protocol

## 5.1 Protocol Parsing Description

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP (or domain name) address and port number of the cloud server.

**Example JSON data message:**

{"T":56.72,"ID":"860344048491162"}

**Message parsing:**

{

"T": 56.72, // distance, unit m

"ID": "860344048491162" // device ID

}

## 5.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 6 Platform Integration

## 6.1 Default Platform

By default, the product connects to our designated industrial IoT platform, whose interface is shown below:

![](/images/products/1780559237136358.png)

PC browser interface

![](/images/products/1780559312117694.png)

Mobile WeChat access interface

## 6.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

# 7 Notes

(1) This product has a built-in IoT SIM card by default, free for the first year, and about 20 RMB per year from the second year, including free technical support and lifetime maintenance. If you need to use your own SIM card, please inform us in advance.
