---
title: "DCS 数据采集：OPC UA 协议采集与 MQTT 转发方案"
summary: "需求：山东某东奥化工企业接监管园区通知，需要实现对DCS系统数据的实时采集和监控，将数据上传至园区监控平台。"
category: "智能制造"
subcategory: "设备联网与数据采集"
order: 6
sourceDoc: "DCS数据采集系统OPC UA协议数据采集实现MQTT转发.docx"
image: "/images/plans/dcs-opc-ua-mqtt-forwarding/img-03.webp"
---
需求：山东某东奥化工企业接监管园区通知，需要实现对DCS系统数据的实时采集和监控，将数据上传至园区监控平台。从DCS系统采集实时数据，数据协议为OPC UA。将采集到的数据通过MQTT协议转发至监控平台。

## 一、背景及需求分析

DCS分布式控制系统是一种用于工业自动化的控制系统，通过多个分布式控制器实现对复杂生产过程的监控和管理，广泛应用于化工、电力、石油等行业。DCS数据采集面临的挑战：传统的DCS系统往往采用封闭的通信协议，数据难以与其他系统进行交互。生产数据、设备状态、能耗信息等分散在各个系统中，无法进行有效的整合和分析。另外其涉及的通信协议种类繁多，且不同厂商的设备协议各异（艾默生、西门子、横河、罗克韦尔、浙大中控、和利时、GE新华，正泰新华等），导致数据采集和系统集成难度大、周期长、成本高。其数据采集方式往往存在实时性差、数据传输延迟高等问题。

| DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 | DCS控制系统数采调研表 |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 序号 | 序号 | 企业名称 | DCS品牌 | DCS数量 | DCS数量 | DCS服务器 | DCS服务器 | DCS服务器 | DCS服务器 | 数据采集点数 | 数据采集点数 | 数据采集点数 | 数据采集点数 | 数据采集点数 | 备注 | 备注 |  |
| 序号 | 序号 | 企业名称 | DCS品牌 | DCS数量 | DCS数量 | DCS服务器IP地址 | OPC接口授权 | 数采桥接程序允许 | 数采桥接程序允许 | 数量 | 数量 | 数量 | 是否有点位表 | 是否有点位表 | 备注 | 备注 |  |
| 1 | 1 | 数采物联 | 浙大中控 | 1 | 1 | X.X.X.X | 有 | 是 | 是 | 70 | 70 | 70 | 是 | 是 |  |  |  |
| 2 | 2 | 数采物联 | 和利时 | 1 | 1 | X.X.X.X | 有 | 是 | 是 | 100 | 100 | 100 | 是 | 是 |  |  |  |
| 3 | 3 | 数采物联 | 罗克韦尔 | 1 | 1 | X.X.X.X | 无 | 否 | 否 | 50 | 50 | 50 | 否 | 否 |  |  |  |
| 4 | 4 | 数采物联 | GE新华 | 1 | 1 | X.X.X.X | 有 | 否 | 否 | 80 | 80 | 80 | 是 | 是 |  |  |  |
| DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 | DCS点表示例 |
| 序号 | 序号 | 数据名称 | 数据名称 | 数据名称 | 数据名称 | 数据地址(OPC UA协议地址标签) | 数据地址(OPC UA协议地址标签) | 数据地址(OPC UA协议地址标签) | 数据地址(OPC UA协议地址标签) | 数据类型 | 数据类型 | 量程下限 | 量程上限 | 量程上限 | 单位 | 单位 | 备注 |
| 1 | 1 | 6#苯溶液槽罐北侧浓度 | 6#苯溶液槽罐北侧浓度 | 6#苯溶液槽罐北侧浓度 | 6#苯溶液槽罐北侧浓度 | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | 整型 | 整型 | 0 | 100 | 100 | mg/m3 | mg/m3 |  |
| 2 | 2 | 1#盐酸贮槽南侧浓度 | 1#盐酸贮槽南侧浓度 | 1#盐酸贮槽南侧浓度 | 1#盐酸贮槽南侧浓度 | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | 整型 | 整型 | 0 | 100 | 100 | mg/m3 | mg/m3 |  |
| 3 | 3 | 1#浓硫酸槽液位 | 1#浓硫酸槽液位 | 1#浓硫酸槽液位 | 1#浓硫酸槽液位 | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | 整型 | 整型 | 0 | 6 | 6 | m | m |  |
| 4 | 4 | 罐区B#废水液位 | 罐区B#废水液位 | 罐区B#废水液位 | 罐区B#废水液位 | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | dongao_DaqOPC.1_PublicGroup.SubTag.Value | 整型 | 整型 | 0 | 10 | 10 | m | m |  |

