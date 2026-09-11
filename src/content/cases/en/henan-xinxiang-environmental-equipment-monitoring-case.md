---
title: "Henan Xinxiang Environmental Equipment Energy & Operating Status Monitoring Case"
summary: "Henan Xinxiang Environmental Equipment Energy-Consumption and Operating-Status Monitoring Case"
image: "/images/cases/1780046805360885.png"
industry: "智能制造"
order: 43
---
**Henan Xinxiang Environmental Equipment Energy-Consumption and Operating-Status Monitoring Case**

**1. Background and Requirements**

Recently an environmental technology company in Xinxiang, Henan approached us. To effectively supervise the production of township enterprises and prevent unauthorized production, the Xinxiang Environmental Protection Bureau planned to use technical means to monitor the electricity consumption of enterprises' sewage-treatment equipment. About 40 points were planned, distributed among township enterprises within Xinxiang's jurisdiction (Weihui City, Huixian City, Changyuan City, Yuanyang County, Pingyuan New Area, Fengquan District, etc.).

Traditional manual supervision has obvious drawbacks: supervisors must travel frequently between township enterprises to check on site whether sewage-treatment equipment is properly in use. This consumes significant manpower, material and time, and supervision efficiency is low, making real-time, comprehensive monitoring impossible. Because supervision cannot cover everything at all times, enterprises may produce without authorization and evade supervision, posing a potential threat to the local ecology.

![](/images/cases/1780046805360885.png)

![](/images/cases/1780046867606160.png)

![](/images/cases/1780046938207448.png)

![](/images/cases/1780047015110864.png)

![](/images/cases/1780047086180761.png)

![](/images/cases/1780047145187592.png)

Figure 1 Some sites

To solve these pain points, our company, as the supplier, provides the supporting hardware and software; the Xinxiang environmental technology company, as the O&M implementer, installs 4G wireless electricity monitors at the key equipment or locations of the enterprises' sewage treatment. The monitor can acquire the electricity-consumption data of the sewage-treatment equipment in real time, including current, voltage, active power and reactive power. This meets the supervision requirement at low cost and high efficiency.

**2. Acquisition Product**

The SC-GP-EM4G wireless electricity monitor is an intelligent power-parameter monitoring device supporting 4G/Wi-Fi and other transmission methods. It can monitor the line voltage and current of single-phase and three-phase equipment and calculate active power, apparent power, power factor, operating frequency and active energy, monitoring the operation and power use of single-phase and three-phase electrical equipment in real time, ensuring the safety of electrical equipment and enabling unattended monitoring. With a relay controlling the device, it can cut off power automatically on over-voltage or over-current. It is widely used in environmental electricity monitoring and monitoring of factory electrical equipment working status.

By default the product reports (updates) data to the platform at a 5-minute acquisition frequency; frequencies of 5 minutes and above can be modified remotely.

![](/images/cases/1780047209987289.png)

Figure 2 Acquisition product

Product features:

- Power: 8-12V DC (terminal), with reverse and misconnection protection
- Power consumption: 0.24 W
- Channels: 6 AC current/voltage channels
- Current transformer: 2000:1 (default)
- Sampling interval: 1 s per channel
- Voltage range: 100-400V; accuracy 0.5% rdg.
- Current range: 0-50A; accuracy 2% rdg.
- Response speed: <= 100 ms

**3. Implementation Process**

**3.1 Technical Solution**

![](/images/cases/1780047312269076.png)

Figure 3 Technical solution topology

The electricity monitor's current transformers clamp onto the three-phase lines of the monitored equipment, and voltage terminals are wired in. After acquisition and parsing, data is transmitted over 4G to a back-end cloud server. On site, three-phase current transformers must be installed and power supplied to the acquisition equipment; after remote configuration by technicians, data is uploaded to the cloud platform.

![](/images/cases/1780047390144672.png)

![](/images/cases/1780047432414049.png)

![](/images/cases/1780047485430568.png)

Figure 4 On-site implementation

**3.2 Factors Affecting Installation**

1) The line diameter and current range of the monitored equipment must be surveyed in advance; the matching transformer aperture must match the line diameter (e.g. 16 mm or 24 mm aperture, 0-100A range).
2) Determination of the installation position — on the monitored equipment itself or at the main circuit breaker — with space reserved for the transformers and acquisition host.
3) Signal: the environment, such as an underground distribution box (basement), affects 4G signal. For special sealed metal boxes, the antenna must be extended outside; an extension antenna can be installed.
4) Power: on-site power is three-phase 220V/380V AC, and construction must be carried out by a qualified professional electrician.

![](/images/cases/1780047980920582.png)

![](/images/cases/1780047569555326.png)

![](/images/cases/1780047599945220.png)

![](/images/cases/1780047717386044.png)

Figure 5 On-site construction

**4. Results and Data Platform Display**

![](/images/cases/1780047790842773.png)

![](/images/cases/1780047829199373.png)

Provincial environmental protection platform data integration results

![](/images/cases/1780047889355110.png)

![](/images/cases/1780047940163926.png)

On the data platform, staff can intuitively view the electricity consumption of township enterprises' sewage-treatment equipment. By analyzing the electricity data, the enterprises' production status can be accurately judged. For example, if equipment electricity use fluctuates abnormally, far exceeding the normal production level, or if there is continuous consumption during a period when production should be stopped, this may indicate unauthorized production. The platform can also store and analyze historical electricity data to form consumption trend charts, providing strong data support for supervision, enabling more precise supervision strategies, timely detection and handling of illegal production and protection of ecological security.

In this way, the transition from traditional manual supervision to intelligent real-time monitoring improves supervision efficiency, reduces supervision cost and injects strong momentum into Xinxiang's ecological and environmental protection work.
