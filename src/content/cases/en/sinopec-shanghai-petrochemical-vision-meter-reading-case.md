---
title: "Sinopec Shanghai Petrochemical Intranet Vision Meter Reading Project (Analog Meter)"
summary: "Sinopec Shanghai Petrochemical — Vision Recognition Intranet Meter Reading Project (Pointer Gauges)"
image: "/images/cases/1752741867101368.png"
industry: "智能制造"
order: 37
---
**Sinopec Shanghai Petrochemical — Vision Recognition Intranet Meter Reading Project (Pointer Gauges)**

**1. Project Background and Requirements**

**1.1 Implementation site**

China Petrochemical Shanghai Petrochemical Co., Ltd., production line: 1500-ton carbon-fiber plant spinning machines, lines 1-4.

**1.2 Background and requirements**

Data acquisition from mechanical instruments on the workshop production line is difficult: mechanical pressure gauges have no dedicated external communication interface, the environment is corrosive and construction is hard. Real-time data acquisition was required to effectively monitor production-line data indicators. Given the background and difficulty, as the product and supporting-solution supplier we worked with the implementer (Changjiang Institute) to customize a wireless timed-photography camera image-recognition solution: the camera reads and records the pointer pressure gauge values and can analyze and trace historical data by image analysis. Data acquisition and transmission had to be implemented in an intranet environment.

![](/images/cases/1752741867101368.png)

**2. Technical Parameters and Implementation Plan**

**2.1 Technical approach**

For these pointer gauges and the detection environment, camera photography, wireless data transmission and visual recognition are used to read, store and analyze the pointer gauge data; one or two cameras photograph a row of gauges (5 gauges).

**2.2 Hardware products and technical solution**

The hardware must be deployed in an intranet environment, using our timed-photography camera (SC-GP-CAM) in a PoE-powered version so that signal and power share a single network cable, reducing wiring complexity. Considering the corrosive on-site conditions, Changjiang Institute made custom protective enclosures.

![](/images/cases/1752741917855595.png)

Technical implementation plan

**2.3 Technical indicators**

(1) Recognition accuracy >= 99.5% provided the dial has no dirt, water mist or broken glass; photos must be sharp and the scale and digits clearly distinguishable.
(2) Meter-reading frequency <= 1 minute per reading, with adjustable acquisition frequency.
(3) System stable operation period >= 60 days; single fault handling time < 24 h; downtime caused by software problems < 1% (hardware depends on conditions).
(4) Data retention >= 6 months.
(5) Protection rating IP65; operating temperature -10 degC to 50 degC; humidity 0-95% (non-condensing).

**3. On-Site Implementation and Debugging**

According to the on-site instrument layout, four cameras were provided in total: two cameras covering two pointer gauges each and two cameras covering three pointer gauges each. Because the environment is corrosive, protective sun/heat shields were added to the cameras by Changjiang Institute (see the installation examples below) to keep the cameras from corroding.

![](/images/cases/1752742056326536.png)

![](/images/cases/1752742061116540.png)

![](/images/cases/1752742067170386.png)

![](/images/cases/1752742073547466.png)

On-site installation

![](/images/cases/1752742229813058.png)

Integration and debugging

During on-site integration and debugging, the camera positions were fine-tuned with the implementer, camera dials were cleaned (to ensure clarity) and influencing factors were eliminated one by one: removing dial labels, avoiding water mist on the protective cover, changing the installation position to avoid light-source reflection, etc.

**4. Results**

As required by the project owner, after successful data acquisition by image recognition the data is stored in a database, with a one-to-one correspondence between image path and recognition result.

![](/images/cases/1752742377156853.png)

![](/images/cases/1752742397473419.png)

Image storage path and corresponding recognized values
