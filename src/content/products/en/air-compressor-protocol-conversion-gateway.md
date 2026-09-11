---
title: "Air Compressor Protocol Conversion Acquisition Gateway"
summary: >-
  The DAQ-GP-AMmodbus air-compressor protocol-conversion gateway from Shanghai Daq-IoT Technology is designed for air-compressor data acquisition, protocol conversion and reverse control. It enables remote monitoring of mainstream a…
image: "/images/products/1788232051956107.png"
order: 255
category: "plcacquisition"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1780564072697322.png)

![](/images/products/1780564258144868.png)

The DAQ-GP-AMmodbus air-compressor protocol-conversion gateway from Shanghai Daq-IoT Technology is designed for air-compressor data acquisition, protocol conversion and reverse control. It enables remote monitoring of mainstream air compressors and fast integration of compressor data into third-party systems such as PLCs or DCS.

Through this gateway you can monitor the operating status and parameters of the compressor and also control start, stop, load and unload over serial communication. Without any extra configuration the gateway can connect up to 5 Atlas Copco / Ingersoll Rand and similar compressors at the same time, forming a compressor group-control network. The host software or PLC connects to this network in real time over an RS485 interface using the Modbus RTU protocol.

Supported compressor brands and series (excerpt; 156 models are supported in total):

| No. | Brand | Compressor series | Controller model | Bus |
| --- | --- | --- | --- | --- |
| 1 | Ingersoll Rand | VSD | KT | RS-485 |
| 2-3 | Ingersoll Rand | V, SG | KT / - | RS-485 |
| 4-5 | Ingersoll Rand | M, R | XE70M / XE90M | RS-485 |
| 6 | Ingersoll Rand | V | Menghu | RS-485 |
| 7 | Ingersoll Rand | KOS400 | - | RS-485 |
| 8 | Ingersoll Rand | SE | IR LAN to 485 | RS-485 |
| 9-20 | Ingersoll Rand | VSD / M,R / SMxxVSD / SMxxV / M,RVSD / KOS500 | KT, XE90M/XE145M, SG VSD, KT | RS-485 |
| 21-28 | Pulute (普乐特) | - / variable-frequency | MAM_KY, MAM_200, MAM_6090, MAM_KY12S, MAM_VSD_1, MAM_YL, MAM6080/6090_2, MAM8070 | RS-485 |
| 29-31 | Atlas Copco | MK4, MK5 | Shenzhen module, MK4, MK5 | CAN / RS-485 |
| 32-41 | Sullair (寿力) | standard type 1, type 4, oil-free, luxury type 2, EC2000, SDS, STS, DS series, vacuum pump, luxury type 4 / 6 | - | RS-485 |
| 42-50 | Hitachi (日立) | N2 oil-flooded / oil-free, N1 oil-free (via transfer PLC), 4G, TH-series fixed/variable frequency, single-stage oil-flooded | HC_1..HC_5, EPC-2000, HC-CP650, HC-INVT | RS-485 |
| 51-53 | BOGE (伯格) | - | V120, BOGE_DC_1, BOGE_1 | RS-485 |
| 54-63 | Kobelco (神钢) | ALE/FE, Kobelion, AG75, ALE_2 | KB_1..KB_10 | RS-485 |
| 64-65 | Qiangshi (强时) | E75 | QS_1, Hiper inverter direct control | RS-485 |
| 66 | ENC inverter | - | EN600 | RS-485 |
| 67 | Yuanyi dryer | - | YY_RD_1 | RS-485 |
| 68-73 | Fusheng (复盛) | SA | FS_SA, FS_MAM, FS_1200, FS_MAM_2, FS_SA250, FS_MAM_3 | RS-485 |
| 74-95, 116-135, 149-156 | Ingersoll Rand | SE, SG, XE145M, S1, S3, V100T, LM series, KT_VSD, SVT/VS680 vacuum pumps etc. | XE145M series, LM_/LM_VSD_ series, KT_VSD_ series, SG_ series | RS-485 |
| 84 | Inovance (汇川) | inverter | CP700 | RS-485 |
| 85-89 | United Osd (优耐特斯) | container | EPC-2000 series, EPC-2000PX | RS-485 |
| 90 | Sazhen (萨震) | - | VK070 | RS-485 |
| 91 | BSC (鲍斯) | - | ZMF02 | RS-485 |
| 97-105, 143-148 | Ailide (埃尔利德) | dual-motor, oxygen generator, fixed-frequency, single-stage VSD, dryer-integrated, container | AIR_TSFC, AIR_OXY, AIR_TSA, AIR_VSD, AIR_IES series | RS-485 |
| 106 | Omron | - | E5CC | RS-485 |
| 107 | Jierong heat-recovery | - | JR_1 | RS-485 |
| 108, 112 | Deman (德曼) | - | MD8500, MD8500_TCP | RS-485 |
| 110-111 | Zhongfu Shenying filter | - | ZF_1, ZF_2 | RS-485 |
| 113 | Alead medium-pressure | EBV_8_40 | Inovance H2u | RS-485 |
| 136-137 | CompAir | Delcos Ts fixed / variable frequency | - | RS-485 |
| 138 | Haituobin blower | - | - | RS-485 |
| 139 | Aigao | BPM110 | Inovance PLC | RS-485 |
| 140 | Orion | - | Omron CVS | RS-485 |
| 141-142 | Dengfu (登福) | SAV250, DH55VSD | - | RS-485 |
| 150 | Jiebao | - | JB_1 | RS-485 |
| 151 | Jiade | container | JD_1 | RS-485 |
| 154 | Baode | BD-30GS | BD_30GS | RS-485 |

