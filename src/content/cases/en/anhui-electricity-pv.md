---
title: Anhui Electric Power PV Data (Meter / Inverter / Bay Controller) Acquisition Case
summary: Unified acquisition of State Grid meters, Modbus inverters and IEC104 bay controllers across distributed PV plants in Anhui.
image: ""
industry: PV & New Energy
order: 4
---

## Background & Requirements

Locations: Tianchang Chengtai, Hefei Changfeng Xin'ganxian, Chaohu Shengsansong and other distributed PV plants in Anhui. The customer's plants are widely dispersed; manual reading is costly and grid data cannot be effectively aggregated. Requirement: unified acquisition and visualization of PV meters, inverters and bay control terminals.

## Solution

Involves State Grid meters, Modbus inverters and IEC104 bay controllers. Meters use SC-GP-IR4G infrared acquisition; inverters and bay controllers are aggregated via 485 bus and acquired through IEC104 software and drivers (DAQ-GP-DPU104 communication manager), combining hardware and software.

## Implementation

On site, the bay controller communication port connects to the communication manager, with IEC104 points configured remotely. At Tianchang Chengtai (23 inverters) and Tianchang Huayi (30 inverters), devices are aggregated via 485 bus; the manager links by network port and reports to the cloud over 4G.

## Customer Value

Unified platform aggregation and remote monitoring of multi-protocol devices, with grouped views of meters, bay controllers and inverters showing energy, current, voltage and power at a glance.
