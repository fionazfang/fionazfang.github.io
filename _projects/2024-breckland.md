---
layout: page
title: Heather and Grass Stripes in Breckland Area
description: Interaction Between Bedrock, Soil, and Vegetation in the Heather and Grass Stripes of Breckland
img: assets/img/2024-breckland-figure2.png
importance: 2
category: Biosphere
giscus_comments: true
---

*This is a coursework project completed during my first year (Part IA) for the Quantitative Geographical Skills paper, which was awarded a first-class mark with distinction.*

# I. Introduction

## 1.1 Background 
Breckland is among England's driest regions, receiving only 530 mm of annual precipitation and exhibits a near-continental climate (Moorlock, 2003). The geological history of Breckland is marked by significant periglacial activity during the Devensian stage, which resulted in the brecciation of Chalk bedrock, creating frost crack-induced gullies on which coversand was later deposited  (Nicholson, 1976). Thick acid coversand supports heather and acid tolerant grassland, with diverse soil characteristics leading to significant variation in vegetation across distances as short as 10m (Boreham and Rolfe, 2017). This research focuses on a 30 x 50 meters site with heather and grass stripes (Figure 1, 2). It examines the interplay between bedrock, soil features, and vegetation patterns, which helps explain the geology and ecology of wider Breckland and contributes to the conservation of this critically endangered Environmentally Sensitive Area (Marrs and Britton, 2000). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2024-breckland-figure1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: Map of Breckland, East Anglia. The site outlined in red rectangular. The broader context illustrates its proximity to major cities like Peterborough, Norwich, and Cambridge, and landmarks and the Thetford Forest.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2024-breckland-figure2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: The spatial distribution of heather and grass stripes at the study site. Purple and green dots indicating the sampling heather quadrats and grass quadrats respectively.
</div>

## 1.2 Research Questions 
This study studies various parameters about bedrock, soil features and vegetation abundance. The bedrock for the region is known to be chalk, the depth to which reflects the magnitude that the soil is impacted by the bedrock. For soil properties, I am interested in pH, moisture and soil organic matter (SOM). Soil pH is defined as the negative logarithm of H+ activity in a solution and determines the environment for biochemical reaction. Soil moisture, the water content of soil, is crucial as water provides constitutes 80–95% of the plant's protoplasm and is essential for photosynthesis (Donahue Roy, Miller and Shickluna, 1977). SOM is essential for soil function and quality and can be measured by loss on ignition (LOI) (Hoogsteen et al., 2015). For vegetation, I studied the dominant species of quadrats (heather and grass), as they help explain the stripe pattern. I also studied a particular moss species that thrive in local condition, the Pseudoscleropodium Purum (P.purum) (British Bryological Society, 2020). The research questions are as follows:
1.	How do variations in bedrock depth influence soil properties (pH, moisture, SOM)?
2.	Do bedrock and soil properties (pH, moisture, SOM) vary between heather and grass stripes?
3.	To what extent can soil properties (pH, moisture, SOM) explain P.purum abundance variations across different quadrats?

## 1.3 Expectations 
Null Hypotheses (H0) for all questions are that there is no correlation between the variables tested, while the Alternative Hypotheses (H1) are there are correlations, with specific one-sided hypotheses entailed below.  

For Question 1, areas with deeper bedrock are expected to exhibit: (1) lower pH levels, because of less influence from the base chalk bedrock (Boreham and Rolfe, 2017); (2) greater moisture, as shallow soil layer limits water-holding capacity and dry out more quickly after precipitation (Bales et al., 2011; Takagi and Lin, 2012) ; (3) higher SOM (and LOI), as thicker soil layers support more extensive biological activity, therefore accumulate more organic matter. 
For Question 2, firstly, bedrock below heather is expected to be shallower than that below grass (Boreham and Rolfe, 2017). Meanwhile, heather is predicted to thrive in acidic, well-drained soils, while grass in more alkaline and moist soils. Heathland stores more carbon than grassland (Lake District National Park, 2021), thereby higher SOM (and LOI) is expected to find in heather quadrats. 

For Question 3, heather and grass quadrats are expected to find different P. purum abundance as they have different soil and ecological conditions. Regarding soil, P.purum is expected to prefer: (1) acidic conditions (lower pH values) (e.g. Chen et al., 2022); (2) moist conditions, as its metabolic efficiency is dependent on water availability and requires liquid water to accomplish fertilization (Bates, 1987); (3) high SOM (and LOI), as articulated by (Ladrón de Guevara and Maestre, 2022) . 

