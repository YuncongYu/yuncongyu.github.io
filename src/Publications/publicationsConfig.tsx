import type { ReactElement } from "react";
import Strong from "../Strong/Strong.tsx";

interface Publication {
  avatar?: ReactElement;
  venue: string;
  title: string;
  content?: ReactElement;
  time: string;
  link: string;
  media?: ReactElement;
}

interface PublicationConfig {
  publications: Publication[];
}

const publicationsConfig: PublicationConfig = {
  publications: [
    {
      // avatar: <SsrnLogo />,
      title:
        "NOOPS: Nonmyopic Feedback-Driven Pattern Search in Multivariate Time Series",
      venue: "Preprint \u00a0|\u00a0 SSRN",
      time: "Feb. 2026",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5180352",
    },
    {
      title: "Multivariate Time Series Pattern Search",
      venue: "Doctoral thesis at Utrecht University",
      time: "Jan. 2025",
      link: "https://research-portal.uu.nl/en/publications/multivariate-time-series-pattern-search",
    },
    {
      title: "Time Series Representation Techniques: a Survey",
      venue: "Preprint \u00a0|\u00a0 SSRN",
      time: "Oct. 2025",
      link: "https://papers.ssrn.com/abstract=5180323",
    },
    {
      title:
        "PSEUDo: Interactive Pattern Search in Multivariate Time Series with Locality-Sensitive Hashing and Relevance Feedback",
      venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG)",
      content: (
        <Strong>
          Best paper in VDS 2022
          {/*Best Paper in Visualization in Data Science (VDS at IEEE VIS) 2022*/}
        </Strong>
      ),
      time: "Jan. 2023",
      link: "https://ieeexplore.ieee.org/document/9904933",
    },
    {
      title:
        "SAXRegEx: Multivariate Time Series Pattern Search With Symbolic Representation, Regular Expression, and Query Expansion",
      venue: "Computers & Graphics",
      content: (
        <Strong>
          Best paper in EuroVis 2022
          {/*Best Paper in the 13th International EuroVis Workshop on Visual Analytics (EuroVA 2022)*/}
        </Strong>
      ),
      time: "Mar. 2023",
      link: "https://www.sciencedirect.com/science/article/pii/S0097849323000316",
    },
    {
      title:
        "Segmentation of Multivariate Time Series with Convolutional Neural Networks",
      venue:
        "International Conference on Calibration Methods and Automotive Data Analytics",
      content: <>Emerged from my master thesis at AUDI AG and KIT.</>,
      time: "May 2019",
      link: "https://www.fast.kit.edu/lff/5773_12639.php",
    },
    {
      title:
        "Time Series Comparison with Dynamic Time Warping, Convolutional Neural Network and Regression",
      venue:
        "International Conference on Calibration Methods and Automotive Data Analytics",
      content: <>Emerged from my master thesis at AUDI AG and KIT.</>,
      time: "May 2019",
      link: "https://www.fast.kit.edu/lff/12227_12640.php",
    },
  ],
};

export default publicationsConfig;
