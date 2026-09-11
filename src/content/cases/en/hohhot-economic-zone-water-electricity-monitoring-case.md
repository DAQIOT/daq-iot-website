---
title: "Hohhot Economic Development Zone Water & Electricity Energy Monitoring Case"
summary: >-
  Hohhot Economic Development Zone Construction Service Project — Water and Electricity Energy-Consumption Monitoring Data Acquisition Case
image: "/images/cases/1735111199799748.png"
industry: "智能制造"
order: 29
---
**Hohhot Economic Development Zone Construction Service Project — Water and Electricity Energy-Consumption Monitoring Data Acquisition Case**

**1. Project Background and Requirements**

Located in Hohhot, Inner Mongolia, this is the Hohhot Digital Economic Development Zone construction service project, a sub-project of enterprise energy data acquisition and energy-consumption monitoring.

For water and electricity energy-consumption data acquisition, on-site constraints make acquisition difficult. Most State Grid meters have sealed RS485 interfaces that must not be opened for wiring. Water-consumption acquisition must be done without damaging the existing pipeline. To address these difficulties we matched suitable products and provided an implementation plan, effectively acquiring energy data in real time and facilitating enterprise energy management.

**2. Electricity Acquisition**

**2.1 Matching Meters and Acquisition Product**

Compatible with State Grid protocols (614/645 protocol, 698 protocol), installed using infrared acquisition.

![](/images/cases/1735111199799748.png)

The SC-GP-IR4G wireless infrared meter-reading terminal is a general meter-reading terminal from Shanghai Daq-IoT Technology based on infrared communication, 4G wireless transmission and wide-range DC power supply. It can acquire energy data, voltage, current, power factor and other electrical parameters from State Grid meters (supporting 645 and 698 protocols).

Infrared meter-reading principle: an infrared photoelectric probe periodically reads parameter information from the smart meter through the infrared port and uploads it. The infrared reader modulates and demodulates infrared signals — modulating binary digital signals into a 38kHz pulse sequence and driving an infrared emitting diode to send infrared light pulses; the transceiver converts received light pulses into electrical signals, then after amplification and filtering sends them to the demodulation circuit to restore the binary digital signal, which after message parsing is sent to the server in a specified format (e.g. JSON).

The wireless infrared terminal supports 4G communication, greatly simplifying on-site deployment and reducing construction cost. It supports meter reading for meters and gas meters with infrared communication interfaces, and suits electricity meter data acquisition, smart-city data acquisition, power monitoring data acquisition, energy-saving and emission-reduction monitoring, energy-consumption monitoring systems, PV system data acquisition, intelligent monitoring, robot data acquisition, smart security systems and cloud platforms; also electricity meter calibration test benches. It is especially suitable for PV generation metering and for reading State Grid master meters whose lead seals are completely sealed and cannot be opened.

**1.2 Electricity Data Acquisition Process**

Product contents: adapter, 4G data acquisition terminal, infrared probe (with 3M adhesive), 4G suction-cup antenna.

![](/images/cases/1735111241924460.png)

**1.2.1 Factors Affecting Meter Acquisition and Installation**

1. Whether the meter uses a State Grid protocol, whether it has an infrared communication port, and whether that port is far-infrared (near-infrared ports exist and can be used, but require a different infrared probe).
2. Signal: the meter's environment, such as an underground distribution box (basement), affects 4G signal (no signal means no transmission). For sealed metal boxes, the antenna must be extended outside.
3. Power: 220VAC or 12VDC must be available on site.
4. The infrared probe should ideally be flush against the infrared communication port; where the meter cabinet cannot be opened, it can be installed against clear glass. If there is neither clear glass nor a way to install flush against the meter, infrared acquisition cannot be implemented.

**1.2.2 Infrared Installation Steps**

![](/images/cases/1735111398196357.png)

Step 2: aim the infrared probe at the meter's infrared window, within 0-5 m, with line of sight and an angle of less than 5 degrees; it can be placed behind clear glass, as shown below.

![](/images/cases/1735111430102707.png)

One option is to attach the infrared probe directly against the meter's infrared window for better reception (recommended).

![](/images/cases/1735111454208479.png)

Infrared probe attached directly to the meter (example)

The other option, when the meter cabinet door cannot be opened, is to attach it outside the glass aligned with the meter's infrared window, as shown below.

![](/images/cases/1735111469117155.png)

Infrared probe attached outside the glass (example)

**3. Water Consumption Acquisition**

**3.1 Matching Product**

For pipeline water-consumption acquisition without damaging the existing pipeline, a non-invasive clamp-on flow meter is used.

The 4G clamp-on ultrasonic flow meter (model DAQ-GP-UF4G) is a general-purpose ultrasonic flow meter from Shanghai Daq-IoT Technology based on 4G wireless transmission and wide-range AC/DC power supply. It can acquire instantaneous flow and instantaneous heat flow in pipes. Compared with traditional flow meters, the clamp-on ultrasonic flow meter is quick and easy to install with no need to cut the pipe or stop flow, achieving true non-destructive online installation.

Combined with a 4G acquisition terminal, the clamp-on ultrasonic flow meter greatly simplifies on-site deployment and reduces construction cost. It is widely used in heating supply, water supply, heat metering and billing, water treatment, fuel oil, light oil and chemical industries.

![](/images/cases/1735111547200926.png)

**3.2 Product Characteristics and Implementation Process**

Acquisition characteristics: measuring range DN15-6000 (pipe diameter); medium: water, seawater, industrial wastewater, acid/alkali liquid, alcohol, beer, various oils and other single homogeneous liquids that conduct ultrasound; accuracy +/-1%; display: 2x20 character LCD.

Electrical characteristics: power supply 9-36V DC / 220V AC; operating power consumption 1-2 W.

![](/images/cases/1735111573875198.png)

**4. Implementation and Data Upload**

The wireless infrared meter reader and the ultrasonic flow meter with 4G wireless acquisition terminal upload data to the Inspur cloud platform using the specified encryption and integration method.

Sample meter JSON data format:

```
{
"Fflat": 0,      // forward flat-rate energy
"Fpeak": 28.91,  // forward peak energy
...
"Rtotal": 0,     // reverse total energy
"Rvalley": 0     // reverse valley/flat energy
}
```

Sample water meter JSON data format:

```
{
"flow": 11.1,        // instantaneous flow, m3/h
"fluidSpeed": 11.1,  // fluid speed, m/s
...
"returnTemp": 11.1   // return water temperature, degC
}
```

![](/images/cases/1735111595240514.png)

![](/images/cases/1735111609130126.png)

![](/images/cases/1735111611159037.png)

![](/images/cases/1735111615475812.png)

![](/images/cases/1735111628178253.png)

**5. Data Acquisition Results**

![](/images/cases/1735111642124740.png)

![](/images/cases/1735111656130848.png)

![](/images/cases/1735111665124160.png)
