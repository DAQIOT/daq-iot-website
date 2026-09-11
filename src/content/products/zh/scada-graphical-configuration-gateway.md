---
title: "scada图形组态网关"
summary: "图1 设备实物图"
image: "/images/products/1788168098724956.png"
order: 252
category: "daq-gateway"
hidden: false
---
**产品详情**

# 1 产品概述

![](/images/products/1769580232578426.png)

图1 设备实物图

DAQ-GP-GCGW scada图形组态网关是一款搭载高性能处理器，主频高达2.0GHz，64位四核Arm®Cortex®-A55架构，同时集成G52GPU、1TOPs算力的NPU等多种功能强大的嵌入式硬件引擎，为高端显控应用提供了优异的性能，为了满足不同显控产品的应用需求，DAQ-GP-GCGW在硬件接口上设计了RS-485、RS232、USB、以太网、DI、DO、Vout、HDMI等。内置SATA接口可扩展SSD固态硬件以及pcie接口适配4G模块，满足AIoT产品各种不同通信方式的接入需求，设备最多支持16路串口连接，网关内嵌有我司自主开发的通用工业数据采集系统，灵活实现实时数据上传与接收，支持自定义组态大屏画面设计，让工业数据尽收眼底。另外设备还搭载了USB存储、USB Debug口以及USB-D升级口，满足产品的现场固件升级、调试、数据存储以及数据导出等应用功能。

名称

通讯管理机 DAQ-GP-GCGW

处理器

四核Cortex-A55，频率最高2.0GHz

GPU

ARM G520

NPU

1TOPS* RKNN

RAM容量

4GB

FLASH容量

32G

RTC

内置RTC，RTC计时功能

DI

18路DI光电隔离，干接点输入

DO

4路DO继电器

VOUT

4路电源输出DC 12V（最大12V 2A）

RS485

16路RS485接口（含8路spi转RS485接口） 默认波特率9600

RS232

2路 独立隔离 默认波特率115200（复用RS485）

USB

2路USB2.0

网口

4路2x10/100M/2x100/1000M 自适应网口(独立IP，不同网段)

4G功能

全网通 4G-CAT1

SIM卡

自锁式 SIM 接口 1 个

SSD硬盘

MSATA 最大支持2TB

SD卡

TF (128GB Max)

掉电保护

支持(5-10秒)

软件看门狗

支持

指示灯

5 路 自定义可控

蜂鸣器

1个支持自定义Buzzer

Type-c

2 路 1*OTG升级、1*USB调试口

视频输出

HDMI

电源输入

AC90-220V 双电源

工作温度

工作温度-20 ~ +55℃

环境温湿度

工作湿度: 5%-95%(无凝结)

操作系统

Ubuntu20.04

外壳及安装

钣金外壳-1U；

软件协议

支持提供二次开发接口协议，调用一体机各个接口功能

表1 产品配置**表**

网关采用先进的高度集成的硬件和软件平台，对众多常用的物联网平台协议进行了优化，完成无线接收、发射、数据采集处理和协议解析等功能，网关结构尺寸为：483*330*32mm。可广泛应用于各个物联网领域，如工业数据采集、智慧农业、电力监控、环保污染监测、智能家居、安全管理等场景。

# 2

# 3 **功能介绍**

通过网口连接设备并使用ping命令测试与本机在同一网段下或直接使用HDMI连接显示屏打开设备后，可以打开浏览器输入：192.168.10.2:16801/scada/（前面红色的地址需填写接入对应网口的IP，对应IP详见下文“表3 网口说明图”）；若使用HDMI接入显示屏直接调试，则输入网址：http://localhost:16801/scada/ 或点击系统桌面的网站即可打开通用工业数据采集系统的登录界面；

输入账号：super 初始密码：123456 即可登录系统；

本系统是一套运行在网关上的设备数据采集与管理软件，主要用于对各种仪器设备（PLC、注塑机、数控机床、电表、流量计、分析仪等）数据的采集、控制、存储、查询、展示以及上传。系统主体功能包括：

![](/images/products/1769580249109233.png)

图3 通用工业数据采集系统界面示例图

