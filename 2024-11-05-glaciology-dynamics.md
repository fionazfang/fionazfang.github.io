---
layout: post
title: Glaciology - Ice Dynamics and Velocity 
date: 2024-11-25 17:29:55
tags: Glaciology
---

_How have observations of glacier surface velocity informed our understanding of the processes involved?_

Fiona Fang, Trinity Hall, 11/2024


The glacial surface velocity is determined by several processes, including internal deformation, basal sliding, and sediment deformation. All glaciers flow by creep; however, only glaciers with water at their base (temperate or polythermal) experience basal sliding (Bennett and Glasser, 2011). In contrast, cold-based glaciers, which remain below freezing at the ice-ground interface and are frozen to the underlying substrate, do not exhibit basal sliding (Lorrain and Fitzsimons, 2011). Additionally, sediment deformation occurs only in glaciers resting on soft, deformable beds. Observations of glacier surface velocity provide critical evidence for understanding the processes driving glacier movement. This essay will examine (1) methods of measuring glacier surface velocity, including offset tracking of optical imagery and ground-based synthetic aperture radar, (2) theories of factors controlling ice flow, and (3) how observations of glacier surface velocity enhance our understanding of these processes.

The most widely used method for measuring glacier surface velocity is offset-tracking analysis of optical or SAR images. This technique tracks the movement of coherent patterns on the glacier surface (e.g., crevasses, medial moraines, or other optical patterns or radar scatterers) between two satellite image acquisitions (Zheng et al., 2023). Offset tracking using optical images is a quick and efficient method for measuring glacier surface velocity across different timescales, thanks to the availability of extensive global archives of optical images. However, it is often limited by cloud and snow cover, as well as coarse spatial resolution (Wu et al., 2020). The precision of velocity mapping also varies across optical sensors—statistical analysis shows that velocity mapping from Sentinel-2 is about twice as precise as that from Landsat 7/8. Nonetheless, mapping the smallest glaciers (<250 m wide) remains challenging (Millan et al., 2019). Higher-resolution optical images can be captured by airborne or unmanned aerial vehicles, though their practical application is often constrained by operational costs and logistical challenges (Jung and Hong, 2023). On the other hand, the InSAR (interferometric synthetic aperture radar) method is particularly suitable for analyzing very short timescales because the instruments acquire images at very high frequencies (1–5 minutes). However, InSAR is limited in its ability to produce high-resolution, two-dimensional spatial maps, which are crucial for tracing the history of glacier movement over wide areas (Jung and Hong, 2023). Furthermore, InSAR struggles to observe remote regions where glaciers are commonly found (Wu et al., 2020).

The total surface velocity of a glacier ($v_{\mathrm{surface}}$) is governed by three primary processes: internal deformation ($v_{\mathrm{creep}}$), basal sliding ($v_{\mathrm{sliding}}$), and sediment deformation ($v_{\mathrm{sediment}}$), expressed as:

$$
v_{\mathrm{surface}} = v_{\mathrm{creep}} + v_{\mathrm{sliding}} + v_{\mathrm{sediment}}
$$

The creep velocity is calculated as:

$$
v_{\mathrm{creep}} = \frac{2A_c}{n+1}\tau^n H_i
$$

where $\tau = \rho_i g H_i \sin(\alpha)$ is the driving stress, influenced by ice thickness ($H_i$), slope ($\alpha$), and ice density ($\rho_i$), while $A_c$ and $n$ reflect the ice’s rheology.

The sliding velocity, following the Weertman sliding law, is given by:

$$
v_{\mathrm{sliding}} = A_s \frac{\tau^p}{P_e^q}
$$

where $\tau$ is the basal shear stress, $N_e = P_i - P_w$ is the effective pressure, defined as overburden pressure minus basal water pressure, and $A_s$, $p$, and $q$ describe the sliding behaviour.

Sediment deformation velocity, according to [insert reference/model name], is modelled as:

$$
v_{\mathrm{sediment}} = K_s(\tau - \tau_y)^a P_s^{-b} H_s
$$

where $\tau_y$ is the yield stress of the sediment, $P_s = P_o - P_w$ is the effective pressure on the sediment, and $K_s$, $a$, $b$, and $H_s$ capture the sediment’s mechanical properties and thickness.

Thus, the combined equation for glacier surface velocity is:

$$
v_{\mathrm{surface}} =
\frac{2A_c}{n+1}\tau^n H_i
+ A_s \frac{\tau^p}{P_e^q}
+ K_s(\tau - \tau_y)^a P_s^{-b} H_s
$$

These theories suggest that the key factors controlling the surface velocity of ice include basal shear stress, ice temperature, effective pressure, and sediment properties. Observations of glacier surface velocity offer valuable insights into how these factors influence different glaciers, which will be analyzed in the following paragraphs.