# II. Data and Methods

The data was collaboratively collected and processed by Part 1A geographers. I extracted the data used in this research using the dplyr package in R. Visualizations are created with QGIS, Inkscape, Excel and ggplot2 package in R. Statistical tests are also implemented in R. For Question 1, I applied correlation tests for bedrock depth and soil properties (pH, moisture, LOI). Shapiro-Wilk tests were taken before the tests to inform the use of Pearson or Spearman methods (corresponding to normally and non-normally distributed data). For Question 2, T-tests are applied of soil properties of heather and grass quadrats, with Student's T-test for normally distributed data with equal variances, Welch’s test for normal data with unequal variances, and the Wilcoxon Rank-Sum test for non-normal data. For Question 3, I first applied a T-test to evaluate the variation of P.purum abundance across heather and grass quadrats, and then conducted correlation tests for P.purum abundance and soil features. 

# III. Results

Table 1 shows the study area has shallow bedrock (0.47m depth), acidic soil (pH 5.3), varied moisture with large standard deviation, moderate organic content (LOI = 5%), and about 30% coverage of P. purum in each quadrat (Domin Scale = 6.4). Specific statistical test types are chosen based on Shapiro-Wilk test results. Spearman correlation is used for Question 1, considering the non-normally distribution of depth to chalk data (p-value = 1.513e-07). For Question 2, non-normal distributions in bedrock depth, soil pH, and LOI prompt use of the Wilcoxon Rank-Sum test, while the normally-distributed moisture data for heather and grass quadrats have different variance, requiring Welch’s test. P.purum abundance also shows non-normality (p-value = 0.0121), leading to Wilcoxon and Spearman tests in Question 3. Test results are detailed in Tables 2 and data are visualized in Figures 3-5.

For Question 1, Figure 3 (a) (b) (c) show a broad dispersion of data points, with no discernible correlation between bedrock depth and soil features. There is also no observable difference of the latter between cases where the bedrock was reached or not. Since depth to flint cannot reflect the bedrock information, only data of depth to chalk is considered in the tests. Spearman test results (Figure 3 (d)) show negligible Spearman's coefficients and high p-values, implying no significant relationships. 

For Question 2, firstly, it can be observed from Figure 4(a) that the bedrocks beneath grass quadrats tend to be shallower compared to those beneath heather quadrats, although Wilcoxon test result was not statistically significant to prove the difference (p-value = 0.0958). Secondly, soil pH differences between vegetation types are evident in Figure 4(b) and is supported by the result of Wilcoxon test (p-value = 0.0046). thirdly, moisture content, as shown in Figure 4(c), is broadly overlapping between the two vegetation types, with heather marginally wetter on average, although not proved by the Welch’s test (p-value = 0.1321). lastly, Figure 4(d)’s portrayal of LOI shows higher values in heather but is also not proved by the Wilcoxon test (p-value = 0.1160).
For Question 3, Figure 5(a) and its accompanying Wilcoxon test (p-value = 0.0114) show a significantly higher occurrence of P.purum in heather quadrats. Scatterplots (Figures 5(b) (c) (d)) for pH, moisture, and LOI, however, lack clear trends with P.purum abundance, supported by insignificant Spearman test results, although the r-values all have the same signs as expected (Table 2). No apparent difference between heather and grass data points are observed.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2024-breckland-table1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Table 1: Summary of data used by this research. Depth to flint data is recorded when the soil auger cannot reach the chalk bedrock. Although pH is a logarithmic scale, the arithmetic mean for pH data are taken here, as the arithmetic mean and true mean are quite similar. Soil moisture is measured in mV, with greater number indicating greater moisture. The abundance of P. purum is assessed using the Domin scale (5: 11-25%; 6: 26-33%; 7: 34-40%; 8: 51-75%).
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2024-breckland-table2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Table 2: Summary of the hypothesis tests taken in this research. All alternative hypotheses are one-tailed. The two tests with significant results (p-value < 0.05) are marked in blue. 
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2024-breckland-figure3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3: Scatterplots of soil pH (a), moisture (b), and LOI (c) against depth to bedrock. Depth to flint and depth to chalk are annotated by hollow and solid points respectively. Panel (d) is a summary of correlation statistics between depth to chalk bedrock and soil features.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2024-breckland-figure4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 4: Boxplots comparing depth to chalk bedrock (a), soil pH (b), moisture (c), and LOI (d) between heather and grass types.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2024-breckland-figure5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 5: Examination of P. purum abundance and soil parameters, including histogram displaying P. purum abundance across heather and grass quadrats (a), and scatter plots of P. purum frequency and soil pH (b), moisture (c), and LOI (d). Data from heather quadrats are represented in purple, and that from grass quadrats are represented in blue. 
        
