---
title: "Cleanliness Detector & Particle Counter Electronics Factory Monitoring Case"
summary: "Cleanliness Detector & Particle Counter — Electronics Factory Monitoring Project Case"
image: "/images/cases/1752739737650085.png"
industry: "智能制造"
order: 36
---
**Cleanliness Detector & Particle Counter — Electronics Factory Monitoring Project Case**

**1. Project Background**

An electronics factory in Zhuhai, Guangdong needed to detect particle concentration and temperature/humidity in the production workshop. Network cabling was available on site, so wired transmission was used and acquired data was stored locally for viewing.

**2. Technical Solution**

Because the customer required a relatively high particle measurement range and wired transmission, this project used our network-port high-precision cleanliness detector (DAQ-GP-CLXX-H series, Modbus protocol, temperature/humidity sensor as standard, pressure sensor optional), together with general industrial acquisition software deployed on a local server, storing data in a database at the customer's required acquisition frequency.

![](/images/cases/1752739737650085.png)

Network-port high-precision cleanliness detector

![](/images/cases/1752739784351562.png)

General industrial acquisition software

![](/images/cases/1752739844118761.png)

Technical solution topology

High-precision cleanliness detector specifications:

Particle detection parameters:
1. Particle detection range: 0.3-10 um
2. Resolution: 1 pcs/m3
3. Particle range: 10,000,000 particles/m3
4. Flow rate: 28.3 L/min
5. Error: <= +/-30%
6. Repeatability error: <= +/-10%
7. Self-cleaning time: <= 5 min
8. Calibration standards: JJF1190-2008, GB/6167-2007

Temperature and humidity parameters:
1. Interface type: 4-pin aviation connector
2. Range and accuracy: temperature range -20 to 60 degC, accuracy +/-0.3 degC (0-40 degC) and +/-0.5 degC outside that range; humidity range 0-100% RH, accuracy +/-3% RH (20-90%) and +/-5% RH outside that range.

![](/images/cases/1752739913163898.png)

Cleanliness detector point table

**3. Implementation Process**

1. The owner first installs the cleanliness detector at the locations to be monitored.

![](/images/cases/1752740009179704.png)

2. Provide a computer or local server able to run the general industrial acquisition software and reach the two detectors; our staff then installs and debugs remotely.

![](/images/cases/1752740099481438.png)

Device IP modified to ensure the acquisition software can reach it

3. Remotely configure the general industrial acquisition software.

![](/images/cases/1752740224997847.png)

![](/images/cases/1752740299186409.png)

Remote configuration of the acquisition software link and detection devices

![](/images/cases/1752740406622734.png)

Cleanliness detector device information being acquired

![](/images/cases/1752740482915285.png)

Because the owner requires a degree of data confidentiality, the database storage interface is not shown.
