---
title: "Wireless Liquid Level Sensor"
summary: >-
  DAQ-GP-TLL4G wireless liquid level sensor terminal is a wireless liquid level measurement product launched by Shanghai DAQ IoT Technology Co., Ltd. Its principle uses a Wheatstone bridge on a diffused silicon wafer: the measured m…
image: "/images/products/1692755369451955.jpg"
order: 210
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1692243225179165.png)

DAQ-GP-TLL4G wireless liquid level sensor terminal is a wireless liquid level measurement product launched by Shanghai DAQ IoT Technology Co., Ltd. Its principle uses a Wheatstone bridge on a diffused silicon wafer: the measured medium (gas or liquid) applies pressure, changing the bridge arm resistance (piezoresistive effect) and producing a differential voltage signal. This signal is converted by a dedicated amplifier into a standard analog or digital signal corresponding to the range, which can then be converted into the pressure corresponding to the liquid level of the measured liquid. Since there is a certain coefficient proportional relationship between liquid level depth and liquid pressure, the liquid level of the measured liquid can be obtained using this relationship. The product has strong anti-interference, overload and impact resistance, low temperature drift and high stability, with very high measurement accuracy. It is an ideal liquid level measuring instrument for the field of industrial automation.

The sensor terminal supports 4G/WiFi/LoRa and other communication modes by default, and supports MQTT, HTTP and other communication methods. It can overcome wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs.

| Model | Description |
| --- | --- |
| DAQ-GP-TLL4G | 4G communication, 12~36V DC power supply |
| DAQ-GP-TLLWiFi | WiFi transmission |
| DAQ-GP-TLLLoRa | LoRa transmission |
| SDAQ-GP-TLLNB | NB transmission (customized, battery-powered) |

# 3 Product Features

## 3.1 Acquisition Characteristics

Acquisition type: liquid level

Range: 0~50 m, other ranges customizable

Accuracy: ±0.5

Acquisition frequency: 1 second ~ 24 hours, remotely configurable

## 3.2 Electrical Characteristics

Power supply: battery, or 12~36V DC

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

Main body protection rating: IP65

Main body dimensions: 200mm × 94mm × 60mm

Main body installation: wall-mounted or screw-fixed

Probe installation: submersible type

## 3.5 Operating Environment

Ambient temperature -20°C ~ 85°C, humidity 0 ~ 95% (non-condensing, no dew)

# 4 Core Advantages

- Simple installation and rapid deployment, helping IoT projects go live quickly

- The probe is waterproof, dust-proof and anti-clogging

- Supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- Supports any private IoT cloud platform and configuration software, with data protocol integration

- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud

- Supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

# 5 Data Reporting Communication Protocol

## 5.1 Protocol Parsing Description

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP (or domain name) address and port number of the cloud server.

**Example JSON data message:**

{"depth":122,"ID":"860344048491162"}

**Message parsing:**

{

"depth": 122, // liquid level depth, unit cm

"ID": "860344048491162" // device ID

}

## 5.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 6 Platform Integration

## 6.1 Default Platform

By default, the product connects to our designated industrial IoT platform, whose interface is shown below:

![](/images/products/1692243226204597.png)

PC browser interface example

![](/images/products/1692243227140399.png)

Mobile WeChat access interface example

## 6.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

# 7 Notes

This product has a built-in IoT SIM card by default. The data traffic fee is about 20 RMB per year, including free technical support and maintenance. If you need to use your own SIM card, please inform us in advance.
