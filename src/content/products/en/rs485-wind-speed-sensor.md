---
title: RS485 Wind Speed Sensor
summary: >-
  ⚙️ Product Advantages – RS485 Wind Speed Sensor (Cup Anemometer)
image: https://www.daq-iot.com/static/upload/image/20260604/1780553817199834.png
order: 31
category: wirelesssensor
---
**1\. Product Overview**

The DAQ-GP-WSRS485 wind speed sensor, manufactured by Shanghai Data Acquisition IOT Technology Co., LTD., is a compact and lightweight sensor that is easy to carry and assemble. Its three-cup design effectively acquires wind speed information. The housing is made of high-quality aluminum alloy with a powder-coated finish , providing excellent corrosion and erosion resistance, ensuring long-term rust-free operation . Combined with a smooth internal bearing system, it ensures accurate data acquisition. It is widely used for wind speed measurement in greenhouses, environmental protection facilities, weather stations, ships, docks, and aquaculture.

**2\. Service Philosophy**

# ****

**Our company solemnly promises:**

You're not just buying a product, you're also getting meticulous and comprehensive technical support **! (** =^_^= **)**

This product can be installed on-site by ordinary workers simply by connecting electricity! No debugging is required!

We provide free remote guidance and remote configuration and debugging services, and send data to the cloud platform specified by the user.

We offer free IoT solution consultation services!

# ****

# **3\. Functional Features**

n Measurement range: 0-60 m/s, resolution: 0.1 m/s

n Electromagnetic interference protection

n The bottom cable exit design completely eliminates the problem of aging rubber pads on aviation connectors, ensuring waterproof performance even after long-term use.

n High-performance imported bearings are used, resulting in low rotational resistance and accurate measurements.

n The all-aluminum casing provides high mechanical strength and hardness, is corrosion-resistant, rust-free, and can be used outdoors for extended periods.

n The equipment's structure and weight have been carefully designed and distributed, resulting in low rotational inertia and sensitive response.

n Standard ModBus-RTU communication protocol, easy to connect

# **4\. Main parameters**

# ****

| DC power supply (default)            |  5 ~ 30V DC                                                                                                                                                                                                             |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Maximum power consumption            | 0.2W (12V power supply)                                                                                                                                                                                                 |
| Sensor circuit operating temperature | -40 ℃ to +60℃, 0%RH to 95%RH ( non-condensing )                                                                                                                                                                         |
| Communication interface              | 485 communication ( Mode Bus ) protocolData bit length: 8 bitsParity check method: NoneStop bit length: 1 bitDefault ModBus communication address: 1Baud rates: 2400, 4800 (default), 9600, 19200, 38400, 57600, 115200 |
| resolution                           | 0.1m/s                                                                                                                                                                                                                  |
| Measurement range                    | 0~60m/s                                                                                                                                                                                                                 |
| Dynamic response time                | ≤ 2 s                                                                                                                                                                                                                   |
| accuracy                             | ±（0.2+0.03V）m/s ,@（0~30m/s,25℃） V represents wind speed                                                                                                                                                                 |

Unit: millimeters

# ****

# **5\. Interface Description and Installation**  

Wide voltage power input of 10~30V is acceptable. When wiring the 485 signal lines, ensure that the A and B lines are not reversed, and that the addresses of multiple devices on the bus do not conflict.

| project       | Line color            | illustrate                        |
|---------------|-----------------------|-----------------------------------|
| power supply  | brown                 | Positive power supply (10~30V DC) |
| black         | Power supply negative |
| communication | Yellow ( green )      | 485A                              |
| blue          | 485B                  |

Flange mounting is used, and the threaded flange connection firmly fixes the lower tube of the wind speed sensor to the flange. The base is Ø79.8mm, and four Ø4.5mm mounting holes are drilled on the Ø68mm circumference. Bolts are used to firmly fix it to the bracket, keeping the entire instrument at the optimal level and ensuring the accuracy of wind speed data. The flange connection is convenient to use and can withstand greater pressure.

# **6\. Communication Protocol**

# ****

## **6.1 Basic Communication Parameters**

| Editor code      | 8 -bit binary                                                                                                                           |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Data bits        | 8 -bit                                                                                                                                  |
| Parity bit       | none                                                                                                                                    |
| Stop bit         | 1 person                                                                                                                                |
| Error Validation | CRC (Cyclic Redundancy Code)                                                                                                            |
| baud rate        | 2400 bit/s , 4800 bit/s , 9600 bit/s , 19200 bit /s , 38400 bit /s , 57600 bit/s , or 115200 bit/s . The factory default is 4800 bit/s. |

