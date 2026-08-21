---
title: Industrial GPS NTP Time Server | Multi-GNSS Network Time Synchronization System (UTC Precision Clock)
summary: >-
  ⚙️ Product Specifications
image: /images/products/1755072189227191.png
order: 28
category: plcacquisition
---
# 1 **Product Overview**

DAQ- GP- CKS timing service system is a high-precision time synchronization device launched by Shanghai Shucai IoT Technology Co., Ltd. This product adopts surface mount technology and high-speed chip control, and has the characteristics of high precision, high stability, low accumulated error and strong environmental adaptability .

The NTP network time server can receive satellite timing signals such as GPS, Beidou, GLONASS, Galileo and QZSS, and can provide highly stable first-level clock synchronization signals based on UTC standard time and self-perfection monitoring. It adopts closed-loop control timekeeping technology. The system has a self-learning function and obtains the aging drift and other characteristics of the high-stable constant temperature crystal oscillator. Even if the satellite signal is interrupted or an interference failure occurs, it can still output accurate time synchronization signals within a certain period of time to achieve high-precision timekeeping. The device provides a variety of interface forms (including RS232, RS422/485, IRIG-B (DC/AC), TTL pulse, differential pulse, open contact pulse, NTP network synchronization, etc.), supports interface expansion and multi-channel second, minute, and hour pulse output (the format can be flexibly converted), which is convenient for one-way or two-way communication with various types of equipment. It can be widely used in power systems, network synchronization, communications, traffic management, national defense and other fields. It is easy to operate, cost-effective, and supports unattended operation .

# 2 **Service Concept**

**Our company solemnly promises:**

You buy not only the product, but also the meticulous and thoughtful technical support service **! ! ! (** =^_^= **)**

This product only needs ordinary workers to connect the power and install it on site! No debugging is required!

We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.

Free IoT solution consulting services!

# 3 **How it works**

This product adopts modern closed-loop control timekeeping theory and Kalman digital filtering technology, and uses an external time reference to control the constant temperature crystal oscillator or rubidium clock. The 1PPS signal output by the system is obtained by dividing the internal clock source, so that the output 1PPS signal is synchronized with the long-term stable value of the 1PPS signal output by the external time reference, overcoming the influence caused by the jump of the second pulse signal of the external time reference. Therefore, the output time signal is not only synchronized with the external time reference signal but also more stable. The closed-loop control timekeeping technology is adopted. The system has a self-learning function and automatically memorizes the drift characteristics of the constant temperature crystal oscillator such as aging. Even if the reference signal of the timing module is interrupted or an interference failure occurs, it can still output accurate time synchronization signals and frequency standard signals within a certain period of time to achieve high-precision timekeeping.

# 4 **Product Features**

##  4.1 **GNSS********Satellite receiver**

Reception type: Beidou/GPS/GLONASS

Timing accuracy: ≤30ns,

Tracking sensitivity: ≤-160dBm,

## 4.2 **IRIG-B (DC) input**

Hardware Interface: 2 road RS422/485 (optical fiber input optional ),

Synchronization error : ≤200ns,

## 4.3 **IRIG-B (DC) output**

Hardware interface: 5-way RS422/485 (optical fiber output optional),

Synchronization accuracy : ≤200ns,

## 4.4 **NTP********Timing output**

Hardware interface: 1 road RJ45 Electrical port (multiple channels can be expanded ),

Timing accuracy ： 0～10ms（Typical 1ms ）

Throughput : ≥4000 Times/second

## 4.5 **1PPS********/****1PPM empty contact**

Interfaces: 5 Road and empty contact,

Synchronization error : ≤3us,

External voltage : ≤220VDC,

Current : ≤20mA

## 4.6 **Environmental characteristics**

Working temperature : 0℃~+50℃,

Storage temperature : -30℃~+70℃ ,

Relative humidity : ≤90% (40°C)

## 4.7 **Power supply**

AC/DC : 220V±10%, 50Hz±5%,

Power less than 30W (dual power supply redundant configuration optional)

# 5 **Features**

High cost performance and wide application;

High timing accuracy;

Completely guarantee data security, all settings can be One network segment or different network segments, supporting multiple Popular time publishing protocols;

A variety of timing interface outputs, which can be freely combined. A maximum of 120 groups of timing interfaces can be output simultaneously;

The overall power consumption is small, it adopts fanless design, and it runs reliably and stably.

# 6 **Precautions**

