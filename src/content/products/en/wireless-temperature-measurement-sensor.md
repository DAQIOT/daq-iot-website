---
title: "Wireless Temperature Measurement Sensor"
summary: >-
  SC-GP-PT100 wireless industrial temperature measurement sensor transmitter terminal is a wireless temperature measurement product for industrial fields launched by Shanghai DAQ IoT Technology Co., Ltd. This product converts thermo…
image: "/images/products/1692944201865323.jpg"
order: 214
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

SC-GP-PT100 wireless industrial temperature measurement sensor transmitter terminal is a wireless temperature measurement product for industrial fields launched by Shanghai DAQ IoT Technology Co., Ltd. This product converts thermocouple and thermal resistance signals into input electrical signals or measured temperature and periodically reports data via 4G. As a new-generation temperature measurement data-to-cloud product, it is widely used in industrial sectors such as metallurgy, petrochemical, electric power, light industry, textiles, food, national defense and scientific research.

The sensor terminal supports 4G/NB-IoT/LoRa/WiFi communication (external power supply defaults to GPRS; battery power defaults to NB-IoT/LoRa), overcoming wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs. This terminal supports up to 8 channels of temperature acquisition. It comes with a rich variety of Pt100 temperature probes, has a wide temperature measurement range, high measurement accuracy and is easy to install.

| Model | Description |
| --- | --- |
| SC-LP-PT100 | NB-IoT/LoRa communication, long-life lithium battery power supply. Suitable for occasions with low acquisition frequency and difficult external power supply. |
| SC-GP-PT100 | GPRS communication, 220V AC / 12V DC power supply. Suitable for occasions with high acquisition frequency or convenient external power supply. Because the device is online for a long time by default, it supports remote parameter configuration and debugging; on site you only need to install and power it. |

# 3 Product Features

## 3.1 Temperature Acquisition Characteristics

Acquisition type: contact point temperature

Temperature range: -200℃ ~ +450℃

Temperature accuracy class: 0.2°C

Acquisition frequency: 1 second ~ 24 hours, remotely configurable

## 3.2 Electrical Characteristics

Power supply: battery, or 12V DC / 220V AC

## 3.3 Communication Characteristics

Wireless transmission mode: NB-IoT / LoRa / WiFi

Communication protocol: MQTT / TCP / UDP / HTTP / SSL / Modbus RTU; other protocols customizable

Data forwarding: any public network server

Number of server centers: supports reporting data to up to 7 cloud servers simultaneously

Heartbeat packet: supports custom heartbeat packets, which can be set to the signal strength

Registration packet: supports custom registration packets, which can be set to the IMEI code

Positioning: supports LBS base station positioning, making it easy to query device location

## 3.4 Structural Characteristics

Antenna type: suction-cup or rubber-rod external antenna (internal antenna optional)

Material: PC plastic (housing)

Main body protection rating: IP65

Main body dimensions: 200mm × 94mm × 60mm

Temperature probe structure: patch type

Main body installation: wall-mounted or screw-fixed

Probe installation: adhesive or screw fixing, or cable-tie bundled installation

## 3.5 Operating Environment

Ambient temperature -25°C ~ 75°C, humidity 0 ~ 95% (non-condensing)

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

Example JSON data message:

{"T":56.72,"ID":"860344048491162"}

Message parsing:

{

"T": 56.72, // channel 1 temperature value

"ID": "860344048491162" // device ID

}

## 5.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff. For orders of this product over 2000 RMB, protocol customization is free.

# 6 Platform Integration

## 6.1 Default Platform

By default, the product connects to our designated industrial IoT platform.

## 6.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

# 7 Notes

(1) This product has a built-in IoT SIM card by default, free for the first year, and about 20 RMB per year from the second year, including free technical support and lifetime maintenance. If you need to use your own SIM card, please inform us in advance.
