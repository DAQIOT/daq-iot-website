---
title: "RS485 Modbus Open-Type DC Voltage & Current Transmitter"
summary: >-
  DAQ-GP-DCHS485 transmitter acquisition device is an industrial-grade, compact and portable DC intelligent power transmitter launched by Shanghai DAQ IoT Technology Co., Ltd., providing fast, stable and high-precision performance.
image: "/images/products/1747808419800362.png"
order: 208
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1747808009162284.png)

DAQ-GP-DCHS485 transmitter acquisition device is an industrial-grade, compact and portable DC intelligent power transmitter launched by Shanghai DAQ IoT Technology Co., Ltd., providing fast, stable and high-precision performance.

Application fields: widely used in electric power, communications, transportation, environmental protection, petrochemical, steel and other fields to monitor the current or voltage consumption of AC/DC equipment. The standard RS-485 digital interface output realizes interconnection with computers, PLCs, industrial gateways, touch screens and other host computers.

# 2 Ordering Specifications & Model Selection

Special customization of three parameters is supported: input range, output type and operating power supply.

# 4 Product Features & Parameters

## 4.1 Communication Characteristics

Serial communication uses RS485, default address 1, baud rate 9600, 8, 1, no parity

## 4.2 Terminal Definition

Facing the 4-pin terminal: GND, 485B, 485A, +12V (+E)

Terminal diagram:

![](/images/products/1747808333102398.png)

## 4.3 Features

Adopts new electromagnetic isolation technology and optoelectronic isolation technology, low power consumption

Industrial-grade imported chips with professional algorithms, high precision

Automatic thermal switch-off and ESD protection

## 4.4 Electrical Characteristics

Operating power supply: DC12-DC24V, DC

Power consumption: less than 5W

## 4.5 Operating Environment

Operating temperature: -20° ~ 80°C

## 4.6 Installation

Standard DIN-rail mounting, flat screw fixing, detachable split structure, PCB soldering mounting, etc.

# 5 Core Advantages

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Supports external connection of multiple sensors

- Non-invasive acquisition, without affecting the normal operation of equipment

# 6 Register Description

| Register address | Register content | Register count | Register status | Data range |
| --- | --- | --- | --- | --- |
| 0056H | Single-channel energy | 1 | Read only | 0~10000 |
| 0010H | Channel 1 energy | 1 | Read only | 0~10000 |
| 0011H | Channel 2 energy | 1 | Read only | 0~10000 |
| 0012H | Channel 3 energy | 1 | Read only | 0~10000 |
| 0057H | Address | 1 | Read/Write | 00H - FFH |
| 0020H | Baud rate | 1 | Read/Write | 03H - 0BH |

Notes: 1. When the transmitter input is dual-channel, take channel 1 energy and channel 2 energy. 2. For a dual-channel input combining current and voltage, channel 1 is voltage data and channel 2 is current data. 3. For transmitters with two or three input channels, if you need to read the energy of a single channel, simply read the register corresponding to that channel with the register count set to 1. (For example, if you only want to read channel 3 energy without reading channels 1 and 2, send the command: 01H 03H 00H 12H 00H 01H)

## 6.1 Example of Reading Data from a Single-Channel Input Transmitter

| Slave address | Function code | Start register address | Register count | CRC | CRC |
| --- | --- | --- | --- | --- | --- |
| 01H | 03H | 00H 56H | 00H 01H | 64H | 1AH |

Response:

| Slave address | Function code | Data byte count | A/D-H | A/D-L | CRC | CRC |
| --- | --- | --- | --- | --- | --- | --- |
| 01H | 03H | 02H | 24H | F6H | 23H | 02H |

## 6.2 Dual-Channel Input Transmitter

| Slave address | Function code | Start register | Register count | CRC | CRC |
| --- | --- | --- | --- | --- | --- |
| 01H | 03H | 00H 10H | 00H 02H | C5H | CEH |

Response:

| Slave address | Function code | Data byte count | A/D-H1 | A/D-L1 | A/D-H2 | A/D-L2 | CRC | CRC |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01H | 03H | 04H | 1FH | 3FH | 0AH | 74H | CBH | 6CH |

## 6.3 Three-Channel Input Transmitter

| Slave address | Function code | Start register address | Register count | CRC | CRC |
| --- | --- | --- | --- | --- | --- |
| 01H | 03H | 00H 10H | 00H 03H | 04H | 0EH |

Response:

| Slave address | Function code | Data byte count | A/D-H1 | A/D-L1 | A/D-H2 | A/D-L2 | A/D-H3 | A/D-L3 | CRC | CRC |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01H | 03H | 06H | 1EH | AFH | 1EH | 1CH | 1EH | B1H | F8H | E9H |

## 6.4 Changing the Address

| Slave address | Function code | Start register address | Register count | Data byte count | Data written to register | CRC | CRC |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01H | 10H | 00H 57H | 00H 01H | 02H | 00H 02H | 2AH | 76H |

Response:

| Slave address | Function code | Start register address | Register count | CRC | CRC |
| --- | --- | --- | --- | --- | --- |
| 02H | 10H | 00H 57H | 00H 01H | B0H | 2AH |

## 6.5 Changing the Baud Rate

| Slave address | Function code | Start register address | Register count | Byte count | Data to be written to register | CRC | CRC |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01H | 10H | 00H 20H | 00H 01H | 02H | 00H 05H | 61H | 33H |

## 6.6 Baud Rate Codes

| Code | Baud rate |
| --- | --- |
| 03H | 1200 bps |
| 04H | 2400 bps |
| 05H | 4800 bps |
| 06H | 9600 bps |
| 07H | 19200 bps |
| 08H | 28800 bps |
| 09H | 57600 bps |
| 0A | 38400 bps |
| 0B | 115200 bps |
| FA | Broadcast address |

# 7 Application Cases

![](/images/products/1747808378204899.png)

![](/images/products/1747808378155623.png)

![](/images/products/1747808379932999.png)
