---
title: "Inner Mongolia Tongliao Kailu Wind Turbine Centralized Monitoring & Cloud Data Acquisition Case (IEC104)"
summary: >-
  Wind Turbine Centralized Data Acquisition and Cloud Monitoring Case in Kailu County, Tongliao, Inner Mongolia (IEC104)
image: "/images/cases/1735630682991188.png"
industry: "光伏新能源"
order: 23
---
**Wind Turbine Centralized Data Acquisition and Cloud Monitoring Case in Kailu County, Tongliao, Inner Mongolia (IEC104)**

**1. Project Background and Requirements**

The project is located in Kailu County, Tongliao City, Inner Mongolia, a Goldwind wind-power project. Data from four wind turbine generator sets — No. 1 and No. 2 in Minzhu Village, No. 3 in Yangxiufeng Village and No. 4 in Hongsheng Village — needed to be monitored and uploaded to the cloud. The turbine data had already been integrated into a centralized-control server and output as the IEC104 protocol. While the turbine data is displayed at the original project central-control center, mobile monitoring and viewing were also required, achieving monitoring of turbine operating status and cloud data acquisition.

Requirement: acquire IEC104 protocol data from 4 turbine sets and display it on a cloud platform.

![](/images/cases/1735630682991188.png)

![](/images/cases/1735630689203475.png)

**2. Wind Turbine Data Acquisition**

**2.1 Set Information**

![](/images/cases/1735630721102170.png)

![](/images/cases/1735630727167071.png)

The four turbine sets are distributed across three centralized-control servers; acquisition and parsing are implemented according to the IEC104 protocol point table.

**2.2 Data Acquisition Implementation Process**

IEC104 protocol data from the turbine sets is acquired and uploaded to the cloud over 4G. The acquisition product used is our communication management unit with general management software. Hardware includes: communication host, power adapter, 4G suction-cup antenna, etc.

![](/images/cases/1735630733667516.png)

Implementation network topology

On site, the centralized-control server and the communication management unit are connected through a wired network port; acquisition is implemented with the bundled general management software according to the point table and server IP address information.

![](/images/cases/1735630749921695.png)

![](/images/cases/1735630786177360.png)

On-site installation

Remote debugging configuration software is used for point-table acquisition testing, achieving local data acquisition, successfully acquiring turbine data and verifying data correctness. For turbine operating status, analog values (0-9) represent transitions between the turbine's eight actual operating states. After successful conversion, this is configured for cloud platform display (simultaneously shown on the mobile App).

![](/images/cases/1735630839168887.png)

Local software acquisition display

![](/images/cases/1735630848132583.png)

![](/images/cases/1735630848118084.png)

Turbine status analog values

![](/images/cases/1735630881659667.png)

![](/images/cases/1735630887580867.png)

Turbine status analog values converted to actual states

**3. Platform Data Acquisition Results**

![](/images/cases/1735630928106440.png)

![](/images/cases/1735630955214711.png)
