---
title: "4G/WiFi Smart Metering Socket with MQTT/HTTP Platform Integration, Voltage/Current/Power Monitoring & Open API"
summary: >-
  DAQ-GP-SC4G is a wireless smart metering socket launched by Shanghai DAQ IoT Technology Co., Ltd. It can collect the voltage, current, power, energy consumption and other data of electrical equipment. The product communicates with…
image: "/images/products/1692858111622060.jpg"
order: 202
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1692841036213729.png)

![](/images/products/1692841055720221.png)

DAQ-GP-SC4G is a wireless smart metering socket launched by Shanghai DAQ IoT Technology Co., Ltd. It can collect the voltage, current, power, energy consumption and other data of electrical equipment. The product communicates with the cloud platform via 4G / WiFi, and periodically reports the detected operating parameters to the cloud platform, enabling users to monitor the working status of electrical equipment.

The product is easy to use and requires no configuration by the user: simply plug it in and it automatically connects to the cloud platform and starts reporting data.

The product comes with its own plug and socket, is easy to install, and is widely used for current monitoring and acquisition of 220V electrical equipment. It can be used to determine the on/off working status of equipment and to analyze equipment utilization and OEE availability.

# 2 Ordering Specifications & Model Selection

![](/images/products/1692857884134177.png)

# 4 Product Features

## 4.1 Acquisition Characteristics

Acquisition type: AC

Range: 0~10A

Number of channels: 1 channel for current / voltage / power / energy acquisition

Acquisition frequency: 10 seconds to 24 hours, remotely configurable

Accuracy: 10 mA

GPS positioning (customized): AGPS supported, indoor accuracy 10 m ~ 1 km

## 4.2 Electrical Characteristics

Power supply: 220V AC

Self power consumption: less than 5W

## 4.3 Communication Characteristics

Antenna type: built-in antenna

Transmission mode: 4G / NB-IoT / LoRa

Communication protocol: TCP / UDP / MQTT / HTTP, etc.

Data forwarding: any public network server

## 4.4 Structural Characteristics

Material: PC plastic (housing)

Dimensions: 210*57*340 mm

Installation: socket adapter type

Cable length: 2 m total

## 4.5 Operating Environment

Temperature -25°C ~ 60°C, humidity 0 ~ 95% (non-condensing)

Altitude: no more than 2000 m

# 5 Core Advantages

- Built-in plug and socket, easy to install

- Supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- Supports any private IoT cloud platform and configuration software, with data protocol integration

- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud

- Supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

# 6 Data Reporting Communication Protocol

By default, TCP/UDP protocol is used, reporting data in JSON string format, including the current value and device ID.

{

"U": 221, // voltage value, in volts

"I": 2.62, // current value, in amperes

"P": 579, // power value

"ID": "860344048491162", // device ID

"lon": 106, // longitude

"lat": 29, // latitude

"t": 1623727703 // timestamp

}

## 6.1 Protocol Customization

If you need to customize other integration protocols, such as MQTT or configuration software integration, please contact our sales staff.

# 7 Platform Integration

## 7.1 Platform Data Display

At the factory, the product can be set to connect to our designated industrial IoT platform, whose interface is shown below:

![](/images/products/1692841113121805.png)

PC browser interface

![](/images/products/1692841133127577.png)

Mobile WeChat access interface

## 7.2 User-Specified Platform

It can also be customized to connect to third-party platforms, supporting mainstream integration protocols such as Modbus / TCP / UDP / MQTT / HTTP.

# 8 Application Cases

![](/images/products/1692841158124559.png)

Equipment on/off status (current) monitoring

# 9 Notes

(1) This product is not waterproof. If used outdoors, waterproofing treatment is required.

(2) This product has a built-in SIM card. The annual data traffic fee is about 10~20 RMB, depending on the reporting frequency.
