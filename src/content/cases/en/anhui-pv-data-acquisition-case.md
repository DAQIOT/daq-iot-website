---
title: "Anhui Energy PV Data Acquisition Case (Meters, Inverters, Box Transformer Monitoring Terminals)"
summary: >-
  Anhui Electric Power — PV Data (Meter, Inverter, Box-Type Substation Control Terminal) Acquisition Case
image: "/images/cases/1780294477902856.png"
industry: "光伏新能源"
order: 27
---
**Anhui Electric Power — PV Data (Meter, Inverter, Box-Type Substation Control Terminal) Acquisition Case**

**1. Project Background and Requirements**

Location: distributed PV stations including Tianchang Chengtai, Hefei Changfeng Xinganxian and Anhui Chaohu Sanshensong.

Background: several distributed PV stations of an Anhui electric power customer are spread over multiple provinces and regions, far apart. Manual data reading is costly and grid-connection data cannot be effectively counted or viewed. PV station generation data acquisition was needed, involving PV generation meters, PV inverters and box-type substation control terminals, with data from these devices collected and viewed on a unified platform.

Objective: acquire and remotely monitor PV generation data, covering State Grid protocol meters, Modbus protocol inverters and IEC104 protocol box-type substation control terminals — multiple protocols and interface types requiring a combination of devices.

![](/images/cases/1780294477902856.png)

![](/images/cases/1780294517170527.png)

Secondary equipment at the PV grid-connection cabinet

For State Grid protocol meters, our mainstream infrared acquisition product (SC-GP-IR4G) is used to acquire and display meter data separately. Depending on the site, the data of each station's inverters is aggregated over a bus to the grid-connection cabinet's box-type substation control terminal; that terminal uses the IEC104 protocol internally, and the data involved is the protocol's telemetry data (generation, current, voltage, power). For IEC104 acquisition, our IEC104 acquisition software and driver are used in a software-hardware combination (DAQ-GP-DPU104) to acquire the PV data.

**2. Technical Implementation**

With customer on-site cooperation and our DAQ communication management unit, the on-site box-type substation control terminal's communication interface is connected to our communication management unit; according to the supplied point table, IEC104 data point configuration and acquisition testing are debugged remotely.

![](/images/cases/1780294591484667.png)

![](/images/cases/1780294624963038.png)

Debugging process

For inverter data acquisition, based on the supplied IEC104 protocol description and point table of the box-type substation control terminal, acquisition was implemented after joint debugging. After successful protocol acquisition, IEC104 protocol acquisition is achieved with our communication management unit (DAQ-GP-DPU104); the networking is shown below.

![](/images/cases/1780294710574101.png)

Inverter data acquisition diagram

![](/images/cases/1780294826308799.png)

PV meter data acquisition diagram

**3. On-Site Installation and Data Integration**

On site, meters are acquired by adding an infrared meter-reading product to the infrared communication port, and the acquired data is transmitted to the supporting cloud platform.

![](/images/cases/1780294899185271.png)

PV meter implementation

Tianchang Chengtai PV station's 23 inverters and Tianchang Huayi PV's 30 inverters are all aggregated to the box-type substation control terminals over RS485 buses. The DAQ communication management unit connects to the box-type substation control terminals through a network port and reports to the cloud platform over 4G, completing inverter data acquisition.

![](/images/cases/1780294974326755.png)

![](/images/cases/1780295000834397.png)

![](/images/cases/1780295092139874.png)

On-site installation for box-type substation control terminal data acquisition

**4. Final Data Display**

Devices are grouped by category: meters in one group, with box-type substation control terminal and inverter data presented in separate groups. The customer mainly needs energy, current, voltage and power data. The results are as follows.

![](/images/cases/1780295235105284.png)

![](/images/cases/1780299928198493.png)

![](/images/cases/1780300010105327.png)
