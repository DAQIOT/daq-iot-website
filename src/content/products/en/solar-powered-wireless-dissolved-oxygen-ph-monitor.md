---
title: "Solar-Powered Wireless Dissolved Oxygen & pH Remote Monitor"
summary: >-
  DAQ-SP-X4G is a solar-powered wireless dissolved oxygen & pH collector launched by Shanghai DAQ IoT Technology Co., Ltd. It supports 4G wireless communication by default and can be customized for other communication modes such as…
image: "/images/products/1783331287352994.png"
order: 223
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1780899385193642.png)

DAQ-SP-X4G is a solar-powered wireless dissolved oxygen & pH collector launched by Shanghai DAQ IoT Technology Co., Ltd. It supports 4G wireless communication by default and can be customized for other communication modes such as WiFi and LoRa.

This product is specially designed for measuring dissolved oxygen in water. It can be used in fields such as food, pharmaceuticals, laboratories, aquaculture and environmental protection monitoring. The sensor uses the fluorescence measurement method, measuring dissolved oxygen in water through the fluorescence quenching principle of oxygen atoms on a special material. This measurement method is stable and reliable, has a long life, is not affected by water quality or ion interference, and usually requires no calibration — it is currently the best dissolved oxygen measurement method.

The product has a built-in rechargeable lithium battery, is rainproof for outdoor use, and comes with a universal bracket for easy outdoor installation. The built-in 4G IoT SIM card allows direct access to the IoT cloud platform, and data can be viewed directly on mobile WeChat or a website. It is suitable for various remote monitoring scenarios where outdoor power supply is inconvenient.

# 2 Ordering Specifications & Model Selection

| Model | Description |
| --- | --- |
| DAQ-SP-TLL4G | Solar-powered 4G wireless liquid level sensor |
| DAQ-SP-LR4G | Solar-powered 4G wireless irradiance meter |
| DAQ-SP-IL4G | Solar-powered 4G wireless tilt sensor |
| DAQ-SP-WSD4G | Solar-powered 4G wireless wind speed & direction monitor |
| DAQ-SP-IR4G | Solar-powered 4G wireless infrared meter reader |
| ... | Other customized sensors |

# 4 Product Features & Parameters

## 4.1 Acquisition Characteristics

Acquisition type: liquid

Dissolved oxygen measurement range: 0-20mg/L (ppm), 0-200% saturation

Dissolved oxygen accuracy: below 5ppm: ±0.2ppm (0.2mg/L); above 5ppm: ±0.3ppm (0.3mg/L)

Device acquisition frequency: 10 seconds / time

Temperature measurement range: 0-40℃

Temperature measurement accuracy: ±0.1℃

pH measurement range: 4-11

pH accuracy: 0.1

## 4.2 Electrical Characteristics

Solar panel power: 4.2W; dissolved oxygen sensor: 0.24W

Device power consumption: <=3W (default)

Battery capacity: 4Ah (expandable)

## 4.3 Communication Characteristics

Wireless transmission mode: 4G / NB-IoT / LoRa / WiFi

Communication protocol: MQTT / TCP / UDP / HTTP / SSL / Modbus RTU; other protocols customizable

## 4.4 Structural Characteristics

Overall main unit dimensions: 175×165×45mm

Protection rating: IP65

## 4.5 Operating Environment

Temperature -20℃ ~ 60℃

## 4.6 Installation Notes

Keep the waterproof connector above the water surface as much as possible; do not immerse it in water for long periods.

The default measurement depth is about 35cm.

Always ensure the measurement sensing membrane is clean, intact and undamaged (if contaminated, gently wipe it with a soft cloth and clean water).

# 5 Data Format

## 5.1 Data Reporting Protocol Parsing Description

The data supports multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP (or domain name) address and port number of the cloud server.

Example JSON data message:

{"T":27.8,"H":67.1,"ID":"860344048491162"}

Message parsing:

{

"T":32.1, // temperature

"H":4.6, // pH value

"Dissolved Oxygen":71%, // dissolved oxygen percentage

"ID":"860344048491162" // device ID

}

## 5.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 6 Application Cases

## 6.1 System Framework

![](/images/products/1780899584429730.png)

Users can also specify a cloud platform. Any private IoT cloud platform and configuration software are supported, with data protocol integration for mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud.

By default, the product connects to our designated industrial IoT platform, whose interface is shown below:

![](/images/products/1780899645137680.png)

PC browser interface example

![](/images/products/1780899730147015.png)

Mobile WeChat access interface example

# 7 FAQ

The sensor connector must never be immersed in water during installation.

For long-term online measurement, the device must be soaked for at least 1 hour on first use; measurement data is only accurate after the fluorescent membrane has fully hydrated.

Typically, tap water aerated for more than 1 hour has a dissolved oxygen level of about 100%.

During manual cleaning, simply rinse gently with clean water unless necessary; never scratch the fluorescent membrane with fingernails.

# 8 Notes

This product has a built-in IoT SIM card by default. The data traffic fee is about 20 RMB per year, including free technical support and maintenance. If you need to use your own SIM card, please inform us in advance.
