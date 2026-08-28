---
title: Rail Transit Distributed PV Data Acquisition Case
summary: Deployed SC-GP-IR4G wireless infrared meters across multiple Shanghai rail transit bases for remote meter reading and generation statistics.
image: https://www.daq-iot.com/static/upload/image/20240724/1721803688639000.png
industry: PV & New Energy
order: 1
---

## Background & Requirements

The project is located in Shanghai, covering distributed PV data acquisition at multiple rail transit bases including Jiangyang North Road, Yinheng, Jiuting, Jiading Circuit, Beidi, Jianchuan Road, Pingzhuang and Fujin Road. Wireless meter reading devices were installed on the State Grid meters inside PV metering cabinets to enable remote reading and platform reporting.

Requirement: collect and aggregate data from the PV cabinet meters, produce monthly station generation statistics, and eliminate manual calculation through platform reports. Since November 2023, a technology company acted as implementation & O&M partner, while our company (DAQ-IOT) supplied the SC-GP-IR4G infrared meter data acquisition products and the supporting platform.

## Solution

Adapted to State Grid protocols (645/698) using infrared acquisition. The SC-GP-IR4G wireless infrared reading terminal is based on infrared communication, 4G wireless transmission and wide-range DC power supply. It acquires energy, voltage, current and power factor from State Grid meters (645 & 698) and sends parsed messages to the server as JSON over 4G.

## Implementation Notes

- Works with meters that have an infrared port; can be installed through transparent glass.
- When 4G signal is weak (e.g. underground cabinets), the antenna must be pulled outside.
- On-site power: 220VAC or 12VDC.

## Customer Value

Stable operation since November 2023, enabling remote reading and generation statistics, removing manual meter reading, and ideally suited to sealed State Grid master meters that cannot be opened.
