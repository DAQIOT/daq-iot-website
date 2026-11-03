---
title: "Infrared Acquisition of DL/T 645 Meter Data with IEC 104 Forwarding"
summary: "Accurate acquisition and efficient transmission of meter data are essential in intelligent power management; this solution reads State Grid meters that follow DL/T 645 and DL/T 698 over infrared and converts the data to IEC 104 for seamless integration and remote monitoring."
---
Accurate acquisition and efficient transmission of meter data are essential in intelligent power management. This solution reads State Grid meters that follow the DL/T 645 and DL/T 698 protocols over infrared and converts the data to IEC 104, enabling seamless integration of power data and remote monitoring.

![Infrared Acquisition of DL/T 645 Meter Data with IEC 104 Forwarding](/images/plans/infrared-dlt645-iec104-gateway/img-01.webp)

![Infrared Acquisition of DL/T 645 Meter Data with IEC 104 Forwarding](/images/plans/infrared-dlt645-iec104-gateway/img-02.webp)

*1. Overview*

As power systems grow and become more intelligent, meter data must be acquired and transmitted in real time. DL/T 645 and DL/T 698 are the standard protocols widely used for electricity meter communication in China, while IEC 104 is a telecontrol protocol common in power automation systems. Converting between the two integrates power data resources more effectively and improves the operating efficiency and management level of the power system.

## 2. DL/T 645 and DL/T 698 State Grid Meters and Infrared Acquisition Technology

(1) Introduction to the DL/T 645 and DL/T 698 Protocols

DL/T 645 specifies the physical connection, communication link and application layer protocol for data exchange between electricity meters and data terminal equipment, and applies to all types of electronic electricity meters. DL/T 698 builds on DL/T 645 and supports more functions and application scenarios, such as remote tariff control and two-way interaction, providing strong support for smart grid construction.

(2) Advantages and Applications of Infrared Acquisition

Infrared acquisition is non-contact, easy to install and low in cost, which makes it widely used for on-site meter data acquisition. Through the infrared interface, the acquisition device communicates with the meter and reads data such as energy, voltage, current and power.

## 3. Why Conversion Is Needed and What Makes It Difficult

(1) The Need

System integration: many power automation systems use IEC 104 for data transmission and monitoring. Converting State Grid meter data to IEC 104 enables seamless integration between systems and simplifies unified management and monitoring.

Remote monitoring and control: IEC 104 supports remote communication. Once meter data is converted to this protocol, meters can be monitored and controlled remotely in real time, raising the intelligence level of the power system.

(2) The Challenges

Large protocol differences: DL/T 645 and DL/T 698 differ substantially from IEC 104 in data format, communication mechanism and function definition, so conversion is complex.

Data accuracy and completeness: the conversion must preserve the accuracy and completeness of meter data and avoid loss or corruption, which places high demands on the conversion algorithm and device stability.

4. Implementing Infrared Acquisition of DL/T 645 and DL/T 698 State Grid Meter Data and Conversion to IEC 104

(1) Hardware

Infrared acquisition module: communicates with State Grid meters over infrared and reads meter data accurately. The module is highly compatible and stable, and works with meters of different models.

Protocol conversion gateway (communication management unit): the Daq IoT communication management unit shown in the figure is the core device for protocol conversion. It has strong processing capability and abundant interfaces, receives data from the infrared acquisition module and converts it to IEC 104 format. It also supports several communication methods such as Ethernet and serial ports, so converted data can be sent to a remote monitoring system. It handles conversion between multiple protocols, including Modbus RTU, Modbus TCP, EDMI, IEC 103, HJ212 and DLMS.

![Infrared Acquisition of DL/T 645 Meter Data with IEC 104 Forwarding](/images/plans/infrared-dlt645-iec104-gateway/img-03.webp)

*(2) Implemented Functions*

Data parsing and extraction: meter data obtained by the infrared acquisition module is usually binary data encapsulated in DL/T 645 or DL/T 698 format. The device parses this data and extracts key information such as energy, voltage and current.

Protocol conversion algorithm: the extracted meter data is re-encapsulated and encoded according to IEC 104, including the frame header, data field and check code, with meter data mapped to the corresponding fields. Details such as data type conversion and byte order adjustment must be handled correctly so that the converted data conforms to the IEC 104 specification.

Data buffering and transmission: to keep data continuous and complete, the device can buffer converted IEC 104 data and then transmit it to the remote monitoring system through the communication interface at set intervals or on trigger conditions. Error detection and retransmission during transmission ensure reliable delivery.

Network topology implementation diagram

![Infrared Acquisition of DL/T 645 Meter Data with IEC 104 Forwarding](/images/plans/infrared-dlt645-iec104-gateway/img-04.webp)

*5. Application Case and Results Evaluation*

(1) Application Case

To monitor and manage the many State Grid meters in its service area centrally, a power company adopted the infrared acquisition and protocol conversion approach described above. Infrared acquisition modules were installed at each meter site, and the communication management units converted the data to IEC 104 and connected it to the company's power automation monitoring system.

(2) Results Evaluation

Data accuracy: in testing and comparison, the converted data matched the original meter data exactly, preserving the accuracy of power metering.

System integration: State Grid meter data was successfully integrated with the company's existing power automation system, data is now displayed and analyzed in one place, and overall management efficiency has improved.

Remote monitoring capability: with IEC 104 remote communication, monitoring staff can view meter data in real time, spot anomalies promptly and act on them, improving the reliability and stability of the power system.

## 6. Conclusion

Acquiring data from State Grid meters that follow DL/T 645 and DL/T 698 over infrared and converting it to IEC 104 is an effective route to intelligent power data management. Careful hardware selection and software design overcome the differences between protocols and deliver accurate acquisition, efficient conversion and reliable transmission. The approach has real value in the intelligent upgrade and remote monitoring of power systems, with broad prospects for further development.

As power technology continues to evolve, acquisition and conversion performance must be optimized further, and system compatibility and scalability improved, to meet the future needs of power systems.
