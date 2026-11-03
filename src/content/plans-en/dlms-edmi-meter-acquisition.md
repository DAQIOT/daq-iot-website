---
title: "DLMS & EDMI Meter Data Acquisition (Gangxi PV Plant, Chongqing)"
summary: ""
---
## How Do You Crack DLMS & EDMI Meter Data Acquisition?

Shanghai Daq IoT Technology Co., Ltd.

Commercial and industrial PV grid-connection project · EDMI protocol meter data acquisition case study

Website:

## 1. Project background: a meter with a special protocol blocks data acquisition

### Project overview

• Location: Gangxi PV Plant, Chongqing (CGN Chongqing)

• Scope: energy monitoring for a grid-connected PV generation project

### Core challenge: how to acquire data efficiently from EDMI meters

![DLMS & EDMI Meter Data Acquisition (Gangxi PV Plant, Chongqing)](/images/plans/dlms-edmi-meter-acquisition/img-01.webp)

When an EDMI protocol meter (Mk6E) has to be monitored in real time, how do you do it without dismantling the meter or modifying any wiring?

### Implementation constraints

• Meter restrictions: on-site meters may not be opened or rewired

• Interface restrictions: only the optical (infrared) communication port is available

• Unusual protocol: not a standard State Grid protocol, which makes parsing difficult

• Clear requirements: low cost, minimal wiring, wireless transmission

## 2. Technical approach: reading through the infrared port to get past the protocol barrier

![DLMS & EDMI Meter Data Acquisition (Gangxi PV Plant, Chongqing)](/images/plans/dlms-edmi-meter-acquisition/img-02.webp)

*Core technical path*

An **infrared reading + 4G wireless transmission** solution matches the characteristics of the optical communication port on the EDMI Mk6E meter, with no need to open the meter or change any wiring.

### Solution components

• Hardware: SC-GP-IR4G 4G infrared meter reading device

• Software: general-purpose data acquisition software (DAQ FOR IIOT)

• Key accessory: near-infrared data acquisition probe

![DLMS & EDMI Meter Data Acquisition (Gangxi PV Plant, Chongqing)](/images/plans/dlms-edmi-meter-acquisition/img-03.webp)

*Technical advantages*

• Protocol support: the difficulty of reading and parsing the EDMI protocol has been fully resolved

• Easy installation: no meter dismantling — only the optical communication port is used

• Remote management: remote commissioning and configuration

• Data integration: MQTT + JSON standard format, compatible with the customer's platform

## 3. On-site implementation: how the deployment was completed quickly

![DLMS & EDMI Meter Data Acquisition (Gangxi PV Plant, Chongqing)](/images/plans/dlms-edmi-meter-acquisition/img-04.webp)

![DLMS & EDMI Meter Data Acquisition (Gangxi PV Plant, Chongqing)](/images/plans/dlms-edmi-meter-acquisition/img-05.webp)

*Implementation steps*

1. Mount the infrared probe.

## 2. Power the acquisition device on site

## 3. Commission and configure remotely

## 4. Integrate the data with the customer's platform

### Data transmission standard

• Protocol: MQTT

• Format: JSON with custom fields

• Bearer: 4G wireless network

## 4. Results: what data is now being acquired

### Key data points

• Total forward active energy

• Forward active energy by peak / flat / valley tariff period

• Total reverse active energy and energy by period

• Total forward reactive energy and energy by period

![DLMS & EDMI Meter Data Acquisition (Gangxi PV Plant, Chongqing)](/images/plans/dlms-edmi-meter-acquisition/img-06.webp)

*Project value*

✅ Infrared reading of EDMI protocol meters achieved

✅ No meter dismantling or rewiring — on-site modification kept to a minimum

✅ 4G wireless transmission, low cost and easy to deploy

✅ Real-time data monitoring that keeps the PV plant running efficiently

## 5. Service support: who to call for hard-to-read meters

### Shanghai Daq IoT

A specialist provider of IoT data acquisition solutions, focused on meters with unusual protocols and on industrial equipment data acquisition.

### Contact us

• Enquiries

• Website:

• Our promise: make data acquisition simpler.