# IV. Interpretation 
## 4.1 Methodological Reflection 
Several methodological problems may explain the result of this study. Firstly, the sample size, ranging from 30 to 70, are all too small for statistically significant conclusions, referred to as the false negative error (Andrade, 2020). Meanwhile, the data quality is discredited by lack of repeated tests. Single sampling in a limited site (30x50 meters) on a random day may not reflect the general patterns of the broader Breckland area.
Secondly, there are issues during data collection. Each group recorded vegetation, moisture and depth data across eight quadrats, and took soil samples from four of these quadrats for laboratory work (pH and LOI test). These soil samples were labeled by quadrat type (heather/grass), however, it is unclear which exact quadrat they are taking from. A quasi-quadrat number was given which assumes the soil are taken from the first four quadrats of the eight, however this still leads to discrepancies between the soil data and the underlying bedrock and vegetation data, particularly affecting Research Question 1 and 3. An additional problem in data collection is the inconsistency in methods used by groups, particularly P.purum abundance assessed via direct observation. 

## 4.2 Question 1: Soil and Bedrock
The relationships between all three soil features and depth to bedrock are insignificant. Although on a larger scale, soil pH is indeed dependent on the parent material, such as being lower above crystalline bedrocks than limestone (Reuter et al., 2008; Fabian et al., 2014), the size of the study site might be too small for such relationship to be apparent. Other factors might be more crucial, such as grazing. Sheep manures, as observed during the fieldtrip, can raise soil pH due to the lime-like materials contained (Zhang, 1998). Vegetation type also impacts soil pH, which would be discussed soon. 
Surface soil moisture is likely to be elevated by the recent rainfall prior to our visit, obscuring the typical moisture levels that might correlate with bedrock depth. There are also other factors impacting soil moisture in addition to bedrock. For example, fine-textured soil with granular structure can facilitate water infiltration (Donahue, Miller and Shickluna, 1977). To assess such relationship, further test between soil moisture and soil texture data is needed. 

While deeper soils might typically accumulate more SOM, in Breckland, the type of vegetation could play a more critical role in determining the latter. Heather, for example, may contribute to a slower accumulation of organic matter due to their specific plant litter characteristics and decomposition rates, although such relationship between vegetation and carbon content is not clear, at least in this study site. 

## 4.3 Question 2 and 3: Vegetations 
A clearer pattern is seen in the test results regarding the vegetations. For Question 2, statistical tests did not corroborate the expected differences in bedrock depth between heather and grass as suggested by literature (e.g. Boreham and Rolfe, 2017), despite observable differences in mean data from the boxplot (Figure 3a). This discrepancy is likely due to the small sample size. Moreover, soil moisture and SOM had minimal impact on vegetation patterns, although this conclusion might be blurred by the methodological issues mentioned above. The only soil feature showing significant difference between heather and grass despite is pH. This aligns with the widely acknowledged fact that heathers favour acid soil, and that they can further acidify soil by releasing organic acid through roots and litter with high phenolic compounds (Jalal et al., 1982). Therefore, we can conclude that soil pH difference is the most important factor in explaining the heather and grass stripes in the study area. 
For Question 3, while a notable preference of P.purum for heather quadrats was observed, soil characteristics did not explain this pattern. Other factors, such as ecological competition and habitat preferences, might be more dominant in influencing P.purum abundance. Specifically, grasses generally rapidly occupy space, limiting P.purum's spread, whereas heather's open structure allows more light and space, supporting P.purum growth (British Bryological Society, 2020; Alonso and Hartley, 1998).

