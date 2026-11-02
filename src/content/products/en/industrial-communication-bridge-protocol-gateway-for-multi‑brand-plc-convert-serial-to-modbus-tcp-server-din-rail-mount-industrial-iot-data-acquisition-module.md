---
title: Industrial Communication Bridge Protocol Gateway for Multi‑brand PLC
  Convert Serial to Modbus TCP Server DIN Rail Mount Industrial IoT Data
  Acquisition Module
summary: >-
  Industrial communication bridge (bridge) supports industrial equipment
  networking. It auto-detects point lists and collects data from PLC, CNC,
  instruments via Ethernet for analysis.

  This manual is sorted by supported device types.
image: /images/图片1英文.png
order: 0
category: plcacquisition
docs: []
---
#### **Product classification selection table**

Industrial communication bridge (hereinafter referred to as bridge) mainly provides hardware support for industrial equipment networking projects, supports automatic detection of point list, helps upper-layer terminals to collect data from underlying industrial equipment (such as PLC, CNC series, special equipment, industrial instruments, etc.) through Ethernet, and then conducts statistics and analysis of these data.

The selection manual is classified by the types of devices supported by the bridge.

List of devices supported by NET series bridge protocol converter

order number	PLC brand	PLC series	PLC model	Bridge adapter model	remarks

1	siemens	S7200/S7200 CN	CPU221,

CPU22 2,

CPU224,

CPU224XP,

CPU226

CPU126	DAQ-Bridge-PPI

Direct type / bridge type	Direct type: The PLC communication port is occupied by Siemens touch screen; Bridge type: The PLC communication port is occupied by non-Siemens touch screen.

		S7200 Smart	CPU SR20/ST20,

CPU SR30/ST30,

CPUSR40/ST40/CR40,

CPUSR60/ST60/ CR 60,	DAQ-Bridge-PPI

Direct type / bridge type	Connect via the CPUs PPI port (DSUB9)

		S7300	CPU312,

CPU313/313C-2DP,

CPU314,

CPU315-2DP/315-2DP/ PN

840D	DAQ-Bridge-MPI

	1. Communication port MP I or DP;

2, DAQ-Bridge-MPI

The Pro series supports ModbusRTU and Ethernet client functions.

		S71200/1500/PN	CPU1200/1500/S7300PN/400PN	DAQ-Bridge50-PN	Siemens network port PLC to modbusTCP communication.

		numerical control system	802C

802D,802dsl

	NET80-S7NC	

2	Mitsubishi	FX	FX1S/1N,

FX2N,

FX3U/3S/3SA/3G	DAQ-Bridge--FX	Support for Mitsubishi compatible PLC such as Shilin, Hicon and Hechuan.

		Q	Q00J/Q00/ Q 01

Q02/ Q02H/Q06H/Q12H,

Q00U/01U/02U/06U,

Q00UD/Q03UD,	DAQ-Bridge--Q	

		A	A1SH,A2SH	DAQ-Bridge--A	

		Q series Ethernet PLC	Q03UDE/Q03UDV/Q13UDE, etc	DAQ-Bridge50-CCL	

		FX5U	FX5U	DAQ-Bridge50-ME L	

3	OMRON	CP/CJ	CP1E,CP1H,CP1L

CJ1G,CJ1M,CJ2M,CJ2H;

CJ1G-H,CJ1H-H;

CS1D,CS1G,CS1H;

CV1000,CV2000,CV500,CV1M;

FQM1,NSJ,NX1P;	DAQ-Bridge-CS	

		CPM/C200	C1000,C2000,C200;

CPM1,CPM2

CQM,IDSC,SRM1;	DAQ-Bridge-CX	10/20 pin interface, additional adapter is required.

4	Panasonnic	FP	FP-XH, FP-X, FP-X0,

FP0, FP0R, FP2SH	DAQ-Bridge-FP	Two connection methods are provided: circular interface and terminal row.

5	delta	DVP	DVP-ES/ES2/EX2/EC3/EH3,

DVP-SV2/SS2/SA/SX2,

DVP-10PM/20PM	DAQ-Bridge-DVP	When placing an order for a T P all-in-one machine, please specify

6	silver dollar	SN/DL	SN/ SM/SH

DL-05/06/205/206	DAQ-Bridge-KOYO	

7	Schneider		M200/100,

M218/221/238/241/251/258/ 340,

Twdio,P remium,

TSX Micro,Q uantum	DAQ-Bridge-SC

DAQ-Bridge-TWD

DAQ-Bridge-SC/RJ45

	Provide a variety of interface types: MD8, Rj45, DIP

8	Huichuan	HnU/485	H1 S

H0U/H1U/H2U/H3U-XP	DAQ-Bridge-HnU	Support Huichuan PLC and all-in-one machine;

Round hole 422 interface selection model: DAQ-Bridge-FX

9	Xinjie	XC/XD	XC1/XC2/XC3/XC5/XCM/XCC,

XD3	DAQ-Bridge-XJ	

10	M odbus Standard equipment		Modbus RTU/ASCII	DAQ-Bridge-MB	RS485/ 232

11	Yonghong	FB s	FB s	DAQ-Bridge-FB	

