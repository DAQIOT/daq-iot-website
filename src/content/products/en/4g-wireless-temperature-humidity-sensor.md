---
title: "4G Wireless Temperature & Humidity Sensor"
summary: >-
  SC-GP-TH4G wireless temperature & humidity sensor terminal is a general-purpose wireless temperature & humidity sensor based on wireless transmission and wide DC voltage power supply, launched by Shanghai DAQ IoT Technology Co., L…
image: "/images/products/1692865652747656.jpg"
order: 213
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

SC-GP-TH4G wireless temperature & humidity sensor terminal is a general-purpose wireless temperature & humidity sensor based on wireless transmission and wide DC voltage power supply, launched by Shanghai DAQ IoT Technology Co., Ltd. It can collect temperature and humidity data in the environment.

The wireless temperature & humidity terminal supports 2G/4G/NB-IoT/LoRa communication, which can greatly simplify on-site deployment time and reduce construction costs. It is widely used in temperature and humidity measurement scenarios in industry, agriculture and other fields.

# 2 Ordering Specifications & Model Selection

![](/images/products/1692865378139737.png)

# 4 Executive Standards

GB5170.4-85 "Methods for verifying the basic parameters of environmental test equipment for electrical and electronic products — Temperature change test equipment"

# 5 Product Features & Parameters

## 5.1 Acquisition Characteristics

- Temperature range: -40°C ~ 120°C

- Temperature accuracy: ±0.5°C

- Humidity range: 0 ~ 100% RH

- Humidity accuracy: ±0.1 RH

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

## 5.4 Structural Characteristics

Antenna type: suction-cup or rubber-rod external antenna (built-in flexible FPC antenna by default)

- Material: ABS plastic (housing)

- Main body protection rating: IP64

- Main body installation: adhesive or screw fixing

## 5.5 Operating Environment

- Temperature -40°C ~ 75°C, humidity 0 ~ 95%

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

Example JSON data message:

{"T":27.8,"H":67.1,"ID":"860344048491162"}

Message parsing:

{

"T": 32.1, // temperature

"H": 64.8, // humidity

"ID": "860344048491162" // device ID

}

## 7.2 Protocol Reception Test

Reception testing can be performed with the network debugging assistant NetAssist.

## 7.3 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 8 Platform Integration

## 8.1 Default Platform

By default, the product connects to our designated open industrial IoT platform.

## 8.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

Taking OneNet platform integration as an example: after the user creates a product and adds a device on China Mobile's OneNet platform, the user needs to provide the product ID and device registration code. For example:

ID: 332590

Registration code: DGRUa7Vr9KYGunwJ

# 9 Notes

1) When the device is installed inside a metal distribution box, an external antenna should be used, routed outside the distribution box.

2) This product has a built-in SIM card. The annual data traffic fee is about 10~20 RMB, depending on the reporting frequency. You may also use your own SIM card, which must be confirmed in advance.
