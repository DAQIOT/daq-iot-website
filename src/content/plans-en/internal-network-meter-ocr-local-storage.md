---
title: "Intranet Vision Recognition and Local Data Storage for Industrial Meters"
summary: "Cameras in front of the gauges read gas, flow and pressure meters without contact, keeping every image and every record inside the plant network and off the public internet."
---
Gas, flow and pressure meters in chemicals, energy, manufacturing and other industries generate highly sensitive data: process parameters, equipment operating status, core production information. A leak can cause a safety incident or an economic loss. Organizations therefore impose strict controls — acquired data may not touch the public network and may only move inside the plant intranet. The approach below acquires images without contact, recognizes the readings automatically and writes them to a designated database.

![Intranet Vision Recognition and Local Data Storage for Industrial Meters](/images/plans/internal-network-meter-ocr-local-storage/img-01.webp)

## 1. Core Workflow

1. Image acquisition. Device setup: a high-definition intranet camera (explosion-proof models available) is mounted on a bracket in front of the gauge panel, with the shooting angle perpendicular and the view unobstructed. The camera pairs a high-resolution sensor with an infrared fill-light module to handle different lighting conditions. Scheduled capture: images are taken at a preset interval, with a response down to one second, completing high-definition acquisition. In dark conditions the fill light keeps the image sharp.

2. Data transmission. Transmission: WiFi or Ethernet cameras send images to the local server in real time, encrypted in transit. Edge computing handles compression, denoising and other preprocessing before transmission, which reduces server load and improves system response.

3. Data recognition. Image processing: Daq IoT's dedicated meter recognition software runs on the server and preprocesses each incoming image — grayscale conversion, binarization, edge detection — to bring out the digit area on the dial. The required region is drawn and then recognized.

4. Data management and display. Local storage: (1) recognized structured data is written to the designated database (MySQL / SQL Server); (2) it can be sent to a specified software platform in real time through a socket interface (TCP/UDP, HTTP and MQTT supported); (3) it can be output over Modbus RTU or Modbus TCP. Display: the system connects smoothly to SCADA, MES and other industrial systems, so meter status can be monitored remotely in real time and anomalies found early; structured data in the local database supports fast multi-dimensional queries and historical traceability.

## 2. Application Case

Long-distance gas meter acquisition: site view and recognition results

![Intranet Vision Recognition and Local Data Storage for Industrial Meters](/images/plans/internal-network-meter-ocr-local-storage/img-02.webp)

![Intranet Vision Recognition and Local Data Storage for Industrial Meters](/images/plans/internal-network-meter-ocr-local-storage/img-03.webp)

![Intranet Vision Recognition and Local Data Storage for Industrial Meters](/images/plans/internal-network-meter-ocr-local-storage/img-04.webp)

![Intranet Vision Recognition and Local Data Storage for Industrial Meters](/images/plans/internal-network-meter-ocr-local-storage/img-05.webp)

![Intranet Vision Recognition and Local Data Storage for Industrial Meters](/images/plans/internal-network-meter-ocr-local-storage/img-06.webp)

The local recognition solution keeps processing on site. With data security assured, it delivers intelligent acquisition and use of industrial meter data, giving energy management and industrial monitoring a reliable data foundation.
