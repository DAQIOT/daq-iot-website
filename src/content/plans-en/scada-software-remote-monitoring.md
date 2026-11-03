---
title: "SCADA Software Data Acquisition and Remote Monitoring System"
summary: "The on-site industrial PC stays off the public network, while physical isolation and a local IoT module deliver secure data acquisition with remote monitoring from PC, web, mobile and WeChat."
---
Key advantage: the on-site industrial PC does not need public network access. Physical isolation plus a local IoT module deliver secure data acquisition and convenient remote monitoring from multiple terminals.

Overall System Architecture (Field Side → Cloud → Monitoring Side)

The system uses a three-layer architecture that separates functions and boundaries clearly to keep it secure and flexible. See the figure below.

![SCADA software data acquisition and remote monitoring system](/images/plans/scada-software-remote-monitoring/img-01.webp)

*Field Industrial PC Side (Data Source)*

Environment: runs on the local LAN, for example on the 192.168.0.0/24 subnet, with the address obtained by DHCP or configured statically (such as 192.168.0.1).

Core software: supports all mainstream SCADA software, SCADA and DCS systems (examples in the figure: WinCC®, iFIX, InTouch, ForceCon and others).

Role: acts as an OPC Server, providing real-time data services.

Key security design: the host system itself needs no internet access, achieving physical isolation.

Secure Acquisition and Transmission Module (the bridge)

Connection: linked by a standard network cable to the same local LAN as the field industrial PC.

Core function: acts as an OPC Client, actively and securely pulling data from the OPC Server on the industrial PC.

Network redundancy: the module itself supports 4G, wired broadband, WiFi and other ways of reaching the internet, which can be selected or configured for redundancy to suit site conditions.

High availability: the module design supports power and network redundancy for continuous 7x24 operation.

Secure Cloud Server (the hub)

Role: receives data uploaded by modules at each site, then processes, stores and distributes it centrally.

Function: provides a unified, secure data service and interface for remote monitoring terminals.

Remote Monitoring Side (application side)

Easy access: monitoring terminals need no fixed IP. Any remote PC or phone with internet access can connect.

Multiple monitoring channels:

Remote PC: runs the SCADA software directly for professional monitoring.

PC web page: web monitoring through a browser.

Mobile terminal: iOS and Android phone app monitoring.

WeChat integration: view data and receive push notifications in WeChat.

Intelligent alarm notification:

SMS alarms and dial-out reminders.

WeChat push of alarm messages.

Extension and service:

Standard Web service interface for secondary development and system integration.

Cloud storage service for historical data and alarm records.

## 2. Solution Highlights

High security: the production network is physically isolated from the internet, removing network attack risk at the source.

High reliability: module-level power and network redundancy keep the data link stable.

High flexibility: support for multiple SCADA software packages, multiple networking methods and multiple monitoring terminals.

Easy to use and maintain: remote terminals connect with zero configuration, and cloud data services plus development interfaces reduce deployment and O&M cost.
