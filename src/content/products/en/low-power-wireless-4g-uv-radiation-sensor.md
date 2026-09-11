---
title: "Low-Power Wireless 4G Stainless Steel UV Radiation Sensor / UV Index Transmitter / Solar Irradiance Meter"
summary: >-
  The low-power wireless UV sensor is a type of device launched by Shanghai DAQ IoT Technology Co., Ltd. specifically for detecting and quantifying ultraviolet radiation in different bands. Its core purpose is to achieve accurate se…
image: "/images/products/1765442105547253.jpg"
order: 244
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1765441862210461.jpg)

![](/images/products/1765441862130585.jpg)

The low-power wireless UV sensor is a type of device launched by Shanghai DAQ IoT Technology Co., Ltd. specifically for detecting and quantifying ultraviolet radiation in different bands. Its core purpose is to achieve accurate sensing, monitoring and data output of ultraviolet radiation, widely serving industry, medical care, environmental monitoring, consumer electronics and many other fields.

The sensor terminal supports 4G/LoRa/WiFi communication and is powered by a 3.6V lithium battery, overcoming wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs. This terminal also supports 12V voltage input with reverse connection protection, has high measurement accuracy and is easy to install.

| Model | Description |
| --- | --- |
| DAQ-LP-UVLoRa / DAQ-LP-UV4G | LoRa/4G communication, long-life lithium battery power supply. Suitable for occasions with low acquisition frequency and difficult external power supply. |
| DAQ-GP-UV4G | 4G communication, 220V AC / 12V DC power supply. Suitable for occasions with high acquisition frequency or convenient external power supply. Because the device is online for a long time by default, it supports remote parameter configuration and debugging; on site you only need to install and power it. |
| DAQ-GP-UVWiFi | WiFi communication |

# 3 Product Features

## 3.1 UV Sensor Acquisition Characteristics

Acquisition type: simultaneously collects UVA (315-400nm) and UVC (200-280nm) ultraviolet radiation intensity, as well as the effective radiation intensity in a specific band of UV lamps

Measurement range: UVA: 0~20000μW/cm²; UVC: 0~10000μW/cm²; UV lamp intensity: 0~50000μW/cm²

Distance coefficient: for UV lamp monitoring scenarios, the distance coefficient is **1:10** (i.e., for every 10-fold increase in the distance between the sensor and the UV lamp, the radiation intensity theoretically attenuates to 1/100 of the original; the device has a built-in distance compensation algorithm that automatically corrects the measured value according to the actual installation distance); there is no fixed distance coefficient for ambient UV monitoring scenarios, and custom distance calibration is supported

Measurement error: under standard conditions (25℃, 50% RH, standard UV light source), measurement error ≤±5% (in the 20%~80% of full-scale range); band cross-interference error ≤±2%; long-term drift error ≤±3%/year; additional error under low temperature (-40℃) or high temperature (85℃) ≤±2%

Acquisition frequency: once every 12 hours by default, remotely configurable

## 3.2 Electrical Characteristics

Power supply: long-life lithium battery (optional DC power supply)

Standby current: 4.17uA

Standby power: 15.029uW

## 3.3 Communication Characteristics

Wireless transmission mode: 4G / LoRa / WiFi

Communication protocol: MQTT / TCP / UDP / HTTP / SSL / Modbus RTU; other protocols customizable

Data forwarding: any public network server

Positioning: supports LBS base station positioning, making it easy to query device location

## 3.4 Structural Characteristics

Antenna type: built-in antenna (external antenna optional)

Material: PC/ABS/PMMA (housing)

Main body protection rating: IP65

Dimensions: 122mm × 92mm × 42mm (L×W×H)

Ranging probe structure: non-contact

Main body installation: wall-mounted or screw-fixed

Probe installation: wall-mounted or bracket

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

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP address and port number of the cloud server.

**Example JSON data message:**

{"VoltageCur":376,"TmpWidth":254,"TimePeriod":254,"MinCntSet":1,"UVAIntensity":15680,"UVBIntensity":8920,"UVCIntensity":2350,"UVLampIntensity":45800,"TotalDose":1256,"IntData3":-9999,"IntData2":168,"IntData1":1,"InfoId":1,"ICCID":"1119205006447538","Extend2":16890,"Extend1":23}

**Message parsing:**

{

"BatVoltage":376, // device supply voltage

"UVAIntensity":15680, // UVA ultraviolet radiation intensity, unit μW/cm²

"UVBIntensity":8920, // UVB ultraviolet radiation intensity

"UVCIntensity":2350, // UVC ultraviolet radiation intensity

"ID":"860344048491162" // device ID

}

## 5.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 6 Notes

(1) This product has a built-in IoT SIM card by default, free for the first year, and about 20 RMB per year from the second year, including free technical support and lifetime maintenance. If you need to use your own SIM card, please inform us in advance.
