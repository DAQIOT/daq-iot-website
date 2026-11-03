---
title: "OCR Data Acquisition for Analog Gauges at an Oil & Gas Field"
summary: "Oil and gas production and transmission sites still rely heavily on analog pressure and temperature gauges. With no communication port, widely scattered locations and strict explosion-proof requirements, manual reading is slow, lags behind and introduces error. How can this data be acquired automatically, at low cost and with high safety?"
---
## No Communication Port, No Cabling — How OCR Solved Data Acquisition at an Oil & Gas Field

Oil and gas production and transmission sites still rely heavily on analog (dial-type) pressure gauges and temperature gauges. These instruments generally have no communication port, are scattered across remote locations and must meet strict explosion-proof requirements, while manual reading is inefficient, lags behind and carries significant error. How do you achieve fully automatic, low-cost and highly safe data acquisition and remote monitoring? Shanghai Daq IoT's OCR-based image recognition solution, built for the Yanchang Petroleum gas production plants, provides a proven, replicable answer.

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-01.webp)

*1. Project background and pain points*

The project was delivered in Yulin, Shaanxi Province, for Gas Production Plants No. 2 and No. 3 of the Yanchang Petroleum Group. The goal was to acquire data automatically from the many scattered analog pressure and temperature gauges along the gas transmission pipelines and feed it into the group's intelligent safety management platform for remote supervision, real-time control and intelligent analysis.

The pain points on site were stark:

Gauge locations across the plants are complex and widely dispersed, so manual reading cannot deliver timeliness or continuity;

Many of the instruments are analog and have no communication port, so they cannot connect directly to a digital system;

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-02.webp)

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-03.webp)

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-04.webp)

In explosion-proof areas, conventional cabling is difficult, expensive and a serious safety risk, which puts ordinary data acquisition approaches out of reach.

## 2. Core product and technical advantages

To address these industry-wide difficulties the project uses a micro-power wireless photographic meter reader (SC-LP-CAM) as the acquisition device. Combining battery power, NB-IoT wireless transmission and cloud-based OCR, it delivers cabling-free installation, fast deployment and dependable acquisition. The product is designed for legacy mechanical instruments and meters without a communication port, supports scheduled photography, remote parameter configuration and automatic data upload, and is built for harsh industrial environments.

Key advantages:

Ultra-low power, long battery life: a 3.6 V long-life lithium battery with standby current below 5 μA supports roughly 3,000 captures — at one capture per day that is up to seven years of operation;

Rugged enough for the field: IP65 protection, operating range −25 °C to 75 °C, suitable for outdoor, high/low temperature and high-humidity conditions;

Accurate, dependable recognition: OCR accuracy above 99%, with the original image retained so every reading can be traced and verified;

Quick, safe installation: a T-bolt clamp mount that does not damage the gauge, needs no hot work or cabling and does not interrupt production;

Open integration: a built-in NB-IoT SIM with API/MQTT support for third-party platforms.

## 3. Implementation approach and key points

### (1) Technical workflow

Fit the gauge with a clamp-on OCR recognition terminal;

Photograph the dial at the configured interval;

Transmit the image wirelessly to the cloud for OCR processing;

Push the data to the group's intelligent management platform in real time.

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-05.webp)

No cabling, no production shutdown and no modification of the existing instruments are required. The installation is quick and causes minimal disturbance on site, fully satisfying the explosion-proof and safety requirements of oil and gas facilities.

### (2) Site adaptation

Suits single-needle pressure gauges and temperature gauges;

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-06.webp)

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-07.webp)

*The capture interval is remotely configurable from 10 minutes to 24 hours;*

An external antenna can be added for enclosed spaces;

A version with an external power supply is available where high-frequency capture is needed.

## 4. Project results

Once live, Gas Production Plants No. 2 and No. 3 had 24-hour automatic acquisition of pipeline pressure and temperature data, real-time remote monitoring and one-click upload to the platform. Manual reading — with its delays, missed readings, transcription errors and low efficiency — was eliminated, and both the timeliness and accuracy of the data improved markedly.

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-08.webp)

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-09.webp)

For a very small retrofit investment, the solution replaced costly cabling and instrument replacement, sharply reduced manual O&M cost and met the oil and petrochemical industry's rigid requirements for explosion protection, safety and stability. It gives the group a reliable foundation for safe production, intelligent dispatch and data analysis.

![OCR Data Acquisition for Analog Gauges at an Oil & Gas Field](/images/plans/oil-gas-field-pointer-gauge-ocr/img-10.webp)

*5. Where the solution applies*

The approach is not limited to gas production plants. It can be replicated widely for upgrading analog instruments in oil and gas, chemicals, gas utilities, water and district heating — and is particularly well suited to legacy plants where instruments have no communication port, where explosion-proof ratings are mandatory and where cabling is impractical. It is currently one of the most cost-effective and fastest ways to digitize data acquisition on an industrial site.
