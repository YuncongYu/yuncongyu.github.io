import SsrnLogo from "../assets/publications/ssrn-logo.svg";
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
      avatar: <SsrnLogo />,
      title:
        "NOOPS: Nonmyopic Feedback-Driven Pattern Search in Multivariate Time Series",
      venue: "Preprint \u00a0|\u00a0 SSRN",
      time: "Feb. 2026",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5180352",
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
        "SAXRegEx: Multivariate time series pattern search with symbolic representation, regular expression, and query expansion",
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
  ],
};

export default publicationsConfig;
