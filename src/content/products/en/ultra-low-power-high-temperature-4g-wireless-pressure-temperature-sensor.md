---
title: "Ultra-Low-Power High-Temperature 4G Wireless Pressure & Temperature Sensor"
summary: >-
  SC-LP-PTNB is a high-temperature-resistant wireless temperature & pressure sensor terminal developed by Shanghai DAQ IoT Technology Co., Ltd. It is mainly used for temperature and pressure measurement of high-temperature pipelines…
image: "/images/products/1776743186750698.jpg"
order: 212
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1776743210506188.jpg)

SC-LP-PTNB is a high-temperature-resistant wireless temperature & pressure sensor terminal developed by Shanghai DAQ IoT Technology Co., Ltd. It is mainly used for temperature and pressure measurement of high-temperature pipelines, and can periodically report data to a designated platform server in a wireless manner.

The terminal adopts 4G/LoRaWAN communication, overcoming wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs. The device has three working states: sleep, acquisition & storage, and activation & reporting.

# 2 Ordering Specifications & Model Selection

| Model | Description |
| --- | --- |
| SC-LP-PINB | Battery-powered, suitable for occasions with low acquisition frequency and difficult external power supply. 4G/LoRaWAN transmission. |
| SC-LP-PILoRa | Battery-powered, suitable for occasions with low acquisition frequency and difficult external power supply. 4G/LoRaWAN transmission. |

# 4 Product Features

## 4.1 Acquisition Characteristics

Acquisition type: pressure, temperature

Range: 0-2.5MPa, -50-500℃ (other ranges customizable)

Acquisition frequency: 1 minute ~ 24 hours, remotely configurable

Accuracy class: ±2%

Maximum input: 100% (continuous) / 150% (1 minute)

## 4.2 Electrical Characteristics

Power supply: battery / 12V

Battery capacity: 3.6V * 19Ah

Standby power consumption: less than 5uA @ 3.6V

Operating power consumption: 2~3mA @ 3.6V

Transmit power consumption: 50~100mA @ 3.6V

## 4.3 Communication Characteristics

Antenna type: built-in antenna

Transmission mode: 4G / LoRaWAN

Communication protocol: MQTT / HTTP POST active push

Data forwarding: any public network server

**Data reporting methods**: 1) report when the temperature and pressure fluctuation reaches the set value; 2) report the current measurement at the set interval

## 4.4 Structural Characteristics

Material: PC plastic (housing)

Main body protection rating: IP65

Main body dimensions: 120mm × 78mm × 50mm

Probe structure: threaded type

Main body installation: wall-mounted or screw-fixed

Probe installation: insertion type

## 4.5 Operating Environment

Temperature -25°C ~ 75°C, humidity 0 ~ 95% (non-condensing)

# 5 Ultra-Low-Power Working Mode

The wireless temperature & pressure sensor terminal achieves power saving through intermittent operation. The device is in standby most of the time, with only a very small part of the circuit continuing to work to maintain the ultra-low-power state. This part of the circuit ensures the correct running of the system clock and the correct recording of the next activation time.

Daily power consumption calculation: the daily working states are divided into standby state and working state (waking up to collect data and upload it via 4G), each corresponding to different power consumption data.

# 6 Core Advantages

- Built-in battery, no wiring required

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Supports any IoT cloud platform, with data integration

- Fully sealed waterproof and moisture-proof design, meeting the needs of harsh environments

- Supports remote configuration, minimizing on-site maintenance costs

# 7 Data Reporting Communication Protocol

## 7.1 Protocol Parsing Description

HTTP POST push method; users receiving data must provide an HTTP data receiving URL.

**Example JSON data message:**

{"serviceId":"UpdataToDev","serviceData":"{\"VoltageCur\":372,\"TmpWidth\":30,\"TimePeriod\":20,\"MinCntSet\":12,\"IntData3\":877,\"IntData2\":0,\"IntData1\":140,\"InfoId\":1,\"ICCID\":\"1120288018165436\",\"Extend2\":251,\"Extend1\":17}"}

**Message parsing:**

{

"VoltageCur": 372, // battery voltage, 372 means 3.72V

"TmpWidth": 30, // used to set the temperature hysteresis, unit 0.1℃; e.g. set to 30 for 3℃, report data when the change exceeds 3℃

"TimePeriod": 20, // acquisition period, range 1-255s, sample once every fixed T

"MinCntSet": 12, // forced upload time, unit 5min, default 48 i.e. 48*5=240min=4 hours (with some error)

"IntData3": -9999, // reserved data field, invalid

"IntData2": 0, // pressure value, relative pressure; 0 means the pressure under normal environment

"IntData1": 140, // temperature value, unit 0.1℃; e.g. 140 means 14℃

"InfoId": 1, // reserved field, fixed at 1

"ICCID": "1120288018165436", // ID number

"Extend2": 251, // represents the cumulative number of reports from the sensor

"Extend1": 17 // signal strength

}

## 7.2 Protocol Integration Test

It can be tested with Postman.

## 7.3 Protocol Customization

If you need to customize other integration protocols, such as MQTT or configuration software integration, please contact our sales staff.

# 8 Platform Integration

## 8.1 Platform Data Display

At the factory, the product can be set to connect to our designated open industrial IoT platform, whose interface is shown below:

![](/images/products/1692861049158668.png)

PC browser interface

![](/images/products/1692861133206043.png)

Mobile WeChat access interface

## 8.2 User-Specified Platform

It connects to the China Telecom IoT platform by default. Other platforms can be customized.

# 9 Application Cases

![](/images/products/1692861183556428.png)

By monitoring changes in pressure and temperature, it detects whether the steam pipeline is leaking. Near the leak location, the pressure and temperature drop noticeably.

# 10 Notes

(1) This product has a built-in SIM card. The annual data traffic fee is about 10~20 RMB, depending on the reporting frequency.