First of all, all three flowing mechanism are controlled by basal shear stress, which depends on ice thickness (Hi) and slope (α). Ice thickness is determined by the net accumulation (total accumulation minus total ablation). If the surface slope is considered constant, a greater ice mass will generate larger basal shear stress. Wu et al. (2020) observed that, for glaciers on the southeastern Tibetan Plateau, surface velocity increases from the glacier terminus to the equilibrium line altitude (ELA) as the glacier body becomes progressively thicker. Additionally, larger glaciers, such as the Kyagqen, Cape, and Xiaqu glaciers, exhibit greater surface velocities compared to smaller ones in the same region, as the former have thicker ice bodies. On the other hand, if ice thickness is considered constant, steeper glaciers will generate larger basal shear stress, leading to faster flow (Wu et al., 2020). For example, a study of the South Inylcheck Glacier, the largest mountain glacier in Asia, revealed that velocity is positively and nonlinearly correlated with slope. When the slope increases sharply from 1° to 16°, the resulting surge velocity creates crevasses on the glacier surface (Zhi, 2013).

In addition to shear stress, glacier surface velocity is influenced by the temperature of the ice. This distinction is evident in the different surface flow speeds of cold and temperate glaciers. For instance, the cold glacier Ürümqi Glacier No. 1 exhibited an average surface velocity of 5.5 m a−1 during 1980/1981 (Wang et al., 2018). In contrast, the temperate Samudra Tapu Glacier in India showed a much higher velocity of 67.67 m a−1 between 1999 and 2003 (Sood et al., 2022). This difference can be attributed to the fact that at elevated temperatures, the deformability of ice is higher; meanwhile, there will be more meltwater available, which facilitates basal sliding and contributes to ice flow. However, under global warming, both cold and temperate glaciers have experienced reductions, rather than increase, in surface velocity. Observations indicate that the average speed of Ürümqi Glacier No. 1 dropped to 3.3 m a−1 in 2010/2011, while the Samudra Tapu Glacier slowed to 49.5 m a−1 during 2013–2020 (Wang et al., 2018; Sood et al., 2022). This decrease is explained by the dominant effect of reduced shear stress due to ice thinning, which outweighs the increased deformability and basal sliding potential caused by higher temperatures (Sood et al., 2022).

Effective pressure (Ne) is another critical factor controlling glacier velocity, primarily by influencing basal sliding rates. Higher basal water pressure explains why glaciers that calve in water flow much faster than those terminating on land (Meier and Post, 1987). For maritime glaciers, basal sliding accounts for approximately 32% of the total flow velocity, and small fluctuations in basal water pressure can cause significant changes in ice speed (Wu et al., 2020; Sugiyama et al., 2011)  . Observed seasonal variations in glacier surface velocity can also be attributed to changes in effective pressure. At the onset of the melting season, the introduction of meltwater raises the water level at the source, increasing the pressure gradient and enhancing water flow velocity. This raises basal water pressure in subglacial conduits, reducing effective pressure (Ne) and increasing sliding velocity (Sb), as observed in many Greenlandic glaciers (Vijay et al., 2019). Subglacial hydrological dynamics, and consequently glacier velocity, are influenced by factors such as snowpack distribution, storm events (Benn and Evans, 2010), and the ability of meltwater to penetrate to the glacier bed (Sharp, 2005). 

In fact, Stearns and van der Veen (2018) argued that effective pressure plays a more significant role in controlling glacier sliding velocity than basal shear stress. Using on their observations of Greenland outlet glaciers, they performed a linear regression analysis on ln(Ub) and ln(τb) but found no correlation, despite the classical Weertman theory suggesting a relationship with the coefficient p. On the other hand, their analysis revealed a linear relationship with the coefficient q between ln(Ub) and ln(Nc). Therefore, they concluded that effective pressure has a stronger influence on sliding velocity than shear stress, and proposed an improved model to calculate basal sliding rate: Ub = As * Neq.

Lastly, observations of glacier surface velocity provide evidence that sediment deformation significantly affects the velocity of glaciers with soft beds. Observations in tunnels excavated in the terminal zones of glaciers by Boulton and Hindmarsh (1987) show that distributed motion within the uppermost 50 cm of till accounts for 80–95% of observed glacier motion. Echelmeyer and Zhongxiang (1987) reported that 60–85% of the motion of the sub-freezing Ürümqi Glacier No. 1 is due to basal processes. Similarly, in situ measurements of the Black Rapids Glacier in Alaska's central range revealed a surface velocity of approximately 60 m a−1, of which 20–30 m a−1 could be attributed to ice deformation. Almost all basal motion, 30–40 m a−1, occurred at depths greater than 2 m within the till, likely due to discrete shear layers or till sliding over underlying bedrock (Truffer, Harrison and Echelmeyer, 2000).

