---
title: "4G/WiFi Wireless Clamp-On Ultrasonic Flow Meter"
summary: >-
  DAQ-GP-UF4G wireless clamp-on ultrasonic flow meter is a general-purpose ultrasonic flow meter / heat meter launched by Shanghai DAQ IoT Technology Co., Ltd., based on 4G wireless transmission and AC/DC wide-voltage power supply…
image: "/images/products/1692945398642998.jpg"
order: 215
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1692944832177546.png)

![](/images/products/1692944916651652.png)

DAQ-GP-UF4G wireless clamp-on ultrasonic flow meter is a general-purpose ultrasonic flow meter / heat meter launched by Shanghai DAQ IoT Technology Co., Ltd., based on 4G wireless transmission and AC/DC wide-voltage power supply. It can measure the instantaneous flow and instantaneous heat flow in a pipeline. Compared with traditional flow meters, the clamp-on ultrasonic flow meter is quick and easy to install and requires no pipe cutting or flow stoppage, truly achieving non-destructive online installation.

The wireless clamp-on ultrasonic flow / heat meter supports 4G/WiFi/LoRa communication, which can greatly simplify on-site deployment time and reduce construction costs. It is widely used in heating supply, water supply, heat metering and billing, water treatment, fuel oil and light oil, chemical and other industries.

# 2 Ordering Specifications & Model Selection

| Model | Transmission | Description |
| --- | --- | --- |
| DAQ-GP-UF4G | 4G wireless | 4G communication, 9-36V DC power supply. Suitable for occasions with high acquisition frequency or convenient external power supply. Because the device is online for a long time by default, it supports remote parameter configuration and debugging. |
| DAQ-GP-UFLoRa | LoRa wireless | LoRa communication |
| DAQ-GP-UFWiFi | WiFi wireless | WiFi communication |

# 4 Product Features & Parameters

## 4.1 Acquisition Characteristics

- Measurement range: DN15~6000 (pipe diameter)

- Measured medium: single, uniform liquids that can conduct ultrasound such as water, seawater, industrial sewage, acid/alkali liquids, alcohol, beer and various oils

- Accuracy: ±1%

- Display: 2×20 character LCD

## 4.2 Electrical Characteristics

- Power supply: 9-36V DC / 220V AC

- Operating power consumption: 1~2W

## 4.3 Communication Characteristics

- Wireless transmission mode: GPRS / NB-IoT / LoRa / WiFi

- Communication protocol: MQTT / TCP / UDP / HTTP / SSL / Modbus RTU; other protocols customizable

- Data forwarding: any public network server

- Number of server centers: supports reporting data to up to 7 cloud servers simultaneously

- Heartbeat packet: supports custom heartbeat packets, which can be set to the signal strength

- Registration packet: supports custom registration packets, which can be set to the IMEI code

- Positioning: supports LBS base station positioning, making it easy to query device location

- Signal output: 1 channel 4~20mA current output, impedance 0~1K; 1 channel OCT pulse output (default pulse width 200ms); 1 channel relay output

## 4.4 Structural Characteristics

Ultrasonic flow meter = main unit + ultrasonic sensor. Ultrasonic heat meter = main unit + ultrasonic sensor + temperature sensor.

- Antenna type: external suction-cup antenna

- Material: premium aluminum alloy housing

- Main body protection rating: IP65

- Sensor protection rating: IP68

- Main body installation: wall-mounted

## 4.5 Operating Environment

- Temperature: main unit -20°C ~ +60°C; flow sensor -30°C ~ +160°C

- Humidity: main unit 85% RH; flow sensor can work immersed in water, depth < 2m (after the sensor is potted)

# 5 Core Advantages

- Simple and flexible installation, rapid deployment; the sensor can be pipe-section, insertion or clamp-on mounted

- The probe attaches to the outer pipe wall, requiring no pipe cutting or flow stoppage

- Supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- Supports any IoT cloud platform and configuration software, with data protocol integration

- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud

- Non-invasive acquisition, without affecting the normal operation of equipment

- Supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

# 6 Data Reporting Communication Protocol

## 6.1 Protocol Parsing Description

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP address and port number of the cloud server.

**Example JSON data message:**

{

"deviceId":123456789, // device serial number

"flow":11.1, // instantaneous flow, unit: m³/h

"heatFlow":12.21, // instantaneous heat flow, unit: GJ/h

"fluidSpeed":11.1, // fluid velocity, unit: m/s

"fluidSoundSpeed":11.1, // measured fluid sound velocity, unit: m/s

"positiveFlow":11.1, // positive cumulative flow, unit: m³

"negativeFlow":11.1, // negative cumulative flow, unit: m³

"positiveHeat":11.1, // positive cumulative heat, unit: GJ

"negativeHeat":11.1, // negative cumulative heat, unit: GJ

"netFlow":11.1, // net cumulative flow, unit: m³

"netHeat":11.1, // net cumulative heat, unit: GJ

"supplyTemp":11.1, // supply water temperature, unit: ℃

"returnTemp":11.1 // return water temperature, unit: ℃

}

## 6.2 Protocol Reception Test

Reception testing can be performed with the network debugging assistant NetAssist.

## 6.3 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 7 Platform Integration

## 7.1 Default Platform

By default, the product connects to our designated open industrial IoT platform, whose interface is shown below:

![](/images/products/1692945057466911.png)

PC browser interface

![](/images/products/1692945080190534.png)

Mobile WeChat access interface

## 7.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

Taking OneNet platform integration as an example: after the user creates a product and adds a device on China Mobile's OneNet platform, the user needs to provide the product ID and device registration code. For example:

ID: 332590

Registration code: DGRUa7Vr9KYGunwJ

# 8 Application Cases

![](/images/products/1692945117165149.png)

Installation effect
