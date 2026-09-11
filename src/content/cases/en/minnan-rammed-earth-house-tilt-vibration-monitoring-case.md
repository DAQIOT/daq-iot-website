---
title: "Minnan Rammed-Earth Ancient House Tilt & Vibration Monitoring Case"
summary: "Minnan Rammed-Earth Ancient House Tilt and Vibration Monitoring Case"
image: "/images/cases/1783665555109674.jpg"
industry: "其他"
order: 57
---
**Minnan Rammed-Earth Ancient House Tilt and Vibration Monitoring Case**

Implementation site: Hujing Community, Qiaoying Subdistrict, Jimei District, Xiamen City, Fujian Province; and Di'er Community, Guankou Town.

Monitoring equipment: Shanghai Daq-IoT Technology NB-IoT integrated tilt and vibration sensor. Monitoring scale: single-building pilot configuration, 84 units installed in total, covering Jimei District's rammed-earth ancient houses.

**1. Project Overview**

1.1 Basic building information

The monitored objects are traditional Minnan rammed-earth ancient houses in Qiaoying Subdistrict community, Jimei, Xiamen — retaining native rural-style dwellings in Xiamen Jimei urban villages. The buildings use granite rubble plinth bases, lime-soil rammed-earth enclosure walls, white-lime external render, saddle-shaped swallowtail ridges and stone-framed strip-stone windows — a typical Minnan rammed-earth dwelling of the Jimei coastal area. The project area has 84 similar ancient houses, all installed with tilt and vibration monitoring equipment. Baseline asset point: device number 100000009, No. 1 Hujing Dongli, longitude 118.096463, latitude 24.802335; other device numbers continue in sequence, with installation addresses following the building points of Hujing Dongli and each point's longitude/latitude slightly offset within the baseline coordinate range, consistent with the community's geographical scope.

1.2 Existing building defects

- Foundation defects: the granite base has long been eroded by near-shore groundwater, surface water and moss; uneven soil settlement and damp salt-alkali efflorescence at the bottom of the rammed-earth wall mean vertical cracks in the wall are widespread.
- Wall defects: affected by near-shore salt fog and the high humidity of the "returning south" season, the rammed-earth wall render is hollow and peeling, and years of typhoon wind pressure have caused the gable and side walls to slowly tilt outward.
- External disturbance: continuous vibration from neighboring house renovation, non-motorized traffic and old alley reconstruction; typhoons from July to September each year impact the ridge structure, causing periodic wall shaking.
- Installation constraints: under the Xiamen Historical and Scenic Building Protection Regulations, drilling or demolition on walls, stone bases or stone windows is strictly prohibited. The ancient houses have no external mains power, so all devices are battery-powered with non-destructive adhesive mounting.

1.3 Product fit advantages

1. IP67 protection, operating temperature -40 to +80 degC, adapting to Jimei's summer heat, rainstorms, salt fog and condensation.
2. A 6000mAh lithium-thionyl chloride battery with ultra-low power; PSM mode draws 3.5 uA and the design life is >= 3 years, meeting cabling-free installation needs.
3. NB-IoT + MQTT communication with eSIM support; the Hujing area has full network coverage and the signal penetrates rammed-earth walls, uploading data to the platform stably.
4. Integrated tilt plus +/-2g three-axis vibration acquisition with a sampling range of 12.5 Hz to 6.66 kHz; one device covers both monitoring tasks, with an adaptive noise-reduction algorithm and a false-alarm rate below 1%.

![](/images/cases/1783665555109674.jpg)

5. Data reporting period 5-9999 minutes, remotely adjustable; on an abnormal trigger, the device indicator flashes and the platform sends an SMS alarm.

**2. Point Layout Plan**

2.1 Single-building layout (84 devices in total)

Location selection: rammed-earth wall above the side-wall stone window, to monitor wall settlement/outward tilt and foundation-sliding vibration; load-bearing wall above the stone windows on both sides of the main door, to monitor entry-wall tilt and door-side pedestrian/vehicle disturbance; middle-upper part of the outer wall in the back alley, to monitor neighboring construction vibration and back-wall lateral deformation; middle of the saddle-ridge gable, to monitor ridge tilt and roof vibration caused by typhoon load; middle-upper part of the rammed-earth wall in crack-concentration areas, to monitor crack expansion and vegetation-root disturbance.

![](/images/cases/1783666964137212.jpg)

![](/images/cases/1783666991179040.jpg)

![](/images/cases/1783667080150494.jpg)

![](/images/cases/1783667132209658.jpg)

2.2 Monitoring and warning standards