（表格内容较多，此处仅展示前 12 行）

## 二、实施产品及采集技术方案

DAQ-IOT工业数采网关，DCS数据采集的利器，适用于各种复杂工业制造场景数据采集的需求，能够采集PLC设备、数控机床、检测仪表、普通机床、PC上位机等工业设备，与MES无缝对接。支持多种通信协议采集和传输

![DCS 数据采集：OPC UA 协议采集与 MQTT 转发方案](/images/plans/dcs-opc-ua-mqtt-forwarding/img-01.webp)

![DCS 数据采集：OPC UA 协议采集与 MQTT 转发方案](/images/plans/dcs-opc-ua-mqtt-forwarding/img-02.webp)

DAQ-GP-IOTGW系列 DAQ-GP-DPU系列

### 2.1 强大的协议解析能力，轻松对接DCS系统

DAQ-IOT工业数采网关内置丰富的工业协议库，支持OPC UA、Modbus、HJ212、IEC等多种主流工业协议，可轻松对接国内外主流DCS系统，实现数据的无缝采集和传输。DAQ-IOT工业数采网关还支持协议自定义开发，可满足企业个性化需求。

| 协议类型 | 主协议 | 子协议 | 备注 |
|---|---|---|---|
| PLC通信协议 | Modbus | Modbus-RTU |  |
|  |  | Modbus-TCP |  |
|  |  | Modbus-ASCII |  |
|  | 西门子Siemens S7 |  |  |
|  | 三菱MELSEC通信协议 | MELSEC-1E |  |
|  |  | MELSEC-3C |  |
|  |  | MELSEC-3E |  |
|  |  | MELSEC-4C |  |
|  |  | MELSEC-4D |  |
|  |  | Mitsubishi-Fx |  |
| OPC通信协议 | OPC-UA |  |  |
|  | OPC-DA |  |  |

（表格内容较多，此处仅展示前 12 行）

### 2.2 高效的数据采集和转发，保障数据实时性

DAQ-IOT工业数采网关采用高性能处理器和优化的数据采集算法，可实现毫秒级数据采集和转发，确保数据的实时性和准确性。同时，DAQ-IOT工业数采网关支持断点续传和数据缓存功能，有效避免数据丢失，保障数据的完整性。

### 2.3 灵活的MQTT协议，实现数据互联互通

DAQ-IOT工业数采网关支持MQTT协议，可将采集到的DCS数据实时上传至云端或本地服务器，实现数据的互联互通和共享。企业可通过MQTT协议将DCS数据与MES、ERP、SCADA等系统进行集成，构建统一的数据平台，实现数据的深度挖掘和分析。

### 2.4 安全可靠，保障数据安全

DAQ-IOT工业数采网关采用多重安全机制，包括数据加密、身份认证、访问控制等，有效保障数据的安全性和可靠性。同时，DAQ-IOT工业数采网关还支持远程升级和维护，方便用户进行设备管理和维护。

### 2.5 采集方案

![DCS 数据采集：OPC UA 协议采集与 MQTT 转发方案](/images/plans/dcs-opc-ua-mqtt-forwarding/img-03.webp)

DCS中控系统需要确认开放授权，根据企业要求追加网络安全中间件（网闸或防火墙等），确定企业DCS中控系统环境是否可以追加桥接程序，以便实现不同网络间的互通，然后通过网线形式连接DAQ数采网关，最终实现MQTT协议转发至监控平台。

## 三、应用场景：广泛适用于各行业DCS数据采集

石油化工：实时采集生产装置的温度、压力、流量等关键参数，实现生产过程的监控和优化。

电力能源：实时采集发电机组、变电站等设备的运行数据，实现电力系统的安全稳定运行。

冶金制造：实时采集生产线上的设备状态、工艺参数等数据，实现生产过程的自动化控制和优化。

水处理：实时采集水质、流量、压力等数据，实现水处理过程的自动化控制和优化

## 四、安装图例

![DCS 数据采集：OPC UA 协议采集与 MQTT 转发方案](/images/plans/dcs-opc-ua-mqtt-forwarding/img-04.webp)

![DCS 数据采集：OPC UA 协议采集与 MQTT 转发方案](/images/plans/dcs-opc-ua-mqtt-forwarding/img-05.webp)

*五、总结*

采集DCS系统OPC UA协议数据并通过MQTT协议转发是一个常见的工业物联网应用场景。通过合理的需求分析、技术方案设计和系统实施，可以实现数据的实时采集、可靠传输和高效利用。

我们将持续深耕工业物联网领域，不断创新产品和技术，为企业提供更加优质的数据采集解决方案，助力企业实现智能化转型，共创工业美好未来！