Supported centrifugal-machine models:

| No. | Brand | Series / controller | Bus |
| --- | --- | --- | --- |
| 1 | Kaishan | - | RS-485 |
| 2-3, 8, 17-26, 35-37 | Ingersoll Rand | C700/C1000 (Xe145m / Xe145DCU), CMC BCM2.x, NX8000, TA6000, NX5000, TA3000, C700_2 | RS-485 |
| 4, 27-28 | Sullair | SL400, TRE | RS-485 |
| 5-7, 11-12 | Atlas Copco | MK4, MK5, ZH630 | RS-485 / CAN |
| 9 | Fusheng | EDC-PLC | RS-485 |
| 10 | Kaishan | S7-1215 | RS-485 |
| 13-14 | Ailvde | EDC, R150 | RS-485 |
| 15-16 | Hanwha | SM4100, SM4000 | RS-485 |
| 29 | BSC | VT | RS-485 |
| 30 | Dengfu | VB1200 | RS-485 |
| 31 | Howden | HM850 | RS-485 |
| 32 | Wancon heat recovery | CTY600 | RS-485 |
| 33 | Lingyu | LY_DB600 | RS-485 |
| 34 | Cigu | CG400 (CG/A400) | RS-485 |

# 2 Ordering Specifications and Selection

| Model | Description |
| --- | --- |
| DAQ-GP-AMmodbus-Atlas | Connects to Atlas Copco compressors with MK2, MK4, MK5 controllers |
| DAQ-GP-AMmodbus-Ingersoll | Connects to Ingersoll Rand compressors |
| DAQ-GP-AMmodbus-XX | Other compressor brands, such as Sullair, Fusheng, Kaishan and Kobelco |
| ... | Custom versions (4G/Wi-Fi transmission, Ethernet port, MQTT or HTTP integration with third-party software platforms) |

# 4 Product Parameters

## 4.1 Electrical Characteristics

Operating power supply: 220V AC, 60mA

## 4.2 Installation Instructions

The compressor panel is shown below:

![](/images/products/1780564400150648.png)

The AC compressors form a daisy-chain network that connects to the MKLAN interface of the DAQ-GP-AMmodbus, while the host computer or PLC connects via the Modbus interface.

- The DB9 plug connects to the "LAN" plug of the controller; the host computer connects to the "AB" terminals with a Modbus (485) cable.
- Set the address on the controller panel to 1-10; these correspond to Modbus slave addresses 1-10.
- The host computer polls Modbus slave addresses 1-10; the register table is the table in section 3. Daisy-chain (one-to-many) bus connection is supported.

## 4.3 Communication Characteristics

Default transmission: RS485, Modbus RTU

Wireless options: 4G / LoRa / Wi-Fi / Ethernet cable

Communication protocols: MQTT/TCP/UDP/HTTP/SSL; other protocols can be customized

Data forwarding: any public-network server

## 4.4 Structural Characteristics

Dimensions: 122 x 84 x 24 mm

## 4.5 Operating Environment

- Temperature: -30 degC to 75 degC, humidity 0-95%
