---
title: "Solar-Powered Wireless Sensor Remote Monitor"
summary: >-
  The DAQ-SP-X4G is a solar-powered RTU wireless collector from Shanghai Daq-IoT Technology. It supports a wide range of RS485 sensors and uses 4G wireless communication by default, enabling remote monitoring of RS485-based sensors…
image: "/images/products/1715063979290894.jpg"
order: 251
category: "plcacquisition"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1715063382724113.png)

![](/images/products/1715063393476735.png)

The DAQ-SP-X4G is a solar-powered RTU wireless collector from Shanghai Daq-IoT Technology. It supports a wide range of RS485 sensors and uses 4G wireless communication by default, enabling remote monitoring of RS485-based sensors and probes such as submersible liquid-level sensors, temperature and humidity sensors, illuminance sensors, wind speed and direction sensors, inclination sensors and electronic water gauges for outdoor scenarios.

The product has a built-in rechargeable lithium battery and is rainproof for outdoor use; a universal bracket makes outdoor installation easy. Its built-in 4G IoT SIM card connects directly to an IoT cloud platform, so data can be viewed on WeChat or a website. It suits any outdoor remote-monitoring scenario where mains power is inconvenient.

# 2 Ordering Specifications and Selection

| Model | Description |
| --- | --- |
| DAQ-SP-TLL4G | Solar-powered 4G wireless liquid-level sensor |
| DAQ-SP-LR4G | Solar-powered 4G wireless irradiance meter |
| DAQ-SP-IL4G | Solar-powered 4G wireless inclination sensor |
| DAQ-SP-WSD4G | Solar-powered 4G wireless wind speed and direction monitor |
| DAQ-SP-IR4G | Solar-powered 4G wireless infrared meter reader |
| ... | Other customized sensors |

# 4 Product Parameters

## 4.1 Acquisition Characteristics

- Acquisition interface: RS485
- External output voltage: 5V/12V @ 1A

## 4.2 Electrical Characteristics

- Solar panel power: 4.2W
- Device power consumption: <= 3W (default)
- Battery capacity: 4Ah (expandable)

## 4.3 Communication Characteristics

4G network by default

Wi-Fi/LoRa and other communication methods can be customized

## 4.4 Structural Characteristics

- Overall host dimensions: 175 x 165 x 45 mm
- Protection rating: IP65

## 4.5 Storage Environment

- Temperature: -20 degC to 60 degC

# 5 Core Advantages

- Self-powered, using clean energy for "zero carbon"
- Simple installation and fast deployment, helping IoT projects go live quickly
- Custom registration and heartbeat packets for easy device identification on the platform
- Compatible with any IoT cloud platform or SCADA configuration software, with data-protocol integration provided
- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu TianGong, OneNet and Tencent Cloud
- Supports multiple external sensors
- Remote parameter configuration and FOTA remote upgrade, minimizing on-site construction and maintenance costs

# 6 Communication Protocol

Data can be uploaded over mainstream methods including RS485, TCP, UDP, HTTP and MQTT, and the data format can be Modbus or JSON for integration with third-party platforms.

## 6.1 Data Reporting Protocol Parsing

Example of a JSON data message:

```
{
"tempeature": 18.5,     // temperature, degC
"wind": 4.2,            // wind speed, m/s
"liquid level": 8,      // liquid level depth, m
"illumination": 476,    // illuminance, Lux
"energy": 0,            // electricity consumption, kWh
"power": 0,             // power, W
"id": "861658062222974" // device ID
}
```

# 7 Application Cases

![](/images/products/1715063465593825.png)

Application diagram

![](/images/products/1715063491163572.png)

Example of data displayed on the platform web page
