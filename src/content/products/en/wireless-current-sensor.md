---
title: "Wireless Current Sensor"
summary: >-
  SC-LP-CTLoRa wireless current & temperature acquisition sensor terminal is equipped with a low-power, high-sensitivity split-core transformer. Through the principle of electromagnetic induction, it converts the large current on th…
image: "/images/products/1692942932388075.jpg"
order: 206
category: "wirelesssensor"
hidden: false
---
**Product Details**

# 1 Product Overview

SC-LP-CTLoRa wireless current & temperature acquisition sensor terminal is equipped with a low-power, high-sensitivity split-core transformer. Through the principle of electromagnetic induction, it converts the large current on the primary side into a small current on the secondary side for current monitoring. It can sensitively detect the magnitude of the line current. When the monitored loop current is greater than the product's starting current, the sensor enters normal working mode, collects temperature, current and other related data, and uploads them to the acquisition device via wireless communication. If the line is unloaded or the load current is less than the starting current, the sensor uses its internal battery to maintain the working state.

The sensor terminal supports GPRS/4G/NB-IoT/LoRa/WiFi communication (external power supply defaults to GPRS; battery power defaults to NB-IoT/LoRa), overcoming wireless communication obstruction caused by special on-site environments, greatly simplifying on-site deployment time and reducing construction costs. It has a wide current measurement range, uses high-quality magnetic core material, features an open/close structure, and is easy to install. It is used for current monitoring and acquisition in scenarios such as AC motors, lighting equipment, air compressors, HVAC units, building automatic control systems, urban industrial grids and rural grid renovation projects.

![](/images/products/1692942751159357.png)

# 3 Product Features

## 3.1 Current Acquisition Characteristics

Acquisition type: AC

Current range: AC 1A ~ 400A

Maximum input: 100% (continuous) / 150% (1 minute)

Current accuracy class: ±1% FS

Energy source: power-frequency magnetic field or internal replaceable lithium battery (540mAh)

Maximum power consumption: ≤0.1W

CT-powered minimum starting current: 0.5A ~ 1A AC

Minimum starting current cold-start time: ≤4min

Acquisition frequency: power-frequency magnetic field: 5s; battery: 3min

## 3.2 Temperature Acquisition Characteristics (optional)

Acquisition type: electrical contact point temperature

Temperature range: -40°C to +150°C

Temperature accuracy class: ±2°C

## 3.3 Electrical Characteristics

Power supply: battery, or 12V DC / 220V AC

Insulation resistance: >100MΩ (between primary/secondary)

## 3.4 Transformer Communication Characteristics

Wireless frequency: 433MHz

Transmission distance: 50m in open area

Wireless transmission mode: LoRa

## 3.5 Gateway Communication Characteristics

Communication interface: RS485 by default

Wireless transmission mode: GPRS / NB-IoT / LoRa / WiFi

Communication protocol: MQTT / TCP / UDP / HTTP / SSL / Modbus RTU; other protocols customizable

Data forwarding: any public network server

Number of gateway server centers: supports reporting data to up to 7 cloud servers simultaneously

Heartbeat packet: supports custom heartbeat packets, which can be set to the signal strength

Registration packet: supports custom registration packets, which can be set to the IMEI code

Positioning: supports LBS base station positioning, making it easy to query device location

## 3.6 Structural Characteristics

Material: PC plastic (housing)

Main body protection rating: IP42

Main body dimensions: 65mm × 36mm × 63mm

Transformer probe structure: open/close type

Main body installation: wall-mounted or screw-fixed

Transformer probe installation: hanging installation

Temperature probe installation: cable-tie bundled installation

## 3.7 Electromagnetic Compatibility

Electrical fast transient burst immunity test — Standard: GB/T 17626.4; IEC 61000-4-4 — Level: Class IV (communication port 2kV, other ports 4kV)

Electrostatic discharge immunity test — Standard: GB/T 17626.2; IEC 61000-4-2 — Level: Class III (contact discharge 6kV, air discharge 8kV)

