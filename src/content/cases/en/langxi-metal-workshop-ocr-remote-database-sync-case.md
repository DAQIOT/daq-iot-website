---
title: "Langxi Metal Surface Treatment Workshop Industrial Instrument OCR & Remote Database Sync Case"
summary: >-
  Langxi Metal Surface Treatment Workshop — Industrial Instrument Visual OCR Recognition with Remote Database Synchronous Storage
image: "/images/cases/1783409488101511.png"
industry: "智能制造"
order: 46
---
**Langxi Metal Surface Treatment Workshop — Industrial Instrument Visual OCR Recognition with Remote Database Synchronous Storage**

**1. Project Background**

Langxi Delong Metal Surface Treatment Co., Ltd. is a specialist producer of metal surface treatment (electroplating, pickling and passivation, electroless plating). The workshop line has a dedicated bath-process monitoring instrument cabinet with 16 channels of core process instruments on its panel (pH meter, ORP meter, conductivity meter, dosing-pump frequency controller), monitoring the plating bath parameters online around the clock — core equipment for ensuring workpiece coating quality, process stability and production compliance.

Previously, on-site data management relied on manual periodic transcription: workshop inspection staff copied the values of 16 instruments at fixed times, recorded them on paper and then manually entered them into the company management system before submitting to head office. Data timeliness was poor and O&M manpower cost high, which was not conducive to process optimization, parameter trend analysis or equipment maintenance traceability.

![](/images/cases/1783409488101511.png)

Monitoring instrument cabinet

**2. Technical Solution**

For this metal surface treatment workshop instrument cabinet, based on the local machine-vision image recognition technology of Shanghai Daq-IoT Technology (DAQ-IOT), this project achieves automatic recognition and data validation of the 16 on-panel instrument values and uploads them in real time for remote storage to the SQL Server 2019 database at the group head office in another province. This replaces the traditional manual meter reading and manual entry with unattended acquisition and unified archiving of production-line process data.

![](/images/cases/1783409574141561.png)

**3. Implementation Process**

1. Preliminary on-site survey and hardware selection

A precise on-site survey was completed: the actual size of each of the 16 instrument display areas and the overall panel size were determined, and the optimal camera installation distance and shooting angle were calculated. On this basis the corresponding camera resolution and lens focal length were matched, ensuring a clear, distortion-free screen image with complete digits for visual recognition.

![](/images/cases/1783409666301143.png)

The cabinet size is 50 x 60 cm.

![](/images/cases/1783411319364356.png)

![](/images/cases/1783411365151075.png)

2. On-site equipment and software installation and debugging

An industrial camera is fixed to photograph the instrument cabinet panel in real time, adapting to the workshop's lighting and dust environment.

![](/images/cases/1783409902688560.png)

![](/images/cases/1783410014187702.png)

Adjustable-focus Wi-Fi timed photography camera (DAQ-GP-CAMWIFI)

![](/images/cases/1783410093117065.png)

Timed photo capture

Local visual recognition: the installed local image recognition software frames the data in the photos transmitted by the camera and, using a dedicated digital OCR algorithm, precisely extracts the screen values of the 16 points to complete data acquisition.

![](/images/cases/1783410189105838.png)

![](/images/cases/1783410260497055.png)

![](/images/cases/1783410323153636.png)

![](/images/cases/1783410646178251.png)

Local image recognition debugging process

![](/images/cases/1783410723137974.png)

Recognition result list

3. Data upload and storage

Remote database deployment (head office):

- Log in to the head-office server and connect to the SQL Server service;
- Create a new tiot database and tiot data table;
- Create a dedicated database user and assign CRUD permissions;
- Configure an ODBC data source connection to open the link between the local site and the head-office database.

![](/images/cases/1783410837177763.png)

![](/images/cases/1783410939190914.png)

System configuration and go-live:

- Modify the database connection parameters in the configuration file DialRecognCfg.ini;
- Start the recognition service, which automatically writes the instrument recognition results with timestamps and device numbers into the head-office data table in a standard data structure in real time, achieving long-term data retention and traceable queries.

![](/images/cases/1783411026193019.png)

Photo of the recognition results stored in the remote database

![](/images/cases/1783411080186072.png)

SQL for writing recognition results to the database

**4. Project Results**

This eliminates the reading errors and human omissions of manual meter reading and entry, improving the authenticity and timeliness of process data. It achieves fully automatic, uninterrupted acquisition of production-line parameters, with all subsidiary production data stored uniformly in the head-office database, meeting the enterprise's needs for data archiving, production traceability, subsequent data analysis and digital management.
