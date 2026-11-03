---
title: "Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan for Distillery Fermentation Pits"
summary: "XX Distillery and Guizhou XX Liquor Co., Ltd. (founded in 2003) sit on the banks of the Chishui River in Maotai Town, Renhuai City, Guizhou Province, a region known for sauce-aroma liquor."
---
Cloud Photo Meter Reading and Energy Consumption Monitoring Technical Installation Plan for Distillery Fermentation Pits

## Background and Requirements

XX Distillery is located in Maotai Town, Renhuai City, Guizhou Province. Guizhou XX Liquor Co., Ltd. was founded in 2003. The company sits on the banks of the Chishui River in Maotai Town, a renowned sauce-aroma liquor region. The planned site covers 923 mu, with an annual output of 99000 tons of premium Daqu Kunsha sauce-aroma liquor and over 20000 jobs.

Eight standardized liquor-making workshops with a total of 984 fermentation pits are already in production, yielding over 3000 tons of premium Daqu sauce-aroma liquor per year. There is also 1 standardized packaging workshop of about 50000 m², 2 Daqu-making workshops of about 56000 m², 1 complex building of 25000 m², and 4 liquor warehouses holding nearly 20000 tons of sauce-aroma liquor.

The site survey found about 25 tap water meters, about 45 electricity meters, and several gas and steam meters. The meters are scattered across the plant, which makes centralized meter reading difficult (see the tables below). For plant-wide water, electricity, steam and gas energy consumption statistics, the traditional approach uses manual meter reading: high labor cost, tedious record-keeping, and records that are often confused or illegible. The survey also found that most meters are mechanical devices with no communication interface (roller-counter water meters and electricity meters). Conventional data acquisition through a data interface is therefore not possible. These on-site constraints make data acquisition a significant challenge.

| Team | Location Description | Control Equipment Installation Range | Remarks |
|---|---|---|---|
| No. 1 Liquor-Making Workshop | 4 teams, 4 steamers | 80 m between devices |  |
| Team | Location | Control Equipment Installation Range |  |
| Boiler Room |  |  |  |

Table 1 Steam and Gas Meter List

| Team | Water Meter Location | Water Type | Water Meter Location |
|---|---|---|---|
| General contractor rear-hill site, living area | Riverside-201# | Tap water |  |
| General contractor front site | 10,000-ton Liquor Warehouse Front-202# | Tap water |  |
| General contractor rear site | 10,000-ton Liquor Warehouse Rear-203# | Tap water |  |
| General contractor rear site | Weighbridge-204# | Tap water |  |
| Fit-out contractor water meter | 3rd Floor of Complex Building (included in district water meter)-205# | Tap water |  |
| No. 3 Liquor Warehouse | Water Purification Room-206# | Tap water | No. 3 Liquor Warehouse water purification room |
| Packaging Workshop | Water Purification Room-207# | Tap water | Water purification room at the packaging building parking lot |
| Packaging Workshop | 1st Floor Water Well-208# | Tap water | In the water/electricity shaft near the restroom on the 1st floor of the packaging building |
| Complex Building | High Zone-209# | Tap water | In the water/electricity shaft beside the elevator on the 2nd floor |
| Complex Building | Low Zone-210# | Tap water | In the water/electricity shaft beside the elevator on the 2nd floor |
| Complex Building | Kitchen Cold Water-211# | Purified water (from the packaging workshop) | Main water pipe room feeding the canteen (toward the packaging building) |
| Boiler Room | Tap Water-212# | Tap water | At the main water pipe on the side of the boiler room |

(The full table is longer; only the first 12 rows are shown here.)

Table 2 Water Meter List

