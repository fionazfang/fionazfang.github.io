// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Let&#39;s explore atmospheric, cryospheric, biospheric and lithospheric dynamics together!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-notes",
          title: "notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notes/index.html";
          },
        },{id: "post-glaciology-force-balance-in-ice-sheet-modelling",
        
          title: "Glaciology - Force Balance in Ice Sheet Modelling",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/glaciology-modelling/";
          
        },
      },{id: "post-volcanology-review-of-recent-eruptions",
        
          title: "Volcanology - Review of Recent Eruptions",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/volcanology-recent-eruption/";
          
        },
      },{id: "post-glaciology-submarine-glacial-landforms",
        
          title: "Glaciology - Submarine Glacial Landforms",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/glaciology-landform/";
          
        },
      },{id: "post-volcanology-fractional-crystallisation",
        
          title: "Volcanology - Fractional Crystallisation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/volcano-fractional-crystalisation/";
          
        },
      },{id: "post-paleoclimate-marine-sediments",
        
          title: "Paleoclimate - Marine Sediments",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/paleoclimate-marine-sediment/";
          
        },
      },{id: "post-glaciology-glaciovolcanic-hazards",
        
          title: "Glaciology - Glaciovolcanic Hazards",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/glaciology-hazards/";
          
        },
      },{id: "post-ecology-plant-phsyiology-water",
        
          title: "Ecology - Plant Phsyiology (Water)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ecology-water/";
          
        },
      },{id: "post-glaciology-ice-dynamics-and-velocity",
        
          title: "Glaciology - Ice Dynamics and Velocity",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/glaciology-dynamics/";
          
        },
      },{id: "post-paleoclimate-dendrochronology-and-dendroecology",
        
          title: "Paleoclimate - Dendrochronology and Dendroecology",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/paleoclimate-dendrochronology/";
          
        },
      },{id: "post-glaciology-seasonal-evolution-of-the-hydrological-system",
        
          title: "Glaciology - Seasonal Evolution of the Hydrological System",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/glaciology-hydrology-evolution/";
          
        },
      },{id: "post-norway-forest-firelight-snow-and-stars",
        
          title: "Norway - Forest, Firelight, Snow, and Stars",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/norway/";
          
        },
      },{id: "post-paleoclimate-pacemaker-of-quaternary-climate-change",
        
          title: "Paleoclimate - Pacemaker of Quaternary Climate Change",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/paleoclimate-orbital-cycle/";
          
        },
      },{id: "post-to-all-earth-science-enthusiasts-and-olympiad-participants",
        
          title: "To All Earth Science Enthusiasts and Olympiad participants",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ceso-speech/";
          
        },
      },{id: "post-reflections-on-my-international-earth-science-olympiad-ieso-journey",
        
          title: "Reflections on my International Earth Science Olympiad (IESO) Journey",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/ieso-interview/";
          
        },
      },{id: "post-atmosphere-impact-of-climate-change-on-tropical-cyclones",
        
          title: "Atmosphere - Impact of Climate Change on Tropical Cyclones",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/tropical-cyclone/";
          
        },
      },{id: "post-comparing-two-online-college-level-earth-science-courses-i-took-in-high-school",
        
          title: "Comparing two online college-level Earth Science courses I took in high school",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/college-earth-sci-course/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-geological-hazards-in-huyu-beijing",
          title: 'Geological Hazards in Huyu, Beijing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-huyu/";
            },},{id: "projects-orbital-control-during-the-past-1-5-ma",
          title: 'Orbital Control during the Past 1.5 Ma',
          description: "The Influence of Seasonal and Latitudinal Insolation Distribution on Climate Variability over the Past 1.5 Ma",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-orbit/";
            },},{id: "projects-heather-and-grass-stripes-in-breckland-area",
          title: 'Heather and Grass Stripes in Breckland Area',
          description: "Interaction Between Bedrock, Soil, and Vegetation in the Heather and Grass Stripes of Breckland",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-breckland/";
            },},{id: "projects-energy-balance-model",
          title: 'Energy Balance Model',
          description: "0D and 1D Energy Balance Model with Quaternary Radiative Forcing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-ebm/";
            },},{id: "projects-building-a-tree-ring-chronology",
          title: 'Building a Tree Ring Chronology',
          description: "An Example Using Scots Pine from Pinar Grande, Spain",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-biogeo/";
            },},{id: "projects-bipolar-seesaw-model",
          title: 'Bipolar Seesaw Model',
          description: "Reproducing the SJ03 Thermodynamic Ocean Model for PartIB Small-Group Supervision",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-bipolar-seesaw/";
            },},{id: "projects-bmi-for-prosum",
          title: 'BMI for PROSUM',
          description: "Basic Model Interface for Plant Production and Succession Model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-bmi/";
            },},{id: "projects-breckland-39-s-periglacial-patterned-ground",
          title: 'Breckland&amp;#39;s Periglacial Patterned Ground',
          description: "Linking Surface Morphology, Subsurface Structures, and Sediment Microfabrics Methods",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-breckland/";
            },},{id: "projects-glacial-flow-and-mass-balance-model",
          title: 'Glacial Flow and Mass Balance Model',
          description: "Parameter calibration, sensitivity test and future projection for Haut Glacier d&#39;Arolla",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-glacier/";
            },},{id: "projects-a-python-implementation-of-jules",
          title: 'A Python Implementation of JULES',
          description: "Joint UK Land Environment Simulator with flexible, modular design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-jules/";
            },},{id: "projects-global-volcanic-hotspots",
          title: 'Global Volcanic Hotspots',
          description: "Quantitative Analysis of Global Distribution and Impacts of Volcanic Hazards",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-volcano/";
            },},{id: "projects-sample-project",
          title: 'Sample Project',
          description: "Project with some sample codes...",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Sample-project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
