---
title: "Wireless Vibration Sensor"
summary: "RS485 vibration sensor:"
image: "/images/products/1770791194327544.jpg"
order: 218
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

**RS485 vibration sensor:**

![](/images/products/1770790880146485.png)

The DAQ-GP-VT485 vibration velocity (acceleration) sensor adopts a stainless steel housing design. Internally it mainly consists of a power module, a vibration acquisition unit, and a data processing and transmission module. After the device vibration value is acquired and processed by the sensor, it is transmitted to the receiving terminal via 485 communication for centralized monitoring.

**LoRa wireless vibration sensor:**

![](/images/products/1770790910978996.png)

The DAQ-LP-VTLORA wireless vibration velocity (acceleration) sensor adopts a stainless steel housing design. Internally it mainly consists of a battery, a vibration acquisition unit, and a data processing and transmission module. After the device vibration value is acquired and processed by the sensor, it is transmitted to the wireless receiving terminal via LoRa wireless communication for centralized monitoring. Each sensor has a unique communication ID.

It can be applied to online measurement of vibration velocity, acceleration and temperature of motor equipment, reducers, fans, generators, air compressors, centrifuges and water pumps in many fields such as coal mines, chemicals, metallurgy, electric power, building materials, automobiles and machinery manufacturing.

# 3 Product Features

## 3.1 RS485 Vibration Sensor Characteristics

Dedicated MEMS chip technology with precise integral calculation;

Stable power supply, no need for frequent power maintenance, extremely long service life;

High data transmission efficiency, low latency and strong anti-interference capability.

Adopts RS485 communication, Modbus communication protocol

## 3.2 RS485 Vibration Sensor Structural Characteristics

Power supply: DC12~24V external power supply

Standby current: ≤5mA

Detection period: 800ms

Measurement range: acceleration: 0~10g; velocity: 0~60mm/s; amplitude: 0~50000um; frequency (RMS): 0~2000Hz

Ambient temperature: -40~85℃ (relative humidity: ≤90%)

Protection rating: IP67

Measurement direction: vertical or horizontal

Installation: magnetic attachment or threaded hole M10×1.5×10 (deep)

## 3.3 LoRa Wireless Vibration Sensor Characteristics

Dedicated MEMS chip technology with precise integral calculation;

9000mAh lithium-thionyl chloride battery, replaceable, extremely long service life;

433M free frequency band, external antenna, extremely long transmission distance.

## 3.4 LoRa Wireless Vibration Sensor Structural Characteristics

Power supply: 9000mAh lithium-thionyl chloride battery (default; 19000mAh or DC12~24V external power supply optional)

Standby current: ≤3uA

Detection period: 30s by default, settable from 1~60s

Measurement range: 50mm/s (RMS)

Sensitivity: 0.05mm/s ±5% (tested at 20℃ and 80Hz)

Ambient temperature: -40~85℃ (relative humidity: ≤90%)

Protection rating: IP67

Measurement direction: vertical or horizontal

Installation: magnetic attachment or threaded hole M10×1.5×10 (deep)

Transmission distance: ≥300 m (over 500 m with an external suction-cup antenna, depending on the site)

Transmission mode: LoRa wireless communication 433MHz

# 4 Communication Routine

## 4.1 Register Addresses

Modbus protocol function code 03

| Register address | PLC or SCADA address | Content | Operation | Byte length |
| --- | --- | --- | --- | --- |
| 00 01 | 40001 | X acceleration peak value | Read only | 2 |
| 00 02 | 40002 | Y acceleration peak value | Read only | 2 |
| 00 03 | 40003 | Z acceleration peak value | Read only | 2 |
| 00 04 | 40004 | X velocity RMS | Read only | 2 |
| 00 05 | 40005 | Y velocity RMS | Read only | 2 |
| 00 06 | 40006 | Z velocity RMS | Read only | 2 |
| 00 07 | 40007 | Temperature | Read only | 2 |
| 00 08 | 40008 | Z-axis equivalent frequency Hz | Read only | 2 |
| 00 09 | 40009 | X displacement | Read only | 2 |
| 00 0A | 40010 | Y displacement | Read only | 2 |
| 00 0B | 40011 | Z displacement | Read only | 2 |

## 4.2 Baud Rate Register (0x0D) Values

| Register address | Register value | Attribute (baud rate) |
| --- | --- | --- |
| 0x0D | 00 06 | 600 |
| 0x0D | 00 0C | 1200 |
| 0x0D | 00 18 | 2400 |
| 0x0D | 00 30 | 4800 |
| 0x0D | 00 60 | 9600 |
| 0x0D | 00 C0 | 19200 |

Note: the value to set is the actual baud rate ÷ 100.

## 4.3 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.
