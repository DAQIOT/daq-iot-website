---
hidden: true
title: Vision-Based Meter Reading OCR Software
summary: >-
  📊 Vision-Based Meter Reading OCR Software – Product Specifications
image: /images/products/1755137746482795.png
order: 4
category: daq-software
---
# 1 **illustrate**

1.1 Registration is required for the first use. The trial period is 45 days. If a permanent authorization code is required, please contact the service provider .

1.2 Supports identification of various types of digital instruments, and can identify some mechanical digital instruments .

1.3 The image to be recognized can be processed through the image preprocessing parameter configuration . In order to improve the recognition speed, the area to be recognized must be selected first. The selection of inclined areas and sub-recognition areas is supported. The latest version has added automatic recognition of instrument areas. This function requires the collection of a certain amount of images in advance and the annotation training of the instrument area. After the training is completed, the model is placed in the specified directory and the software will automatically call and recognize it.

1.4 Identify the main program as CDialRecService.exe

1.5 This software is developed using vs2015 and requires the installation of the VS015 environment.

1.6 The data source of this software supports local directory/FTP/HTTP/CGI

1.7.CGI mode can be configured to automatically connect to the camera to capture pictures at regular intervals and store them in the specified directory

1.8 After adjusting the recognition parameters in the configuration interface, the adjustment will take effect without restarting the software

1.9 The software supports modbus service and client publishing data

1.10 The software supports inserting data into MySQL database

1.11 The software provides local recognition result query and scheduled export functions

# 2 **Instructions**

##  2.1 **Software Installation**

run it by copying it to any location in the system .

## 2.2 **Software Description**

###  2.2.1 **Software Catalog**

###  2.2.2 **Software Startup**

The software starts up as shown in the above interface, and you can switch to the application software parameter page to set parameters

Automatic restart: When you exit the software manually, the software will automatically restart

Startup: When the computer is turned on, the software automatically starts

Running mode: After the configuration is completed, it can be changed to service mode, configuration mode (if the software is being configured, the background recognition thread will not run)

Retention period: The retention period of the image. If it exceeds the retention period, it will be deleted (and the database record will be deleted at the same time)

Restart time: You can set the time at which the software restarts

# 3 **Added identification instrument**

Switch to the data source configuration interface and follow the arrow direction to operate

