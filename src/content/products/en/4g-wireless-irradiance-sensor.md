---
title: "4G Wireless Irradiance Sensor"
summary: >-
  DAQ-GP-LR4G wireless irradiance sensor terminal is a wireless solar radiation measurement product launched by Shanghai DAQ IoT Technology Co., Ltd. The sensor uses the photoelectric principle and can measure solar radiation in the…
image: "/images/products/1692842082968000.jpg"
order: 211
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1692841525156049.png)

DAQ-GP-LR4G wireless irradiance sensor terminal is a wireless solar radiation measurement product launched by Shanghai DAQ IoT Technology Co., Ltd. The sensor uses the photoelectric principle and can measure solar radiation in the spectral range of 0.3~3μm. The radiation sensor uses a high-precision photosensitive element with wide-spectrum absorption, high absorption over the full spectrum and good stability. At the same time, a dust cover with a light transmittance of up to 95% is installed outside the sensing element. The dust cover is specially treated to reduce dust adsorption, effectively preventing environmental factors from interfering with the internal element, and can measure solar radiation accurately.

DAQ-GP-LR4G can directly read the current solar radiation value, and the wiring is simple. It has a compact and elegant appearance and occupies little installation space. The product is widely used for measuring solar radiation energy in departments such as solar energy utilization, meteorology, agriculture, building material aging and air pollution.

The sensor terminal supports 4G/WiFi/LoRa and other communication modes by default, and supports MQTT, HTTP and other communication methods. It can overcome wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs.

| Model | Description |
| --- | --- |
| DAQ-GP-LR4G | 4G communication, 220V AC / 12V DC power supply. Suitable for occasions with high acquisition frequency or convenient external power supply. Because the device is online for a long time by default, it supports remote parameter configuration and debugging; on site you only need to install and power it. |
| DAQ-GP-LR485 | RS485 interface, Modbus communication protocol, 220V AC / 12V DC power supply |

# 3 Product Features

## 3.1 Acquisition Characteristics

Acquisition type: solar radiation

Range: 0~2000W/m², other ranges customizable

Wavelength range: 400-1100nm

Resolution: 1 W/m²

Accuracy: ±5%

Acquisition frequency: 1 second ~ 24 hours, remotely configurable

## 3.2 Electrical Characteristics

Power supply: 7V~30V DC

Power consumption: 0.06W

## 3.3 Communication Characteristics

Wireless transmission mode: 4G / NB-IoT / LoRa / WiFi

Communication protocol: MQTT / TCP / UDP / HTTP / SSL / Modbus RTU; other protocols customizable

Data forwarding: any public network server

Number of server centers: supports reporting data to up to 7 cloud servers simultaneously

Heartbeat packet: supports custom heartbeat packets, which can be set to the signal strength

Registration packet: supports custom registration packets, which can be set to the IMEI code

Positioning: supports LBS base station positioning, making it easy to query device location

## 3.4 Structural Characteristics

Material: PC plastic (housing)

Main body protection rating: IP65, works in dusty, rain and snow environments

Main body dimensions: 200mm × 94mm × 60mm

Main body installation: wall-mounted or screw-fixed

## 3.5 Operating Environment

Ambient temperature: -25℃ ~ 60℃, humidity 0% ~ 100% RH

# 4 Core Advantages

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Uses a waterproof breathable membrane to effectively prevent dust from entering while maintaining good air permeability

- Supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- Supports any private IoT cloud platform and configuration software, with data protocol integration

- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud

- Non-invasive measurement, without affecting the normal operation of equipment

- Supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

# 5 Data Reporting Communication Protocol

## 5.1 Protocol Parsing Description

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP (or domain name) address and port number of the cloud server.

**Example JSON data message:**

{"light radiation":731,"ID":"860344048491162"}

**Message parsing:**

{

"light radiation": 731, // light radiation, unit W/m²

"ID": "860344048491162" // device ID

}

## 5.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 6 Platform Integration

## 6.1 Default Platform

By default, the product connects to our designated industrial IoT platform, whose interface is shown below:

![](/images/products/1692841742176801.png)

PC browser interface

## 6.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

# 7 Notes

This product has a built-in IoT SIM card by default. The data traffic fee is about 20 RMB per year, including free technical support and maintenance. If you need to use your own SIM card, please inform us in advance.
