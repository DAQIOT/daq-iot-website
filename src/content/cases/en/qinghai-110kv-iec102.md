---
title: Qinghai 110kV Substation Wasion IEC102 Energy Terminal Acquisition Case
summary: Custom IEC102 protocol driver converting Wasion WFET-3000 energy data to Modbus TCP for the upper computer.
image: ""
industry: PV & New Energy
order: 6
---

## Background & Requirements

Location: 110kV substation of Xiyu Nonferrous Metals, Golmud, Haixi Prefecture, Qinghai. Requirement: acquire the Wasion energy terminal (WFET-3000) whose internal protocol is IEC102.

Challenge: IEC102 has a complex structure (application & link layers), diverse data types and tedious details; it must be converted to Modbus TCP for the upper computer at low cost.

## Solution

Custom-developed an IEC102 acquisition driver. On site, our DAQ upper-computer software connects via serial port to the local server, points are configured and debugging performed; the Modbus TCP conversion is realized with the DAQ-GP-DPU102 communication manager.

## Customer Value

Successfully overcame complex IEC102 acquisition and delivered energy data to the upper computer, meeting the customer's energy monitoring needs.