| Team | Electricity Meter Location | CT Ratio | Electricity Meter Location |
|---|---|---|---|
| Packaging Workshop | Old Production Line-101# | 80 | In the old packaging line distribution cabinet on the 3rd floor of the packaging building |
| Packaging Workshop | New Production Line-102# | 60 | In the transformer-row distribution cabinet in the HV distribution room |
| Packaging Workshop | Air Conditioner 1-103# | 80 | In the transformer-row distribution cabinet in the HV distribution room |
| Packaging Workshop | Air Conditioner 2-104# | 60 | In the transformer-row distribution cabinet in the HV distribution room |
| Packaging Workshop | Air Conditioner 3-105# | 60 | In the transformer-row distribution cabinet in the HV distribution room |
| Packaging Workshop | Elevator 1-106# | 1 | Elevator machine room on the top floor of the packaging building (toward workshops 1-3) |
| Packaging Workshop | Elevator 2-107# | 1 | Elevator machine room on the top floor of the packaging building (toward the administration building) |
| Packaging Workshop | Emergency Box-108# | 1 | In the emergency distribution cabinet in the HV distribution room |
| Packaging Workshop | Water Purification Room-109# | 80 | Water purification room at the packaging building parking lot |
| Packaging Workshop | Outdoor Landscaping-110# | 1 | Outdoor box near the river (beside the barbecue and viewing platform) |
| Packaging Workshop | Lighting, Sockets-111# | 50 | In the wall-mounted electrical box in the HV distribution room (toward the fan room) |
| Packaging Workshop | Fire Control Room-112# | 1 | In the main electrical box of the fire control room |

(The full table is longer; only the first 12 rows are shown here.)

Table 3 Electricity Meter List

To address these difficulties in collecting water, electricity, steam and gas consumption data, matching products were selected and an implementation plan was provided. Energy consumption data is collected effectively and in real time, making energy management easier. To meet the current requirements, acquisition devices are added to the meters and data from all types of energy metering instruments is transmitted wirelessly to the data platform.

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-01.webp)

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-02.webp)

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-03.webp)

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-04.webp)

*Main Meter Types*

## Matching Acquisition Products

The acquisition product matched to these meters is Daq IoT's image-recognition cloud photo product: the Low-Power Wireless Photo Meter-Reading Terminal (SC-LP-CAM). Its main parameters and functions:

