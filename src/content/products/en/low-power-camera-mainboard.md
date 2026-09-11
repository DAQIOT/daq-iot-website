---
title: "Low-Power Camera Mainboard"
summary: >-
  This mainboard uses an LTE Cat.1 bis communication module and is powered by a 3.6-4.2V lithium battery with a built-in chip antenna. It is mainly intended for battery-powered scenarios in which a camera photographs a dial to read…
image: "/images/products/1788167858655832.png"
order: 248
category: "wirelesstimingphotography"
hidden: false
---
**Product Details**

## Mainboard Overview

![](/images/products/1788167858655832.png)

![](/images/products/1780993550170981.png)

This mainboard uses an LTE Cat.1 bis communication module and is powered by a 3.6-4.2V lithium battery with a built-in chip antenna. It is mainly intended for battery-powered scenarios in which a camera photographs a dial to read its parameters.

## Functions

- 4G full-network compatibility
- Low-power active sleep
- 300,000-pixel photo capture and remote transmission
- Built-in flash
- Acquisition parameters configurable through a cloud platform (after a theoretical accumulation of 200 devices)
- Periodic sleep with timed wake-up
- External-trigger wake-up
- Timed image push over HTTP

## Interfaces

The mainboard provides the following X2.54 connectors:

- Battery power input

The interface diagram is shown below:

![](/images/products/1780993580350280.png)

## Operating Logic

1. Update and save the configuration on the platform
2. Wake up the device
3. The device automatically pulls the updated configuration
4. Restart
5. Connect to the network -> on success -> take a photo -> upload to the cloud
6. On completion, sleep and wait for the next cycle (automatic task interval: in minutes)

Sleep parameter configuration:

It is recommended to use a value within 1 hour that is a multiple of 5, or a multiple of 60 minutes.

In this way the mainboard actively aligns the timing, making the reporting times more presentable from a business perspective.

For example, if the sleep parameter is set to 10 minutes, the device wakes up and starts working at 0, 10, 20, 30, 40 and 50 minutes of every hour.

Indicator logic:

1. During network connection the indicator blinks rapidly; on success it stays on; on failure it turns off, the device sleeps and retries after 10 minutes.
2. After data is reported the indicator blinks, then the device sleeps.
3. The indicator only blinks on restart or wake-up. By default it does not blink, to save power.

## Power Consumption Test

Scenario 1:

One acquisition every 5 minutes, sleeping immediately after each acquisition, 12 acquisitions in total, then reporting (one network report per hour).

Using a 1 uA low-power Hall element.

24-hour power consumption monitoring is shown below:

![](/images/products/1780993632127146.png)

Scenario 2:

One acquisition every 5 minutes, sleeping immediately after each acquisition, 12 acquisitions in total, then reporting (one network report per hour).

Using a 3 uA low-power Hall element.

** If Hall wake-up is removed, sleep power consumption can be controlled within 3 uA.

30-hour power consumption monitoring is shown below:

![](/images/products/1780993668188221.png)

## Technical Specifications

| Item | Description |
| --- | --- |
| CPU | Cortex M3 @ 204MHz, 16KB ICache |
| Flash | Nor Flash 4MB |
| RAM | PSRAM > 1Mb |
| Supported bands | LTE-FDD: B1/B3/B5/B8; LTE-TDD: B34/B38/B39/B40/B41 |
| Transmit power | LTE-FDD: Class3 (23dBm +-2dB); LTE-TDD: Class3 (23dBm +1/-3dB) |
| LTE features | Up to non-CA CAT1; 1.4-20MHz RF bandwidth; LTE-FDD: max uplink 5Mbps, max downlink 10Mbps; LTE-TDD (UL/DL config 1): max uplink 4Mbps, max downlink 6Mbps; LTE-TDD (UL/DL config 2): max uplink 2Mbps, max downlink 8Mbps |
| Power supply | 3.3V ~ 4.3V, typical 3.8V |
| Temperature range | Normal operating: -35 degC to +70 degC; extreme operating: -40 degC to +85 degC |
| RoHS | All components fully RoHS compliant |
| Hall element | 1 uA - 4 uA standby power consumption |

## Camera Parameters

| Item | Description |
| --- | --- |
| Driver | GC032A |
| Lens | 5 cm object distance, 130-degree lens |
| Resolution | 640 x 480 |
| Image format | JPEG |

## Power Consumption

| Item | Value |
| --- | --- |
| Sleep / standby | < 10 uA |
| Normal operation | 100-600 mA |

## Customization

The following customizations are supported:

- Hall wake-up or mechanical switch (button) wake-up
- Specified enclosure design
