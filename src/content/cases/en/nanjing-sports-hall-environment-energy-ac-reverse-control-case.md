---
title: "Nanjing XX Sports Training Hall Environmental Monitoring, Energy Acquisition, Fault Warning & AC Reverse Control Case"
summary: >-
  Nanjing Sports Training Hall — Integrated Environment Monitoring, Energy Acquisition, Fault Warning and Air-Conditioning Reverse Control Case
image: "/images/cases/1780041751191273.png"
industry: "其他"
order: 56
---
**Nanjing Sports Training Hall — Integrated Environment Monitoring, Energy Acquisition, Fault Warning and Air-Conditioning Reverse Control Case**

**1. Project Background**

A newly built comprehensive physical training hall (the "training hall") is about to be put into use. It contains an equipment area, combat area, basketball hall, swimming pool and supporting rooms, and undertakes the school's daily physical training and concentrated training tasks. The traditional manual inspection mode cannot meet the modern management requirement of "real-time sensing - immediate decision - rapid response", and an integrated monitoring platform of "full-area sensing, digital twin, intelligent warning and linked control" was urgently needed.

**2. On-Site Survey**

After preliminary on-site survey by Daq-IoT staff:

1. Confirmed the on-site positions of sensors, meters, air conditioners, large screens and sound-and-light alarms and the conditions for power/network connection, plus the equipment quantity required at each point;
2. Obtained existing cable routes, cable-tray spare capacity, equipment protocols and interface versions;
3. Collected photos, nameplates, IP/address codes and wiring diagrams to provide first-hand data for detailed design.

| No. | Equipment | Quantity |
| --- | --- | --- |
| 1 | Combined temperature-humidity and CO2 sensor | 12 |
| 2 | Large-screen infrared temperature sensor | 3 |
| 3 | Sound-and-light alarm | 1 |
| 4 | Smart electricity meter | 11 |
| 5 | Current transformer | 33 |
| 6 | Power module | 5 |
| 7 | Network cabinet | 5 |
| 8 | Serial server | 5 |
| 9 | 1F air-conditioner outdoor unit multi-split acquisition module | 2 |
| 10 | 2F air-conditioner indoor direct-expansion unit monitoring module | 4 |
| 11 | Cables/accessories | 1 batch |

**3. Implementation**

![](/images/cases/1780041751191273.png)

Technical solution topology

Sensor point mapping table — serial server location, sensor name, sensor address, current ratio, acquired data:

| Area | Sensor | Address | Ratio | Data acquired |
| --- | --- | --- | --- | --- |
| 1F southwest | F1_4 | 7 | - | Temperature, humidity, CO2 |
| | F1_5_led | 15 | - | Temperature |
| | F1_6 | 8 | - | Temperature, humidity, CO2 |
| | F1_7 | 9 | - | Temperature, humidity, CO2 |
| | F1_southwest AC | 115 | 40 | Meter forward active total energy |
| | F1_southwest AC control | 1 | - | On/off status, set temperature, mode, fan speed, wind direction, return-air temperature |
| | F1_southeast AC | 220 | 40 | Meter forward active total energy |
| | F1_southeast AC control | 1 | - | On/off status, set temperature, mode, fan speed, wind direction, return-air temperature |
| 1F northeast | F1_northwest AC | 107 | 50 | Meter forward active total energy |
| | F1_northwest AC control | 1 | - | On/off status, set temperature, mode, fan speed, wind direction, return-air temperature |
| | F1_northeast AC | 102 | 64 | Meter forward active total energy |
| | F1_northeast AC control | 1 | - | On/off status, set temperature, mode, fan speed, wind direction, return-air temperature |
| | F1_1 | 12 | - | Temperature, humidity, CO2 |
| | F1_2 | 11 | - | Temperature, humidity, CO2 |
| | F1_3 | 10 | - | Temperature, humidity, CO2 |
| 2F northeast | F2_2_led | 14 | - | Temperature |
| | F2_northeast AC | 71 | 30 | Meter forward active total energy |
| | F2_northeast AC control | 1 | - | On/off status, set mode, set temperature, actual temperature, actual humidity |
| | F2_southeast AC | 111 | 30 | Meter forward active total energy |
| | F2_southeast AC control | 1 | - | On/off status, set mode, set temperature, actual temperature, actual humidity |
| | F2_1 | 6 | - | Temperature, humidity, CO2 |
| | F2_2 | 5 | - | Temperature, humidity, CO2 |
| | F2_3 | 4 | - | Temperature, humidity, CO2 |
| 2F southwest | F2_4 | 1 | - | Temperature, humidity, CO2 |
| | F2_5 | 2 | - | Temperature, humidity, CO2 |
| | F2_6 | 3 | - | Temperature, humidity, CO2 |
| | F2_southwest AC | 116 | 30 | Meter forward active total energy |
| | F2_southwest AC control | 1 | - | On/off status, set mode, set temperature, actual temperature, actual humidity |
| | F2_northwest AC | 83 | 30 | Meter forward active total energy |
| | F2_northwest AC control | 1 | - | On/off status, set mode, set temperature, actual temperature, actual humidity |
| | F2_1_LED | 13 | - | Temperature |
| | F2_west LED electricity | 129 | 30 | Meter forward active total energy |
| 1F middle | F2_east LED electricity | 20 | 30 | Meter forward active total energy |
| | F1_LED electricity | 77 | 30 | Meter forward active total energy |
| | Alarm | 27 | - | - |

