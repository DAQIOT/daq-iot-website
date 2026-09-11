---
title: "Cleanliness Monitoring Instrument - Particle Counter"
summary: >-
  DAQ-GP-CL4G cleanliness monitoring terminal is a multi-function particle counter based on 4G wireless transmission, launched by Shanghai DAQ IoT Technology Co., Ltd. It draws an air sample through a built-in air pump, and a built-…
image: "/images/products/1739264797908525.png"
order: 217
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1739261523154576.png)

![](/images/products/1739261524777432.png)

DAQ-GP-CL4G cleanliness monitoring terminal is a multi-function particle counter based on 4G wireless transmission, launched by Shanghai DAQ IoT Technology Co., Ltd. It draws an air sample through a built-in air pump, and a built-in microprocessor then calculates the number of particles of different sizes. It can collect dust particle counts, temperature and humidity, dew point, and wind direction/speed data in the environment.

The cleanliness monitor supports 4G/WiFi/RJ45 communication. It is simple and convenient to operate, with a clear and intuitive interface. It has a built-in lithium battery and a standard Type-C charging port, making it easy to carry. It is suitable for environmental air quality detection in authoritative institutions such as blood centers, CDC centers and quality supervision institutes, as well as production enterprises and research departments such as pharmaceutical workshops and semiconductor workshops.

# 2 Ordering Specifications & Model Selection

| Model | Transmission | Description |
| --- | --- | --- |
| DAQ-GP-CL4G | Wireless | 4G communication, 220V AC / 12V DC power supply. Suitable for occasions with high acquisition frequency or convenient external power supply. Because the device is online for a long time by default, it supports remote parameter configuration and debugging; on site you only need to install and power it. |
| DAQ-GP-CLWIFI | Wireless | WiFi communication, 220V AC / 12V DC power supply. Suitable for occasions with high acquisition frequency or convenient external power supply. Supports internal LAN data transmission only. |
| DAQ-GP-CLRJ45 | Wired | RJ45 communication, 220V AC / 12V DC power supply. Suitable for occasions with high acquisition frequency or convenient external power supply and network port connection. |

# 4 Product Features & Parameters

## 4.1 Acquisition Characteristics

- Particle detection range: 0.3-10μm

- Particle detection resolution: 1μg/m³

- Particle range: 0~200000 particles/L

- Pressure detection range: ±500 Pa

- Pressure detection error range: 0~1%

- Temperature measurement error range: ±0.5℃

- Flow rate measurement error range: ±5% @2.83L

## 4.2 Electrical Characteristics

- Power supply: 12V DC (power interface: DC5.5*2.1mm female socket)

- Charging: 5V DC (power interface: Type-C)

- Battery capacity: 2000mA

- Operating current: 550mA

- Standby current: 200mA

## 4.3 Communication Characteristics

- Transmission mode: 4G (default) / RJ45 / WiFi

- Communication protocol: MQTT / TCP; other protocols customizable

- Data forwarding: supports any public network server

- Heartbeat packet: supports custom heartbeat packets

- Registration packet: supports custom registration packets, which can be set to the IMEI code

## 4.4 Structural Characteristics

- Antenna type: rubber-rod external antenna

- Screen: 480*480 color LCD (capacitive touch screen)

- Material: ABS plastic (housing)

- Weight: 800g

- Main body dimensions: 215*114*48MM

![](/images/products/1739261692200263.png)

- Main body installation: adhesive or screw fixing

## 4.5 Operating Environment

- Temperature: -10℃~60℃

- Humidity: 0%~95%RH

# 5 Core Advantages

- Supports wireless transmission, simple installation, reducing cabling workload

- Supports a built-in lithium battery and both handheld and online monitoring use modes

- Supports any IoT cloud platform and third-party software such as MES, with data protocol integration

- Over-limit alarm reminder, compliant with the ISO14644-1 international standard and GB/T16292-1996 national standard

- Supports remote data viewing via mobile app and PC browser

- Supports historical data query

# 6 Communication Protocol

## 6.1 Protocol Parsing Description

Multiple push methods such as TCP/MQTT; users receiving data must provide the public IP (or domain name) address and port number of the cloud server.

**Example JSON data message:**

{"flag0.3":51707.00,"flag0.5":9214.00,"flag1":622.00,"flag2.5":56.00,"flag5":16.00,"flag10":0,"tmp":16.75,"humi":26.28,"dp":-2.78,"diff":-0.01,"ID":"30204BR221TODE88"}

**Message parsing:**

{

"flag0.3":51707.00, // number of 0.3μm particles

"flag0.5":9214.00, // number of 0.5μm particles

"flag1":622.00, // number of 1μm particles

"flag2.5":56.00, // number of 2.5μm particles

"flag5":16.00, // number of 5μm particles

"flag10":0, // number of 10μm particles

"tmp":16.75, // temperature value

"humi":26.28, // humidity value

"dp":-2.78, // dew point value

"diff":-0.01, // differential pressure value

"ID":"30204BR221TODE88" // device ID

}

## 6.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 7 Platform Integration

## 7.1 Default Platform

By default, the product connects to our designated open industrial IoT platform, whose interface is shown below:

![](/images/products/1739261834184439.png)

PC browser interface

![](/images/products/1739261839153552.png)

Mobile access interface

## 7.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

# 8 Notes

This product has a built-in IoT SIM card by default. The data traffic fee is about 20 RMB per year, including free technical support and lifetime maintenance. If you need to use your own SIM card, please inform us in advance.