Radiated radio-frequency electromagnetic field immunity test — Standard: GB/T 17626.6; IEC 61000-4-3 — Level: Class III (10V/m)

Power-frequency magnetic field immunity test — Standard: GB/T 17626.8; IEC 61000-4-6 — Level: Class IV

## 3.8 Operating Environment

Ambient temperature -25°C ~ 75°C, humidity 0 ~ 95% (non-condensing)

# 4 Core Advantages

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Supports live-line lossless installation; user equipment does not need to be powered down during installation

- The gateway supports custom registration and heartbeat packets, making it easy for the platform to distinguish devices

- The gateway supports any private IoT cloud platform and configuration software, with data protocol integration

- Non-invasive measurement, without affecting the normal operation of equipment

- The gateway supports remote parameter configuration and FOTA remote upgrade, minimizing on-site installation and maintenance labor costs

# 5 Data Reporting Communication Protocol

## 5.1 Protocol Parsing Description

Multiple push methods such as UDP/TCP/MQTT/HTTP; users receiving data must provide the public IP (or domain name) address and port number of the cloud server.

Example JSON data message:

{"A":56.7,"B":55.8,"C":49.3,"D":1.2,"deviceID":"860344048491162"}

Message parsing:

{

"A": 56.7, // current value of channel 1

"B": 55.8, // current value of channel 2 (optional)

"C": 49.3, // current value of channel 3 (optional)

"D": 1.2, // current value of channel 4 (optional)

"deviceID": "860344048491162" // device ID

}

## 5.2 Protocol Customization

If you need to customize other communication protocols, please contact our sales staff. For orders of this product over 1000 RMB, protocol customization is free.

# 6 Platform Integration

## 6.1 Default Platform

By default, the product connects to our designated industrial IoT platform.

## 6.2 User-Specified Platform

Taking Alibaba Cloud platform integration as an example: after the user creates a product and adds a device on the Alibaba Cloud IoT platform, the user needs to provide a triple {ProductKey, DeviceName, DeviceSecret} and the MQTT topic to publish to. For example:

ProductKey = b0FMK1Ga5cp

DeviceName = 862991419835241

DeviceSecret = y7MTCG6Gk33Ux26bbWSpANl4OaI0bg5Q

# 7 Installation & Maintenance

## 7.1 Battery Replacement

The sensor is powered by a high-performance lithium battery with a service life of up to 5 years. Please replace the battery when it reaches the end of its service life.

Note: when the measured current is greater than the starting current of 1A, the sensor enters normal working mode, periodically collecting temperature, current and other related data and uploading them wirelessly to the gateway device. If the line is unloaded or the load current is less than the starting current, the sensor uses its internal battery to maintain a low-power working state.

## 7.2 Indicator Light

The sensor provides one indicator light, which flashes during wireless communication.

| Possible problem | Possible cause | Possible solution |
| --- | --- | --- |
| Indicator does not flash after power-on | Insufficient battery power | Check whether the button battery has power; when powered by battery only, it takes 180 seconds for the indicator to flash |
| | Measured current less than starting current | Check whether the measured current is greater than the starting current |
| Inaccurate or zero measurement after applying signal | Incorrect temperature measurement | Check whether the temperature sensor is in close contact with the measured cable; check whether the temperature measurement signal is within the device's measurement range |
| | Inaccurate current measurement | Check whether the transformer clip is fastened; check whether the current measurement signal is within the device's measurement range |
| | Incorrect energized status | The live-detection electrode plate is too far from the measured cable; check whether the measured cable is energized; check whether the electrode plate is in contact with the cable |
| Sensor cannot communicate with the receiving device | Incorrect communication parameters | Check whether the communication address is correct |
| | Communication link affected | Check whether the signals on both the transmitting and receiving sides are shielded by metal; check whether the distance between the transmitting and receiving sides is too far |
