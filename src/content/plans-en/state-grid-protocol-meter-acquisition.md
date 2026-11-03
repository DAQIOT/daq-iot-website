---
title: "State Grid Protocol Electricity Meter Data Acquisition Solution"
summary: "Electricity meter data is acquired by adding acquisition devices, transmitted over 4G/WiFi/Ethernet and sent remotely to a data platform, which can be our companion cloud platform (mobile app or web platform) or a third-party platform that the acquisition device pushes data to directly (the third-party platform must provide a public IP address and port number)."
---
Electricity meter data acquisition is achieved by adding acquisition devices. Meter data is collected and transmitted over 4G/WiFi/Ethernet and then sent remotely to the corresponding data platform. This platform can be our companion cloud platform (mobile app or web platform), or the data can be pushed directly to a third-party platform after the acquisition device collects it (the third-party platform must be able to provide a public IP address and port number).

Far-Infrared Acquisition Method;

1.1 Infrared One-to-One Acquisition (for meters that cannot be disassembled for wiring and that fall into the following meter categories)

a. For the meters to be acquired: 1. they must comply with State Grid protocols (614/645 protocol, 698 protocol); 2. they must have a far-infrared communication port (see the figure below)

![State Grid Protocol Electricity Meter Data Acquisition Solution](/images/plans/state-grid-protocol-meter-acquisition/img-01.webp)

![State Grid Protocol Electricity Meter Data Acquisition Solution](/images/plans/state-grid-protocol-meter-acquisition/img-02.webp)

*1.2 Acquisition Products.*

Hardware components: 1. infrared probe; 2. 4G/WiFi/Ethernet smart acquisition terminal; 3. 4G/WiFi suction-cup antenna; 4. power adapter (220 VAC to 12 VDC), as shown below:

![State Grid Protocol Electricity Meter Data Acquisition Solution](/images/plans/state-grid-protocol-meter-acquisition/img-03.webp)

1.3 Factors Affecting Installation and Implementation:
1) Whether the meter uses a State Grid protocol, whether it has an infrared communication port, and whether that port is far-infrared (near-infrared ports also exist; implementation is possible, but a different infrared probe is required).

Signal impact: the meter's environment, such as an underground distribution box (basement), affects 4G/WiFi signals (with no signal, transmission is impossible). For sealed sheet-metal boxes, the antenna must be extended and pulled outside.

Power supply: the site must provide either 220 VAC or 12 VDC.

The infrared probe should preferably be mounted flush against the infrared communication port. Where the meter cabinet cannot be opened, it can also be installed behind transparent glass. If there is no transparent glass and the probe cannot be mounted flush against the meter, infrared communication acquisition cannot be implemented.

![State Grid Protocol Electricity Meter Data Acquisition Solution](/images/plans/state-grid-protocol-meter-acquisition/img-04.webp)

*1.4 Solution Process:*

Parameter Requirements

The infrared meter reading terminal is a universal electricity meter reading terminal based on infrared communication, 4G/WiFi/Ethernet transmission and wide-range DC power supply. When the infrared communication port is not encrypted, it can acquire electrical parameter data such as energy data, voltage, current and power factor from meters using State Grid 645, 614 and 698 protocols (the 698 protocol does not include voltage, current or power data).

Brief principles of infrared meter reading: the infrared photoelectric probe periodically reads parameter information from the smart meter through the infrared optical port and uploads it. The infrared meter reader modulates and demodulates infrared signals. It modulates binary digital signals into a 38 kHz pulse train and drives an infrared emitting diode to send them as infrared light pulses. The transceiver converts the received light pulses into electrical signals, amplifies and filters them, and passes them to the demodulation circuit to recover the binary digital signals. After message parsing, the data is sent to the server in the specified format.

It is especially suitable for energy meter reading in PV power generation systems and for reading State Grid master meters at power supply bureaus that are fully lead-sealed, where no seal may be opened.

The technical parameter requirements are as follows:

Infrared carrier frequency: 38 kHz

Communication baud rate: 1200 to 115200 bps, adaptive to the electricity meter communication parameters

Infrared communication distance: ≤10 m

Communication angle: ≤15°

Infrared communication protocol: complies with IEC62056-21(IEC1107) and DL/T-645 698.45 protocol standards

SIM card: built into the device

Transmission: 4G/WiFi/Ethernet

Supports remote parameter configuration and FOTA remote upgrades.

Antenna type: suction-cup or rubber-duck external antenna (internal antenna optional)

Power supply: 12 V DC

Operating power consumption: less than 5 W

Operating environment: temperature −30 °C to 75 °C, humidity 0 to 95%

Free form of hardware connection to third-party platforms: TCP/UDP transmission protocols, JSON data format.
