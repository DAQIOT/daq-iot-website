---
title: "Conveyor Belt Aggregate Foreign Object Detection Vision System"
summary: >-
  The Conveyor-Belt Aggregate Foreign-Object Detection System (DAQ-BFODS) is an industrial-grade foreign-object intelligent detection software platform developed by Shanghai Daq-IoT Technology. By connecting industrial cameras, the…
image: "/images/products/1783303866478085.png"
order: 265
category: "dataacquisitionsoftware"
hidden: false
---
**Product Details**

# **1 Software Overview**

The Conveyor-Belt Aggregate Foreign-Object Detection System (DAQ-BFODS) is an industrial-grade foreign-object intelligent detection software platform developed by Shanghai Daq-IoT Technology. By connecting industrial cameras, the system continuously acquires real-time images of conveyor belts, workstations and similar scenes, and uses a built-in ONNX deep-learning model to automatically identify and annotate foreign objects, stones and other targets within milliseconds, enabling unattended intelligent inspection.

The system supports concurrent acquisition from multiple cameras, local SQLite data storage, a web-service interface and MQTT / Modbus data upload, and can integrate flexibly with existing SCADA / MES systems. The recognition model can be replaced and retrained, adapting to mining conveyor belts, grain sorting, factory production lines and many other scenarios.

![](/images/products/1783303794156412.png)

**Note:** This document is intended for system deployment personnel, on-site operators and model-debugging engineers. For SDK development integration documentation, please contact technical support.

## **1.1 Applicable Scenarios**

- Foreign-object (stone, iron) detection on mining/quarry conveyor belts
- Foreign-object inspection on grain/agricultural-product sorting lines
- Product appearance defect detection on factory production lines
- Abnormal-object monitoring on warehouse shelves
- Other industrial scenarios requiring object detection on video frames

# **3 Main Functions**

| Module | Description |
| --- | --- |
| Multi-camera acquisition | Concurrent acquisition from multiple cameras, with configurable acquisition interval, trigger mode and image rotation angle |
| AI foreign-object recognition | Real-time recognition of foreign-object targets using an ONNX-format deep-learning model (YOLO series), annotating detection boxes and confidence on the image |
| Multi-level alarm notification | Local sound alarm, SMS alarm and phone-call alarm, with configurable minimum trigger count and alarm numbers |
| Historical data query | All acquisition and recognition records are stored in a local SQLite database, queryable and exportable by time, device and status |
| Built-in web service | An HTTP service starts automatically on launch (default port 9998) and provides REST interfaces for third-party systems |
| Multi-protocol data upload | MQTT, Modbus RTU/TCP, MySQL and other protocols to report recognition results to host systems or cloud platforms |
| Scenario-adaptive training | The recognition model (best.onnx + best.names) can be replaced and retrained for different scenarios without modifying the software itself |
| Automatic data cleanup | Configurable retention days and maximum record count for historical data, preventing disk-space exhaustion |

# **4 System Architecture**

The system core is a three-stage pipeline: acquisition thread pool -> AI recognition engine -> result processing.

- The acquisition thread grabs image frames from the camera at the TIMER interval set in camera.ini;
- Frames are fed into the ONNX inference engine (calling weights/best.onnx) to perform object detection;
- Detection results are written to the local database, and alarms and data uploads are triggered according to the configuration.

**Camera -> acquisition thread -> AI recognition engine -> result processing -> Web API / MQTT / alarm**

Configuration files: camera.ini controls acquisition parameters, DialRecognCfg.ini controls recognition and global parameters, and weights/best.onnx is the model file.