Tilt graded warning: tilt rate > 1.5 per mille = yellow warning with platform pop-up; > 2.5 per mille = orange warning with SMS to managers; > 3 per mille = red emergency warning with device light plus multi-channel alarm and 24-hour on-site inspection.

Vibration warning: daily micro-motion within 0.3g is automatically filtered; instantaneous vibration acceleration > 0.8g is judged as abnormal disturbance and the device wakes immediately to report an alarm.

2.3 Supporting inspection

Annual drone aerial photography of the full roof and wall appearance; quarterly manual on-site review of crack development, compared and archived with sensor monitoring data.

**3. Non-Destructive Installation Plan**

3.1 Fixing method

1. Rammed-earth and white-lime rendered walls: mounting base bonded with a neutral epoxy adhesive specifically for cultural relics, no drilling, and the surface can be cleaned and restored after removal.
2. Stone column positions: plastic-coated stainless steel band clamping, isolating metal from stone to avoid salt-fog corrosion.
3. Eave protruding stones: nail-free limit bracket fixing, with no fixings added to swallowtail ridges or stone carvings.

3.2 Anti-corrosion protection

The installation height is >= 1.2 m above ground, avoiding splash zones, relying on the eave for natural rain protection; devices at coastal points are fitted with an anti-salt-fog protective film.

3.3 Construction period

A single building is installed and commissioned the same day; the 84 buildings are constructed in batches by area without affecting residents' daily use.

**4. Platform Parameter Configuration**

1. Normal season (October-June): data reporting interval set to 180 minutes for low-power operation.
2. Typhoon season (July-September): the reporting period is remotely modified in bulk to 5 minutes for high-frequency real-time acquisition.
3. The platform automatically stores all monitoring data and device battery information, generates a monthly safety monitoring report and an annual structural analysis report at year end, archived with the Qiaoying Subdistrict culture and tourism management department.

![](/images/cases/1783667262863891.png)

**5. Device O&M Management**

1. Battery management: the 6000mAh lithium-thionyl chloride battery lasts >= 3 years normally; the platform monitors remaining charge in real time and automatically reminds when 15% remains. Only the same-specification battery may be used; mixing power sources is forbidden.
2. Routine inspection: quarterly on-site cleaning of salt and dust from device surfaces, visual inspection only. Do not open the enclosure yourself; doing so voids the warranty.
3. Warranty service: free repair and replacement for non-human-caused faults.

**6. Project Results**

1. Typhoon control: real-time capture of wall tilt data during typhoon passage, with early handling of hollow defects, effectively preventing ridge and rammed-earth wall collapse.
2. Disturbance control: immediate warning of excessive vibration from illegal nearby construction, promptly stopping close-range excavation and protecting the ancient houses' foundations.
3. Heritage-protection benefits: zero damage to original building components across the whole project, transforming the ancient houses from post-event repair to digital preventive protection and forming a standardized monitoring model for Minnan rammed-earth ancient houses in the Hujing area.

**7. Area Expansion Plan**

Using the 84 monitoring points in Jimei Hujing and Guankou communities as a standardized model, the approach will be extended to the Jimei Houxi, Gaopu and other ancient-house clusters, all connected to the same IoT management platform with devices remotely managed by area group.

**8. Compliance Basis**

1. In accordance with the Xiamen Historical and Scenic Building Protection Regulations and the Technical Code for Maintenance and Strengthening of Ancient Building Timber Structures, minimally invasive installation is used, consistent with the minimum-intervention principle for heritage buildings.
2. NB-IoT communication follows the relevant requirements of the NB-IoT Industry Application Specification Guide.
3. Tilt warning indicators reference the Xiamen housing and construction department's safety inspection standards for Minnan rammed-earth dwellings.

**Appendix: Sample Device Ledger**

| Device number | Product type | Administrative division | Installation address | Tianditu longitude | Tianditu latitude |
| --- | --- | --- | --- | --- | --- |
| 100000009 | Tilt monitoring sensor | Hujing Community | No. 1 Hujing Dongli, Qiaoying Subdistrict, Jimei District, Xiamen, Fujian | 118.096463 | 24.802335 |
| 100000010 | Tilt monitoring sensor | Hujing Community | No. 2 Hujing Dongli, Qiaoying Subdistrict, Jimei District, Xiamen, Fujian | 118.096512 | 24.802372 |
| ... | Tilt monitoring sensor | Hujing Community | No. ... Hujing Dongli, Qiaoying Subdistrict, Jimei District, Xiamen, Fujian | ... | ... |
| 100000088 | Tilt monitoring sensor | Hujing Community | No. 80 Hujing Dongli, Qiaoying Subdistrict, Jimei District, Xiamen, Fujian | 118.099217 | 24.804815 |
