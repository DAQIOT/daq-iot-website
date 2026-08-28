---
title: C&I PV Grid-Connected EDMI Protocol Meter Acquisition Case
summary: Solved acquisition of EDMI (Mk6E) meters that cannot be opened and only expose an infrared port, with low-cost wireless real-time monitoring.
image: https://www.daq-iot.com/static/upload/image/20240701/1719816777146873.png
industry: PV & New Energy
order: 2
---

## Background & Requirements

Location: Chongqing Gangxi PV plant (CGN Chongqing). For PV grid-connected energy monitoring, the goal was to acquire data from EDMI-protocol meters (Mk6E) and monitor PV generation effectiveness in real time.

Challenge: low cost, simple wiring and wireless transmission; the on-site meters cannot be opened for wiring and only expose an external optical (infrared) communication port.

## Solution

In the office, our universal data acquisition software (DAQ FOR IIOT) and a near-infrared probe were used together for testing to overcome protocol parsing. Based on the mainstream State Grid 4G infrared meter reader SC-GP-IR4G adapted to EDMI meters, data is acquired via infrared, transmitted over 4G, supports remote configuration, and is pushed to the customer's own platform.

## Implementation & Integration

On site, the probe was fixed, the device powered, and remote debugging performed to acquire the EDMI meter data. Following the MQTT protocol with specified JSON fields, data is integrated into the customer's platform where total energy and other meter data are displayed.

## Customer Value

Successfully solved acquisition of non-State-Grid, non-openable, infrared-only meters, achieving low-cost wireless real-time monitoring and remote debugging.
