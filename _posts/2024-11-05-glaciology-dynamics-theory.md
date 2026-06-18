---
layout: post
title: Glaciology - Ice Dynamics (Theory) 
date: 2024-11-25 17:29:55
tags: Glaciology
---

# Theory 1: Ice Creeping

Ice creep as ice crystal deforms under the pressure exerted by its own weight. At any level within a glacier, the velocity resulting from ice creep is the cumulative effect of the strain rates (i.e. velocity gradients) in the underlying ice column.

**1.1 Glen’s flow law**

Ice “creep” is governed by Glen’s flow law, $\dot{\varepsilon}=A\tau^n$, in which the strain rate $\dot{\varepsilon}$ depends on the applied shear stress $\tau$ (arises from ice overburden and surface slope and approximated by $\rho g h \sin\alpha$). The exponent $n$ is canonically taken as $3$ for natural polycrystalline ice (Glen, 1955; Nye, 1953). However, in reality the best-fit exponent vary between places. For example in high strain conditions ($>8%$) $n$ of $\sim4$ better captures the ice behaviour (Fan et al., 2025). On the other hand, experiments by Schohn et al (2024) suggest that the strain rate for temperate ice scales nearly linearly with applied stress ($n\approx1$), since diffusive pressure melting and refreezing at grain boundaries decouples stress transmissions between grains.

$A$ represents ice hardness and is a temperature- and microstructure-sensitive rate factor. $A$ follows an Arrhenius relationship, $A=A_0\exp(-Q/RT)$: greater molecular movement under higher temperature allows ice to creep orders of magnitude faster than cold ice (Paterson, 1994). For example, ice hardness decreases by a factor of $\sim1000$ from $-55^\circ\mathrm{C}$ to $0^\circ\mathrm{C}$ (Glen, 1995). At the microscale, air bubbles, dust, and thin films of liquid water along grain boundaries can weaken ice, increasing $A$. For ice at $0^\circ\mathrm{C}$, hardness decreases by a factor of $\sim3$ for water content from 0 to 1% (Goldsby & Kohlstedt, 2001; Cuffey & Paterson, 2010). Laboratory studies Laboratory studies by Nickling and Bennett (1984) concluded that the strength of debris-ice mixtures increases as debris contents increase from 0 to 75%, then falls sharply at higher debris contents, probably as the result of the varying influence of friction between rock particles and the cohesive effect of the ice.

Crystal fabric and recrystallization dynamics is also important: As a glacier begins to deform, ice initially “hardens” as stress redistribute between grains and dislocations impinge on each other (primary creep). As the stress increase, ice grains recrystallize to align basal planes to the shear planes, effective softening the ice (tertiary creep) (Duval and Castelnau, 1995). Flow law normally describes the secondary creep when the hardening and recovery balance, which is a good macro-scale approximation (but may not capture ice’s immediate response to sudden stress change (primary creep), and accelerated flow in local shear zones (tertiary creep)).

**1.2 Beyond Glen’s flow law**

While all glacier ice undergoes creep, it plays a dominant role in cold-based glaciers. In other temperate and polythermal glaciers, creep alone cannot explain observations. For example, models by Rignot et al. (2011) that only contains Glen law creep (with $n=3$, $A=9\times10^{-25}\ \mathrm{Pa^{-3}\ s^{-1}}$) fails to reproduce the observed 2007 2009 InSAR velocity field everywhere except within a narrow band near the ice divides. Agreement between modelled and observed fields collapses as soon as observed speeds exceed $\approx15\ \mathrm{m\ a^{-1}}$. A further experiment which doubles $A$ did not fix this mismatch either. Thereby they conclude that Antarctic flow is “basal slip–dominated” rather than “deformation dominated”.

# Theory 2: Basal Sliding

Sliding refers to slip between a glacier and its bed. Ice can slide over the base since ice is less dense than water and water slide more easily.

**2.1 Water film law**

As ice flows over a bump, the upstream side of the bump resists the ice flow and raises the local pressure, while the elongation of the ice in the lee side decreases the pressure. This small-scale change in pressure on a bump can drive basal sliding by 1. altering the melting point of ice and 2. enhancing ice deformation.

Firstly, enhanced pressure in the upstream side lowers the pressure melting point of the ice. The generated melt water flows over the bump to the lee side where the pressure is low, thereby nudged under pressure melting point and refreezes (Weertman, 1964). This mechanism works best for small bumps ($<0.5$) where the latent heat released from refreezing can be conducted back to assist in melting on the upstream side. Simultaneously, the high stress around the upstream side drive enhanced creep around the bump since local strain rate increases non‐linearly with stress (as in Glen’s law). This mechanism works best for large bumps ($>0.5\ \mathrm{m}$) since stress change is small around small obstacles. Thereby the maximum resistance to sliding is possessed by obstacles at an intermediate size (normally $0.5\ \mathrm{m}$) for which neither mechanism is efficient (Kamp and LaChaplle, 1975).

**2.2 Cavity law**