1 2	LG	LS(LG)	Master K/K7M	DAQ-Bridge-LS	

1 3	Control	LX	LX3V/VP/VE/VM	DAQ-Bridge-LX	

14	FUJI		NB/WSZ	DAQ-Bridge-FJ	

1 5	Keyence	KV	KV 500/1000/ 3000	DAQ-Bridge-KV	

1 6	Yudian	AP	AP	DAQ-Bridge-AP	

1 7	Feng Wei	VB/VH	VB/VH	DAQ-Bridge-VGR	

1 8	Rockwell	AB	MicroLogix1000/1400	DAQ-Bridge-AB	

19	Dongyuan (Tai an)	T eco	T eco	DAQ-Bridge-TECO	

20	Yaskawa	YASKAWA	gorge line	DAQ-Bridge-MP	

			internet access	DAQ-Bridge50-MP	

2 1	Inwitten	INVT		DAQ-Bridge-INVT	

2 2	Sea		gorge line	DAQ-Bridge-HW	

23	McGummet		gorge line	DAQ-Bridge-MEG	

29	IP cross-segment conversion		Ethernet communication port equipment	DAQ-Bridge50-NAT					

List of devices supported by NET series bridge protocol converter

order number	PLC brand	PLC series	PLC model	Bridge adapter model	remarks

1	siemens	S7200/S7200 CN	CPU221,

CPU22 2,

CPU224,

CPU224XP,

CPU226

CPU126	DAQ-Bridge-PPI

Direct type / bridge type	Direct type: The PLC communication port is occupied by Siemens touch screen; Bridge type: The PLC communication port is occupied by non-Siemens touch screen.

```
	S7200 Smart	CPU SR20/ST20,
```

CPU SR30/ST30,

CPUSR40/ST40/CR40,

CPUSR60/ST60/ CR 60,	DAQ-Bridge-PPI

Direct type / bridge type	Connect via the CPUs PPI port (DSUB9)

```
	S7300	CPU312,
```

CPU313/313C-2DP,

CPU314,

CPU315-2DP/315-2DP/ PN

840D	DAQ-Bridge-MPI

```
1. Communication port MP I or DP;
```

2, DAQ-Bridge-MPI

The Pro series supports ModbusRTU and Ethernet client functions.

```
	S71200/1500/PN	CPU1200/1500/S7300PN/400PN	DAQ-Bridge50-PN	Siemens network port PLC to modbusTCP communication.

	numerical control system	802C
```

802D,802dsl

```
NET80-S7NC	
```

2	Mitsubishi	FX	FX1S/1N,

FX2N,

FX3U/3S/3SA/3G	DAQ-Bridge--FX	Support for Mitsubishi compatible PLC such as Shilin, Hicon and Hechuan.

```
	Q	Q00J/Q00/ Q 01
```

Q02/ Q02H/Q06H/Q12H,

Q00U/01U/02U/06U,

Q00UD/Q03UD,	DAQ-Bridge--Q	

```
	A	A1SH,A2SH	DAQ-Bridge--A	

	Q series Ethernet PLC	Q03UDE/Q03UDV/Q13UDE, etc	DAQ-Bridge50-CCL	

	FX5U	FX5U	DAQ-Bridge50-ME L	
```

3	OMRON	CP/CJ	CP1E,CP1H,CP1L

CJ1G,CJ1M,CJ2M,CJ2H;

CJ1G-H,CJ1H-H;

CS1D,CS1G,CS1H;

CV1000,CV2000,CV500,CV1M;

FQM1,NSJ,NX1P;	DAQ-Bridge-CS	

```
	CPM/C200	C1000,C2000,C200;
```

CPM1,CPM2

CQM,IDSC,SRM1;	DAQ-Bridge-CX	10/20 pin interface, additional adapter is required.

4	Panasonnic	FP	FP-XH, FP-X, FP-X0,

FP0, FP0R, FP2SH	DAQ-Bridge-FP	Two connection methods are provided: circular interface and terminal row.

5	delta	DVP	DVP-ES/ES2/EX2/EC3/EH3,

DVP-SV2/SS2/SA/SX2,

DVP-10PM/20PM	DAQ-Bridge-DVP	When placing an order for a T P all-in-one machine, please specify

6	silver dollar	SN/DL	SN/ SM/SH

DL-05/06/205/206	DAQ-Bridge-KOYO	

7	Schneider		M200/100,

M218/221/238/241/251/258/ 340,

Twdio,P remium,

TSX Micro,Q uantum	DAQ-Bridge-SC

DAQ-Bridge-TWD

DAQ-Bridge-SC/RJ45

```
Provide a variety of interface types: MD8, Rj45, DIP
```

8	Huichuan	HnU/485	H1 S

H0U/H1U/H2U/H3U-XP	DAQ-Bridge-HnU	Support Huichuan PLC and all-in-one machine;

Round hole 422 interface selection model: DAQ-Bridge-FX

9	Xinjie	XC/XD	XC1/XC2/XC3/XC5/XCM/XCC,

XD3	DAQ-Bridge-XJ	

10	M odbus Standard equipment		Modbus RTU/ASCII	DAQ-Bridge-MB	RS485/ 232

11	Yonghong	FB s	FB s	DAQ-Bridge-FB	