## **6.2 Data Frame Format Definition**

## ****

The Mod Bus-RTU communication protocol is adopted , with the following format:

Initial structure ≥ 4 bytes time

Address code = 1 byte

Function code = 1 byte

Data area = N bytes

Error check = 16-bit CRC code

Time to end structure ≥ 4 bytes

Address code: This is the sensor 's address, which is unique in the communication

network (factory default is 0x01).

Function code: The function indication of the command issued by the host. This sensor

only uses function code 0x03 (read register data).

Data area: The data area contains the actual communication data. Note that the high

byte of the 16-bit data comes first!

CRC code: a two-byte checksum.

Host query frame structure:

| Address code | function code | Register start address | Register length | check code low byte | high byte of check code |
|--------------|---------------|------------------------|-----------------|---------------------|-------------------------|
| 1 byte       | 1 byte        | 2 bytes                | 2 bytes         | 1 byte              | 1 byte                  |

Slave response frame structure:

| Address code | function code | Valid byte count | Data Zone 1 | Second Data Area | Nth data area | Verification code |
|--------------|---------------|------------------|-------------|------------------|---------------|-------------------|
| 1 byte       | 1 byte        | 1 byte           | 2 bytes     | 2 bytes          | 2 bytes       | 2 bytes           |

## ****

| Register address |  PLC or configuration address | content                                                             | operate   |
|------------------|-------------------------------|---------------------------------------------------------------------|-----------|
| 0000 H           | 40001                         | Instantaneous wind speedUploaded data is 10 times the actual value. | Read-only |

## ****

## **6.4 Examples and Explanations of Communication Protocols**

**Example: Read the wind speed value at device address 0x01**

Query frame:

| Address code | function code | Starting address | Data length | check code low byte | high byte of check code |
|--------------|---------------|------------------|-------------|---------------------|-------------------------|
| 0x 01        | 0x0 3         | 0x00 0x00        | 0x00 0x0 1  | 0x 84               | 0x 0A                   |

Response frame: (For example, the current wind speed is 8.6 m/s)

| Address code | function code | Return the number of valid bytes | Current wind speed value | check code low byte | high byte of check code |
|--------------|---------------|----------------------------------|--------------------------|---------------------|-------------------------|
| 0x 01        | 0x0 3         | 0x0 2                            | 0x00 0x56                | 0x 38               | 0x 7A                   |

Wind speed calculation:

Current wind speed: 0056H (hexadecimal) = 86 => Wind speed = 8.6 m/s

# ❓ DAQ-GP-WSRS485 Wind Speed Sensor – FAQ

* * *

### 1\. What is the DAQ-GP-WSRS485 wind speed sensor used for?

It is designed for accurate wind speed measurement in applications such as greenhouses, weather stations, environmental monitoring, ships, docks, and aquaculture facilities.

* * *

### 2\. How does the three-cup design help measure wind speed?

The three-cup design captures wind from all directions, providing stable rotation and precise measurement of wind speed in real time.

* * *

### 3\. What communication protocols does the sensor support?

It supports **RS485 Modbus RTU** , allowing easy integration with PLCs, SCADA systems, IoT platforms, and industrial automation networks.

* * *

### 4\. Is the sensor suitable for outdoor use?

Yes. The housing is made of **high-quality aluminum alloy with a powder-coated finish** , offering excellent corrosion and erosion resistance for long-term outdoor operation.

* * *

### 5\. How accurate is the wind speed measurement?

The sensor provides **high-precision wind speed data** thanks to its smooth internal bearing system and optimized cup design, ensuring reliable performance even in continuous operation.

* * *

### 6\. Can it be used in harsh environments like docks or aquaculture farms?

Yes. Its corrosion-resistant construction and industrial-grade design make it suitable for **marine environments, coastal areas, and high-humidity industrial locations**.

* * *

### 7\. Is the sensor easy to install?

Yes. The compact and lightweight design makes installation, transportation, and integration into existing monitoring systems **quick and hassle-free**.

* * *

### 8\. Can this sensor work with IoT or smart monitoring platforms?

Absolutely. With RS485 Modbus output, it can **connect to industrial IoT devices, smart greenhouse systems, environmental monitoring platforms, and data acquisition systems** for real-time wind monitoring.