As glacier flow over larger bumps, cavities formed in the lee side where normal stress is low, which can hold melt water and reduce effective bed roughness. The sliding rate is expressed as $u_b=k\tau_b^pN^{-q}$, where $p=3$, $q=1$, and $N$ stands for effective pressure ($P_{\mathrm{ice}}-P_{\mathrm{water}}$). At low shear stress or high $N$, cavities are closed and sliding is slow; as shear stress rises or water pressure increases (lower $N$), cavity expansion accelerates slip (Budd et al., 1979). This law has successfully explained the dynamics of multiple hard-bedded glaciers. For example Gilbert et al (2023) showed that for Argentière Glacier in French Alps, the best-fit value for Weertman law exponent $p$ is $3.1\pm0.3$. Interestingly, Stearns and van der Veen (2018)’s observations of Greenland outlet glaciers revealed no correlation between $\ln(U_b)$ and $\ln(\tau_b)$ but a linear relationship with the coefficient $q$ between $\ln(U_b)$ and $\ln(N_c)$. Therefore, they concluded that effective pressure has a stronger influence on sliding velocity than shear stress, and suggested that the basal sliding rate could be simplified as: $U_b=A_sN_{\mathrm{eq}}$.

**2.3 Global control**

However, this unphysically predicts a infinite sliding velocity when the effective pressure approaches 0 (i.e. when water pressure equals ice pressure, possibly driven by flooding, channelization). Schoof (2005) better constrain this law by arguing that the basal shear stress must be capped by a Coulomb-style yield limit, $\tau_b \le \tau_c=C_cN$, where $C_c$ is set by bed-rock geometry and interfacial friction. This highlights the competition between local and global control: 1. When $P_w<P_s$ (separation pressure), local control prevails, as individual sticky spots (i.e., high-friction areas) or basal bumps can balance the driving stress locally. 2. As $P_w$ exceeds $P_s$, cavities grow and sliding speed increases. However, as frictional force reduces, local resistive stress cannot balance the driving stress anymore. When the bed becomes weak ($\tau_b\ll\tau_d$) over a broad region, resistance to flow is maintained by the global controls, such as internal deformation of the ice and lateral drag. As a result, sliding velocity also becomes less sensitive to further increases in $P_w$ (hence the plateau in the slip velocity–water pressure curve).

# Theory 3: Sediment Deformation

Till is an unconsolidated, poorly sorted, water-rich sediment. Once the shear stress delivered by the overlying ice surpasses its strength, the grain contacts weaken and slide pass each other, producing shear deformation that accelerate the glacier motion.

**3.1 Viscos or plastic** (Boulton and Hindmarsh, 1987; Iverson et al., 1998)

Boulton & Hindmarsh (1987) introduced a viscoplastic law for subglacial till in which no deformation occurs until the basal shear stress $\tau$ exceeds a Coulomb yield $\tau_n=c+N\tan\phi$, and beyond that threshold the till deforms according to the power-law relation ($\dot{\varepsilon}=K(\tau-\tau_{\mathrm{yield}})^aN^{-b}$, where $a=1$, $b=1$). This formulation is derived based on their field work where they inserted strain markers into till via englacial tunnels in Brei∂amurkajökull, Iceland, and found that the deformation speed increases with “excess stress” ($\tau-\tau_{\mathrm{yield}}$) and decreases with effective pressure ($N$). However, many lab experiments showed that after failure, till strength becomes essentially independent of shear rate. For example, Iverson et al. (1998) showed in undrained ring-shear tests that the tills experience rapid, permanent deformation once a threshold is reached, which is a characteristic feature of plastic rather than viscous materials.

Tulaczyk et al (2000) extended this view by combining undrained ring-shear experiments on Antarctic till with GPS-tracked ice stream velocities to show that once pore-pressure–elevated stress reaches $\sim100$–$200\ \mathrm{kPa}$, the till slips at nearly constant stress, strongly supporting a rate-independent, plastic law. Schoof (2002) then demonstrated analytically that adopting a plastic (or very high‐exponent viscoplastic) basal law produces sharper transitions between frozen and sliding beds and better reproduces the rapid switch-on/off behavior of many ice streams. More recently, Herzfeld et al. (2011) applied discrete‐element models showing that microstructural force chains in till collapse abruptly at yield, again favoring a plastic threshold.

**3.2 Unified slip law** (Zoet and Iverson 2020; Minchew and Joughin, 2020)

Glaciers slide over beds that vary from rigid bedrock to deformable sediment, with slip defined as the combination of sliding along the ice-bed interface and deformation of the bed itself. There are two forms of drag forces controlling the slip of the ice, namely skin friction and form drag. Each has different dependencies on water pressure and rate of slip at bed. (1) Skin friction: describes the resistance to sliding along an interface; strongly depends on water pressure but is essentially independent of the slip rate; acts as a pressure-controlled Coulomb drag. (2) Form drag: results from the pressure gradient associated with flow around an object; strongly depends on flow speed but does not directly depend on water pressure; acts as a velocity-controlled pressure drag.

Form drag dominates when the bed is rigid and ice flows around rocks (clasts) at the ice-bed interface. Skin friction dominates when the bed is deforming and friction acts on sediment grain boundaries. Thus, the transition between the two drag mechanisms is controlled by the shear strength (or yield stress) of the sediment, defined as $N\tan(\Phi)$. The form of Eq. 3 is similar to that estimated for sliding over a hard bed with cavity formation, so a slip law of this form may be generally applicable without knowledge of the bed type.
