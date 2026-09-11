---
title: "Yanchang Petroleum Gas Production Plant OCR Recognition Data Acquisition Case"
description: "Project location: Yulin City, Shaanxi Province"
pubDate: "2025-05-12"
author: "DAQ-IOT"
image: "/images/posts/1747040076567102.png"
---
# I. Background & Requirements

**Project location**: Yulin City, Shaanxi Province

**Project parties**: Implemented by a Shaanxi engineering technology company; end users are Yanchang Gas Production Plant No. 2 and No. 3 under Yanchang Petroleum Group.

![](/images/posts/1747040076567102.png)

**Project requirement**: Collect data from pointer-type meters (pressure gauges and temperature gauges) and aggregate it into Yanchang Petroleum Group's intelligent safety-production management platform for unified monitoring and management.

**Pain points**: Across the gas transmission pipelines of Plant No. 2 and Plant No. 3, the meter points are complex and scattered, with varying locations. Under the normal production plan, pressure and temperature data at the corresponding pipeline points must be supervised at fixed times so that regulation can be carried out. Traditional manual reading and manual data entry cannot achieve real-time data supervision on the line. On the other hand, most pointer-type pressure gauges and temperature gauges have no communication interface at all. Even where an interface exists, wiring-based data acquisition is far too costly in explosion-proof applications.

![](/images/posts/1747040301969162.png)

![](/images/posts/1747040301779266.png)

![](/images/posts/1747040303279370.png)

Various pressure and temperature gauges on the gas transmission pipeline

![](/images/posts/1747040924193550.png)

Statistics of some of the points

**Solution evaluation**: Based on the existing requirements, meter data is acquired by adding an image-recognition acquisition device (--). The device is battery-powered and transmits wirelessly: after collecting the meter data it sends it to the backend.

# II. Acquisition Product

The data acquisition product matching these meters is our company's image-recognition photography product: **ultra-low-power wireless photo meter reader** and **photo recognition terminal** (--). Main parameters and functions:

![](/images/posts/1747040451129207.png)

![](/images/posts/1747040495809282.png)

# III. Implementation Process

## 3.1 Technical Solution

![](/images/posts/1747040532105173.png)

Topology diagram of the technical solution

A clip-on recognition terminal is mounted over each meter. It uploads data to the processing backend by means of photo recognition, with no on-site wiring required, which simplifies manual implementation costs. Data is transmitted wirelessly to the cloud platform. The platform provides a free interface for third-party platforms to call and integrate — either actively called by the third party, or pushed by our cloud platform.

![](/images/posts/1747040594192371.png)

![](/images/posts/1747040594174978.png)

On-site installation photos

![](/images/posts/1747040684920906.png)

![](/images/posts/1747040688603591.png)

##

Remote integration and debugging

## 3.2 Factors Affecting Installation

1) Confirmation of the meters to be read (suitable for mechanical water, electricity and gas meters, or for digital meters whose screen stays on and whose displayed page does not jump).

2) The size of the meter dial (whether the product can fully cover the dial) and its shape — whether it matches the square or circular product.

3) Single-line (single-pointer) data acquisition.

4) Acquisition frequency (the fastest frequency for battery-powered products is once every 10 minutes; 10 minutes to 24 hours is configurable. For high-frequency acquisition, e.g. once every 5 minutes, battery life must be considered and the device must be modified into an externally powered version).

5) Power supply: standard battery power (about 3,000 photo captures per battery charge); can be modified into an externally powered version.

6) Signal (the product normally has a built-in patch antenna; if the meter is in an enclosed environment, confirm whether the signal is affected and consider an external-antenna version).

# IV. Results — Data Platform Display

![](/images/posts/1747040822146037.png)

![](/images/posts/1747040822128753.png)

![](/images/posts/1747040822172983.png)

![](/images/posts/1747040823611933.png)
