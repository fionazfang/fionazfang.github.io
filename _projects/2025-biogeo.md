---
layout: page
title: Building a Tree Ring Chronology
description: An Example Using Scots Pine from Pinar Grande, Spain
img: assets/img/2025-biogeo-background.png
importance: 2
category: Paleoclimate
---
*This is a piece of PartIB coursework which achieved a final mark of first class with distinction (98/100).*

# I. INTRODUCTION

Dendrochronology is the study of annual growth rings in woody trees and shrubs (Smith and Lewis, 2007). These rings form because the cessation of plant growth during winter dormancy creates boundaries between the latewood of one year and the earlywood of the next (Stoffel et al., 2013). Tree-ring width reflects multiple influences, requiring the filtering of "noise" (e.g., ecological disturbances) when studying a specific factor (e.g., climate) (Cook et al., 1990). Robust chronologies provide valuable insight into paleoclimatology (Anchukaitis et al., 2017), forest ecology (Camarero et al., 2023), archaeology (Baillie, 2014), and mycology (Büntgen and Egli, 2014).

This coursework aims to develop a tree-ring width chronology using Scots pine (Pinus sylvestris) samples from Pinar Grande, Spain, and assess its climatic sensitivity. Spain, like other Mediterranean regions, poses challenges for dendroclimatologists due to its frequent non-climatic disturbances like wildfires and human activity (Pilcher et al., 1990). Despite these challenges, Spain's rich historical legacy and threatened ecological future make it an increasingly important area for study (Guibal et al., 2021; Natalini et al., 2024). Scots pine is a widespread conifer with climate-sensitive radial growth (Brichta et al., 2023; Babushkina et al., 2024). Its recent widespread mortality highlights the need of studying its response to climate variations (Bose et al., 2024).

This coursework demonstrates methods for constructing a robust tree-ring chronology, from field and lab work to data processing, integrating traditional approaches with advanced tools like the dplR library in R (Bunn et al., 2024). While producing groundbreaking climate-growth insights is not its primary emphasis, it provides a sample framework for critically assessing correlations between Ring Width Indices (RWI) and climatic variables, including temperature, precipitation, diurnal temperature range (DTR), and cloud cover. It not only enhances understanding of Scots pine's sensitivity to Spain’s climate but also establishes a versatile methodology applicable to studies in other regions and species.

# II. DATA AND METHODS


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2025-biogeo-fig1a.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2025-biogeo-fig1b.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2025-biogeo-background.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1. Flowchart outlining the methods mentioned in this section, including fieldwork (brown), lab work (blue), data process and climate correlation (green). All illustrations were created by the author.
</div>

## Field works

The study area should be near climatic margins and minimally impacted by fires, wind, or human activity (Speer, 2010). Pinar Grande meets these criteria, with its high-altitude and continental Mediterranean climate producing distinct seasonal variations, and its naturally distributed Scots pine forests experiencing low synanthropic impact (see Appendix for details). Dendroclimatology studies often involve targeted rather than random tree selection to ensure sufficient old trees, although this approach may limit replication (Esper et al., 2008). Narrow peripheral rings in old, dying trees also require supplementary samples from younger trees to enhance representativeness (Speer, 2010).

Two types of samples can be taken: cross-sections from dead wood (Bridge, 2005) and cores from intact living trees. This coursework uses cores samples, extracted at breast height (1.3m) to avoid growth irregularities near the root and ensure ease of collection. Each core spans the full bark-to-pith radius with a diameter of approximately 5 mm. Two cores per tree were collected to address internal variability, and at least 20 trees per site to reduce non-climatic noises (Speer, 2010). GPS locations of sampling sites were recorded.

This study uses two core sample groups with distinct purposes. Group 1, with 22 samples from one site taken in December 2023 (referred to as Sample 2023), is used to demonstrate the process of building the chronology. Group 2, the PGRCS master chronology, is a pre-built chronology with samples from 871 pines across 18 plots (Büntgen et al., 2013), and is used for climate correlation and sensitivity analysis.

