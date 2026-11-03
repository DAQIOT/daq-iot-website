---
title: "Automated Intranet Reading of Mechanical Roller Gas Meters (Vision Recognition)"
summary: "Many industrial sites still run mechanical roller-type gas meters. Manual reading is slow, never real time and prone to misreading, which is hard to reconcile with modern energy management."
---
## How Do You Automate Intranet Reading of Mechanical Roller Gas Meters? A Field-Proven Approach

Many industrial sites still run mechanical roller-type gas meters. Manual reading is inefficient, far from real time and prone to misreading, so it struggles to meet the needs of modern energy management. In an isolated plant intranet in particular, automating gas meter data collection and feeding it into an energy management platform calls for a strongly localized solution. This article shares a complete, field-proven method for automated reading of mechanical roller gas meters by image recognition inside the plant intranet — a practical approach for industrial sites with a stable internal network.

## 1. Defining the core requirements

The solution was designed for four mechanical roller gas meters on an isolated industrial intranet. The requirements covered data acquisition, protocol integration and platform integration:

![Automated Intranet Reading of Mechanical Roller Gas Meters (Vision Recognition)](/images/plans/mechanical-gas-meter-internal-ocr/img-01.webp)

![Automated Intranet Reading of Mechanical Roller Gas Meters (Vision Recognition)](/images/plans/mechanical-gas-meter-internal-ocr/img-02.webp)

Automatically collect the live readings of the meters' mechanical counters instead of copying them by hand;

Package the collected data for integration over Modbus TCP;

Feed the data into the company's existing energy management platform through a standardized interface for centralized display and analysis.

## 2. Solution architecture

The solution follows a localized architecture of hardware capture, intranet recognition and platform integration. Everything is deployed inside the customer's intranet to keep data secure while automating the whole workflow. It consists of three parts.

### (1) Hardware: high-definition explosion-proof cameras capture the meter face

![Automated Intranet Reading of Mechanical Roller Gas Meters (Vision Recognition)](/images/plans/mechanical-gas-meter-internal-ocr/img-03.webp)

A customized high-definition network explosion-proof camera (SC-GP-CAMLANEX) serves as the acquisition terminal, with a lens selected for the actual mounting distance and rated for the explosion-proof and dust-proof requirements of the site;

The camera is fixed on a bracket and the shooting angle is adjusted precisely so the meter face is unobstructed and sharply imaged;

The camera connects directly to the customer's intranet over Ethernet and captures two high-definition images of the meter face per minute, providing the raw material for recognition.

### (2) Recognition: an intranet vision appliance parses the readings

An all-in-one image recognition appliance is deployed on the customer's intranet, running the meter recognition software developed in-house by Shanghai Daq IoT Technology Co., Ltd.;

![Automated Intranet Reading of Mechanical Roller Gas Meters (Vision Recognition)](/images/plans/mechanical-gas-meter-internal-ocr/img-04.webp)

The software embeds the core recognition algorithms: it receives the high-definition images from the camera and automatically reads and interprets the digits on the mechanical roller in real time;

It converts the image information into structured numeric data — the essential step from "image" to "data" — and supports recognition parameter settings and outlier filtering to improve accuracy.

### (3) Platform integration: standardized data pushed to the energy management platform

The recognized numeric data is packaged in a standardized Modbus TCP/IP format;

It is transmitted over an encrypted intranet channel and pushed reliably to the customer's energy management platform server;

The acquired data is thus seamlessly integrated with the upper-level energy management platform, where it is displayed, analyzed and used for consolidated reporting, bringing gas meter data under intelligent control.

## 3. On-site installation and commissioning

The customer carried out the on-site hardware work with remote guidance from our engineering team. The overall process is simple and consists of hardware installation and software commissioning.

### (1) On-site hardware installation

Fix the explosion-proof camera bracket at the planned position, mount the camera and adjust the shooting angle until the meter face is sharply imaged. Connect the camera to the customer's intranet switch over Ethernet, complete the wiring and network access, and verify that image capture works.

### (2) Commissioning the local recognition software

This is the key step for accurate recognition. The software is configured through a visual interface:

Data source: add the camera's intranet IP address (for example 192.168.1.82/84/85), configure the register address and data type (for example long_abcd), and connect the camera to the software;

Recognition template: select "digital meter" as the meter type, enable the region tool, draw a box around the roller reading on the meter face and save the region of interest; preprocessing and digit parameters can then be tuned to optimize the algorithm;

Application parameters: enable outlier filtering and adjust recognition sensitivity to the site to reduce false readings;

Recognition test: run single-image and batch tests and check the results (for example, boiler #3 gas meter read as 09828593 and boiler #2 gas meter as 28248702). Once the readings are confirmed accurate, save the configuration and the software starts recognizing automatically.

## 4. Core software features and results

The meter recognition software used here is deployed locally and designed for intranet environments. It is complete, easy to operate and delivers clear results in practice:

Real-time recognition and data logging: the software reads the meter face at the camera's capture rate and automatically logs the timestamp, original image, recognition result and data source of every record, which can be queried by time, meter name or data source;

![Automated Intranet Reading of Mechanical Roller Gas Meters (Vision Recognition)](/images/plans/mechanical-gas-meter-internal-ocr/img-05.webp)

Large-volume storage: recognition records are stored long term. In this project a single meter produced more than ten thousand records within a short period (18,187 records in total, paginated at 20 per page), with support for re-recognition and configuration export;

High accuracy: parameter tuning and outlier filtering reliably read mechanical roller digits and avoid misreads caused by lighting or shooting angle, meeting the accuracy industrial sites require;

Lightweight operation: the interface is clean and configuration is visual. No algorithm expertise is needed — site staff can operate and maintain it after a short briefing.

## 5. Integration with the energy management platform

Once pushed to the customer's existing energy management platform over Modbus TCP/IP, the recognized gas meter data is seamlessly merged and put to intelligent use:

The platform displays the current reading and historical trend curve of every gas meter in real time, replacing manual meter logs and improving both timeliness and accuracy;

The platform can run consumption analysis, trend forecasting and exception alerts on the collected gas data, helping the company manage energy in a more granular way;

All transmission and processing stay inside the intranet, which protects the company's industrial data and removes the security risk of sending it over the public internet.

## 6. Summary of advantages

This intranet vision-based automated reading solution for mechanical roller gas meters removes the drawbacks of manual reading and fits the core requirements of industrial intranet environments:

Localized deployment, secure and reliable: all hardware and software sit inside the customer's intranet and data never leaves it, meeting industrial data security requirements;

Automated acquisition, higher efficiency: manual transcription is replaced by acquisition twice a minute, giving real-time data and a large gain in reading efficiency;

Accurate recognition, low error rate: dedicated meter recognition algorithms with individually tuned parameters read mechanical roller digits precisely and cut recognition error;

Quick to deploy, highly adaptable: bracket mounting and Ethernet connection make installation simple, while visual configuration keeps the learning curve short; lenses and settings adapt to different mounting distances and meter types;

Standardized integration, seamless fit: support for the mainstream Modbus TCP/IP industrial protocol allows direct connection to the existing energy management platform with no large-scale changes to legacy systems, keeping implementation cost down.

The solution suits any industrial site with a stable intranet that uses mechanical roller gas meters — boiler rooms, production shops, energy stations and similar facilities. It can be replicated directly, helping companies upgrade conventional meters and move toward more granular, digital energy management.
