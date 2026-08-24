---
title: Wireless acquisition terminal for Industrial & IoT Data Acquisition Devices
summary: >-
  Wireless acquisition terminal for industrial and IoT data acquisition devices. Supports real-time data collection, remote monitoring, and seamless integration with SCADA, MES, and cloud platforms.
image: /images/products/1755067453869133.png
order: 15
category: instrumentation
---
# 1 **Product overview**

SC-GP-GWRTU supports 4G high-speed access of mobile, China Unicom and China Telecom. The software has perfect functions, covering the vast majority of conventional application scenarios. Users only need to realize the two-way data transmission from the serial port to the network through simple Settings. And support custom registration package, heartbeat package function, and support the connection to OneNET, Ali Cloud, Baidu Cloud, Tencent cloud and other cloud platforms.

# 2 **service idea**

**We solemnly promise that:**

**You buy not only the product, but also the meticulous and thoughtful technical support services!!!( =^_^= )**

This product, the site only ordinary workers electric installation! No debugging!

We provide free remote guidance, remote configuration and debugging service, and send the data to the user-specified cloud platform.

Free Internet of Things solution consulting services!

# 3 **Product characteristics parameters**

##  3.1 **electrical character**

l Power supply mode: 12V DC power supply (power interface: DC5.5*2.1mm master head socket, positive and negative outside inside)

l Working power consumption: less than 5W

## 3.2 **Communication characteristics**

Wireless transmission mode: 4G

Communication protocol: MQTT / TCP / UDP / HTTP / SSL / ModBus RTU, and other protocols can be customized

Data forwarding: any public network server

Number of server centers: up to simultaneous data reporting to 7 cloud servers.

Heartbeat packet: support custom heartbeat packet, can be set to signal intensity.

Registration package: support custom registration package, can be set to IMEI code.

Positioning: Support LBS base station positioning to facilitate the query of device location.

## 3.3 **structural property**

##  3.4 **work environment**

l Temperature-30°C~75°C, humidity of 0~95%

# 4 **Product core advantages**

u **Simple installation, fast deployment, help the Internet of things project quickly landing**

u **Support custom registration package and heartbeat package, facilitate the platform to distinguish devices.**

u **Support any Internet of Things cloud platform and configuration software, and provide data protocol docking**

u **Support Ali Cloud, Baidu Tiangong, OneNet, Tencent Cloud mainstream cloud platform**

u **Support for the external multiplex sensor**

u **Support remote configuration parameters and FOTA remote upgrade to minimize the personnel cost of site construction and maintenance**

#  5 **Data reporting communication protocol**

##  5.1 **Protocol parsing instructions**

For UDP / TCP / MQTT / HTTP and other push methods, users should provide the IP address and port number of the public network of the cloud server to receive the data.

**Example of JSON format according to the specific collected equipment:**

{"ID":"866714044842879","XXX":3456.71}

**Message analysis:**

{

}

## 5.2 **The protocol receives the test**

Use network debugging assistant NetAssist.

## 5.3 **Agreement customization**

If you need to customize other communication protocols, you can contact the business personnel to communicate.

# 6 **Platform docking**

##  6.1 **Default platform**

The product is connected to our designated open industrial Internet of Things platform by default, and the platform interface is as follows:

Mobile terminal wechat access interface

## 6.2 **The user specifies the platform**

Take the connection of Ali Cloud platform as an example. After users create products and add devices on the Ali Cloud Internet of Things platform, users need to provide a triad: {ProductKey, DeviceName, DeviceSecret} and the MQTT theme to be released.

For example, the value of triples are:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

Take OneNet platform docking as an example. After users create products and add devices on China Mobile OneNet platform, users need to provide the product ID and the device registration code.

for instance:

ID：332590

Registration code: DGRUa7Vr9KYGunwJ

## FAQ

### 1\. What devices can this terminal connect to?

Supports a wide range of industrial and IoT devices including sensors, meters, and PLCs.

### 2\. Which wireless protocols are supported?

Supports LoRa, NB-IoT, 4G, and other standard industrial wireless protocols.

### 3\. Is remote monitoring possible?

Yes, it allows real-time monitoring and parameter management remotely.

### 4\. Can it be integrated with SCADA or cloud platforms?

Yes, it supports seamless integration with SCADA, MES, and cloud IoT platforms.

### 5\. Is it suitable for harsh industrial environments?

Yes, the terminal is designed for vibration, dust, and temperature extremes.