Beidou/ GPS signals cannot penetrate buildings, mountains and obstacles. When choosing the installation location of the antenna, you should follow

The following standards:

1) The antenna should be placed on a platform, away from electronic devices such as elevators, air conditioners or other electrical appliances.

2) The antenna should be as unobstructed as possible in the horizontal field of view.

3) The unit surface on the antenna platform may generate reflected signals, which will reduce the reception performance.

4) The antenna should be located at least 4 meters away from any metal objects.

5) The distance between the two antennas should be at least 3 meters.

Note: The following should be taken into consideration when installing the antenna:

1) High power radar signals shining directly on the antenna may affect the antenna's preamplifier.

2) High-power broadcast transmitters generate carrier frequency harmonic signals in the MHz range (1.6 GHz) which may cause

Receiver blocked.

3) When installing an antenna under high-voltage lines, be especially careful not to touch these lines to avoid damaging the antenna.

Lines and equipment.

4) Antenna system grounding and coaxial cable introduction protection.

5) In addition to considering location and installation factors, in order to avoid voltage inrush and electrostatic discharge, the grounding system should

Consider. Ground wire specifications and installation should follow local building requirements and telecommunications engineering grounding specifications. Minimum

The diameter of the ground wire is 2.5 to 3 mm. Note: The antenna system grounding cannot be connected to the air conditioner, motor, water pump motor, etc.

The ground conductors connected to the antenna should be connected together, otherwise they will introduce noise into the antenna system.

A separate grounding system is necessary.

# 7 **Typical Applications**

It is widely used in electricity, transportation, communication, finance, national defense and other fields that require time synchronization and punctuality.

**❓ NTP Time Server FAQ – Industrial GPS Network Time Synchronization System**

**1\. What is an NTP Time Server?**

An NTP (Network Time Protocol) Time Server is a device that provides accurate and synchronized time to all connected devices in a network. It ensures that computers, PLCs, SCADA systems, and industrial equipment operate with the same UTC-based time reference.

**2\. How does a GPS NTP Time Server work?**

A GPS NTP Time Server receives precise time signals from satellite systems such as GPS or other GNSS networks. It then distributes this accurate time over a network using the NTP protocol or via hardware interfaces such as IRIG-B and pulse outputs.

**3\. What is the accuracy of an industrial NTP time server?**

Industrial-grade NTP time servers typically provide microsecond to millisecond-level accuracy, depending on system configuration, GNSS signal quality, and network conditions.

**4\. What is the difference between NTP, GPS time, and IRIG-B?**

GPS time: Time received directly from satellite signals

NTP time: Time distributed over Ethernet/IP networks

IRIG-B: Hardware-based time code used in substations and power systems

These three methods are often used together in industrial time synchronization systems.

**5\. Can an NTP time server work without GPS signal?**

Yes. Most industrial NTP time servers include a holdover function using a high-stability oscillator (OCXO/TCXO). This allows the system to maintain accurate time temporarily even if GNSS signals are lost.

**6\. Where are NTP time servers commonly used?**

NTP time servers are widely used in:

Power substations and smart grids

Renewable energy systems (PV and wind farms)

Telecom base stations

Industrial automation systems

Transportation and railway systems

Data centers and IT networks

**7\. How many devices can connect to an NTP time server?**

A single industrial NTP time server can typically support hundreds to thousands of network clients, depending on system capacity and network design.

**8\. What communication interfaces are supported?**

Industrial NTP time servers may support:

Ethernet (NTP/SNTP over IP network)

RS232 / RS485 serial interfaces

IRIG-B (AC/DC) time code output

TTL or pulse outputs

Optional Modbus or custom protocols

**9\. Is the NTP time server suitable for power substations?**

Yes. It is widely used in substation automation systems to ensure accurate synchronization between protection relays, SCADA systems, and control equipment.

10\. Can the system be integrated into SCADA or EMS platforms?

Yes. NTP time servers are fully compatible with SCADA, EMS, and other industrial monitoring systems through Ethernet, Modbus, or standard network protocols.

**11\. What happens if GNSS signals are interrupted?**

When GNSS signals are interrupted, the system enters holdover mode and continues generating accurate time using its internal high-stability oscillator until satellite signals are restored.

**12\. Is customization available for industrial projects?**

Yes. OEM/ODM customization is available, including:

Custom interfaces (IRIG-B, RS485, etc.)

Protocol integration

Hardware design adjustments

Project-specific firmware functions
