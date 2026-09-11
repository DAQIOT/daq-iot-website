---
title: "Ultra-Low-Power Wireless Split-Core Current Sensor"
summary: >-
  SC-LP-CT01 wireless current acquisition sensor terminal is equipped with a low-power, high-sensitivity split-core transformer. Through the principle of electromagnetic induction, it converts the large current on the primary side i…
image: "/images/products/1692864263788852.jpg"
order: 205
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1692863857642374.png)

![](/images/products/1692863897198300.png)

SC-LP-CT01 wireless current acquisition sensor terminal is equipped with a low-power, high-sensitivity split-core transformer. Through the principle of electromagnetic induction, it converts the large current on the primary side into a small current on the secondary side for current monitoring. It can sensitively detect the magnitude of the line current and periodically report data to a designated platform server in a wireless manner.

The terminal adopts GPRS/NB-IoT/LoRa communication, overcoming wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs. The device has three working states: sleep, acquisition & storage, and activation & reporting. This terminal is available with a rich variety of split-core transformer shapes, has a wide current measurement range, uses high-quality magnetic core material, features an open/close structure, and is easy to install. It is used for current monitoring and acquisition in scenarios such as AC motors, lighting equipment, air compressors, HVAC units, building automatic control systems, urban industrial grids and rural grid renovation projects.

# 2 Ordering Specifications & Model Selection

![](/images/products/1692863994645916.png)

# 4 Product Features

## 4.1 Acquisition Characteristics

Acquisition type: AC (DC customizable)

Range: 0~50A/100A (other ranges customizable)

Number of channels: 1 channel for current acquisition

Acquisition frequency: 1 minute to 24 hours, remotely configurable

Accuracy class: ±2%

Resolution: 0.1A

Maximum input: 100% (continuous) / 150% (1 minute)

## 4.2 Electrical Characteristics

Power supply: battery / 12V DC / 220V AC

Battery capacity: 3.6V * 19Ah

Standby power consumption: less than 5uA @ 3.6V

Operating power consumption: 2~3mA @ 3.6V

Transmit power consumption: 50~100mA @ 3.6V

Insulation resistance: >100MΩ (between primary/secondary)

## 4.3 Communication Characteristics

Antenna type: external antenna (internal optional)

Transmission mode: GPRS / NB-IoT / LoRa

Communication protocol: HTTP POST active push

Data forwarding: any public network server

**Data reporting methods**: 1) report when the current fluctuation reaches the set value; 2) report the current measurement at the set interval

## 4.4 Structural Characteristics

Material: PC plastic (housing)

Main body protection rating: IP65

Main body dimensions: 120mm × 78mm × 50mm

Transformer probe structure: open/close type

Main body installation: wall-mounted or screw-fixed

Transformer probe installation: hanging installation

## 4.5 Operating Environment

Temperature -25°C ~ 75°C, humidity 0 ~ 95% (non-condensing)

# 5 Ultra-Low-Power Working Mode

The wireless current acquisition terminal achieves power saving through intermittent operation. The device is in standby most of the time, with only a very small part of the circuit continuing to work to maintain the ultra-low-power state. This part of the circuit ensures the correct running of the system clock and the correct recording of the next activation time.

Daily power consumption calculation: the daily working states are divided into standby state and working state (waking up to collect data and upload it via GPRS/NB-IoT), each corresponding to different power consumption data.

# 6 Core Advantages

- Built-in battery, no wiring required

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Supports any IoT cloud platform, with data integration

- Non-invasive measurement, without affecting the normal operation of equipment

- Fully sealed waterproof and moisture-proof design, meeting the needs of harsh environments

- Supports remote configuration, minimizing on-site maintenance costs

# 7 Data Reporting Communication Protocol

## 7.1 Protocol Parsing Description

HTTP POST push method; users receiving data must provide an HTTP data receiving URL.

**Example JSON data message:**

{"VoltageCur":376,"TmpWidth":254,"TimePeriod":254,"MinCntSet":1,"IntData3":-9999,"IntData2":168,"IntData1":1,"InfoId":1,"ICCID":"1119205006447538","Extend2":16890,"Extend1":23}

**Message parsing:**

{

"VoltageCur": 367, // battery voltage, 367 means 3.67V

"TmpWidth": 254, // used to set the current hysteresis, unit 0.1A; e.g. set to 20 for 2A, report data when the current change exceeds 2A

"TimePeriod": 254, // acquisition period, range 1-255s, sample once every fixed T

"MinCntSet": 1, // forced upload time, unit 5min, default 48 i.e. 48*5=240min=4 hours (with some error)

"IntData3": -9999, // reserved data field, invalid

"IntData2": 168, // current value, 168 means 16.8A

"IntData1": 1, // reserved field

"InfoId": 1, // reserved field, fixed at 1

"ICCID": "1119205006447538", // ID number

"Extend2": 16890, // represents the cumulative number of reports from the sensor

"Extend1": 23 // signal strength

}

## 7.2 Protocol Integration Test

It can be tested with Postman.

## 7.3 Protocol Customization

If you need to customize other integration protocols, such as MQTT or configuration software integration, please contact our sales staff.

# 8 Platform Integration

## 8.1 Platform Data Display

At the factory, the product can be set to connect to our designated open industrial IoT platform, whose interface is shown below:

![](/images/products/1692864058138872.png)

PC browser interface

![](/images/products/1692864081319736.png)

Mobile WeChat access interface

## 8.2 User-Specified Platform

It connects to the China Telecom IoT platform by default. Other platforms can be customized.

# 9 Application Cases

![](/images/products/1692864098869013.png)

Equipment working time monitoring

![](/images/products/1692864122517175.png)

Current monitoring

# 10 Notes

(1) The matching transformer probe of this product is not waterproof. If used outdoors, waterproofing treatment is required.

(2) This product has a built-in SIM card. The annual data traffic fee is about 10~20 RMB, depending on the reporting frequency.
