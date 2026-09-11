---
title: "Modbus RTU Infrared Electricity Meter Reader"
summary: >-
  DAQ-GP-IRMODBUSRTU infrared meter reading terminal is a device launched by Shanghai DAQ IoT Technology Co., Ltd. that converts State Grid electricity meters using DLT645/698 protocols into the Modbus communication protocol. It can…
image: "/images/products/1739263869432058.png"
order: 229
category: "instrument-acquisition"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1739263815642589.png)

DAQ-GP-IRMODBUSRTU infrared meter reading terminal is a device launched by Shanghai DAQ IoT Technology Co., Ltd. that converts State Grid electricity meters using DLT645/698 protocols into the Modbus communication protocol. It can collect electrical parameter data such as energy, voltage, current and power factor from State Grid electricity meters.

Brief introduction to the infrared meter reading principle: the infrared optical probe periodically reads the parameter information of the smart meter through the infrared optical port and uploads it. The infrared meter reader has the function of infrared signal modulation and demodulation: it modulates a binary digital signal into a pulse sequence at a frequency of 38KHz and drives an infrared emitting diode to send it out in the form of infrared light pulses; the transceiver converts the received light pulses into electrical signals, which after amplification and filtering are sent to the demodulation circuit to be demodulated back into a binary digital signal. After message parsing, it is converted to the Modbus protocol, which can be read by other host computer software.

This terminal supports meter reading scenarios for various meters with infrared communication interfaces, such as electricity meters and gas meters. It is suitable for electricity meter data acquisition, smart city data acquisition, power monitoring data acquisition, energy-saving and emission-reduction data monitoring systems, energy consumption monitoring systems, PV systems, intelligent monitoring, robots, smart security systems and cloud platform systems; and for electricity meter calibration and testing benches. It is especially suitable for PV power generation system energy meter reading and for meter reading when the main meter of a State Grid electricity meter is in a completely sealed state with no seal allowed to be opened.

# 3 Executive Standards

"Q/GDW1365—2013 Technical Specification for Information Exchange Security Authentication of Smart Electricity Meters" — State Grid standard

"Multi-function Electricity Meter Communication Protocol DLT645-2007" — State Grid standard

"Three-phase Smart Electricity Meter Type Specification Q/GDW1356-2013" — State Grid standard

# 4 Product Features & Parameters

## 4.1 Acquisition Characteristics

- Infrared carrier frequency: 38kHz

- Communication baud rate: 1200~115200bps, adaptive according to the electricity meter communication parameters

- Infrared communication distance: ≤10 m

- Communication angle: ≤15 degrees

Infrared communication protocol: compliant with IEC62056-21 (IEC1107) and DL/T-645 1997 and 2007 standards; Modbus protocol supported.

## 4.2 Electrical Characteristics

- Power supply: 5-24V DC

- Operating power consumption: less than 5W

## 4.3 Operating Environment

- Temperature -30°C ~ 75°C, humidity 0 ~ 95%

# 5 Communication Protocol

## 5.1 Module Configuration Description

MODBUS commands: 0x03: read data command; 0x06: single register write command; 0x10: batch write command.

