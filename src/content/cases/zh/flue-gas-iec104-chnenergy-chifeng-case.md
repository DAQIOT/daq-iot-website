---
title: 烟气监测数据转IEC104规约对接电业局平台-国能赤峰生物发电项目
summary: 国能赤峰生物发电项目，环保数据原有 HJ212 上传环保局平台，需将 Modbus/232 接口烟气数据转换为 IEC104 协议，转发至电业局平台。
image: /images/cases/4c.png
industry: 其他
order: 59
---
## **1 项目需求**

项目背景：国能赤峰生物发电公司环保数据已经接入环保数采仪，通过HJ212协议接入环保局平台。

根据政策要求，需要将烟气数据上传转发并接入电业局平台。

烟气表为modbus协议/232接口，需转换IEC104协议转发至电业局平台。

![](/images/cases/3c.png)

现场环保数采仪配电箱

![](/images/cases/4c.png)

环保数据报文截图

![](/images/cases/5c.png)

目标报文:IEC104报文效果展示

## **2 项目方案**

![](/images/cases/6c.png)

电业局接入方案示意图

## **3 项目实施**

1.由数采物联网公司提供协议转换网关给客户。

2.客户收到网关后配合我司技术人员进行接线安装，并提供采集点表。由技术人员对协议网关进行远程配置。（见下图）

![](/images/cases/7c.png)

烟气点表数据单位说明

![](/images/cases/8c.png)

烟气数据点表示意图

![](/images/cases/9c.png)

点表参数配置

3.通过配置网关转换至104协议

![](/images/cases/10c.png)

4. 上传至电业局平台，因客户数据保密问题，用PMA协议软件仿真测试，见下图。

![](/images/cases/11c.png)

![](/images/cases/12c.png)

IEC10报文数据调试过程

![](/images/cases/13c.png)