| No. | Product Name | Function Description | Function Description | Parameter Configuration | Advantages |
|---|---|---|---|---|---|
| 1 | Low-Power Wireless Photo Meter-Reading Terminal (SC-LP-CAM) | A photo meter-reading terminal series: a battery-powered wireless timed-camera terminal for fast meter reading of traditional old mechanical meters (water, electricity, gas, pressure meters, etc.) or instruments that cannot communicate directly. The terminal captures images at set intervals, uploads the photos to a server for analysis and recognition, and derives the meter reading. Users can view the original images and the recognition results.
The terminal has a built-in long-life lithium battery and supports NB-IOT communication, which overcomes wireless signal blockage caused by special site conditions, greatly simplifying on-site deployment and cutting installation costs. | 1 Image Acquisition Characteristics
Image format: jpg
Image resolution: up to 640*480
Acquisition interval: 10 min to 24 h, remote configuration supported
Wake-up modes: interval wake-up; scheduled wake-up; alarm wake-up
2 Electrical Characteristics
Power supply: 3.6 V long-life lithium battery (non-rechargeable)
Battery capacity: 8500 mAh
Power consumption: current below 200 mA
Standby current: below 5 uA
3 Mechanical Characteristics
Material: PC plastic (enclosure)
Main unit protection rating: IP65
Water meter model dimensions: 135 mm × 95 mm × 55 mm; electricity meter model dimensions: 120 mm × 110 mm × 50 mm; main unit mounting: adhesive or narrow-band clamp
4 Operating Environment
Ambient temperature −25 °C to 75 °C, humidity 0 to 95% (non-condensing) | 1 Image Acquisition Characteristics
Image format: jpg
Image resolution: up to 640*480
Acquisition interval: 10 min to 24 h, remote configuration supported
Wake-up modes: interval wake-up; scheduled wake-up; alarm wake-up
2 Electrical Characteristics
Power supply: 3.6 V long-life lithium battery (non-rechargeable)
Battery capacity: 8500 mAh
Power consumption: current below 200 mA
Standby current: below 5 uA
3 Mechanical Characteristics
Material: PC plastic (enclosure)
Main unit protection rating: IP65
Water meter model dimensions: 135 mm × 95 mm × 55 mm; electricity meter model dimensions: 120 mm × 110 mm × 50 mm; main unit mounting: adhesive or narrow-band clamp
4 Operating Environment
Ambient temperature −25 °C to 75 °C, humidity 0 to 95% (non-condensing) | 1. Lithium battery power, supporting about 3000 captures; with one capture per day, battery life is around 7 years;
2. Built-in China Telecom IoT NB card with nationwide coverage;
3. Multiple form factors (square, round, convex) to fit on-site industrial meters quickly;
4. Companion cloud platform that pushes captured images and recognition results on schedule, with a free API;
5. Clear image quality, recognition accuracy above 99%;
6. Simple installation, reducing construction work and cost. |
| 1 | Low-Power Wireless Photo Meter-Reading Terminal (SC-LP-CAM) | A photo meter-reading terminal series: a battery-powered wireless timed-camera terminal for fast meter reading of traditional old mechanical meters (water, electricity, gas, pressure meters, etc.) or instruments that cannot communicate directly. The terminal captures images at set intervals, uploads the photos to a server for analysis and recognition, and derives the meter reading. Users can view the original images and the recognition results.
The terminal has a built-in long-life lithium battery and supports NB-IOT communication, which overcomes wireless signal blockage caused by special site conditions, greatly simplifying on-site deployment and cutting installation costs. | 1 Image Acquisition Characteristics
Image format: jpg
Image resolution: up to 640*480
Acquisition interval: 10 min to 24 h, remote configuration supported
Wake-up modes: interval wake-up; scheduled wake-up; alarm wake-up
2 Electrical Characteristics
Power supply: 3.6 V long-life lithium battery (non-rechargeable)
Battery capacity: 8500 mAh
Power consumption: current below 200 mA
Standby current: below 5 uA
3 Mechanical Characteristics
Material: PC plastic (enclosure)
Main unit protection rating: IP65
Water meter model dimensions: 135 mm × 95 mm × 55 mm; electricity meter model dimensions: 120 mm × 110 mm × 50 mm; main unit mounting: adhesive or narrow-band clamp
4 Operating Environment
Ambient temperature −25 °C to 75 °C, humidity 0 to 95% (non-condensing) | 1 Image Acquisition Characteristics
Image format: jpg
Image resolution: up to 640*480
Acquisition interval: 10 min to 24 h, remote configuration supported
Wake-up modes: interval wake-up; scheduled wake-up; alarm wake-up
2 Electrical Characteristics
Power supply: 3.6 V long-life lithium battery (non-rechargeable)
Battery capacity: 8500 mAh
Power consumption: current below 200 mA
Standby current: below 5 uA
3 Mechanical Characteristics
Material: PC plastic (enclosure)
Main unit protection rating: IP65
Water meter model dimensions: 135 mm × 95 mm × 55 mm; electricity meter model dimensions: 120 mm × 110 mm × 50 mm; main unit mounting: adhesive or narrow-band clamp
4 Operating Environment
Ambient temperature −25 °C to 75 °C, humidity 0 to 95% (non-condensing) | 1. Lithium battery power, supporting about 3000 captures; with one capture per day, battery life is around 7 years;
2. Built-in China Telecom IoT NB card with nationwide coverage;
3. Multiple form factors (square, round, convex) to fit on-site industrial meters quickly;
4. Companion cloud platform that pushes captured images and recognition results on schedule, with a free API;
5. Clear image quality, recognition accuracy above 99%;
6. Simple installation, reducing construction work and cost. |

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-05.webp)

By default, the product reports (updates) data to the platform once per day; the acquisition frequency can be changed remotely.

## Acquisition Method, Installation Advantages and Implementation Considerations

### 3.1 Technical Approach

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-06.webp)

*Figure 4 Technical Solution Topology*

### 3.2 Implementation Advantages

• Simple installation and fast deployment help IoT projects get up and running quickly.

• Supports any IoT cloud platform and SCADA software, with data protocol integration.

• Supports data integration with mainstream cloud platforms including Alibaba Cloud, Baidu Tiangong, OneNet and Tencent Cloud.

• Supports remote parameter configuration, minimizing on-site installation and maintenance labor costs.

### 3.3 Factors Affecting Installation and Implementation

1. Confirm the meter images provided. The photo meter-reading terminal suits mechanical water, electricity and gas meters, or digital gauges whose screens stay on and whose display does not change.

2. Size of the meter dial (whether the terminal can fully cover the dial) and its shape — whether it matches the square or round product variant.

3. Single-line data acquisition (generally suitable for total-quantity readings).

4. Acquisition frequency. The fastest interval for battery-powered units is 10 minutes, adjustable from 10 minutes to 24 hours. For high-frequency acquisition, e.g. once every 5 minutes, battery life becomes a concern and the device must be modified to an externally powered version.

5. Power supply: standard battery power (about 3000 captures), with an optional externally powered version.