## Laboratory works

Cores were first dried in a fume hood or oven (Speer, 2010). Twisted ones can be softened with a steam jet and gently realigned (Pilcher et al., 1990). Mounts, typically made from poplar wood with a half-circular groove, were labeled with the sample number before gluing (Speer, 2010). Water-soluble white glue was used, which allows remounting after soaking in water (Pilcher et al., 1990). The core's orientation in the mount must match its original position in the tree, through identifying the coarse or shiny section as radial (due to torn tracheids and side view of long tracheids respectively), or aligning the long axis of the tracheids vertically in the tangential view (Speer, 2010). If space allows, a second core can be glued to the same mount, with both bark sides positioned to the left. Adhesive tape should hold the cores in place while the glue sets to prevent bending or detachment (Pilcher et al., 1990).

Once the glue is dry, the cores were polished using progressively finer sandpaper, as this ensures sanding efficiency while also removing striations left by the previous belt (Speer, 2010). Disks were sanded similarly after being secured with screws. Wear masks to avoid inhaling hardwood dust, which poses respiratory risks (Pilcher et al., 1990). Core were held stationary by hand during sanding to prevent it from rotating with the sandpaper. Sander was moved parallel to the surface of disks without pressing downward. The machine was started before positioning samples and turned off before removing samples. The polished surface should clearly display individual cells under 7–40x magnification (Speer, 2010).

Measuring systems include a computer, a stereozoom microscope, and a moving stage controlled by a lead screw. Measurements began at the bark sides of cores since the sampling dates were known; otherwise, they would start from any end that is precisely dated. Measurements were taken perpendicular to the ring boundary: Align the microscope crosshairs tangentially to the previous ring boundary and horizontally with the next before recording measurements. The sample remained flexible on the stage to allow adjustments, especially near the pith where curvature is significant. If a ring narrows or pinches in the view, measure its average width (Speer, 2010). 

## Data Process

The dating of the measurements was assessed visually and statistically. Firstly, relative trends of the time series were compared visually using software like TSAP-Win®, with misaligned peaks and troughs indicating possible missing or false rings (Bradley, 2015). Secondly, statistical assessments in COFECHA and dplR also flagged possible cross-dating mistakes (e.g., errors reported in COFECHA output Part 1, or red sections in dplR plots), which were further examined visually and re-measured when needed. While COFECHA and dplR enhance data quality control, they cannot replace visual cross-dating by person, as acceptable statistics do not guarantee correct dating (Holmes, 1983). Sample 2023 (Figure 2(a)) was well cross-dated, with an inter-series correlation (rbar) of 0.598 (Figure 2(c)). Its mean sensitivity is 0.277, indicating high responsiveness to interannual environmental changes; AR1 (Lag-1 autocorrelation) is 0.806, reflecting relatively high biological memory or climate carry-over effects. See appendix for mathematical details of statistical tests.

Detrending, i.e. dividing raw series by selected functions, aims to remove the low-frequency components related to tree growth rather than climate conditions. It applies division rather than subtraction because the local variance of ring widths is generally proportional to the local mean (Cook et al., 1990). The function selected can be deterministic (e.g., linear regression or negative exponential) or stochastic (e.g., cubic splines). The former is straightforward but may be simplistic, especially for trees experienced abundant disturbances or competitions; the later address complexities like autocorrelation well, but risk overfitting (Frank, Fang and Fonti, 2022). Interactive detrending in ARSTAN and dplR allows tailored function selection for each time series. Appendix details the math and codes for commonly-used detrending functions. Considering the common ecological disturbances and uneven growth trends in Mediterranean tree-ring records, all series in Sample 2023 were detrended using cubic spline in R (Figure 2(b)). The detrended data has a rbar of 0.362 and EPS of 0.926 (Figure 2(c)), indicating high reliability in representing the environmental signal.

