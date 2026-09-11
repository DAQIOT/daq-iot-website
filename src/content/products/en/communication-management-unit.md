---
title: "Communication Management Unit"
summary: "1 Product Overview"
image: "/images/products/1714360078902228.jpg"
order: 250
category: "plcacquisition"
hidden: false
---
**Product Details**

**1 Product Overview**

![](/images/products/1744268498133811.png)

![](/images/products/1714100730110294.jpg)

![](/images/products/1726732652159013.png)

The IOT Gateway is an industrial protocol-conversion data-acquisition gateway from Shanghai Daq-IoT Technology. It supports Modbus to MQTT+JSON conversion and can connect to a cloud server over MQTT. Configured through a graphical interface, it independently acquires data from Modbus meters and DLT645 smart electricity meters and uploads it to a cloud server in JSON format. It can also work as an ordinary transparent-transmission serial server and Modbus gateway. It provides one Ethernet port and RS232/485/422 serial ports.

2 Ordering Specifications and Selection

![](/images/products/1692950215131586.png)

4 Product Parameters

4.1 Electrical Characteristics

Power supply: 9-24V wide voltage (center positive, standard power socket; two-wire terminal)

Operating power consumption: less than 5W

4.2 Communication Characteristics

Communication protocol: MQTT/TCP/UDP/HTTP/Modbus RTU; other protocols can be customized

4.3 Structural Characteristics

Dimensions: L x W x H = 9.4 cm x 6.5 cm x 2.5 cm

4.4 Operating Environment

Temperature: -40 to 85 degC

5 Core Advantages

- Simple installation and fast deployment, helping IoT projects go live quickly
- Compatible with any IoT cloud platform or SCADA configuration software, with data-protocol integration provided
- Supports mainstream cloud platforms such as Alibaba Cloud
- Supports multiple external sensors

6 Data Reporting Communication Protocol

6.1 Protocol Parsing

Data can be pushed in several ways, including UDP/TCP/MQTT/HTTP; the user provides the server IP address and port for data reception.

Example of a JSON data message (the exact format depends on the device being acquired):

```
{"ID":"866714044842879","XXX":3456.71}
```

Message parsing:

```
{
"XXX": 3456.71,             // acquired physical quantity
"ID": "860344048491162"     // device ID
}
```

6.2 Protocol Reception Test

Reception can be tested with the network debugging assistant NetAssist.

6.3 Protocol Customization

To customize other communication protocols, please contact our sales team.
