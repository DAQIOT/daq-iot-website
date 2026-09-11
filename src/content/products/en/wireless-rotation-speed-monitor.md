---
title: "Wireless Rotation Speed Monitor"
summary: >-
  SC-GP-RPM4G wireless rotation speed monitor is an instrument launched by Shanghai DAQ IoT Technology Co., Ltd. that measures rotation speed based on the principle of a Hall element sensing a magnetic conductor, processed by intern…
image: "/images/products/1739265182586895.png"
order: 216
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1739259985479163.png)

![](/images/products/1739260335191802.png)

![](/images/products/1739260336678699.png)

SC-GP-RPM4G wireless rotation speed monitor is an instrument launched by Shanghai DAQ IoT Technology Co., Ltd. that measures rotation speed based on the principle of a Hall element sensing a magnetic conductor, processed by internal precision circuits. It can be used to detect the rotation speed of various rotating machines.

Application fields: the SC-GP-RPM4G wireless rotation speed detector can be widely used to measure the rotation speed of large rotating machinery (such as steam turbines, compressors, motors, fans and pumps) and gear rotation speed in the electric power, metallurgy, petrochemical and papermaking industries. It is also widely used in workpiece machining speed monitoring, steel pipe coating speed monitoring and gear speed measurement.

# 2 Ordering Specifications & Model Selection

| Model | Description |
| --- | --- |
| DAQ-GP-RPM4G | 4G transmission, conventional 12V DC power supply. Suitable for occasions with convenient power supply and high acquisition frequency. |
| DAQ-LP-RPM4G | 4G transmission, 3.6V battery power supply, battery life 1~2 years depending on acquisition frequency. Suitable for occasions with low acquisition frequency and inconvenient power supply. |
| DAQ-GP-RPMLoRa | LoRa transmission, 12V DC power supply |
| ... | Customized (transmission via RS485, WiFi, Ethernet interface, etc.) |

# 4 Product Features & Parameters

## 4.1 Acquisition Characteristics

Measurement range:
0~15000 rpm (60 measuring points per revolution)
0~30000 rpm (30 measuring points per revolution)
0~9000000 rpm (1 measuring point per revolution)

Measurement accuracy: 0.5%

Measured material: iron, magnet (other metal materials must be specified)

## 4.2 Electrical Characteristics

Operating power supply: DC 12V

Power consumption: less than 5W

## 4.3 Installation Characteristics

Installation gap: 0.5 ~ 3mm recommended

Installation diagram

![](/images/products/1739260595151891.png)

## 4.4 Communication Characteristics

Wireless transmission mode: 4G / LoRa / WiFi / network cable

Communication protocol: MQTT / TCP / UDP / HTTP / SSL; other protocols customizable

Data forwarding: any public network server

Number of server centers: supports reporting data to up to 7 cloud servers simultaneously

Heartbeat packet: supports custom heartbeat packets, which can be set to the signal strength

Registration packet: supports custom registration packets, which can be set to the IMEI code

## 4.5 Structural Characteristics

Probe dimensions: M16*1*80mm

## 4.6 Operating Environment

- Temperature -30°C ~ 75°C, humidity 0 ~ 95%

# 5 Core Advantages

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- Supports any IoT cloud platform and configuration software, with data protocol integration

- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud

- Supports external connection of multiple sensors

- Non-invasive acquisition, without affecting the normal operation of equipment

- Supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

# 6 Typical Application Cases

![](/images/products/1739260739614016.png)

![](/images/products/1739260743371824.png)

# 7 Data Reporting Communication Protocol

## 7.1 Protocol Parsing Description

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP address and port number of the cloud server.

**Example JSON data message:**

{"IMEI":860344048491162,"RotateSpeed":254,"ICCID":"1119205006447538"}

**Message parsing:**

{

"RotateSpeed":2000, // rotation speed, r/min

"ID": "860344048491162" // device ID

}

Protocol reception test: reception testing can be performed with the network debugging assistant NetAssist.

## 7.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 8 Platform Integration

## 8.1 Default Platform

By default, the product connects to our designated open industrial IoT platform, whose interface is shown below:

![](/images/products/1739260848171592.png)

PC browser interface

![](/images/products/1739260883101525.png)

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