Standardization transforms ring widths into relative Ring-Width Index (RWI) series (mean = 0, variance = 1) to handle absolute growth rate differences between trees. Standardized series were then averaged to produce the master chronology (Figure 2(d)). The chronology can be further processed by removing temporal autocorrelation caused by biological persistence ((Cook, 1985); Figure 2(e)), though this is optional as it may obscure autocorrelated climatic signals in some cases (e.g., prolonged droughts).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2025-biogeo-fig2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2. Raw (a) and detrended (b) tree-ring series of Sample 2023 with corresponding statistical metrics (c), alongside the standard (d) and autoregressive (e) master chronologies. All plots and data were generated in R, with relevant codes provided in the appendix.
</div>

## Climate Sensitivity Assessment

The PGRCS RWI chronology, rather than that of Sample 2023, is used for climate sensitivity assessment due to its substantially larger sample size and superior representativeness. The climate dataset used is CRU TS4.08 (Harris et al., 2020), valued for its long temporal span (1901 - now), global coverage, high spatial resolution (0.5°×0.5°), and comprehensive variables. The climate dataset was accessed and correlated with RWI via KNMI Climate Explorer (http://www.knmi.nl/). To match the monthly format of CRU TS4.08, the annual RWI chronology was replicated 12 times in Excel before uploaded to KNMI (Trouet and Oldenborgh, 2013).

Climate variables of interest include temperature, precipitation, DTR, and cloud cover. The temporal variability of the correlations between RWI and variable near the sampling area (3–2.5°W, 41.5–42°N) was assessed using the “Correlate with a time series” module. Changes across months and time periods (1901–1927, 1928–1954, 1955–1981, 1982–2009) were assessed respectively. The spatial correlation patterns over a broader region (30–55°N, 15°W–25°E) was explored via the “Correlate with a field” module.

# III. Results and Discussion

able 1(a) shows significant correlations in May, June, and July (p < 0.01, |r| > 0.2), reflecting the dominance of summer growth in tree-ring formation. Averaged across the entire period, all MJJ correlations are stronger (|r| > 0.4) than those of individual months. The MJJ correlation, however, was not consistent during the study period (Table 1(b)), with no significance in the earlier two periods (p > 0.05), but became significant and strong in later ones (most p < 0.001 and |r| > 0.6), possibly due to the improved data reliability with more observation stations built after the 1950s (Serrano-Notivoli et al., 2019).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2025-biogeo-table1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Table 1. Interannual and intraannual variability of correlations between RWI and climate variables, calculated via KNMI. (a) Monthly correlations (1901–2009). (b) MJJ correlations for 1901–2009 and subperiods. Colors show correlation coefficients; asterisks denote significance.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2025-biogeo-fig3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3. Spatial correlations between RWI and climatic variables across Europe, generating via KNMI. (a) Temperature, (b) DTR, (c) Cloud Cover, and (d) Precipitation. Colors show correlation coefficients. All correlations are significant.
</div>

Spatially, RWI captures large-scale growing-season temperature trend (Figure 3(a)). The correlation is negative because high temperatures desiccate Scots pine and other isohydric plants, tightening stomatal control and reducing CO₂ intake, photosynthesis, and growth (Galiano et al., 2011). Elevated temperatures also increase Rubisco’s oxygen affinity, enhancing photorespiration and energy loss (Galmés et al., 2015). 

The DTR signals captured by RWI (Figure 3(b)) are more local than mean temperature, but the condition of the Iberian Peninsula is still well reflected. An increase in DTR can result from rising daytime temperatures, which tightens stomatal control, or falling nighttime temperatures, which reduce the carbohydrate produced (Turnbull et al., 2002). Growth is suppressed in either case. DTR also serves as a cloud cover proxy, as clouds lower DTR by dampening daytime warming by sun and nighttime longwave radiative cooling (Pithan and Schatt, 2024). Similar spatial patterns of their correlations with RWI highlight this link (Figures 3(b), 3(c)). Clear skies and high DTR reduce diffuse radiation, limiting photosynthesis (Gu et al., 2003), with the related high pressure conditions reducing soil moisture, and enhancing evapotranspiration (Camarero et al., 2010). On the other hand, cloudy conditions enhances photosynthesis, and boost soil moisture which helps maintain turgor pressure and nutrient transport (Gimeno et al., 2012). 

RWI shows weaker correlations with precipitation compared to DTR and cloud cover (Figure 3(d)), since precipitation here is spatially heterogeneous and is therefore a less powerful hydroclimate proxy (Büntgen et al., 2013). The influence of precipitation also varies over time, with significant correlations evident only during 1955–1981 (p < 0.01, r = 0.772; Table 2(d)), suggesting rainfall became a major constraint on tree growth during this period (Żywiec et al., 2017).

## IV. CONCLUSION

This coursework demonstrates the construction of a Scots pine tree-ring chronology, emphasizing standardized sampling, precise laboratory methods, and the integration of human expertise with computational tools. The resulting chronology effectively captures climate-growth relationships, highlighting Scots pine’s sensitivity to local temperature, DTR, and cloud cover. This framework of constructing chronology and assessing climate sensitivity is adaptable to different proxies, species, and regions. It can also support dendroecology studies, with adjustments to remove climatic signals and isolate ecological ones. Overall, building robust tree ring chronologies is essential for many fields, including reconstructing historical climate, calibrating radiocarbon dating, understanding tree growth under changing climates, and informing sustainable forest management practices.

## V. BIBLIOGRAPHY

Agencia Estatal de Meteorología (AEMET) (2024) Home page. Available at: https://www.aemet.es/es/portada (Accessed: 2 December 2024).

Anchukaitis, K.J. et al. (2017) ‘Last millennium Northern Hemisphere summer temperatures from tree rings: Part II, spatially resolved reconstructions’, Quaternary Science Reviews, 163, pp. 1–22. Available at: https://doi.org/10.1016/j.quascirev.2017.02.020.

Babushkina, E.A. et al. (2024) ‘Wood anatomy chronologies of Scots pine in the foothills of the Western Sayan (Siberia)’, Journal of Forestry Research, 35(1), p. 45. Available at: https://doi.org/10.1007/s11676-023-01692-5.

Baillie, M.G.L. (2014) Tree-ring Dating and Archaeology. London: Routledge. Available at: https://doi.org/10.4324/9781315748689.

Bose, A.K. et al. (2024) ‘Tamm review: Drought-induced Scots pine mortality – trends, contributing factors, and mechanisms’, Forest Ecology and Management, 561, p. 121873. Available at: https://doi.org/10.1016/j.foreco.2024.121873.

Bradley, R.S. (2015) ‘Chapter 13 - Tree Rings’, in R.S. Bradley (ed.) Paleoclimatology (Third Edition). San Diego: Academic Press, pp. 453–497. Available at: https://doi.org/10.1016/B978-0-12-386913-5.00013-2.

Brichta, J. et al. (2023) ‘Importance and potential of Scots pine (Pinus sylvestris L.) in 21st century’, Central European Forestry Journal, 69(1), pp. 3–20. Available at: https://doi.org/10.2478/forj-2022-0020.

Bridge, M. (2005) ‘DENDROCHRONOLOGY’, in R.C. Selley, L.R.M. Cocks, and I.R. Plimer (eds) Encyclopedia of Geology. Oxford: Elsevier, pp. 387–392. Available at: https://doi.org/10.1016/B0-12-369396-9/00158-1.

Bunn, A. et al. (2024) ‘dplR: Dendrochronology Program Library in R’. Available at: https://cran.r-project.org/web/packages/dplR/index.html (Accessed: 8 December 2024).

Büntgen, U. et al. (2013) ‘Declining pine growth in Central Spain coincides with increasing diurnal temperature range since the 1970s’, Global and Planetary Change, 107, pp. 177–185. Available at: https://doi.org/10.1016/j.gloplacha.2013.05.013.

Büntgen, U. and Egli, S. (2014) ‘Breaking new ground at the interface of dendroecology and mycology’, Trends in Plant Science, 19(10), pp. 613–614. Available at: https://doi.org/10.1016/j.tplants.2014.07.001.

Camarero, J.J. et al. (2023) ‘A multi-proxy framework to detect insect defoliations in tree rings: a case study on pine processionary’, Frontiers in Ecology and Evolution, 11. Available at: https://doi.org/10.3389/fevo.2023.1192036.

Camarero, J.J., Olano, J.M. and Parras, A. (2010) ‘Plastic bimodal xylogenesis in conifers from continental Mediterranean climates’, New Phytologist, 185(2), pp. 471–480. Available at: https://doi.org/10.1111/j.1469-8137.2009.03073.x.

Cherubini, P. et al. (2003) ‘Identification, measurement and interpretation of tree rings in woody species from mediterranean climates’, Biological Reviews, 78(1), pp. 119–148. Available at: https://doi.org/10.1017/S1464793102006000.

Cook, E. et al. (1990) ‘Data Analysis’, in E.R. Cook and L.A. Kairiukstis (eds) Methods of Dendrochronology. Dordrecht: Springer Netherlands, pp. 97–162. Available at: https://doi.org/10.1007/978-94-015-7879-0_3.

Cook, E.R. (1985) ‘A TIME SERIES ANALYSIS APPROACH TO TREE RING STANDARDIZATION (DENDROCHRONOLOGY, FORESTRY, DENDROCLIMATOLOGY, AUTOREGRESSIVE PROCESS).’ Available at: https://repository.arizona.edu/handle/10150/188110 (Accessed: 12 December 2024).

Esper, J. et al. (2008) ‘Climate signal age effects—Evidence from young and old trees in the Swiss Engadin’, Forest Ecology and Management, 255(11), pp. 3783–3789. Available at: https://doi.org/10.1016/j.foreco.2008.03.015.

Frank, D., Fang, K. and Fonti, P. (2022) ‘Dendrochronology: Fundamentals and Innovations’, in R.T.W. Siegwolf et al. (eds) Stable Isotopes in Tree Rings: Inferring Physiological, Climatic and Environmental Responses. Cham: Springer International Publishing, pp. 21–59. Available at: https://doi.org/10.1007/978-3-030-92698-4_2.

Galiano, L., Martínez-Vilalta, J. and Lloret, F. (2011) ‘Carbon reserves and canopy defoliation determine the recovery of Scots pine 4 yr after a drought episode’, New Phytologist, 190(3), pp. 750–759. Available at: https://doi.org/10.1111/j.1469-8137.2010.03628.x.

Galmés, J. et al. (2015) ‘Temperature responses of the Rubisco maximum carboxylase activity across domains of life: phylogenetic signals, trade-offs, and importance for carbon gain’, Photosynthesis Research, 123(2), pp. 183–201. Available at: https://doi.org/10.1007/s11120-014-0067-8.

Caudullo, G., Welk, E. & San-Miguel-Ayanz, J., (2017). "Chorological maps for the main European woody species". Data in Brief, 12, pp.662-666. Available at: https://doi.org/10.1016/j.dib.2017.05.007 .

Gimeno, T.E. et al. (2012) ‘Enhanced growth of Juniperus thurifera under a warmer climate is explained by a positive carbon gain under cold and drought’, Tree Physiology, 32(3), pp. 326–336. Available at: https://doi.org/10.1093/treephys/tps011.

Gu, L. et al. (2003) ‘Response of a Deciduous Forest to the Mount Pinatubo Eruption: Enhanced Photosynthesis’, Science, 299(5615), pp. 2035–2038. Available at: https://doi.org/10.1126/science.1078366.

Guibal, F. et al. (2021) ‘An overview of three decades of dendrochronology applied to ancient Mediterranean shipwrecks in southeastern France’, Archaeonautica. L’archéologie maritime et navale de la préhistoire à l’époque contemporaine, (21), pp. 245–250. Available at: https://doi.org/10.4000/archaeonautica.1815.

Harris, I. et al. (2020) ‘Version 4 of the CRU TS monthly high-resolution gridded multivariate climate dataset’, Scientific Data, 7(1), p. 109. Available at: https://doi.org/10.1038/s41597-020-0453-3.

Holmes, R.L. (1983) ‘Computer-Assisted Quality Control in Tree-Ring Dating and Measurement’. Available at: https://repository.arizona.edu/handle/10150/261223 (Accessed: 12 December 2024).

Natalini, F. et al. (2024) ‘Declining trends in long-term Pinus pinea L. growth forecasts in Southwestern Spain’, Dendrochronologia, 88, p. 126252. Available at: https://doi.org/10.1016/j.dendro.2024.126252.

Natural Earth (2012) Natural Earth data. Version 2.0. Available at: http://naturalearthdata.com (Accessed: 2 December 2024).

Pilcher, J.R. et al. (1990) ‘Primary Data’, in E.R. Cook and L.A. Kairiukstis (eds) Methods of Dendrochronology. Dordrecht: Springer Netherlands, pp. 23–96. Available at: https://doi.org/10.1007/978-94-015-7879-0_2.

Pithan, F. and Schatt, L. (2024) ‘Diurnal Temperature Range Trends Differ Below and Above the Melting Point’, Geophysical Research Letters, 51(17), p. e2024GL109751. Available at: https://doi.org/10.1029/2024GL109751.

QGIS.org (2023) QGIS Geographic Information System. QGIS Association. Available at: https://qgis.org (Accessed: 12 December 2024).

RStudio Team (2023). RStudio: Integrated Development Environment for R. RStudio, PBC. Available at: https://posit.co (Accessed: 12 December 2024).

Serrano-Notivoli, R., Beguería, S. and de Luis, M. (2019) ‘STEAD: a high-resolution daily gridded temperature dataset for Spain’, Earth System Science Data, 11(3), pp. 1171–1188. Available at: https://doi.org/10.5194/essd-11-1171-2019.

Smith, D. and Lewis, D. (2007) ‘DENDROCHRONOLOGY’, in S.A. Elias (ed.) Encyclopedia of Quaternary Science. Oxford: Elsevier, pp. 459–465. Available at: https://doi.org/10.1016/B0-44-452747-8/00063-6.

Stoffel, M. et al. (2013) ‘12.9 Dendrogeomorphology: Dating Earth-Surface Processes with Tree Rings’, in J.F. Shroder (ed.) Treatise on Geomorphology. San Diego: Academic Press, pp. 125–144. Available at: https://doi.org/10.1016/B978-0-12-374739-6.00326-2.

Trouet, V. and Oldenborgh, G.J.V. (2013) ‘KNMI Climate Explorer: A Web-Based Research Tool for High-Resolution Paleoclimatology’, Tree-Ring Research, 69(1), pp. 3–13. Available at: https://doi.org/10.3959/1536-1098-69.1.3.

Turnbull, M.H., Murthy, R. and Griffin, K.L. (2002) ‘The relative impacts of daytime and night-time warming on photosynthetic capacity in Populus deltoides’, Plant, Cell & Environment, 25(12), pp. 1729–1737. Available at: https://doi.org/10.1046/j.1365-3040.2002.00947.x.

Żywiec, M. et al. (2017) ‘Long-term effect of temperature and precipitation on radial growth in a threatened thermo-Mediterranean tree population’, Trees, 31(2), pp. 491–501. Available at: https://doi.org/10.1007/s00468-016-1472-8.