| No. | Register name | Register address | Command | Remarks |
| --- | --- | --- | --- | --- |
| 1 | Address | 0xF000 | 0x03/0x06 | Default 1, 255 is the broadcast address |
| 2 | 645 address | 0xF001 | 0x03/0x06 | 645 address 1234 |
| 3 | 645 address | 0xF002 | 0x03/0x06 | 645 address 5678 |
| 4 | 645 address | 0xF002 | 0x03/0x06 | 645 address 9ABC |
| 5 | Meter communication protocol | 0xF004 | 0x03/0x06 | 0: 645-07 protocol, 1: 645-97 |
| 6 | Module communication mode | 0xF005 | 0x03/0x06 | 0: Modbus mode, 1: transparent mode |
| 7 | Module acquisition mode | 0xF006 | 0x03/0x06 | 0: cyclic meter reading, 1: real-time single-command meter reading |
| 8 | Module acquisition interval | 0xF007 | 0x03/0x06 | Cyclic meter reading interval 1S-60000S |
| 9 | Port 4851 (Modbus) baud rate | 0xF008 | 0x03/0x06 | 0:1200, 1:2400, 2:4800, 3:9600, 4:14400, 5:19200, 6:38400, 7:56000, 8:57600, 9:115200 |
| 10 | Port 4851 (Modbus) parity | 0xF009 | 0x03/0x06 | 0: none, 1: even, 3: odd |
| 11 | Port 4852 (DLT645) baud rate | 0xF00A | 0x03/0x06 | 0:1200, 1:2400, 2:4800, 3:9600, 4:14400, 5:19200, 6:38400, 7:56000, 8:57600, 9:115200 |
| 12 | Port 4852 (DLT645) parity | 0xF00B | 0x03/0x06 | 0: none, 1: even, 3: odd |

## 5.2 Default Modbus Point Table

