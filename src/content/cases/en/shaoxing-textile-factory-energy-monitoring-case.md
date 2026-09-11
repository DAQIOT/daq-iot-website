---
title: "Shaoxing Textile Printing & Dyeing Factory Energy Monitoring - Water, Electricity, Gas & Power Efficiency Case"
summary: >-
  Shaoxing Textile and Printing-Dyeing Factory Energy-Consumption Monitoring Project — Water, Electricity, Gas and Power-Efficiency Monitoring Terminal Acquisition
image: "/images/cases/1735629923700881.png"
industry: "智能制造"
order: 31
---
**Shaoxing Textile and Printing-Dyeing Factory Energy-Consumption Monitoring Project — Water, Electricity, Gas and Power-Efficiency Monitoring Terminal Acquisition**

**1. Project Background and Requirements**

Location: Zhejiang Shaoxing Jinxianghui Textile Printing and Dyeing Factory.

Shaoxing Jinxianghui Textile Printing & Dyeing Co., Ltd. was founded in May 2007 (originally Shaoxing County Jinxianghui Textile Printing & Dyeing Co., Ltd.) and is located at 1688 Zhenghai Road, Ma'an Street, Keqiao District, Shaoxing. It specializes in the dyeing and finishing of various textile fabrics.

Background: energy-consumption monitoring at a printing and dyeing plant.

To achieve in-plant energy statistics with real-time monitoring of water, electricity and gas data, the plant needed data acquisition from electricity meters, water and gas meters and power-efficiency monitoring terminals — especially for mechanical water meters with no external communication interface and for State Grid protocol meters whose RS485 interface is occupied or whose meter is lead-sealed. The goal was low-cost acquisition with simple wiring and wireless transmission.

**1.1 Remote Real-Time State Grid Meter Data Acquisition**

![](/images/cases/1735629923700881.png)

Plant meters

**1.2 Visual Acquisition of Industrial Water and Gas Meter Data**

![](/images/cases/1735629943134197.png)

Gas meter

![](/images/cases/1735629989162022.png)

Industrial water meter

**1.3 Power-Efficiency Monitoring Terminal Data Acquisition**

![](/images/cases/1735630022208756.png)

Power-efficiency monitoring terminal

This device is brand Linyang, model TLY2565, supports the 645 protocol, can be read through an RS485 interface and needs 4G transmission to the customer platform.

**2. Technical Solution**

**2.1 Meter Acquisition**

Our flagship 4G infrared meter-reading product (SC-GP-IR4G) is used, reading via the meter's infrared communication port and transmitting over 4G to the customer platform — non-invasive installation and acquisition.

![](/images/cases/1735630003163469.png)

Meter acquisition solution

**2.2 Water and Gas Meter Acquisition**

Plant industrial water and gas meters are read with a micro-power wireless photo meter reader (SC-LP-CAM), using OCR recognition, with data transmitted to the platform.

![](/images/cases/1735630004399589.png)

Water and gas meter acquisition solution

**2.3 Power-Efficiency Monitoring Terminal Acquisition**

The TLY2565 power-efficiency monitoring terminal supports 485 communication; the RS-485 interface protocol can be configured to support DL/T645.

![](/images/cases/1735630048127274.png)

![](/images/cases/1735630068102967.png)

Power-efficiency monitoring terminal acquisition solution

**3. On-Site Implementation and Installation**

**3.1 Meter Data Acquisition**

Meter acquisition is relatively simple: aim the 4G infrared meter-reading probe at the meter's infrared communication port and fix it, then power up the acquisition device; after remote protocol debugging the meter data is acquired in real time and pushed to the customer platform. An ordinary worker can install it, greatly reducing labor cost.

On-site note: the supplied suction-cup antenna must be placed in an open position to avoid a closed environment affecting 4G signal transmission.

![](/images/cases/1735630069128546.png)

On-site installation of the 4G infrared meter reader

**3.2 Water and Gas Meter On-Site Acquisition**

The micro-power wireless photo meter reader is placed directly over the water or gas meter and fixed with a cable tie or 3M adhesive; the photo frequency is set and data is transmitted periodically to the platform for recognition. This device is explosion-proof, battery-powered and low-power, making it suitable for gas-meter installation.

![](/images/cases/1735630110827892.png)

![](/images/cases/1735630126620210.png)

On-site installation of the micro-power wireless photo meter reader

**3.3 Power-Efficiency Monitoring Terminal Data Acquisition**

![](/images/cases/1735630159670038.png)

![](/images/cases/1735630182209461.png)

On-site collector installation wiring diagram

The terminal provides an RS485 interface, and its communication protocol supports DL/T 645. It connects to our 4G acquisition module through a 485 twisted-pair cable, and after remote protocol debugging data is acquired and pushed over 4G to the customer's designated third-party cloud platform.

**4. Third-Party Data Push Format**

Our 4G devices can push data directly to third parties, with free TCP/UDP transmission and JSON data format by default. The format received by the customer server is shown below.

![](/images/cases/1735630200209309.png)

![](/images/cases/1735630213174432.png)

**5. Partial Instrument List of the Park**

![](/images/cases/1735630234633634.png)