In summary, observations of glacier surface velocity provide critical insights into the mechanisms by which factors such as basal shear stress, ice temperature, effective pressure, and sediment properties influence glacier motion. These observations not only support existing flow theories but also challenge and refine them, as shown by the work of Stearns and Van der Veen (2018). Advances in observation techniques now allow for higher-resolution data, enabling a deeper understanding of these mechanisms. Such progress is vital for addressing the global issue of glacier melting in the face of ongoing climate change.
 
##Bibliography 

Benn, D.I. and Evans, D.J.A. (2010) Glaciers & glaciation. 2nd ed. London: Hodder education.
Bennett, M.M. and Glasser, N.F. (2011) Glacial Geology: Ice Sheets and Landforms. John Wiley & Sons.
Boulton, G.S. and Hindmarsh, R.C.A. (1987) ‘Sediment deformation beneath glaciers: Rheology and geological consequences’, Journal of Geophysical Research: Solid Earth, 92(B9), pp. 9059–9082. Available at: https://doi.org/10.1029/JB092iB09p09059.
Echelmeyer, K. and Zhongxiang, W. (1987) ‘Direct Observation of Basal Sliding and Deformation of Basal Drift at Sub-Freezing Temperatures’, Journal of Glaciology, 33(113), pp. 83–98. Available at: https://doi.org/10.3189/S0022143000005396.
Jung, S.-W. and Hong, S.-H. (2023) ‘Seven-year variation in glacier surface velocity at Narsap Sermia in Southwest Greenland’, GIScience & Remote Sensing [Preprint]. Available at: https://www.tandfonline.com/doi/abs/10.1080/15481603.2023.2207301 (Accessed: 25 November 2024).
Meier, M.F. and Post, A. (1987) ‘Fast tidewater glaciers’, Journal of Geophysical Research: Solid Earth, 92(B9), pp. 9051–9058. Available at: https://doi.org/10.1029/JB092iB09p09051.
Millan, R. et al. (2019) ‘Mapping Surface Flow Velocity of Glaciers at Regional Scale Using a Multiple Sensors Approach’, Remote Sensing, 11(21), p. 2498. Available at: https://doi.org/10.3390/rs11212498.
Sharp, M. (2005) ‘Subglacial Drainage’, in M.G. Anderson and J.J. McDonnell (eds) Encyclopedia of Hydrological Sciences. 1st edn. Wiley. Available at: https://doi.org/10.1002/0470848944.hsa173.
Sood, S. et al. (2022) ‘Mapping Samudra Tapu glacier: A holistic approach utilizing radar and optical remote sensing data for glacier radar facies mapping and velocity estimation’, Advances in space research, 70(12), pp. 3975–3999. Available at: https://doi.org/10.1016/j.asr.2022.10.030.
Stearns, L.A. and van der Veen, C.J. (2018) ‘Friction at the bed does not control fast glacier flow’, Science, 361(6399), pp. 273–277. Available at: https://doi.org/10.1126/science.aat2217.
Sugiyama, S. et al. (2011) ‘Ice speed of a calving glacier modulated by small fluctuations in basal water pressure’, Nature Geoscience, 4, pp. 597–600. Available at: https://doi.org/10.1038/ngeo1218.
Truffer, M., Harrison, W.D. and Echelmeyer, K.A. (2000) ‘Glacier motion dominated by processes deep in underlying till’, Journal of Glaciology, 46(153), pp. 213–221. Available at: https://doi.org/10.3189/172756500781832909.
Vijay, S. et al. (2019) ‘Resolving Seasonal Ice Velocity of 45 Greenlandic Glaciers With Very High Temporal Details’, Geophysical Research Letters, 46(3), pp. 1485–1495. Available at: https://doi.org/10.1029/2018GL081503.
Wang, P. et al. (2018) ‘Long-term change in ice velocity of Urumqi Glacier No. 1, Tian Shan, China’, Cold Regions Science and Technology, 145, pp. 177–184. Available at: https://doi.org/10.1016/j.coldregions.2017.10.008.
Wu, K. et al. (2020) ‘Dynamics of glacier surface velocity and ice thickness for maritime glaciers in the southeastern Tibetan Plateau’, Journal of Hydrology, 590, p. 125527. Available at: https://doi.org/10.1016/j.jhydrol.2020.125527.
Zheng, W. et al. (2023) ‘GLAcier Feature Tracking testkit (GLAFT): a statistically and physically based framework for evaluating glacier velocity products derived from optical satellite image feature tracking’, The Cryosphere, 17(9), pp. 4063–4078. Available at: https://doi.org/10.5194/tc-17-4063-2023.
Zhi, L. (2013) ‘Using SAR offset-tracking approach to estimate surface motion of the South Inylchek Glacier in Tianshan’, Chinese Journal of Geophysics [Preprint]. Available at: https://consensus.app/papers/using-offsettracking-approach-estimate-surface-motion-zhi/28b85c40cdc7561fb93d5478210cd6b2/ (Accessed: 2 December 2024).