| No. | Register name | Register address | Command | Remarks |
| --- | --- | --- | --- | --- |
| 1 | Combined forward active total energy | 1000 | 0x03 | Float, high word first |
| 2 | Combined forward active sharp energy | 1002 | 0x03 | Float, high word first |
| 3 | Combined forward active peak energy | 1004 | 0x03 | Float, high word first |
| 4 | Combined forward active flat energy | 1006 | 0x03 | Float, high word first |
| 5 | Combined forward active valley energy | 1008 | 0x03 | Float, high word first |
| 6 | Current forward active total energy | 1010 | 0x03 | Float, high word first |
| 7 | Current forward active sharp energy | 1012 | 0x03 | Float, high word first |
| 8 | Current forward active peak energy | 1014 | 0x03 | Float, high word first |
| 9 | Current forward active flat energy | 1016 | 0x03 | Float, high word first |
| 10 | Current forward active valley energy | 1018 | 0x03 | Float, high word first |
| 11 | Current reverse active total energy | 1020 | 0x03 | Float, high word first |
| 12 | Current reverse active tariff 1 energy | 1022 | 0x03 | Float, high word first |
| 13 | Current reverse active tariff 2 energy | 1024 | 0x03 | Float, high word first |
| 14 | Current reverse active tariff 3 energy | 1026 | 0x03 | Float, high word first |
| 15 | Current reverse active tariff 4 energy | 1028 | 0x03 | Float, high word first |
| 16 | Combined reactive 1 total energy | 1030 | 0x03 | Float, high word first |
| 17 | Combined reactive 1 sharp energy | 1032 | 0x03 | Float, high word first |
| 18 | Combined reactive 1 peak energy | 1034 | 0x03 | Float, high word first |
| 19 | Combined reactive 1 flat energy | 1036 | 0x03 | Float, high word first |
| 20 | Combined reactive 1 valley energy | 1038 | 0x03 | Float, high word first |
| 21 | Combined reactive 2 total energy | 1040 | 0x03 | Float, high word first |
| 22 | Combined reactive 2 sharp energy | 1042 | 0x03 | Float, high word first |
| 23 | Combined reactive 2 peak energy | 1044 | 0x03 | Float, high word first |
| 24 | Combined reactive 2 flat energy | 1046 | 0x03 | Float, high word first |
| 25 | Combined reactive 2 valley energy | 1048 | 0x03 | Float, high word first |
| 26 | Previous settlement day combined active total energy | 1050 | 0x03 | Float, high word first |
| 27 | Previous settlement day combined active sharp energy | 1052 | 0x03 | Float, high word first |
| 28 | Previous settlement day combined active peak energy | 1054 | 0x03 | Float, high word first |
| 29 | Previous settlement day combined active flat energy | 1056 | 0x03 | Float, high word first |
| 30 | Previous settlement day combined active valley energy | 1058 | 0x03 | Float, high word first |
| 31 | Previous settlement day forward active total energy | 1060 | 0x03 | Float, high word first |
| 32 | Previous settlement day forward active sharp energy | 1062 | 0x03 | Float, high word first |
| 33 | Previous settlement day forward active peak energy | 1064 | 0x03 | Float, high word first |
| 34 | Previous settlement day forward active flat energy | 1066 | 0x03 | Float, high word first |
| 35 | Previous settlement day forward active valley energy | 1068 | 0x03 | Float, high word first |
| 36 | Previous settlement day reverse active total energy | 1070 | 0x03 | Float, high word first |
| 37 | Previous settlement day reverse active tariff 1 energy | 1072 | 0x03 | Float, high word first |
| 38 | Previous settlement day reverse active tariff 2 energy | 1074 | 0x03 | Float, high word first |
| 39 | Previous settlement day reverse active tariff 3 energy | 1076 | 0x03 | Float, high word first |
| 40 | Previous settlement day reverse active tariff 4 energy | 1078 | 0x03 | Float, high word first |
| 41 | Previous settlement day combined reactive 1 total energy | 1080 | 0x03 | Float, high word first |
| 42 | Previous settlement day combined reactive 1 sharp energy | 1082 | 0x03 | Float, high word first |
| 43 | Previous settlement day combined reactive 1 peak energy | 1084 | 0x03 | Float, high word first |
| 44 | Previous settlement day combined reactive 1 flat energy | 1086 | 0x03 | Float, high word first |
| 45 | Previous settlement day combined reactive 1 valley energy | 1088 | 0x03 | Float, high word first |
| 46 | Previous settlement day combined reactive 2 total energy | 1090 | 0x03 | Float, high word first |
| 47 | Previous settlement day combined reactive 2 sharp energy | 1092 | 0x03 | Float, high word first |
| 48 | Previous settlement day combined reactive 2 peak energy | 1094 | 0x03 | Float, high word first |
| 49 | Previous settlement day combined reactive 2 flat energy | 1096 | 0x03 | Float, high word first |
| 50 | Previous settlement day combined reactive 2 valley energy | 1098 | 0x03 | Float, high word first |
| 51 | Phase A voltage | 1100 | 0x03 | Float, high word first |
| 52 | Phase B voltage | 1102 | 0x03 | Float, high word first |
| 53 | Phase C voltage | 1104 | 0x03 | Float, high word first |
| 54 | Phase A current | 1106 | 0x03 | Float, high word first |
| 55 | Phase B current | 1108 | 0x03 | Float, high word first |
| 56 | Phase C current | 1110 | 0x03 | Float, high word first |
| 57 | Instantaneous total active power | 1112 | 0x03 | Float, high word first |
| 58 | Instantaneous phase A active power | 1114 | 0x03 | Float, high word first |
| 59 | Instantaneous phase B active power | 1116 | 0x03 | Float, high word first |
| 60 | Instantaneous phase C active power | 1118 | 0x03 | Float, high word first |
| 61 | Instantaneous total reactive power | 1120 | 0x03 | Float, high word first |
| 62 | Instantaneous phase A reactive power | 1122 | 0x03 | Float, high word first |
| 63 | Instantaneous phase B reactive power | 1124 | 0x03 | Float, high word first |
| 64 | Instantaneous phase C reactive power | 1126 | 0x03 | Float, high word first |
| 65 | Instantaneous total apparent power | 1128 | 0x03 | Float, high word first |
| 66 | Instantaneous phase A apparent power | 1130 | 0x03 | Float, high word first |
| 67 | Instantaneous phase B apparent power | 1132 | 0x03 | Float, high word first |
| 68 | Instantaneous phase C apparent power | 1134 | 0x03 | Float, high word first |
| 69 | Instantaneous total power factor | 1136 | 0x03 | Float, high word first |
| 70 | Instantaneous phase A power factor | 1138 | 0x03 | Float, high word first |
| 71 | Instantaneous phase B power factor | 1140 | 0x03 | Float, high word first |
| 72 | Instantaneous phase C power factor | 1142 | 0x03 | Float, high word first |
| 73 | Grid frequency | 1144 | 0x03 | Float, high word first |
