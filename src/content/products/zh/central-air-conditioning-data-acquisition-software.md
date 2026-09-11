---
title: "格力美的海尔中央空调数据采集远程监控上位机软件"
summary: "空调上位机是工业环境空调系统的集中监控。它基于MODBUS/SCADA软件构建，通过图形化界面实现对分散设备群的远程集中控制、运行参数实时监测，支持多种空调品牌通讯，对中央空调的控制。"
image: "/images/products/1766394220592015.png"
order: 262
category: "daq-software"
hidden: false
---
**产品详情**

# **1说明**

空调上位机是工业环境空调系统的集中监控。它基于MODBUS/SCADA软件构建，通过图形化界面实现对分散设备群的远程集中控制、运行参数实时监测，支持多种空调品牌通讯，对中央空调的控制。

# **2使用说明**

## **2.1软件安装**

本软件为纯绿色软件无需安装，拷贝到系统任意位置即可运行。

以下为中央空调智能控制器的业务实现拓扑示意图，仅供参考，具体以实际方案为准。

**水机：**

![](/images/products/1766393809990872.png)

**氟机**：

![](/images/products/1766393830786830.png)

**智能控制器与上位机通讯逻辑图**

![](/images/products/1766393852544265.png)

## **2.2软件说明**

### **2.2.1软件目录**

![](/images/products/1766393877665965.png)

### **2.2.2软件启动**

![](/images/products/1766393920145691.png)

软件支持通过MODBUS-TCP方式连接空调控制器，启动前需要在data/connect.txt

文件配置对应空调控制器的ip、端口。

软件启动后如下图：

![](/images/products/1766393968618846.png)

软件支持修改通道内空调显示名称，修改data/name.txt文件，根据实际场景修改对应空调名称。

![](/images/products/1766394006120326.png)

通道内空调名称自定义显示如下图：

![](/images/products/1766394008174256.png)

# **3空调控制**

双击通道内空调，显示空调可控制属性弹窗，如下图：

![](/images/products/1766394009786209.png)

## **3.1功能控制**

### **3.1.1 开关控制**

![](/images/products/1766394010766602.png)

### **3.1.2 模式控制**

![](/images/products/1766394011172093.png)

### **3.1.3 设定温度**

![](/images/products/1766394011634304.png)

### **3.1.4 设定湿度**

![](/images/products/1766394011162723.png)

## **4日志**

### **4.1系统运行日志记录和通讯报文记录**

![](/images/products/1766394011843803.png)

**注：下表中空调品牌支持和代码的定义(持续增加中)：**

**值**

**空调品牌中文**

**空调系列**

**空调品牌英文**

1

特灵(Trane)

RTHD_CH530

TRANE_CH

2

约克(York)

YK_ST

YORK_CH

3

开利(Carrier)

30HXC_ST

CARRIER_PD4_GXHX

4

特灵(Trane)

CVHE_UC800

TRANE_UC800

5

开利(Carrier)

19XR_ST

CARRIER 19XR

6

约克(York)

YEWS_E

YORK YEWSE

7

约克(York)

YK_ELINK

YORK_ELINK

8

特灵(Trane)

RTHD_UC800

TRANE_UC800_LG

9

顿汉布什(DB)

WCFX_ST

DB WCFX

10

开利(Carrier)

30XW_ST

CARRIER 30XA PLUS

11

约克(York)

YR_ST

YORK YR ELINK

12

顿汉布什(DB)

WCFX_ICE

DB WCFX ICE

13

美的(Midea)

SCWE_ST

MIDEA_LG

14

格力(Gree)

LSBLX_ST

GREE LX

15

麦克维尔(McQuay)

PFS_ST

McQuay_FPS

16

顿汉布什(DB)

DCLC_ST

DB-DCLC

18

约克(York)

YEWS_D

YORK_YESWD

19

麦克维尔(McQuay)

MHS_ST

McQuay_MHS

20

约克(York)

YSPA_ST

YORK_YSPA

21

约克(York)

YS_ST

YORK_YS

22

海尔(Haier)

HX_ST

HAIER_HX500

23

麦克维尔(McQuay)

WSC_ST

McQuay_WSC

24

顿汉布什(DB)

WCFX_V6

DB_WCFX_V6

25

约克(York)

YEWS_B

YORK_YESWB

26

约克(York)

YESW_C

YORK_YESWC

27

海尔(Haier)

LSBLX_ST

HAIER_BPLX

28

格力(Gree)

LSBLG_Nb

GREE_LSBLG

29

约克(York)

YK_XRBA

YORK_YK_XRBA

30

开利(Carrier)

30XQ_CN

Carrier_30XQ_ST

31

开利(Carrier)

30XQ_ST

Carrier_30XQ_CN

100

风冷模块模拟器

风冷模块模拟器

M_EMULATOR

101

麦克维尔(McQuay)

MAC_Old

McQuay_M

102

美的(Midea)

LSQ_AN1

Midea_Md

103

天加(Tica)

TCA_ST

TICA_M

104

顿汉布什(DB)

ACDS_ST

DUNAN_M

105

国祥(Kingair)

KMS_ST

KINGAIR_M

106

开利(Carrier)

30RQ

CARRIER_M

107

海信(Hisense)

HFR_ST

HISENSE_M

108

特灵(Trane)

CXAJ_ST

TRANE_M

109

格力(Gree)

LSQWRF_ST

GREE_M

110

清华同方(ThTf)

FS_ST

QHTF_M

111

日立(Hitachi)

RCUA_ST

HITACHI_M

112

约克(York)

YCAE

YORK_YCAE

113

约克(York)

YCAB

YORK_YCAB

114

天加(Tica)

Tica_OLD

TICA_OLD

115

约克(York)

YEAS

YORK_YEAS

116

美的(Midea)

LSQ_AG1

MIDEA_LSQ

117

格力(Gree)

LSQWRF_ST

HAIER_M

118

约克(York)

YCAE_D

YORK_YCAE_D

119

麦克维尔(McQuay)

MAC_ST

McQuay_MAC

120

海尔(Haier)

LSQWRF_D

HAIER_IGU21

121

美的(Midea)

LSQ_A

Midea_M_OLD

255

模拟器

模拟器

EMULATOR
