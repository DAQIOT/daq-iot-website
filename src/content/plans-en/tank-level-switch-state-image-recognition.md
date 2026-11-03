---
title: "Image Recognition of Tank Levels and Distribution Switch Status"
summary: "A non-intrusive vision system that reads storage tank levels from the sight glass and judges breaker and disconnector positions from images, replacing manual inspection rounds."
---
Image Recognition of Tank Levels and Distribution Switch Status

## 1. Background and Core Objectives

Manual inspection of tank levels is slow, and a misjudged switch position carries real risk. Drawing on field experience with the SC-GP-CAM capture-and-recognition terminal from Shanghai Daq IoT, the solution builds a non-intrusive vision system (DAQ FOR OCR SS) that monitors tank levels in real time and determines switch status automatically, supporting unmanned management of industrial equipment.

## 2. Tank Level Image Recognition

### 2.1 Hardware Deployment

The Shanghai Daq SC-GP-CAM timed-capture terminal (IP65, −25 °C to 75 °C) is fixed to the sight glass area of the tank with a bracket or clamp band, with the camera aimed at the level scale. The terminal transmits over WiFi, 4G or Ethernet, and an optional PoE supply removes the cabling cost.

### 2.2 Software and Algorithm Workflow

• Image preprocessing: Gaussian filtering removes noise and histogram equalization lifts contrast, suppressing glare and oil-fouling interference;

• Level feature recognition: a U-Net++ segmentation network extracts the liquid surface edge, and the level is computed against a calibration reference on the tank such as a dip rod;

![Image Recognition of Tank Levels and Distribution Switch Status](/images/plans/tank-level-switch-state-image-recognition/img-01.webp)

![Image Recognition of Tank Levels and Distribution Switch Status](/images/plans/tank-level-switch-state-image-recognition/img-02.webp)

![Image Recognition of Tank Levels and Distribution Switch Status](/images/plans/tank-level-switch-state-image-recognition/img-03.webp)

*3. Data Output*

Results are pushed to third-party platforms over Modbus RTU/TCP, HTTP or MQTT, and the original images are stored on a local server for manual review.

## 3. Switch Status Image Recognition

### 3.1 Hardware Configuration

The same SC-GP-CAM terminal is reused. For switchgear such as a 220 kV disconnector, the camera angle is adjusted to cover the contact area. The terminal captures on a schedule, and the interval is configurable from seconds to minutes or hours.

### 3.2 Recognition Logic

• Region location: an improved SURF algorithm locates the switch target area and separates background interference;

• Status classification: contour features of the switch arm and contacts (area, angle difference) are passed to an SVM classifier that decides open or closed, with accuracy ≥98% on the test set;

• Interference resistance: a GAN model simulates rain, fog and glare to improve accuracy.

![Image Recognition of Tank Levels and Distribution Switch Status](/images/plans/tank-level-switch-state-image-recognition/img-04.webp)

![Image Recognition of Tank Levels and Distribution Switch Status](/images/plans/tank-level-switch-state-image-recognition/img-05.webp)

![Image Recognition of Tank Levels and Distribution Switch Status](/images/plans/tank-level-switch-state-image-recognition/img-06.webp)

![Image Recognition of Tank Levels and Distribution Switch Status](/images/plans/tank-level-switch-state-image-recognition/img-07.webp)

*3. Data Output*

### 3.3 Application Value

Manual site inspection is no longer needed, switch status is reported within seconds, and the data syncs to the equipment management system to support remote O&M of the power system.

## 4. Solution Advantages

1. Low-cost deployment: non-intrusive installation with no equipment modification, and a lower per-terminal cost than conventional sensor solutions;

2. High compatibility: one terminal serves mechanical meters, switches and other scenarios, and connects to a range of platforms;

3. Lower labor cost: once installed it replaces manual inspection rounds, gives real-time status visibility and cuts on-site maintenance cost.

## 5. Summary

Built on Daq IoT's wireless vision terminal, recognition algorithms and software data integration, the solution delivers intelligent monitoring of tank levels and switch status for oil and gas, power and other industrial sites. The hardware and algorithm framework are already mature, so it can be deployed quickly and keeps the customer's digital upgrade cost down.
