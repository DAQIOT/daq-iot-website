---
title: "RS485 Infrared Communication Transceiver Meter Reading Optical Probe"
summary: >-
  SC-GP-IR485 infrared meter reading transceiver is a general-purpose infrared meter reading optical probe for electricity and gas meters, launched by Shanghai DAQ IoT Technology Co., Ltd., based on infrared communication, RS485 tra…
image: "/images/products/1692778671764410.jpg"
order: 226
category: "instrument-acquisition"
hidden: false
---
**Product Details**

# 1 Overview

![](/images/products/1692778072105379.png)

![](/images/products/1692778098130978.png)

SC-GP-IR485 infrared meter reading transceiver is a general-purpose infrared meter reading optical probe for electricity and gas meters, launched by Shanghai DAQ IoT Technology Co., Ltd., based on infrared communication, RS485 transmission and wide DC voltage power supply. It can collect electrical parameter data such as energy, voltage, current and power factor from State Grid electricity meters.

Brief introduction to the infrared meter reading principle: the infrared optical probe periodically reads the parameter information of the smart meter through the infrared optical port and uploads it. The infrared meter reader has the function of infrared signal modulation and demodulation: it modulates a binary digital signal into a pulse sequence at a frequency of 38KHz and drives an infrared emitting diode to send it out in the form of infrared light pulses; the transceiver converts the received light pulses into electrical signals, which after amplification and filtering are sent to the demodulation circuit to be demodulated back into a binary digital signal. After message parsing, it is sent to the server in a specified format (such as JSON).

This product supports meter reading scenarios for various meters with infrared communication interfaces, such as electricity meters, gas meters and flow meters. It is suitable for electricity meter data acquisition, smart city data acquisition, power monitoring data acquisition, energy-saving and emission-reduction data monitoring systems, energy consumption monitoring systems, PV systems, intelligent monitoring, robots, smart security systems and cloud platform systems; and for electricity meter calibration and testing benches. It is especially suitable for meter reading when the main meter of a State Grid electricity meter is in a completely sealed state with no seal allowed to be opened.

# 2 Ordering Specifications & Model Selection

![](/images/products/1692857422187426.png)

# 4 Product Features

Wire sequence definition — **Red**: +12V, **Black**: GND, **Yellow**: 485A, **White**: 485B

Note: for the 24V power supply version, please contact us for customization.

**Cable length:** 1 m

**Acquisition characteristics**

- Infrared carrier frequency: 38 kHz

- Communication baud rate: 1200~115200 bps, adaptive according to the electricity meter communication parameters

- Communication distance: ≤10 m

- Communication angle: ≤15 degrees

- Infrared communication protocol: transparent transmission

**Electrical characteristics**

- Power supply: 5~12V DC (with power line reverse connection protection)

- Operating power consumption: less than 0.5W

- Transmit power consumption: 20~50mA @ 12V

**Communication characteristics**

- Transmission mode: RS485 transparent transmission

- Baud rate: 1200~115200bps, adaptive

**Structural characteristics**

- Material: ABS plastic (housing)

- Protection rating: IP64

- Main body dimensions: 48mm × 37mm × 15mm

- Installation: adhesive / magnetic attachment

**Operating environment**

- Temperature -30°C ~ 75°C, humidity 0 ~ 95%

**Storage environment**

- Temperature -40°C ~ 90°C, humidity 0 ~ 95%

# 5 Core Advantages

- Infrared non-contact acquisition, without affecting the meter itself

- Compact size

- Simple installation and rapid deployment, helping IoT projects go live quickly

- Several meter reading debugging software tools and electricity meter communication protocol documents are provided free of charge

# 6 Free Meter Reading Debugging Software

Three meter reading debugging software tools are provided free of charge:

![](/images/products/1692778144977881.png)

State Grid concentrator electricity meter debugging software

![](/images/products/1692778170670892.png)

Multi-function electricity meter communication protocol debugger

![](/images/products/1692778190201068.png)

DL/T645-2007 multi-function electricity meter communication protocol debugging

Document provided: DLT645-2007 Multi-function Electricity Meter Communication Protocol 2010.pdf

Software download: follow the WeChat official account "数采物联" (DAQ-IOT), enter the product materials menu, and download the relevant materials.

# 7 Application Cases

![](/images/products/1692778220487552.png)

![](/images/products/1692778237130169.png)

Industrial park 10kV metering cabinet electricity meter data acquisition

In this case, battery power is used to collect the electricity meter data of a 10kV metering cabinet in an industrial park. The acquisition frequency is once every 2 hours, and the electricity meter data is sent to a remote server via GPRS to realize energy monitoring in the park.

# 8 Notes

Simply align the infrared emitting/receiving port with the infrared device to be communicated with. During communication, ensure the communication distance and tilt angle are within the technical requirements, otherwise the communication effect will be seriously affected.