6. NB signal. Round variants normally use a built-in patch antenna; if the meter is in an enclosed space, verify signal strength and consider an external-antenna version.

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-07.webp)

*3.4 Data Platform Display*

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-08.webp)

The platform provides a free API for retrieving original images and recognition results, and for integration with third-party platforms.

## Installation Plan

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-09.webp)

![Distillery Cloud Photo Meter Reading and Energy Consumption Monitoring Installation Plan](/images/plans/distillery-pit-cloud-photo-meter-reading/img-10.webp)

*Previous Installation Examples*

### 4.1 Installation Process

### Water Meter Model Installation

Wipe the water meter dial clean and apply a ring of no-nail adhesive around the dial.

Insert a desiccant pack according to the installation environment.

Align the reader as closely as possible with the dial numbers.

Wait for the device to wake automatically (per the platform settings) and check whether the captured image is clear. A magnet can also activate the device; a lit indicator means activation succeeded.

Once the image uploads successfully, contact a technician to configure the device so it reads correctly.

### Electricity (Gas) Meter Model Installation

Peel off the 3M adhesive backing.

Open the outer cover of the meter reader.

Fix it in place with cable ties or adhesive, as appropriate.

4. Wait for the device to wake automatically (per the platform settings) and check whether the captured image is clear. A magnet can also activate the device; a lit indicator means activation succeeded.

5. Once the image uploads successfully, contact a technician to configure the device so it reads correctly.

### 4.2 Installation Precautions

1. Align the camera with the dial numbers and keep the flip cover closed.

2. Do not move the device after installation, as this affects recognition. If repositioning is needed, ask a technician to reconfigure the recognition algorithm.

3. Keep the device away from damp or rain-exposed locations.

4. After installation, use cable ties for extra fixation if needed.

5. For standard battery-powered units, do not set the wake-up interval too short on the platform; frequent uploads will drain the battery. The device can upload 2000~3000 images.

6. If the dial's iron cover is rusty or the dial is dirty, clean it with a scraper or spatula so the surface is dry and free of dust or oil.

7. For outdoor installations, prevent fogging by attaching a 1 g calcium chloride desiccant pack to the inner wall.

8. The power adapter for high-frequency units (220 VAC to 5 VDC) needs a 220 V supply (AC/DC compatible), so a power cable must be laid on site.

9. The photo terminal is compact and mounts directly on the meter head (with the supplied no-nail adhesive or 3M backing, or optional cable ties). Its flip-cover design does not interfere with normal manual meter reading.

10. After installation, route the lead of the supplied suction antenna (if any) to an open area above ground level or outside the enclosure to improve signal strength.

11. Each product has a unique identifier that can be bound to the on-site meter location (the platform can add a note with the location for each device ID).

## Construction Safety Measures

1. Check that tools are serviceable before use; replace any that are not.

2. Assign a dedicated supervisor during operations, responsible for quality and safety throughout the entire process.

3. Provide operators with necessary PPE, including workwear, shoes, gloves and helmets.

4. For electrical work, switch off and verify the power supply before starting; proceed only after confirming the power is off.

5. Hang a "Do Not Switch On — Men at Work" warning tag and a padlock on the breaker or switch side, and connect a grounding wire on the busbar side.

6. Install isolation barriers in the work area to prevent entry into the wrong bay.

7. Start installation only after all safety measures are in place.

8. During cross-operations, never allow two work faces on the same vertical plane at the same time. Guard against the habitual mistakes targeted by the "three no-harm" rule and schedule cross-operations properly.

9. After work, perform an insulation check and clean the site. Remove all waste, garbage and unneeded temporary tools so that work is finished, materials are cleared and the site is clean.

10. Avoid fatigue; reassign anyone unfit for the post; forbid work in wells after drinking alcohol or while unwell.

11. After installation, carry out a self-inspection, then have the client's responsible person verify it. Power-on commissioning may proceed only after confirmation.

## After-Sales Service

Our commitment: to ensure after-sales service quality, the company has established service procedures and after-sales regulations requiring service staff to serve users warmly, sincerely, patiently, meticulously, comprehensively and promptly. We provide 24-hour after-sales response. For general service requests, a contact person is assigned on the day the call is received to resolve any issues. For urgent or special requests, we guarantee a response within 2 hours on the day the call is received, ensuring normal operation of the user's products.