First enter the data source name -> click ![](https://www.daq-iot.com/core/extend/ueditor/themes/default/images/spacer.gif)Add Data Source -> Select Data Source (Local) -> Select the local file path (can be filled directly in the input box) -> click the Save Parameters button to save the parameters.

# 4 **Add recognition template**

Switch to the recognition template configuration interface, and configure the recognition template as shown below. Enter the dial name -> click ![](https://www.daq-iot.com/core/extend/ueditor/themes/default/images/spacer.gif)Add Instrument -> click the Error Parameter button to save the parameters -> click the Area Recognition button and select a picture in the pop-up dialog box -> the software will automatically jump to the Recognition Area Parameter interface, configure the recognition area -> click the Recognition Test button (the recognition result will be displayed on the interface)

# 5 **Identify Configuration**

(1) Select area to identify the picture

(2) The picture is shown as follows. Please note that you should turn on the area selection switch first (the left side is the area to be identified by the instrument, and the right side is the specific digital area within the area)

(3) Frame the recognition area (left-click to select points, the software will automatically connect them into lines. After selecting the 4th point, you can right-click to close the selection. If there is an error in the middle, you can click the previous step to go back one point, or click the Clear Selection button to re-frame the area). When you click the Save Selection button, the software will automatically cut out the area (note that the default pre-processing parameters will be used (you can switch to the pre-processing parameter interface to adjust and recognize again).

(4) clicking the Save Area button on the left, the selected area will be displayed on the right. If it is not displayed proportionally, you can click the Refresh button or click the Area Recognition button to re-recognize it.

(5) Follow the arrow instructions to perform the operations in sequence. Note: Make sure that the single data selected in the box should contain the complete digital area as much as possible, otherwise it may be recognized inaccurately. After the configuration is completed, the template will take effect.

(6) To adjust the identification preprocessing parameters, you can focus on modifying the parameters indicated by the arrows in the figure. You can see the prompt information for details (hovering the mouse over the input box will display the prompt information)

(7) Digital parameter configuration, pay attention to select SVM mode, which has the highest recognition rate. If the last digit is not needed, you can skip the box selection when recognizing the area, and set the unit to 10.

# 6 **Improve OCR recognition template**

This function is only for 64-bit programs. The recognition rate can be improved by continuously improving the digital recognition library and retraining. This function can effectively improve the accuracy when the instrument data area is unclear.

The identification template directory is as follows (wocrdata ont):

You can manually put the image into the corresponding digital directory, and restart the software to take effect (or use the software's area recognition function to identify it once)

The process of improving the OCR template is as follows:

(1) Confirm that the value of the isDebug configuration item in the configuration file DialRecognCfg.ini is 2, as shown below:

isDebug Description:

When 0:

No recognition intermediate files will be generated

When 1:

Generate the recognition result image of each image and save it in the digit directory (note that the software itself will not delete the directory, you need to delete it manually)

Save the generated character recognition image to the regcon_temp directory (note that the software itself will not delete the directory, you need to delete it manually)

When it is 2: the generated character recognition image will be saved in the regcon_temp directory (note that the software itself will not delete the directory, you need to delete it manually)

(2) 

(3) Check the regcon_temp directory and manually sort out the images with recognition errors. The directory is as follows:

Check directories 0 to 9 one by one and compare the images to see if they are consistent with the values of the corresponding directories. Take directory 0 as an example, as shown below:

Enter the font� directory and find the picture that is not 0. The arrows in the figure above indicate 6 and 8 respectively. Copy the picture with 6 to the wocrdata ont directory; copy the picture with 8 to the wocrdata ont8 directory. Repeat the above steps in directories 0~9 to complete the OCR template.

(4) When all images have been processed, you can delete the regcon_temp directory and restart the software

Exit the software (right-click the taskbar icon -> Exit, as shown below)

# 7 **Camera FTP Configuration**

(1) Open Google Chrome, enter the IP address of the camera in the browser, and enter the camera account and password in the pop-up interface. The default account is admin, and the default password is admin (or admin123), as shown below:

(2) Select Parameter Settings->Advanced Settings, as shown below:

(3) Configure the picture to save the parameters, follow the arrow flow in the figure below, click Fill once, and then click the Apply button to save the configuration.

(4) Click the FTP settings button in the figure above to enter the FTP configuration interface, server: 192.168.12.33, port: 21, user name: Administrator, password: ABCabc123. Configure as shown in the arrows in the figure below:

Finally, click Test. If the configuration is correct, the following prompt will pop up:

# ❓ Frequently Asked Questions (FAQ)

### 1\. What is Vision-Based Meter Reading OCR Software?

It is an AI-powered system that uses camera images to automatically recognize and extract numerical readings from meters, gauges, and industrial instruments.

* * *

### 2\. What types of meters can the OCR system read?

It can read analog dial meters, digital LCD/LED meters, electricity meters, water flow meters, pressure gauges, temperature indicators, and other industrial instruments.

* * *

### 3\. Does the system require special cameras?

No. It can work with standard IP cameras, CCTV systems, USB cameras, or industrial IoT camera modules depending on project requirements.

* * *

### 4\. Can it work in real-time monitoring applications?

Yes. The system supports real-time image processing and continuous data extraction for live monitoring scenarios.

* * *

### 5\. How accurate is the OCR recognition?

Accuracy depends on image quality and environment, but the system is optimized with AI algorithms to achieve high industrial-grade recognition performance.

* * *

### 6\. Can the software be integrated with other systems?

Yes. It supports API integration, JSON/CSV output, and can connect with SCADA, IoT platforms, ERP systems, and cloud databases.

* * *

### 7\. Does it support cloud and local deployment?

Yes. The system supports cloud-based deployment, on-premise installation, and edge computing solutions for different industrial environments.

* * *

### 8\. What industries commonly use this system?

It is widely used in power utilities, water management, oil & gas, smart factories, industrial automation, and remote infrastructure monitoring.