1 2	LG	LS(LG)	Master K/K7M	DAQ-Bridge-LS	

1 3	Control	LX	LX3V/VP/VE/VM	DAQ-Bridge-LX	

14	FUJI		NB/WSZ	DAQ-Bridge-FJ	

1 5	Keyence	KV	KV 500/1000/ 3000	DAQ-Bridge-KV	

1 6	Yudian	AP	AP	DAQ-Bridge-AP	

1 7	Feng Wei	VB/VH	VB/VH	DAQ-Bridge-VGR	

1 8	Rockwell	AB	MicroLogix1000/1400	DAQ-Bridge-AB	

19	Dongyuan (Tai an)	T eco	T eco	DAQ-Bridge-TECO	

20	Yaskawa	YASKAWA	gorge line	DAQ-Bridge-MP	

```
		internet access	DAQ-Bridge50-MP	
```

2 1	Inwitten	INVT		DAQ-Bridge-INVT	

2 2	Sea		gorge line	DAQ-Bridge-HW	

23	McGummet		gorge line	DAQ-Bridge-MEG	

29	IP cross-segment conversion		Ethernet communication port equipment	DAQ-Bridge50-NAT	

### **1. Siemens controller**

The bridge supports Siemens S7-200/200SMART/300/400/ET200S series PLC and 840D series CNC system. It also supports controllers of PLCs compatible with Siemens such as Hexin and Yiwei.

#### **1.1 DAQ-Bridge-PPI is used for S7-200/200 SMART**

product description:

DAQ-Bridge-PPI is used for Siemens S7-200/SMART S7-200, Hexin, Yiwai and other series of PLC.

DAQ-Bridge-PPI features:

1、 Support multi-master station communication, the expansion port can be connected to the touch screen or other master station;

2、 Support automatic detection of data point tables;

3、 Support Siemens S7 Ethernet communication driver, MicroWIN, WinCC and other software can be directly connected to S7-200 through TCP/IP.

4、 Ethernet integrated ModbusTCP server can communicate directly with PLC through the standard Modbus protocol.

5、 Ethernet supports S7TCP connection and ModbusTCP communication at the same time, and supports up to 16 upper machine connections.					

![](/images/图片2英文.png)

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-PPI

description:	Siemens S7-200 Ethernet communication

Size (L\*W\*H):	65\*30\*17mm

weight:	60 g

way to install:	The communication port is plug-in
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
Voltage/current:	24VDC/100mA
```

Communication port C om 1	interface type:	DSUB9 F (RS485)

```
transmission speed:	9.6/19.2/187.5K bps

protocol:	PPI/MPI

support equipment:	Siemens S7200 /2000 SMART PLC
```

Communication port Com2	interface type:	DSUB9 M (RS485)

```
transmission speed:	9.6/19.2/187.5K bps

protocol:	PPI/MPI

support equipment:	Siemens, MCGS, Weilun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	S7TCP/ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

#### **1.2 DAQ-Bridge-MPI is used for S7-300/400 /840D**

product description:

DAQ-Bridge-MPI is used in Siemens S7-300/S7400/ET200S series PLC and Siemens 840D CNC system.

DAQ-Bridge-MPI features:

1、 Support multi-master station communication, the expansion port can be connected to the touch screen or other master station;

2、 Support automatic detection of data point tables;

3、 Support Siemens S7 Ethernet communication driver, STEP7, TIA BOTO, WinCC and other software are directly connected to PLC through TCP/IP.

4、 Ethernet integrated ModbusTCP server, can communicate directly with PLC through the standard Modbus protocol.

5、 Ethernet supports S7TCP connection and ModbusTCP communication at the same time, and supports up to 16 upper machine connections. 

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-MPI

description:	Siemens S7-300/400,840D Ethernet communication

Size (L\*W\*H):	65\*30\*17mm

weight:	60 g

way to install:	The communication port is plug-in
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	DSUB9 F (RS485)

```
transmission speed:	9.6/19.2/187.5K/500K/1.5M BPS

protocol:	MPI/PROFIBUS

support equipment:	Siemens S7300/400 PLC
```

Communication port Com2	interface type:	DSUB9 M (RS485)

