---
title: "Modbus TCP RJ45 Ethernet Temperature & Humidity Sensor"
summary: "RJ45 Ethernet port temperature & humidity sensor"
image: "/images/products/1764830558253165.jpg"
order: 243
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

![](/images/products/1764815455421068.png)

![](/images/products/1764815465125531.png)

RJ45 Ethernet port temperature & humidity sensor

DAQ-GP-THLAN temperature & humidity sensor terminal is a general-purpose temperature & humidity sensor launched by Shanghai DAQ IoT Technology Co., Ltd., based on wired network port transmission, Modbus TCP communication protocol and wide DC voltage power supply. It can collect temperature and humidity data in the environment. Other versions with WiFi transmission, MQTT protocol, etc. can be customized.

The network-port temperature & humidity terminal is widely used in temperature and humidity measurement scenarios in industry, agriculture and other fields.

# 3 Executive Standards

GB 5170.4-85 "Methods for verifying the basic parameters of environmental test equipment for electrical and electronic products — Temperature change test equipment"

# 4 Product Features & Parameters

## 4.1 Acquisition Characteristics

- Temperature range: -40°C ~ 120°C

- Temperature accuracy: ±0.5°C

- Humidity range: 0 ~ 100% RH

- Humidity accuracy: ±0.1 RH

## 4.2 Electrical Characteristics

- Power supply: 12V DC (power interface: DC5.5*2.1mm female socket, center positive, outer negative)

- Operating power consumption: less than 5W

## 4.3 Communication Characteristics

Transmission mode: network port

Communication protocol: MQTT / TCP / UDP / HTTP / SSL / Modbus RTU / Modbus TCP; other protocols customizable

Number of server centers: supports reporting data to up to 7 cloud servers simultaneously

Heartbeat packet: supports custom heartbeat packets, which can be set to the signal strength

Registration packet: supports custom registration packets, which can be set to the IMEI code

Positioning: supports LBS base station positioning, making it easy to query device location

## 4.4 Operating Environment

- Temperature -40°C ~ 75°C, humidity 0 ~ 95%

# 5 Core Advantages

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- Supports any IoT cloud platform and configuration software, with data protocol integration

- Supports mainstream cloud platforms such as Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud

- Supports external connection of multiple sensors

- Non-invasive acquisition, without affecting the normal operation of equipment

- Supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the server IP address and port number.

# 6 Communication Routine

## 6.1 Register Addresses

| Register address | PLC or SCADA address | Content | Operation | Data type |
| --- | --- | --- | --- | --- |
| 0000H | 40001 | Humidity | Read only | Unsigned integer |
| 0001H | 40002 | Temperature | Read only | Unsigned integer |

## 6.2 Communication Protocol Example and Explanation

MBAP header: transaction identifier: 2 bytes; protocol identifier: 2 bytes; byte length: 2 bytes. Data transmission mode: TCP. Address: current device address. Check code: none. Note: when temperature and humidity are read via TCP software, the data is magnified 10 times.

Example: use Modbus TCP debugging software to read the current temperature and humidity (send in hex, receive in hex):

Send command:

| MBAP header | Address | Function code | Start address | Register length |
| --- | --- | --- | --- | --- |
| 000000000006 | 01 | 03 | 00 00 | 00 02 |

Receive command:

| MBAP header | Address | Function code | Number of valid bytes returned | Humidity | Temperature |
| --- | --- | --- | --- | --- | --- |
| 000000000007 | 01 | 03 | 04 | 01F5 | 00FD |

Humidity: 01F5 (hex) → 501 (decimal) = 50.1%RH

Temperature: 00FD (hex) → 253 (decimal) = 25.3℃

**Example JSON data message:**

{"T":27.8,"H":67.1,"ID":"860344048491162"}

**Message parsing:**

{

"T": 32.1, // temperature

"H": 64.8, // humidity

"ID": "860344048491162" // device ID

}

## 6.3 Protocol Reception Test

Reception testing can be performed with the network debugging assistant NetAssist.

## 6.4 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff.

# 7 Application Cases

![](/images/products/1764815483899790.png)
