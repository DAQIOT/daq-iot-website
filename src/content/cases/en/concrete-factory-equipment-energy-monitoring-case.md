---
title: "Ready-Mix Concrete Factory Equipment Energy Online Monitoring Case"
summary: "Ready-Mixed Concrete Plant Equipment Energy-Consumption Online Monitoring Case"
image: "/images/cases/1722224176220493.png"
industry: "智能制造"
order: 28
---
**Ready-Mixed Concrete Plant Equipment Energy-Consumption Online Monitoring Case**

**1. Company Introduction**

Shanghai Daq-IoT Technology Co., Ltd. is a high-tech enterprise focused on IoT data acquisition. The core team has decades of project experience in industrial wireless sensors, factory meter reading (electricity meters, flow meters, etc.), equipment condition monitoring and industrial equipment data-to-cloud. Our core acquisition products support battery power, wireless transmission and remote configuration and debugging — removing the hassle of cabling, making on-site installation and commissioning extremely convenient and greatly shortening project lead time and cost.

The company currently operates mainly in Pingdingshan, Henan. With the core philosophy of "technology is the root, quality is the foundation, integrity and pragmatism, pursuit of excellence", it is committed to becoming a technology enterprise with first-class technology, products and service, helping IoT projects go live quickly.

**2. Project Background**

Xinyang Huamao New Building Materials Co., Ltd., founded in 2021 and located in Xinyang City, Henan Province, is a large ready-mixed concrete producer.

![](/images/cases/1722224176220493.png)

Plant photo

Plant profile: the concrete mixing tower mainly consists of five systems — mixing main machine, material weighing system, material conveying system, material storage system and control system — combined with a high-level silo fully automatic feeding system. Compared with a concrete batching plant, the mixing tower's aggregate weighing eliminates four intermediate steps and uses vertical discharging weighing, saving weighing time and greatly improving production efficiency; for the same model, the mixing tower's efficiency is one third higher than a batching plant's. Production-line capacity: theoretical 480 m3/h, actual about 420 m3/h, with annual output up to 1 million m3 of concrete. Products: concrete of all formulation specifications.

Sand-making line: single-machine dual control, fully automatic intelligent production. Main structure: steel-concrete structure, concrete first floor, steel structure above, single silo 300 t top-mounted. Functions: no loader needed, automatic feeding from the high-level silo, environmentally friendly, energy-saving and efficient. Fully automatic mixing-tower production line. Environmental requirements: organized dust emission from the whole system with emission concentration <= 10 mg/Nm3; noise meets environmental standards, not above 65 dB at 50 m. It can produce the full range of ordinary mortar products and a few special dry-mixed mortars. Small footprint, high production flexibility, environmentally friendly and energy-saving, low dust. Strong anti-segregation capability. Lower energy consumption than traditional tower-type, best cost-performance. The OJYVL300 aggregate system uses internationally advanced artificial dry sand-making technology and core crushing equipment; key equipment is industry-leading. The system uses a modular combined structure, optimized to be simple and scientific. Features: advanced reliable sealing design meeting environmental standards, large throughput. Scientific process flow, low feed-point design meeting different material size requirements, industry-leading design. Optimized modular design, compact and cost-effective. Fully automatic control system with preset product fineness modulus modes. Stable product quality meeting national sand-making requirements.

**3. Requirement Analysis**

Energy-consumption monitoring and real-time on/off status monitoring for 20 three-phase power distribution cabinets of key equipment including ready-mixed concrete line 1, concrete line 2, dry-mixed mortar, machine-made sand line, machine-made brick line and high-level silos. Monitoring data must integrate with the upper-level ERP system — the Smart Ready-Mixed Concrete System.

![](/images/cases/1722224195102200.png)

Smart Ready-Mixed Concrete System interface

![](/images/cases/1722224213176879.png)

Distribution cabinets to be monitored

**4. Project Solution**

Based on the on-site distribution cabinets, split-core (open-type) current-transformer energy monitoring devices are used, connected to a switch through a network port, uploading data to the Smart Ready-Mixed Concrete System every minute over MQTT in JSON format.

Because the rated current differs between distribution cabinets, current transformers of different ranges are matched for the most suitable installation size and accuracy.

![](/images/cases/1722224229808042.png)

On-site equipment survey list

![](/images/cases/1722224244199198.png)

Ethernet energy monitoring meter kit

As shown, the monitoring device consists of an ABS protective box, DIN-rail power supply, Ethernet edge-computing gateway and energy monitoring meter host. The DIN-rail power supply generates 12V to power the edge-computing gateway, and the energy monitoring meter host draws power directly from the 380V line.

![](/images/cases/1722224264245852.png)

Project acquisition scheme diagram

**5. Project Implementation**

![](/images/cases/1722224300143056.png)

On-site construction photo

Implementation steps:

1. Coordinate with the factory electrician to power down the distribution cabinet and install the current transformers and monitoring host on the monitored equipment.
2. Install and fix the junction box.
3. Our technical staff remotely configure the edge-computing gateway from the office.
4. On-site construction staff submit the installation list, including installation point information, device IP information and ID numbers.
5. Construction and joint debugging of the whole project took about one week.

![](/images/cases/1722224314105832.png)

Installation result of the dry-mixed mortar line distribution cabinet

![](/images/cases/1722224360133071.png)

Installation result of the high-level silo line distribution cabinet

![](/images/cases/1722224374134378.png)

Device installation result

![](/images/cases/1722224388125020.png)

Data successfully acquired and stored in the cloud database

![](/images/cases/1722224399441389.png)

Plant energy-monitoring project data display

**6. Project Results**

After implementation, plant management and scheduling staff can see, from the office, the on/off working status of each workshop device and the working energy consumption (electricity) of key equipment. This facilitates overall coordination of production arrangements across workshop lines at the production-plan level, greatly improving coordination efficiency and equipment utilization and producing more concrete for the same energy consumption — improving overall economic benefits and communication efficiency between the scheduling department and workshop staff.
