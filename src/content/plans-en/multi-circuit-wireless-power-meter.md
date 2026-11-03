---
title: "Multi-Circuit Wireless Energy Monitoring Meter (Power Acquisition Terminal) Solution"
summary: "An on-site electrical parameter monitoring device — a multi-circuit current and voltage sensor — that works as a power acquisition terminal, capturing three-phase voltage, current, power and energy data for consumption monitoring."
---
![Multi-Circuit Wireless Energy Monitoring Meter (Power Acquisition Terminal) Solution](/images/plans/multi-circuit-wireless-power-meter/img-01.webp)

The on-site electrical parameter monitoring device (a multi-circuit current and voltage monitoring sensor) is a power acquisition terminal. It monitors and collects three-phase voltage, current, power and energy data, and serves energy consumption monitoring.

![Multi-Circuit Wireless Energy Monitoring Meter (Power Acquisition Terminal) Solution](/images/plans/multi-circuit-wireless-power-meter/img-02.webp)

![Multi-Circuit Wireless Energy Monitoring Meter (Power Acquisition Terminal) Solution](/images/plans/multi-circuit-wireless-power-meter/img-03.webp)

*1. Functions of the on-site electrical parameter monitoring device*

Data parameters to be collected. The on-site monitoring device must be able to collect the following basic data items: - **Three-phase current**: the current value in a three-phase circuit.

**Voltage**: the voltage value in the circuit.

**Total active energy**: the total electrical energy actually consumed by the equipment.

**Total reactive energy**: the total reactive power the equipment produces in the power system.

**Equipment power-off and power-on events**: a record of changes between loss of supply and normal supply.

**Fault and out-of-limit alarms**: an alarm is generated when the equipment faults or a parameter moves outside its configured range.

Acquisition methods

**Centralized acquisition**: the energy data concentrator can collect data from the monitoring devices on each branch circuit.

**Success rate requirement**: the monthly acquisition success rate must be no lower than 95%, ensuring data reliability and completeness.

**No direct reading of user data**: to prevent data tampering, data must not be read directly from the customer's on-site system.

**Real-time reporting of exceptions**: when a branch monitoring device detects an exception, fault or out-of-limit alarm, it immediately sends the data to the energy data concentrator.

Data storage

**Power-failure protection**: the energy data concentrator must provide power-failure protection so that no data is lost when the supply drops.

**Export methods**: data can be exported to a magnetic disk, USB drive or memory card, or through dedicated software.

**Storage capacity**: at least one year of historical data must be retained.

**Data security**: data security must be guaranteed throughout acquisition, transmission and use.

Clock error

**Clock accuracy requirement**: the clock error must not exceed ±0.5% within 48 hours. This keeps every recorded timestamp accurate for later analysis and auditing.

Implementation topology

## 3. Solution advantages

1) Completeness: power usage is monitored across the board, which helps identify abnormal consumption patterns or equipment problems.

2) Preventive maintenance: collecting power-off and power-on events together with fault alarms gives early warning of possible failures and reduces the risk of unexpected outages.

3) High reliability: a high acquisition success rate means more reliable data.

4) Security: avoiding direct reads from the customer's system improves data transmission security and prevents unauthorized access or modification.

5) Flexibility: acquisition frequency can be adjusted to suit different applications and management needs.

6) Immediate response: problems are reported as they occur, so corrective action comes sooner and risk is lower.

Durability: long-term data retention allows long-term trend analysis and a better understanding of consumption patterns.

7) Recovery: important data survives a power interruption.

8) Compliance: data security meets the relevant regulatory requirements and strengthens corporate credibility.

9) Ease of use: multiple export formats simplify downstream processing and reporting.

10) Accuracy: strict clock accuracy keeps every recorded timestamp correct, which matters for event reconstruction and fault diagnosis.

11) Synchronization: time stays consistent across sites, which is essential for coordinated operation of distributed systems.

These requirements are intended to ensure the accuracy, reliability and security of data in the electrical parameter monitoring system, and to give solid support to power management and monitoring.