```
transmission speed:	9.6/19.2/187.5K/500K/1.5M BPS

protocol:	MPI/PROFIBUS

support equipment:	Siemens, MCGS, Weilun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	S7TCP/ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

#### **1.3 DAQ-Bridge-MPI Pro is used for extended communication of Siemens PL C**

The bridge is divided into basic and professional versions, with models DAQ-Bridge-MPI and DAQ-Bridge-MPI Pro, respectively. DAQ-Bridge-MPI Pro is also divided into direct and bridge types.

The Professional version not only includes all the functions of the basic version, but also adds the MODBUS master-slave function of the expansion port X2 (only bridge type supported) and the S7TCP and M odbusTCP client functions of the Ethernet port.

The basic and professional versions are compared as follows:

#### **1.3.1 NET30-MPI Pro is used for Modbus RTU communication of Siemens PL C**

The bridge adapter only DAQ-Bridge-MPI Pro bridge type supported) has an expansion port X2 that supports MODBUS master station functionality allowing access to MODBUS slave station devices (such as instruments, inverters, sensors, etc.) via the MODBUSRTU protocol. Without writing PLC programs, simple parameter configuration can achieve the functionality of Siemens CP341. It also supports Siemens CP343 (Ethernet) communication functions.

It can configure 1024 modbus data exchange mappings, support bit, byte and word data formats, and a single data exchange mapping supports 110 registers (words).

The expansion port X2 of the bridge adapter supports the MODBUS slave function, and the MODBUS master station equipment (such as DCS system) can access the PLC data through the MODBUSRTU protocol.

#### **1.3.2 NET 30-MPI Pro is used for Ethernet data exchange in Siemens PL C**

The module can be installed on the Siemens S7200/S7300/S7400 PLC, and the network port supports Ethernet data exchange between Siemens S71200/S71500/S7300PN/CP343/S7200SAMRTPLC.

Supports Ethernet data communication between two PLCs with a communication bridge.

#### **1.3.3 NET 30-MPI Pro is used for the ModbusTCP Ethernet client of Siemens PL C**

The module can be installed on the Siemens S7200/S7300/S7400 PLC, and the network port can be configured as a ModbusTCP client to connect with external ModbusTCP slave devices (touchscreen, frequency converter, instrument, sensor).	

![](/images/图片3英文.png)

#### **1.4 NET 50-PN is used for Siemens S71200/1500 series PLC communication**

product description:

The industrial communication bridge (DAQ-Bridge50-PN) supports IP address across network segments and ModbusTCP communication protocol conversion, providing a convenient solution for the informatization of industrial equipment with Ethernet communication that is not easy to modify parameters.

Features:

1、 Support I P address cross-network segment NAT conversion;

2、 Support modbusTCP communication of Siemens Ethernet PLC (S71200/1500/300PN, etc.) without programming.

3、 Support multiple communication port conversion;

4、 Support 8-channel TCP/UDP communication configuration;

5、 Supports 1 6 Ethernet communication connections;

6、 Can connect multiple devices at the same time;

The Siemens Ethernet communication protocol is converted to the standard ModbusTCP communication as shown in the following figure:		

![](/images/图片4英文.png)

**way to install:**

Installation method: The bridge adapter is installed by standard 35mm rail and supplied with 24V DC power;

Connection method: Connect LAN1 of the bridge adapter to the Ethernet port of Siemens S71200/1500 PLC and touch screen, and LAN2 of the bridge adapter to the Ethernet port of the computer or local network 

![](/images/图片5英文.png)

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge50-PN

description:	Siemens PLC Ethernet IP address and ModbusTCP communication conversion

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	External supply DIP2

```
voltage:	24VDC/100mA
```

Communication port LAN1	interface type:	Dual port switch (RJ45)

```
transmission speed:	10/100 M adaptive

protocol:	TCP/UDP protocol

support equipment:	PLC, touch screen, PC and other Ethernet communication equipment
```

Communication port LAN2	interface type:	Ethernet (RJ45)

```
transmission speed:	10/100M adaptive

protocol:	TCP/UDP protocol

TCP linker number:	16
```

work environment	temperature:	-20~85℃

**technical parameter:**

### **2. Mitsubishi controller**

The bridge supports Mitsubishi FX/Q/A/QnA series PLC, as well as the controllers of Shilin, Hicon, Hechuan and other PLCs compatible with Mitsubishi.

#### **2.1 DAQ-Bridge-FX is used for FX series PLC**

product description:

DAQ-Bridge-FX is used for Mitsubishi FX1N/1S/2N/3U/3G/3S series PLC, as well as Hicon, Hecuan, Shilin and other brands of PLC.

DAQ-Bridge-FX features:

1、 Support multi-master station communication, expansion port can be connected to touch screen;

2、 Support automatic detection of data point tables;

3、 Support Mitsubishi MCTCP Ethernet communication, support GS Work2, GS Developer, Configuration King and other software to connect directly to PLC via Ethernet.

4、 Ethernet integrated ModbusTCP server can communicate directly with PLC through the standard Modbus protocol.

5、 Ethernet supports MCTCP connection and ModbusTCP communication at the same time, and supports up to 16 upper machines.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-FX

description:	Mitsubishi FX 1S/1N/2N/3U/3G/3S Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	MD8 (RS422)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Mitsubishi programming port protocol

support equipment:	Mitsubishi FX 1S/1N/2N/3U/3G/3S PLC
```

Communication port Com2	interface type:	MD8 (RS422)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Mitsubishi programming port protocol

support equipment:	GOT, MCGS, Wulun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	MCTCP/ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

## **2.2 DAQ-Bridge-Q is used for Q series PLC**

product description:

DAQ-Bridge-Q is used in Mitsubishi Q0Xu/Q00J/Q0X/Q0XH series PLC.

DAQ-Bridge-Q features:

1、 Support multi-master station communication, expansion port can be connected to touch screen;

2、 Support Mitsubishi MCTCP Ethernet communication, support GS Work2, GS Developer, Configuration King and other software to connect directly to PLC via Ethernet.

3、 Ethernet integrated ModbusTCP server can communicate directly with PLC through the standard Modbus protocol.

4、 Ethernet supports MCTCP connection and ModbusTCP communication at the same time, and supports up to 16 upper machine connections.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-Q