# V. Conclusion
This study proposed interpretation for the observed relationship between bedrock, soil and vegetation, although the reliability of the conclusion is reduced by methodological issues. No correlation was found between bedrock and soil, possibly because the impact of bedrock on soil is exceeded by other factors such as grazing, soil texture and vegetation. Meanwhile, pH difference most effectively explains the heather and grass stripe pattern, compared to bedrock, soil moisture and SOM. Lastly, the preference of P.purum in growing in heather-dominant is proved statistically but is failed to be explained by soil features. Other factors such as ecological competition may be more important. 

The study would be benefited from refined methodologies including multiple tests, expansion of study site, and accurate sample numbering. Further research should investigate the relationship between soil texture and moisture, alongside clearer, qualitative observations of dominant vegetation, so as to test the hypotheses proposed. Such improvement would help provide more informative conclusions explaining soil-bedrock interaction and the species relations in the heathland.

# Bibliography
Andrade, C. (2020) ‘Sample Size and its Importance in Research’, Indian Journal of Psychological Medicine, 42(1), pp. 102–103. Available at: https://doi.org/10.4103/IJPSYM.IJPSYM_504_19.

Bales, R.C. et al. (2011) ‘Soil Moisture Response to Snowmelt and Rainfall in a Sierra Nevada Mixed‐Conifer Forest’, Vadose Zone Journal, 10(3), pp. 786–799. Available at: https://doi.org/10.2136/vzj2011.0001.

Bates, J.W. (1987) ‘Nutrient retention by Pseudoscleropodium purum and its relation to growth’, Journal of Bryology, 14(3), pp. 565–580. Available at: https://doi.org/10.1179/jbr.1987.14.3.565.

Boreham, S. and Rolfe, C.J. (2017) ‘IMAGING PERIGLACIAL STRIPES USING GROUND PENETRATING RADAR AT THE “GRIM” TRAINING SITE, GRIME’S GRAVES, BRECKLAND, NORFOLK’.

Chen, S. et al. (2022) ‘Using moss as a bio-indicator to evaluate soil quality in litchi orchard’, PLOS ONE, 17(12), p. e0278303. Available at: https://doi.org/10.1371/journal.pone.0278303.

Dekking, F.M. (2005) A Modern Introduction to Probability and Statistics: Understanding Why and How. Springer Science & Business Media.

Donahue Roy, L., Miller, R.W. and Shickluna, J.C. (1977) Soils: An Introduction to Soils and Plant Growth. Englewood Cliffs: Prentice-Hall.

Fabian, C. et al. (2014) ‘GEMAS: Spatial distribution of the pH of European agricultural and grazing land soil’, Applied Geochemistry, 48, pp. 207–216. Available at: https://doi.org/10.1016/j.apgeochem.2014.07.017.

Farming and carbon (2021) Lake District National Park. Lake District National Park: hq@lakedistrict.gov.uk. Available at: https://www.lakedistrict.gov.uk/caringfor/farming/farming-and-carbon (Accessed: 29 April 2024).

Hoogsteen, M.J.J. et al. (2015) ‘Estimating soil organic carbon through loss on ignition: effects of ignition conditions and structural water loss’, European Journal of Soil Science, 66(2), pp. 320–328. Available at: https://doi.org/10.1111/ejss.12224.

Ladrón de Guevara, M. and Maestre, F.T. (2022) ‘Ecology and responses to climate change of biocrust-forming mosses in drylands’, Journal of Experimental Botany, 73(13), pp. 4380–4395.

Marrs, R. and Britton, A. (2000) ‘Conservation problems on Breckland heaths: from theory to practice’, Biological Conservation, 95(2), pp. 143–151.

Moorlock, B.S.P. (2003) Geology of the Saffron Walden District: A Brief Explanation of the Geological Map Sheet 205 Saffron Walden. British Geological Survey.

Nicholson, F.H. (1976) ‘Patterned ground formation and description as suggested by low arctic and subarctic examples’, Arctic and Alpine Research, 8(4), pp. 329–342.

Reuter, H.I. et al. (2008) ‘CONTINENTAL-SCALE DIGITAL SOIL MAPPING USING EUROPEAN SOIL PROFILE DATA: SOIL PH’.

Takagi, K. and Lin, H.S. (2012) ‘Changing controls of soil moisture spatial organization in the Shale Hills Catchment’, Geoderma, 173–174, pp. 289–302. Available at: https://doi.org/10.1016/j.geoderma.2011.11.003.

Zhang, H. (1998). Animal manure can raise soil pH. Oklahoma State University. Division of Agricultural Sciences and Natural Resources. Cooperative Extension Service.






