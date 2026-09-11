---
title: "4G Wireless Online Dew Point Monitor"
summary: >-
  SC-GP-DP4G wireless online dew point monitor is an industrial-grade, compact and portable online dew point transmitter launched by Shanghai DAQ IoT Technology Co., Ltd., providing fast, stable and repeatable temperature measuremen…
image: "/images/products/1783317435726635.png"
order: 221
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1780555412865043.png)

![](/images/products/1780555447108018.png)

SC-GP-DP4G wireless online dew point monitor is an industrial-grade, compact and portable online dew point transmitter launched by Shanghai DAQ IoT Technology Co., Ltd., providing fast, stable and repeatable temperature measurement.

Application fields: it is suitable for the semiconductor industry and a variety of industrial applications, such as pure gas, dryers, glove boxes, drying rooms, additive production, compressed air, and other applications requiring high-precision humidity control.

# 2 Ordering Specifications & Model Selection

| Model | Description |
| --- | --- |
| DAQ-GP-DP4G | 4G transmission, conventional 12V DC power supply. Suitable for occasions with convenient power supply and high acquisition frequency. |
| DAQ-LP-DP4G | 4G transmission, 3.6V battery power supply, battery life 1~2 years depending on acquisition frequency. Suitable for occasions with low acquisition frequency and inconvenient power supply. |
| DAQ-GP-DPLoRa | LoRa transmission, 12V DC power supply |
| ... | Customized (transmission via RS485, WiFi, Ethernet interface, etc.) |

# 4 Product Features & Parameters

## 4.1 Acquisition Characteristics

Dew point range: -60° ~ 60°C (configurable, affected by the environment)

Measurement accuracy: ±2°C (in air or N2)

## 4.2 Electrical Characteristics

Operating power supply: DC 12V~30V

Power consumption: less than 5W

## 4.3 Communication Characteristics

Wireless transmission mode: 4G / LoRa / WiFi / network cable

Communication protocol: MQTT / TCP / UDP / HTTP / SSL; other protocols customizable

Data forwarding: any public network server

Number of server centers: supports reporting data to up to 7 cloud servers simultaneously

Heartbeat packet: supports custom heartbeat packets, which can be set to the signal strength

Registration packet: supports custom registration packets, which can be set to the IMEI code

## 4.4 Operating Environment

Probe operating temperature: -40° ~ 80°C

# 5 Core Advantages

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- Supports any IoT cloud platform and configuration software, with data protocol integration

- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud

- Supports external connection of multiple sensors

- Non-invasive acquisition, without affecting the normal operation of equipment

- Supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

# 6 Typical Application Cases

![](/images/products/1780555814972783.png)

# 7 Data Reporting Communication Protocol

## 7.1 Protocol Parsing Description

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP address and port number of the cloud server.

**Example JSON data message:**

{"IMEI":860344048491162,"Temperture":20,"Humidity":"17.54","DP":"12","ICCID":"1119205006447538"}

**Message parsing:**

{

"Temperture": "20.2", // temperature

"Humidity": "17.54", // humidity

"DP": "12", // dew point

"ID": "860344048491162" // device ID

}

Protocol reception test: reception testing can be performed with the network debugging assistant NetAssist.

## 7.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 8 Platform Integration

## 8.1 Default Platform

By default, the product connects to our designated open industrial IoT platform, whose interface is shown below:

![](/images/products/1780555715156367.png)

PC browser interface

![](/images/products/1780555832158934.png)

Mobile WeChat access interface

## 8.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

Taking OneNet platform integration as an example: after the user creates a product and adds a device on China Mobile's OneNet platform, the user needs to provide the product ID and device registration code. For example:

ID: 332590

Registration code: DGRUa7Vr9KYGunwJ

# 9 Installation Notes

1) The product has a built-in SIM card. The annual data traffic fee is about 10~20 RMB, depending on the reporting frequency. You may also use your own SIM card, which must be confirmed in advance.