description:	Mitsubishi Q series PLC Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	MD6 (RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Mitsubishi programming port protocol

support equipment:	Mitsubishi Q series PLC
```

Communication port Com2	interface type:	MD6 (RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Mitsubishi programming port protocol

support equipment:	GOT, MCGS, Wulun, proface, Buke and other human-machine
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	MCTCP/ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

#### **2.3 DAQ-Bridge-A is used for A series PLC**

product description:

DAQ-Bridge-A is used in Mitsubishi A series PLC.

DAQ-Bridge-A features:

1、 Support multi-master station communication, expansion port can be connected to touch screen;

2、 Ethernet integrated ModbusTCP server can communicate directly with PLC through the standard Modbus protocol.

3. Support the connection of 16 upper machines.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-A

description:	Mitsubishi A series PLC Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	External supply DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	DB9M (RS 232)

```
transmission speed:	9600 BPS

protocol:	Mitsubishi A programming port protocol

support equipment:	Mitsubishi A series PLC
```

Communication port Com2	interface type:	DB9M (RS 232)

```
transmission speed:	9600 BPS

protocol:	Mitsubishi programming port protocol

support equipment:	GOT, MCGS, Wulun, proface, Buke and other human-machine
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

#### **2.4 NET 50-CCL is used in Mitsubishi Q Ethernet series PLC**

**product description:**

The industrial communication bridge (DAQ-Bridge50-CCL) supports the IP address across network segments and ModbusTCP communication protocol conversion of Mitsubishi Q series PLC, providing a convenient solution for the informatization networking of industrial equipment with Ethernet communication that is not convenient to modify parameters.

**Features:**

1、 Support I P address cross-network segment NAT conversion;

2、 Support modbusTCP communication for Mitsubishi PLC without programming.

3、 Support multiple communication ports conversion;

4、 Support 8-channel TCP/UDP communication configuration;

5、 Supports 1 6 Ethernet communication connections;

6、 Can connect multiple devices at the same time;

The Siemens Ethernet communication protocol is converted to the standard ModbusTCP communication, as shown in the following figure:

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge50-CCL

description:	Mitsubishi Q series PLC Ethernet IP address and ModbusTCP communication conversion

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	External supply DIP2

```
voltage:	24VDC/100mA
```

Communication port LAN1	interface type:	Dual port switch (RJ45)

```
transmission speed:	10/100 M adaptive

protocol:	TCP/UDP protocol

support equipment:	PLC, touch screen, PC and other Ethernet communication equipment
```

Communication port LAN2	interface type:	Ethernet (RJ45)

```
transmission speed:	10/100M adaptive

protocol:	TCP/UDP protocol

TCP linker number:	16
```

work environment	temperature:	-20~85℃

#### **2.5 NET 50-MEL is used for Mitsubishi FX5U Ethernet series PLC**

**product description:**

The industrial communication bridge (DAQ-Bridge50-MEL) supports IP address across network segments and ModbusTCP communication protocol conversion, providing a convenient solution for the informatization of industrial equipment with Ethernet communication that is not convenient to modify parameters. 

**Features:**

1、 Support I P address cross-network segment NAT conversion;

2、 Support modbusTCP communication for Mitsubishi PLC without programming.

3、 Support multiple communication port conversion;

4、 Support 8-channel TCP/UDP communication configuration;

5、 Supports 1 6 Ethernet communication connections;

6、 Can connect multiple devices at the same time;

The Mitsubishi Ethernet communication protocol is converted to the standard ModbusTCP communication, as shown in the figure below:

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge50-MEL

description:	Mitsubishi PLC Ethernet IP address and ModbusTCP communication conversion

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	External supply DIP2

```
voltage:	24VDC/100mA
```

Communication port LAN1	interface type:	Dual port switch (RJ45)

```
transmission speed:	10/100 M adaptive

protocol:	TCP/UDP protocol

support equipment:	PLC, touch screen, PC and other Ethernet communication equipment
```

Communication port LAN2	interface type:	Ethernet (RJ45)

```
transmission speed:	10/100M adaptive

protocol:	TCP/UDP protocol

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **3. Omron controller**

The bridge adapter supports a series of PLCs such as Omron CP/CJ/CPM/CQM/C200H.

#### **3.1 DAQ-Bridge-CS is used in CP/CJ series PLC**

**product description:**

DAQ-Bridge-CS is used for a series of PLCs such as Omron CP1E/CP1H/CP1L/CJ1M/CJ2M.

**DAQ-Bridge-CS features:**

1、 Support Hostlink and NT LINK communication, the expansion port can be connected to the touch screen;

2、 Support automatic detection of data point tables;

3、 Support Omron F ins TCP/UDP Ethernet communication, support CX-Programmer, configuration King and other software to connect directly to PLC via Ethernet.

4、 Ethernet integrated ModbusTCP server, can communicate directly with PLC through the standard Modbus protocol.

5、 Ethernet supports FinsTCP connection and ModbusTCP communication at the same time, and supports up to 16 upper machine connections.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-CS

description:	Omron CP1E/CP1H/CP1L/CJ1M/CJ2M Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	DSUB9M(RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Hostlink/NT LINK protocol

support equipment:	Omron CP1E/CP1H/CP1L/CJ1M/CJ2M PLC
```

Communication port Com2	interface type:	DSUB9M(RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Hostlink/NT LINK protocol

support equipment:	Omron, MCGS, Weilun, proface, Buke and other human-machine
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	FinsTCP/ FinsUDP/ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **3.2 DAQ-Bridge-CX is used for CPM/C200 series PLC**

**product description:**

DAQ-Bridge-CX is used for a series of PLCs such as Omron CPM/CQM/C200H.

**Selection description:**

When the PLC is a 10-pin or 20-pin communication interface, additional connection cables need to be selected, and the module needs to be connected to an external power supply.

PLC with 20-pin interface: Suitable for CPM1A/2A/CQM1 series PLC, an additional data transfer cable CQM1-CIF02 is required.

PLC with 10-pin interface: suitable for CPM2C/CQM1H series PLC, one additional data transfer CS1W-CN226 is required.

DAQ-Bridge-CX features:

1、 Support Hostlink C-mode communication, the expansion port can be connected to the touch screen;

2、 Support automatic detection of data point tables;

3、 Support Omron F ins TCP/UDP Ethernet communication, support CX-one, configuration king and other software to connect directly to PLC via Ethernet.

4、 Ethernet integrated ModbusTCP server can communicate directly with PLC through the standard Modbus protocol.

5、 Ethernet supports FinsTCP connection and ModbusTCP simultaneous communication, up to 16 upper machine connections.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-CX

description:	Omron CPM/CQM/C200H Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	DSUB9M(RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Hostlink C-mode protocol

support equipment:	Omron CPM/CQM/C200H PLC
```

Communication port Com2	interface type:	DSUB9M(RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Hostlink C-mode protocol

support equipment:	Omron, MCGS, Weilun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	FinsTCP/FinsUDP/ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **4. Panasonic controller**

The bridge adapter supports the Panasonic FP-XH/FP-X/FP-X0/FP0/FP2S series PLC. The FP-XH is selected as the terminal type, and the other series is selected as the standard type.

#### **4.1 DAQ-Bridge-FP is used for FP series PLC**

**product description:**

DAQ-Bridge-FP is used in Panasonic FP-XH/FP-X/FP-X0/FP0/FP2SH series PLC.

**DAQ-Bridge-FP features:**

1、 Support Panasonic programming port communication protocol, the expansion port can be connected to the touch screen;

2、 Support automatic detection of data point tables;

3、 Support Panasonic ET-LAN Ethernet communication, support FPWIN GR, configuration King and other software to connect directly to PLC via Ethernet.

4、 Ethernet integrated ModbusTCP server, can communicate directly with PLC through the standard Modbus protocol.

5、 Ethernet supports ET-LAN connection and ModbusTCP communication at the same time, and supports up to 16 upper machine connections.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-FP

description:	Panasonic FP-XH/FP-X/FP-X0/FP0/FP2SH Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	MD5M/DIP6(RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2/230.4K BPS

protocol:	FP programming port protocol

support equipment:	Panasonic FP-XH/FP-X/FP-X0/FP0/FP2SH
```

Communication port Com2	interface type:	MD5M/DIP6(RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	FP programming port protocol

support equipment:	Panasonic, MCGS, Weilun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ET-LAN/ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **5. TADA controller**

The bridge adapter supports a series of PLCs such as Delta-ES/EX/EC/EH/SV/SS/SA/SX/PM.

#### **5.1 DAQ-Bridge-DVP is used for DVP series PLC**

**product description:**

DAQ-Bridge-DVP is used in Delta DVP-ES/EX/EC/EH/SV/SS/SA/SX/PM series PLC.

**DAQ-Bridge-DVP features:**

1、 Supports TDA programming port communication protocol, the expansion port can be connected to the touch screen;

2、 Support automatic detection of data point tables;

3、 Supports TDA Ethernet communication, supports WPLSoft, ISPSoft, Configuration King and other software to connect directly to PLC via Ethernet.

4、 Ethernet integrated ModbusTCP server can communicate directly with PLC through standard Modbus protocol.

5、 Ethernet supports ModbusTCP communication and supports up to 16 upper machine connections.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-DVP

description:	Delta DVP-ES/EX/EC/EH/SV/SS/SA/SX/PM Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	MD8M(RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2/230.4K BPS

protocol:	DVP programming port protocol

support equipment:	Delta DVP-ES/EX/EC/EH/SV/SS/SA/SX/PM
```

Communication port Com2	interface type:	MD8M(RS 232)

```
transmission speed:	9.6/19.2/38.4/57.6/115.2K BPS

protocol:	DVP programming port protocol

support equipment:	Delta, MCGS, Weilun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **6. Light Yang controller**

The bridge supports a series of PLCs such as Guangyang SM/SN/DL.

#### **6.1 DAQ-Bridge-KYO is used for SN/DL series PLC**

**product description:**

DAQ-Bridge-YOKO is used in lightyang SM/SN/SH/DL series PLC.

**DAQ-Bridge-YOKO features:**

1、 Support the optical K protocol and CCM 2 (HEX/ASCII) protocol, the expansion port can be connected to the touch screen;

2、 Support optical Yang Ethernet communication, support DirectSOFT, configuration King and other software to connect directly to PLC through Ethernet.

3、 Ethernet integrated ModbusTCP server can communicate directly with PLC through the standard Modbus protocol.

4、 Ethernet supports ECOM/UDP and ModbusTCP communication, up to 16 upper machine connections.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-YOKO

description:	Gonyang SM/SN/SH/DL Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	RJ11(RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2/K BPS

protocol:	DVP programming port protocol

support equipment:	Guangyang SM/SN/SH/DL
```

Communication port Com2	interface type:	RJ11(RS 232)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	K protocol, CCM 2 (HEX/ASCII) protocol

support equipment:	Gongyang, MCGS, Weilun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ECOM UDP, ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **7. Schneider PLC**

The bridge supports a series of PLCs such as Schneider Twdio/TSX Micro/Premium/Quantum/M238/M258.

#### **7.1 DAQ-Bridge-SC is used for Schneider PLC**

DAQ-Bridge-SC is used for Ethernet communication expansion of Schneider Twdio/TSX Micro/Premium/Quantum/M238/M258 series. The DAQ-Bridge-SC bridge adopts a multi-channel design for data sharing, featuring 3 serial ports and 1 Ethernet communication port. Without any hardware or software modifications to the original system, it does not affect the communication of the original system and allows simultaneous data monitoring and operation on devices through Ethernet ModbusTCP/UDP and serial port ModbusRTU.

**DAQ-Bridge-SC features:**

1、 Serial port supports RS485 and RS232 interface types, baud rate range: 1200-115200bps;

2、 Serial port support standard Modbus RTU/ASCII code communication protocol;

3、 Ethernet supports communication of standard ModbusTCP and M odbusUDP;

4、 Support multi-serial port and Ethernet multi-remote station simultaneous data communication;

5、 Supports synchronous and asynchronous communications;

6、 Supports data caching function, suitable for high speed communication.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-SC

description:	For use with Schneider PLC Ethernet communication extension

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	External supply DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	RJ45/MD8/DIP(RS485)

```
transmission speed:	1200/2400/4800/9600/19200/38400/57600/115200 BPS

protocol:	ModbusRTU/ASCII protocol

support equipment:	Schneider and other PLCs that support standard modbus communications
```

Communication port C om 2	interface type:	RJ45/MD8/DIP(RS485)

```
transmission speed:	1200/2400/4800/9600/19200/38400/57600/115200 BPS

protocol:	ModbusRTU/ASCII protocol

support equipment:	Standard M odbus host
```

Communication port Com3	interface type:	D S UB9 M (RS485)

```
transmission speed:	1200/2400/4800/9600/19200/38400/57600/115200 BPS

protocol:	ModbusRTU/ASCII protocol

support equipment:	Standard M odbus host
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ModbusTCP/UDP server S erver

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **8. Huichuan PLC**

The bridge supports the H0U/H1U/H2U/H3U series PLCs from Inovance.

DAQ-Bridge-FX is used for 422 communication of H0 U/H1U/H2U/H3U series PLCs from Inovance.

DAQ-Bridge-H nU is used for 485 communication of INTELLINK H0 U/H1U/H2U/H3U and other series PLCs in one machine.

#### **8.1 DAQ-Bridge-HnU is used for Inovance PLC-485**

**product description:**

DAQ-Bridge-H nU is used for 485 communication of INTELLINK H0 U/H1U/H2U/H3U series PLC as an integrated machine.

**DAQ-Bridge-HnU features:**

1、 Support multi-master station communication, expansion port can be connected to touch screen;

2、 Ethernet integrated ModbusTCP server can communicate directly with PLC through the standard Modbus protocol.

3、 Ethernet supports the connection of 16 upper machines.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-HnU

description:	Huichuan H0 U/H1U/H2U/H3U Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	MD8 (RS422)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Hicon programming port protocol

support equipment:	Huichuan H0 U/H1U/H2U/H3U
```

Communication port Com2	interface type:	MD8 (RS422)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	Hicon programming port protocol

support equipment:	GOT, MCGS, Wulun, proface, Buke and other human-machine
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **9. Xinjie PLC**

The bridge supports a series of PLCs such as Xinjie XC/XD and integrated machines.

#### **9.1 DAQ-Bridge-XJ is used for XC/XD series PLC**

**product description:**

DAQ-Bridge-XJ is used in Xijie XC/XD series PLC and all-in-one machine.

**DAQ-Bridge-XJ features:**

1、 Supports the programming port communication protocol of Xinjie, and the expansion port can be connected to the touch screen;

2、 Supports Xijie Ethernet communication, supports XC PPro, XD PPro, Configuration King and other software to connect directly to PLC via Ethernet.

3、 Ethernet integrated ModbusTCP server, can communicate directly with PLC through the standard Modbus protocol.

4、 Ethernet supports ModbusTCP and M odbusUDP communication, and supports up to 16 upper machine connections.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-XJ

description:	X C/XD Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	MD8M(RS 232)

```
transmission speed:	1200/2400/4800/9600/19200/38400/57600/115200 BPS

protocol:	XJ programming port protocol

support equipment:	X C/XD, Xinjie
```

Communication port Com2	interface type:	MD8M(RS 232)

```
transmission speed:	1200/2400/4800/9600/19200/38400/57600/115200 BPS

protocol:	XJ programming port protocol

support equipment:	Xinjie, MCGS, Weilun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ModbusTCP/ModbusUDP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **10. Modbus equipment**

The bridge supports data acquisition and data sharing of industrial equipment such as PLC, frequency converter, instrument and sensor that support standard Modbus communication.

#### **10.1 DAQ-Bridge MB is used for standard Modbus equipment**

**product description:**

DAQ-Bridge-MB is used for PLC, meters, frequency converters and other standard Modbus RTU/ASCII equipment.

DAQ-Bridge-MB bridge adopts multi-way data sharing design, does not modify any hardware and software of the original system, does not affect the communication of the original system, and can monitor and operate the device through Ethernet ModbusTCP and serial port ModbusRTU at the same time.

**DAQ-Bridge-MB features:**

1、 Support standard Modbus RTU/ASCII code communication protocol;

2、 RS485 and RS232 interfaces, baud rate range: 1200-115200bps;

3、 At the same time, it supports the communication of Modbus RTU, Modbus ASCII, ModbusTCP and M odbusUDP;

4、 Support multiple host machines to communicate data at the same time;

5、 Support automatic detection of data point tables;

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-MB

description:	Standard Modbus device Ethernet communication, serial data sharing

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	External supply DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	DIP(RS485/232)

```
transmission speed:	1200/2400/4800/9600/19200/38400/57600/115200 BPS

protocol:	ModbusRTU/ASCII protocol

support equipment:	PLC, instrument, frequency converter and other standard Modbus equipment
```

Communication port Com2	interface type:	DIP(RS485/232)

```
transmission speed:	9.6/19.2/38.4/115.2K BPS

protocol:	ModbusRTU/ASCII protocol

support equipment:	Standard M odbus host
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

### **11. Yonghong PLC**

The bridge supports data acquisition, Ethernet programming, data sharing and other applications of industrial equipment such as Yonghong FB s series PLC.

#### **11.1 DAQ-Bridge-FB is used for Yonghong FBs series PLC**

**product description:**

DAQ-Bridge-FB is used in FB s series PLC and all-in-one machine.

**DAQ-Bridge-FB features:**

1、 Support Yonghong programming port communication protocol, the expansion port can be connected to the touch screen;

2、 Support Yonghong Ethernet communication, support programming software WinProladder, configuration King and other software to connect directly to PLC via Ethernet.

3、 Ethernet integrated ModbusTCP server can communicate directly with PLC through the standard Modbus protocol.

Ethernet supports ModbusTCP and M odbusUDP communication and supports up to 16 upper machines.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-FB

description:	Yonghong FBs series PLC Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	MD4(RS 232)

```
transmission speed:	1200/2400/4800/9600/19200/38400/57600/115200 BPS

protocol:	Yonghong programming port protocol

support equipment:	Yonghong FBs series PLC
```

Communication port Com2	interface type:	MD4(RS 232)

```
transmission speed:	1200/2400/4800/9600/19200/38400/57600/115200 BPS

protocol:	Yonghong programming port protocol

support equipment:	Yonghong, MCGS, Weilun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ModbusTCP/ModbusUDP

TCP linker number:	16
```

work environment	temperature:	-20~85℃

technical parameter:

### **12. Electric LS (LG) series PLC**

The bridge supports data acquisition of industrial equipment such as Maste rK series PLC, Ethernet programming, data sharing and other applications.

#### **12.1 DAQ-Bridge-LS is used for power generation LS (LG) series PLC**

**product description:**

DAQ-Bridge-LS is used for power generation LS (LG) Master K series PLC.

**DAQ-Bridge-LS features:**

1、 Support power generation programming port communication protocol, the expansion port can be connected to the touch screen;

2、 Ethernet integrated ModbusTCP server can communicate directly with PLC through the standard Modbus protocol.

3、 Ethernet supports ModbusTCP and M odbusUDP communication, and supports up to 16 upper machine connections.

**technical parameter:**

essential parameter	product name:	Industrial communication bridge

```
product model:	DAQ-Bridge-LS

description:	Power MASTER-K series Ethernet communication

Size (L\*W\*H):	110\*30\*70mm

weight:	100 g

way to install:	35mm guide rail installation
```

source	power supply mode:	PLC communication port direct power supply / external DIP2

```
voltage:	24VDC/100mA
```

Communication port C om 1	interface type:	Terminal row (RS 232)

```
transmission speed:	9.6K,19.2 k, 38.4k,57.6k,115.2 k BPS

protocol:	LOAD protocol, CNET protocol

support equipment:	Power MASTER-K series PLC
```

Communication port Com2	interface type:	Terminal row (RS 232)

```
transmission speed:	9.6K,19.2 k, 38.4k,57.6k,115.2 k BPS

protocol:	LOAD protocol, CNET protocol

support equipment:	Delta, MCGS, Weilun, proface, Buke and others
```

Ethernet communication port	interface type:	RJ45

```
transmission speed:	10/100M

protocol:	ModbusTCP

TCP linker number:	16
```

work environment	temperature:	-20~85℃
