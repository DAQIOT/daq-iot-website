---
title: "SMT Factory Image Recognition Case"
summary: "SMT Factory Image Recognition Case"
image: "/images/cases/1735631303172244.png"
industry: "智能制造"
order: 32
---
**SMT Factory Image Recognition Case**

![](/images/cases/1735631303172244.png)

SMT workshop photo

![](/images/cases/1735631320187937.png)

Workshop photo

As shown above, this is an SMT factory in Yiwu, Zhejiang. The placement machine's host software has a numeric display interface showing the machine's operating-status data. The project required acquiring equipment operating-status data and uploading it to the MES system over MQTT.

The surveyed equipment list is below:

![](/images/cases/1735631320152464.jpg)

To obtain the placement machine's operating data and integrate it with the MES system, the machine manufacturer would have to be contacted to open an authorization, at a high fee — an estimated RMB 50,000-100,000.

![](/images/cases/1735631391203425.png)

Photo of the workshop SMT equipment host computer

Therefore, to reduce the customer's implementation cost, we chose a screen-recognition solution — a compromise of timed screen capture and recognition of the software interface data on screen, using our dedicated instrument-recognition software.

![](/images/cases/1735631391189185.png)

Screen recognition software interface

As shown, the screen values are recognized and uploaded in the required MQTT protocol and JSON format to the MES system. This solution avoids the hassle of protocol integration, at only about one tenth of the authorization fee.

![](/images/cases/1735631420106383.png)

MQTT protocol data upload debugging interface
