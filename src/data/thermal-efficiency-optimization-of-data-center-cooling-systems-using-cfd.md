# Thermal Efficiency Optimization of Data Center Cooling Systems Using CFD

Modern data centers are the backbone of our digital infrastructure, yet their operation comes with a significant thermal management challenge. Servers continuously generate substantial amounts of waste heat, and without efficient cooling strategies, internal temperatures can quickly exceed safe operating limits. Excessive heat not only reduces equipment reliability but also increases the risk of downtime and shortens the lifespan of critical hardware.

According to **ASHRAE guidelines**, the recommended operating temperature for data centers is between 19°C and 21°C, with a maximum allowable temperature of 25°C. Achieving these targets requires not only sufficient cooling capacity but also effective airflow management to prevent hot and cold air from mixing.

This study uses **Computational Fluid Dynamics (CFD), specifically the RANS k–ω SST turbulence model implemented in buoyantSimpleFoam**, to evaluate the thermal efficiency of two cooling configurations:

**Without enclosure** – open arrangement allowing free air circulation.

![data_center_img](/projects_media/data_center_cooling/data_center_no_enclosure.png)

**With enclosure** – implementing a hot aisle containment system to channel hot exhaust air directly to the cooling units.

![data_center_img](/projects_media/data_center_cooling/data_center_enclosure.png)

Each simulation models a server rack producing **350 W of waste heat per server**, with CRAC units delivering **air at 13°C and a flow rate of 2500 CMH**. The objective is to quantify how enclosure-based designs influence temperature distribution, cooling efficiency, and compliance with ASHRAE thermal recommendations.

By comparing the results of both configurations, this study aims to demonstrate how hot aisle containment can significantly improve cooling performance by isolating hot and cold air streams, thus enabling more efficient heat extraction and reducing the risk of overheating in high-density server environments.

## Results

The CFD simulations reveal a clear performance gap between the two configurations.

### Without Enclosure

In the open configuration, hot exhaust air from the server racks freely mixes with the incoming cold supply air. This recirculation effect leads to elevated inlet temperatures at several server intakes, with some regions approaching or exceeding the 25°C ASHRAE upper limit. The temperature distribution is uneven, and hotspots form in the upper rack levels, indicating inefficient heat removal and a greater risk of thermal stress on equipment.

![data_center_img](/projects_media/data_center_cooling/data_center_result_no_enclosure_1.png)
![data_center_img](/projects_media/data_center_cooling/data_center_result_no_enclosure_2.png)

### With Enclosure

In the hot aisle containment configuration, warm exhaust air is isolated from the cold supply air and channeled directly toward the CRAC units. This significantly reduces recirculation, resulting in more uniform rack inlet temperatures. The cold aisle maintains temperatures close to the 13°C supply air temperature, with all monitored points remaining well below the 25°C limit. Hotspots are virtually eliminated, and thermal stratification is minimized, demonstrating a substantial improvement in cooling efficiency.

![data_center_img](/projects_media/data_center_cooling/data_center_result_enclosure_1.png)
![data_center_img](/projects_media/data_center_cooling/data_center_result_enclosure_2.png)

### Summary

Temperature Control: The enclosure reduces maximum inlet temperatures by several degrees compared to the open configuration.

Airflow Efficiency: Directed airflow paths prevent mixing, allowing the cooling system to operate closer to its designed performance.

ASHRAE Compliance: The enclosed configuration comfortably meets ASHRAE recommendations, while the open configuration risks exceeding safe limits in some areas.

These results confirm that hot aisle containment not only improves temperature uniformity but also reduces the cooling system’s workload, potentially enabling energy savings and extended equipment lifespan.