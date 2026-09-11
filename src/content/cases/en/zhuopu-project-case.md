---
title: "Zhuopu Project Case"
summary: "Zhuopu Project Case"
image: "/images/cases/1780044230192141.png"
industry: "智能制造"
order: 42
---
**Zhuopu Project Case**

Automotive Production Line Trolley Displacement Safety Monitoring System

**1. Project Background**

A Shandong automotive factory's production line uses a conveyor belt plus trolley working mode, with 14 trolleys carrying complete vehicles and parts through the line. During production each trolley must maintain a safe relative distance (30 mm) from the vehicle; exceeding this may cause the vehicle to fall, damage equipment and injure personnel. Traditional manual monitoring has delayed response, large errors and no real-time warning, so an automated, high-precision displacement monitoring system was needed to achieve closed-loop management of "real-time monitoring - over-limit warning - emergency line stop - risk elimination - operation resumption".

**2. Project Requirements**

Using wireless laser ranging technology, monitor the relative displacement state of the 14 trolleys in real time. When the safe distance is exceeded, the software must issue an alarm while a physical sound-and-light alarm sounds and the production line conveyor belt is cut off, eliminating the risk of the vehicle falling due to excessive trolley displacement, ensuring stable line operation and raising production safety control.

**3. Solution Architecture**

**3.1 Hardware Deployment and Functions**

(1) Laser ranging module deployment: a Wi-Fi router is placed on site to form a local LAN, and battery-powered Wi-Fi laser sensors are installed at the front of each of the 14 trolleys. The sensor's monitoring range is 0-500 mm, precisely acquiring the relative distance between trolley and vehicle. The acquired data is transmitted to a local computer over the Wi-Fi intranet, ensuring stable, real-time transmission.

(2) RFID zone-identification module: one RFID reader is installed at each end of the conveyor belt, and each trolley has an RFID identification card installed on the same side as the laser sensor. When a trolley enters the designated monitoring zone, the RFID readers at both ends read the card and feed back a "trolley entered monitoring zone" signal to the host computer, which starts ranging monitoring; when the trolley leaves the zone, the system pauses ranging for that trolley to avoid interference from invalid data.

(3) Safety-control execution devices: one 485 alarm lamp is installed on site; when any trolley's measured distance exceeds the 30 mm safety threshold, it receives a command from the host computer and triggers a sound-and-light alarm to alert on-site staff promptly. One 485 relay is installed, linked with the conveyor belt control system; when the threshold is exceeded it receives a host-computer command to cut the conveyor belt power for an emergency line stop, preventing the risk from spreading.

(4) Host-computer software functions — data acquisition and safety control: the software receives distance data from the 14 Wi-Fi laser sensors in real time over Wi-Fi and automatically compares it with the 30 mm safety threshold. When data exceeds the threshold it immediately performs three actions: (a) trigger the 485 alarm lamp sound-and-light alarm; (b) control the 485 relay to cut the conveyor belt power; (c) pop up the alarm trolley number and over-limit distance value in the software interface, so on-site staff can quickly locate the problem trolley.

One-click control: One-click start activates monitoring for all online trolleys — sensors resume data acquisition, RFID readers start zone identification and the system enters normal monitoring. One-click sleep turns off non-essential functions such as laser sensor data acquisition and RFID identification and switches devices to low-power mode, preventing the battery from being too low after long standby, ensuring the devices work properly at the next start and eliminating missed measurements caused by power loss.

Visual interface: the software's large-screen interface uses a zoned design to clearly show key information.

- Trolley status zone: the numbers (1-14) of the 14 trolleys, whether each is currently in the monitoring zone, and the real-time value of the distance to the safety threshold (in mm).
- Device status zone: relay status, alarm lamp status and RFID card identification status.
- Alarm information zone: real-time display of the alarm trolley number, over-limit distance and alarm time; after the alarm is cleared, historical data is automatically recorded and traceable.

Fault recovery and data logging: after on-site staff eliminate the risk, clicking the "Clear fault" button in the software interface automatically restarts ranging for that trolley; after staff confirm safety they can click "Resume operation" and the conveyor belt resumes. The software automatically records all alarm events and device operating-status data to form a historical ledger, queryable and exportable by time, trolley number and other conditions, supporting production management and equipment maintenance.

(5) Solution architecture diagram

![](/images/cases/1780044230192141.png)

**4. Implementation Process**

![](/images/cases/1780044321112676.png)

![](/images/cases/1780044380169196.png)

![](/images/cases/1780044604165791.png)

![](/images/cases/1780044724119406.png)

**5. Debugging and Results**

![](/images/cases/1780044950160991.png)

On-site industrial PC

![](/images/cases/1780045095204545.png)

System display page

![](/images/cases/1780045305107641.png)

Device management

![](/images/cases/1780045406778974.png)

Port management

![](/images/cases/1780045549201612.png)

Add device