- 设备数据采集、上传平台数据、通信协议转换。

- 支持广泛的数据链路及通信协议。

- 灵活易用的传输配置。

- 数据实时监控、告警监控。

- 多样化的数据存储和查询，支持上传数据库。

- 自由的组态和可视化界面设计。

- 用户及权限管理，可自由新建管理下行账号。

- 界面多语言支持。

3.2通信协议支持

支持的部分通信链路包括：

链路类型

通信链路

TCP

TCP客户端

TCP服务端

串口

串口UART

UDP

UDP

HTTP

HTTP服务端

HTTP客户端

OPC

OPC-UA

OPC-DA

MQTT

MQTT-TCP

MQTT-WebSocket

支持的部分通信协议链路包括：

协议类型

主协议

子协议

PLC通信协议

Modbus

Modbus-RTU

Modbus-TCP

Modbus-ASCII

西门子Siemens S7

三菱MELSEC通信协议

MELSEC-1E

MELSEC-3C

MELSEC-3E

MELSEC-4C

MELSEC-4D

Mitsubishi-Fx

OPC通信协议

OPC-UA

OPC-DA

MQTT通信协议

MQTT-JSON

仪表通信协议

DL/T645

DL/T698.45

DLMS

DLMS-LN

DLMS-SN

IEC62056-21

Edmi Command-Line

CDT

IEC103

IEC104

环境监测通信协议

HJ212

污染源在线自动监控（监测）系统数据传输标准

SL651

水文监测数据通信规约‌

ZY206

（SZY206-2016）

《水资源监测数据传输规约》

3.3组态可视化界面

![](/images/products/1769580274141358.png)

图4 组态画面示例图

在组态配置页面，可使用的功能包括：

- 显示实时采集到的设备数值。

- 显示数据历史记录。

- 显示动态变化的系统流程。

- 通过操作页面元素，向设备下发指令和数值。

- 切换至不同的视图页面。

# 4 **接口定义**

![](/images/products/1769580286899567.png)

图5 网关接口定义图

DAQ-GP-GCGW图形组态网关设计上保持清晰、简洁的风格。串口功能接口如下：

功能

名称

说明

映射

串口

A1 B1

485串口0

/dev/ttyS0

A2 B2

485串口1

/dev/ttyS1

A3 B3

485串口3

/dev/ttyS3

A4 B4

485串口4

/dev/ttyS4

A5 B5

485串口5

/dev/ttyS5

A6 B6

485串口7

/dev/ttyS7

A7 B7

485串口8

/dev/ttyS8

A8 B8

485串口9

/dev/ttyS9

RX9 TX9(A9/B9)

232串口6

/dev/ttyS6

TX10 RX10(A10 B10)

232串口0

/dev/ttyS0

spi转串口

A9 B9

485串口

/dev/ttysWK0

A10 B10

485串口

/dev/ttysWK1

A11 B11

485串口

/dev/ttysWK2

A12 B12

485串口

/dev/ttysWK3

A13 B13

485串口

/dev/ttysWL0

A14 B14

485串口

/dev/ttysWL1

A15 B15

485串口

/dev/ttysWL2

A16 B16

485串口

/dev/ttysWL3

表2 串口插针引脚表

DAQ-GP-GCGW图形组态网关包含4个网口，接口说明如下：

功能

名称

说明

映射

网口

Eth1

1000M 默认IP:192.168.10.2

eth0

Eth2

1000M 默认IP:192.168.20.2

eth1

Eth3

10/100M默认IP:192.168.30.2

eth20

Eth4

10/100M默认IP:192.168.40.2

eth30

表3 网口说明表

此外，该设备还支持RS232、USB、DI、DO、Vout接口，具体的接口定义可联系我司以获取详细的产品技术文档；

# 5 网关尺寸

![](/images/products/1769580376121125.png)

图6 网关尺寸图

参数

描述

机械参数

尺寸（mm）

483*330*32mm

# 6 **联系方式**

电话：19936624847

邮箱：business@daq-iot.com

网址：www.daq-iot.com

地址：上海市松江区欣浪路888弄6号楼16层
