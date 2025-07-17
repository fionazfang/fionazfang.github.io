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
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-to-all-earth-science-enthusiasts-and-olympiad-participants",
        
          title: "To All Earth Science Enthusiasts and Olympiad participants",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/ceso-speech/";
          
        },
      },{id: "post-reflections-on-my-ieso-journey",
        
          title: "Reflections on my IESO Journey",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/ieso-interview/";
          
        },
      },{id: "post-how-would-climate-change-impact-tropical-cyclones",
        
          title: "How Would Climate Change Impact Tropical Cyclones?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/tropical-cyclone/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