Shanghai Daq-IoT Technology deployed an integrated "sensing - database - 3D visualization" data acquisition system at the training hall, connecting temperature/humidity, CO2, electricity, personnel flow and Hisense central-air-conditioning operating data to a serial server over RS485/network cable and then to the general industrial data acquisition system DAQ for IIOT, achieving second-level monitoring.

![](/images/cases/1780041832194270.png)

DAQ for IIOT meter data acquisition interface

![](/images/cases/1780041880181850.png)

![](/images/cases/1780041930194252.png)

![](/images/cases/1780042032175127.png)

Installation photos of the 8-port serial server

![](/images/cases/1780042148108861.png)

![](/images/cases/1780042225135604.png)

Installation photos of the combined temperature-humidity and CO2 sensors

![](/images/cases/1780042334599445.png)

Large-screen infrared temperature sensor installation

The general industrial data acquisition system judges abnormal data: it triggers a sound-and-light alarm after 10 s over-limit, writes fault codes to the database and performs reverse linked control of the sound-and-light alarm.

![](/images/cases/1780042423115644.png)

Sound-and-light alarm installation photo

By deploying air-conditioning control host software on the local host computer of the training hall, all Midea, Gree and Hisense central air conditioners can be remotely controlled individually or in bulk over the intranet — on/off, mode, temperature and fan speed. Commands reach the outdoor unit within 3 seconds, and operating status is written back to the database in real time by the general industrial data acquisition software and synchronized to the 3D large screen. Duty staff can complete a full set of operations such as "one-click power on, set 26 degC, low-fan operation" without going on site, achieving a safe closed-loop remote control over the intranet.

![](/images/cases/1780042539114031.png)

Air-conditioning control module installation

![](/images/cases/1780042696287357.png)

Air-conditioning operating-status monitoring

![](/images/cases/1780042756330438.png)

Large-screen display of air-conditioning operating status and fault alarm records

![](/images/cases/1780042955953712.png)

![](/images/cases/1780043072141473.png)

Air-conditioning host-computer control software

**4. Implementation Results**

![](/images/cases/1780043199654282.png)

After the system went live, the training hall achieved second-level sensing of environment, energy and air conditioners with 3-second remote temperature control; 10-second sound-and-light alarm on anomalies with automatic fault archiving; duty staff can complete bulk "26 degC, low fan" start/stop with one click; and the 3D large screen provides real-time visualization. Operating efficiency improved by 30%, laying the only real-time data foundation for safe training, precise energy accounting and digital twins.
