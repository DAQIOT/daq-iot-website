---
title: "Gree/Midea/Haier Central Air Conditioning Data Acquisition Remote Monitoring Software"
summary: >-
  The air-conditioning host software provides centralized monitoring of air-conditioning systems in industrial environments. Built on MODBUS/SCADA software, it uses a graphical interface to achieve remote centralized control of dist…
image: "/images/products/1766394220592015.png"
order: 262
category: "dataacquisitionsoftware"
hidden: false
---
**Product Details**

# **1 Introduction**

The air-conditioning host software provides centralized monitoring of air-conditioning systems in industrial environments. Built on MODBUS/SCADA software, it uses a graphical interface to achieve remote centralized control of distributed equipment groups and real-time monitoring of operating parameters, supporting communication with a range of air-conditioning brands and control of central air conditioners.

# **2 Instructions**

## **2.1 Software Installation**

This is portable ("green") software and requires no installation — copy it anywhere on the system and run it.

The following topology diagrams for the central air-conditioning smart controller are for reference only; the actual solution prevails.

**Water-cooled units:**

![](/images/products/1766393809990872.png)

**Refrigerant (fluorine) units:**

![](/images/products/1766393830786830.png)

**Communication logic between the smart controller and the host software**

![](/images/products/1766393852544265.png)

## **2.2 Software Description**

### **2.2.1 Software Directory**

![](/images/products/1766393877665965.png)

### **2.2.2 Software Startup**

![](/images/products/1766393920145691.png)

The software connects to air-conditioning controllers over MODBUS-TCP. Before starting, configure the corresponding controller IP and port in the data/connect.txt file.

The software after startup is shown below:

![](/images/products/1766393968618846.png)

The displayed air-conditioner name in each channel can be changed by editing data/name.txt according to the actual scenario.

![](/images/products/1766394006120326.png)

Custom channel names are displayed as follows:

![](/images/products/1766394008174256.png)

# **3 Air-Conditioner Control**

Double-click an air conditioner in a channel to open its controllable-properties dialog, as shown below:

![](/images/products/1766394009786209.png)

## **3.1 Function Control**

### **3.1.1 On/Off Control**

![](/images/products/1766394010766602.png)

### **3.1.2 Mode Control**

![](/images/products/1766394011172093.png)

### **3.1.3 Temperature Setting**

![](/images/products/1766394011634304.png)

### **3.1.4 Humidity Setting**

![](/images/products/1766394011162723.png)

## **4 Logs**

### **4.1 System Operation Log and Communication Message Log**

![](/images/products/1766394011843803.png)

**Note: the table below shows supported air-conditioning brands and the code definitions (continuously expanding):**

| Value | Brand (Chinese) | Air-conditioning series | Brand code (English) |
| --- | --- | --- | --- |
| 1 | Trane | RTHD_CH530 | TRANE_CH |
| 2 | York | YK_ST | YORK_CH |
| 3 | Carrier | 30HXC_ST | CARRIER_PD4_GXHX |
| 4 | Trane | CVHE_UC800 | TRANE_UC800 |
| 5 | Carrier | 19XR_ST | CARRIER 19XR |
| 6 | York | YEWS_E | YORK YEWSE |
| 7 | York | YK_ELINK | YORK_ELINK |
| 8 | Trane | RTHD_UC800 | TRANE_UC800_LG |
| 9 | Dunham-Bush | WCFX_ST | DB WCFX |
| 10 | Carrier | 30XW_ST | CARRIER 30XA PLUS |
| 11 | York | YR_ST | YORK YR ELINK |
| 12 | Dunham-Bush | WCFX_ICE | DB WCFX ICE |
| 13 | Midea | SCWE_ST | MIDEA_LG |
| 14 | Gree | LSBLX_ST | GREE LX |
| 15 | McQuay | PFS_ST | McQuay_FPS |
| 16 | Dunham-Bush | DCLC_ST | DB-DCLC |
| 18 | York | YEWS_D | YORK_YESWD |
| 19 | McQuay | MHS_ST | McQuay_MHS |
| 20 | York | YSPA_ST | YORK_YSPA |
| 21 | York | YS_ST | YORK_YS |
| 22 | Haier | HX_ST | HAIER_HX500 |
| 23 | McQuay | WSC_ST | McQuay_WSC |
| 24 | Dunham-Bush | WCFX_V6 | DB_WCFX_V6 |
| 25 | York | YEWS_B | YORK_YESWB |
| 26 | York | YESW_C | YORK_YESWC |
| 27 | Haier | LSBLX_ST | HAIER_BPLX |
| 28 | Gree | LSBLG_Nb | GREE_LSBLG |
| 29 | York | YK_XRBA | YORK_YK_XRBA |
| 30 | Carrier | 30XQ_CN | Carrier_30XQ_ST |
| 31 | Carrier | 30XQ_ST | Carrier_30XQ_CN |
| 100 | Air-cooled module emulator | - | M_EMULATOR |
| 101 | McQuay | MAC_Old | McQuay_M |
| 102 | Midea | LSQ_AN1 | Midea_Md |
| 103 | Tica | TCA_ST | TICA_M |
| 104 | Dunham-Bush | ACDS_ST | DUNAN_M |
| 105 | Kingair | KMS_ST | KINGAIR_M |
| 106 | Carrier | 30RQ | CARRIER_M |
| 107 | Hisense | HFR_ST | HISENSE_M |
| 108 | Trane | CXAJ_ST | TRANE_M |
| 109 | Gree | LSQWRF_ST | GREE_M |
| 110 | Tsinghua Tongfang | FS_ST | QHTF_M |
| 111 | Hitachi | RCUA_ST | HITACHI_M |
| 112 | York | YCAE | YORK_YCAE |
| 113 | York | YCAB | YORK_YCAB |
| 114 | Tica | Tica_OLD | TICA_OLD |
| 115 | York | YEAS | YORK_YEAS |
| 116 | Midea | LSQ_AG1 | MIDEA_LSQ |
| 117 | Gree | LSQWRF_ST | HAIER_M |
| 118 | York | YCAE_D | YORK_YCAE_D |
| 119 | McQuay | MAC_ST | McQuay_MAC |
| 120 | Haier | LSQWRF_D | HAIER_IGU21 |
| 121 | Midea | LSQ_A | Midea_M_OLD |
| 255 | Emulator | - | EMULATOR |
