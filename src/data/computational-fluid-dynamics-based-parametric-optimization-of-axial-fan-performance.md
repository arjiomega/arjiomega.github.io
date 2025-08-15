# Computational Fluid Dynamics-Based Parametric Optimization of Axial Fan Performance

This project focuses on optimizing an axial fan's airflow using OpenFOAM.
Parametric studies were conducted on blade shapes and angles, using simulations to compare designs and support data-driven decisions in rotating machinery.

![naca_fan](/projects_media/cfd_fan/naca_fan.png)

Parameters where variations of the design are calculated.

![naca_fan](/projects_media/cfd_fan/domain.png)

3D simulation domain.

![naca_fan](/projects_media/cfd_fan/cfd_fan_chart.png)

Iterations of design variations (14 total).

## Workflow
1. Iterate over all variations of fan designs.
2. Create initial mesh block.
3. Divide mesh for parallel mesh generation.
4. Generate mesh for CFD study.
5. Run CFD simulation.
6. Save results to a folder named after the fan design variation.
7. If variations remain, load the next one; otherwise, complete calculations.

## Mesh Independence Study

The goal is to find the lowest number of cells that produces sufficiently accurate simulation results.
Three mesh densities were tested: 400k, 1 million, and 1.6 million cells.

**Volume Flow Rate at Outlet:**
- 400k cells deviates significantly from the other two cases.
- 1 million and 1.6 million cells yield similar results → 1 million cells is sufficient.

![naca_fan](/projects_media/cfd_fan/cfd_mesh_study_1.png)

**Max Flow Rate at Outlet (Static Pressure = 0):**
- Differences between the three mesh counts are minimal.

![naca_fan](/projects_media/cfd_fan/cfd_mesh_study_2.png)



## Parametric Study Results


| Variable           | Perturbed condition | Percentage Increase (%) |
|--------------------|---------------------|-------------------------|
| Θ = 47°            | 49.35° (+5%)        | - 5.81 %                |
| Θ = 47°            | 44.65° (-5%)        | - 3.56 %                |
| Φ = 0°             | 2.35° (+5%)         | - 4.63 %                |
| Φ = 0°             | -2.35° (-5%)        | - 7.9 %                 |
| Lr = 18mm          | 18.90mm (+5%)       | - 4 %                   |
| Lr = 18mm          | 17.10mm (-5%)       | - 1.45 %                |
| Le = 33mm          | 34.65mm (+5%)       | + 0.70 %                |
| Le = 33mm          | 31.35mm (-5%)       | - 9.48 %                |
| NACA4609           | NACA5609 (m+1)      | + 2.75 %                |
| NACA4609           | NACA3609 (m-1)      | + 0.02 %                |
| NACA4609           | NACA4709 (p+1)      | - 1.43 %                |
| NACA4609           | NACA4509 (p-1)      | + 0.05 %                |
| NACA4609           | NACA4610 (ta+1)     | - 1.04 %                |
| NACA4609 ta-1      | NACA4608 (ta-1)     | - 1.14 %                |


