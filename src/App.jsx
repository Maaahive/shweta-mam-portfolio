import { useState } from "react";
import Recents from "./Recents";
import PubCard from "./Card";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNav = (section) => {
    setActiveSection(section);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const publications = [
    {
      images: [
        {
          image: "/Recents/mimo/pic1.png",
        },
        {
          image: "/Recents/mimo/pic2.png",
        },
        {
          image: "/Recents/mimo/pic3.png",
        },
        {
          image: "/Recents/mimo/pic4.png",
        },
        {
          image: "/Recents/mimo/pic5.png",
        },
        {
          image: "/Recents/mimo/pic6.png",
        },
        {
          image: "/Recents/mimo/pic7.png",
        },
      ],

      title: (
        <>
          <p>
            N. Tewari, A. Bansal, S. Srivastava and W. Whittow,{" "}
            <b>
              "A Novel High-Gain Hexagonal Cavity-Backed MIMO SIW Antenna With
              3-D Homogeneous Lens Loading at Ka Band,"
            </b>{" "}
            <i>in IEEE Antennas and Wireless Propagation Letters,</i> vol. 24,
            no. 9, pp. 2889-2893, Sept. 2025, doi: 10.1109/LAWP.2025.3576566.
          </p>
        </>
      ),
    },

    {
      images: [
        {
          image: "/Recents/sifw/Picture4.png",
          caption: "Fabricated SIFW M-BFAS",
        },
        {
          image: "/Recents/sifw/Picture5.png",
          caption: "Fabricated Structure of middle layer",
        },
        {
          image: "/Recents/sifw/Picture1.png",
          caption: "SIFW Butler matrix network - Top view of upper layer",
        },
        {
          image: "/Recents/sifw/Picture2.png",
          caption: "SIFW Butler matrix network - Top view of middle layer",
        },
        {
          image: "/Recents/sifw/Picture3.png",
          caption:
            "(a) Layout of SIFW M-BFAS and (b) Architecture of middle layer",
        },
      ],

      title: (
        <>
          <p>
            Wriddhi Bhowmik, Shweta Srivastava, And Laxman Prasad,
            <b>
              {" "}
              “Design Of A Low Cost 44 Butler Matrix Fed Antenna Array Partially
              Loaded With Substrate Integrated Waveguide (SIW),
            </b>
            <i>
              International Journal of Microwave And Optical Technology (IJMOT),
            </i>{" "}
            Vol.9, NO.3, May 2014, pp. 227-236.
          </p>
        </>
      ),
    },

    {
      images: [
        {
          image: "/Recents/tap/Picture2.png",
          caption: "Top View of Fabricated Structure",
        },
        {
          image: "/Recents/tap/Picture3.png",
          caption: "Bottom View of Fabricated Structure",
        },
        {
          image: "/Recents/tap/Picture4.png",
          caption: "Field Distribution at 18 GHz",
        },
        {
          image: "/Recents/tap/Picture1.png",
          caption:
            "Layout of the proposed antenna: radius (r) = 40 mm; width of SIW (w) = 9.3 mm; L1 = 6 mm; L2 = 20 mm; d = 1 mm; s2 = 2 mm; s1 = 4.2 mm; s = 2.55 mm and  a = 26.5 mm.",
        },
      ],

      title: (
        <>
          <p>
            Wriddhi Bhowmik and Shweta Srivastava,{" "}
            <b>
              “Design of Compact Omnidirectional Substrate Integrated Waveguide
              Exponentially Tapered Multiple H-Plane Horn Antenna”,
            </b>{" "}
            <i>
              {" "}
              AEU - International Journal of Electronics and Communications,
            </i>{" "}
            DOI:10.1016/j.aeue.2019.05.036, June 2019.
          </p>
        </>
      ),
    },

    {
      images: [
        {
          image: "/Recents/h/Picture2.png",
          caption:
            " Field distribution: (a) at 13.8 GHz (only horn apertures are radiating), and (b) at 18.42 GHz (only slots are radiating)",
        },
        {
          image: "/Recents/h/Picture1.png",
          caption: "Layout of Proposed Structure",
        },
        {
          image: "/Recents/h/Picture3.png",
          caption: "Fabricated Structure",
        },
      ],

      title: (
        <>
          <p>
            Wriddhi Bhowmik and Shweta Srivastava,{" "}
            <b>
              “Design of Substrate Integrated Folded Waveguide H-Plane Horn
              Antenna Array With Simultaneous Omnidirectional and Directional
              Radiation Characteristics”,
            </b>{" "}
            <i>Progress in Electromagnetic Research M,</i> 107:141- 154, January
            2022, DOI: 10.2528/PIERM21121302.
          </p>
        </>
      ),
    },

    {
      images: [
        {
          image: "/Recents/leak/Picture2.png",
          caption:
            "Fabricated design and scattering parameters measurement setup",
        },
        {
          image: "/Recents/leak/Picture1.png",
          caption:
            "Proposed Geometry of H shaped MIMO substrate integrated waveguide H plane horn antenna",
        },
      ],

      title: (
        <>
          <p>
            Nidhi Tewari, Neetu Joshi, Shweta Srivastava,{" "}
            <b>
              " A Novel Reconfigurable H-Plane Horn Leaky wave Substrate
              Integrated Waveguide MIMO Antenna for K Band",
            </b>{" "}
            <i>
              AEU - International Journal of Electronics and Communications,
            </i>{" "}
            170(5):154832, July 2023.DOI:10.1016/j.aeue.2023.154832
            <br />
            <ul className="custom">
              <li>
                The MIMO antenna is designed by connecting a single H plane SIW
                antenna in an H shaped.
              </li>
              <li>
                The antennas are placed such that their slotted parts are
                directed in three different planes and their end fire direction
                is in same direction.
              </li>
            </ul>
          </p>
        </>
      ),
    },

    {
      images: [
        {
          image: "/Recents/uda/Picture1.png",
          caption: "Layout of the array structure",
        },
        {
          image: "/Recents/uda/Picture2.png",
          caption:
            "Simulated and measured reflection coefficient and the fabricated structure",
        },
        {
          image: "/Recents/uda/Picture3.png",
          caption:
            "Simulated and measured radiation patterns of the array. 23.7 GHz: (a) E-plane, (b) H-plane. 26.3 GHz: (c) E-plane, (d) H-plane. 27.63 GHz: (e) E-plane, (f) H plane. 29.4 GHz: (g) E-plane, (h) H-plane.",
        },
      ],

      title: (
        <>
          Arnab Chakraborty and Shweta Srivastava,{" "}
          <b>
            "High Gain Substrate Integrated Waveguide Fed Yagi-Uda Antenna Array
            on Silicon Substrate for Multiband Applications,"
          </b>{" "}
          <i>Progress In Electromagnetics Research C,</i> Vol. 116, 265-275,
          2021. doi:10.2528/PIERC21100703
          http://www.jpier.org/PIERC/pier.php?paper=21100703
          <br />
          <ul className="custom">
            <li>
              A novel design of a SIW fed Yagi-Uda antenna for multiband
              operations was implemented. Gain was improved using various
              methods.
            </li>
            <li>
              The array operates for 23.7, 26.3, 27.5-28.3 and 29.4 GHz
              frequencies and peak gains are 19.65, 10.54, 16.08 and 11.50 dBi
              respectively.
            </li>
          </ul>
        </>
      ),
    },

    {
      images: [
        {
          image: "/Recents/quad/Picture3.jpg",
          caption:
            "Schematic diagram of proposed circular cavity backed SIW antenna, its layout configuration and fabrication prototype.",
        },
        {
          image: "/Recents/quad/Picture1.png",
          caption:
            "Schematic diagram of proposed circular cavity backed SIW antenna, its layout configuration and fabrication prototype.",
        },
        {
          image: "/Recents/quad/Picture2.jpg",
          caption:
            "Schematic diagram of proposed circular cavity backed SIW antenna, its layout configuration and fabrication prototype.",
        },
        {
          image: "/Recents/quad/Picture4.jpg",
          caption:
            " S-parameter response of proposed circular cavity backed SIW antenna.",
        },
      ],

      title: (
        <>
          Nidhi Tewari, Neetu Joshi, Shweta Srivastava,{" "}
          <b>
            “A compact quad‐band circular cavity backed substrate integrated
            waveguide antenna for millimeter wave applications”,
          </b>
          <i>Microwave and Optical Technology Letters,</i> May 2023,
          https://doi.org/10.1002/mop.33766.
        </>
      ),
    },

    {
      images: [
        {
          image: "/Recents/patch/Picture4.jpg",
        },
        {
          image: "/Recents/patch/Picture5.jpg",
        },
        {
          image: "/Recents/patch/Picture6.jpg",
        },
        {
          image: "/Recents/patch/Picture7.jpg",
        },
        {
          image: "/Recents/patch/Picture8.jpg",
        },
        {
          image: "/Recents/patch/Picture1.png",
        },
        {
          image: "/Recents/patch/Picture2.jpg",
        },
        {
          image: "/Recents/patch/Picture3.png",
        },
      ],

      title: (
        <>
          Nidhi Tewari, Neetu Joshi, Shweta Srivastava,{" "}
          <b>
            “A Miniaturized Aperture Coupled 4x4 MIMO Array SIW Antenna at K
            band”
          </b>
          , &nbsp;
          <i>Microw. Opt. TechnolLett 2023.</i>
          DOI: 10.1002/mop.33952
        </>
      ),
    },

    {
      images: [
        {
          image: "/Recents/novel/Picture1.jpg",
          caption: "Photograph of upper substrate layer with top ground plane",
        },
        {
          image: "/Recents/novel/Picture2.jpg",
          caption:
            "Photograph of lower substrate layer with central metal septum",
        },
        {
          image: "/Recents/novel/Picture3.png",
          caption:
            "Photograph of Fabricated FSIW with transitions and SMA connectors",
        },
        {
          image: "/Recents/novel/Picture4.png",
        },
      ],

      title: (
        <>
          Sheelu Kumari, Vibha Rani Gupta and Shweta Srivastava,{" "}
          <b>
            “A Novel Feeding Technique for Folded Substrate Integrated
            Waveguide”,
          </b>{" "}
          <i>AEU - International Journal of Electronics and Communications</i>{" "}
          138(8):153852, DOI:10.1016/j.aeue.2021.153852, June 2021
          <ul className="custom">
            <li>
              C-Type FSIW operating in Ku band, integrated with the designed
              transition is fabricated
            </li>
            <li>
              Duroid 5870 with εr = 2.33 and height 0.787mm is used for the
              fabrication.
            </li>
          </ul>
        </>
      ),
    },

    {
      images: [
        {
          image: "/Recents/wifi/Picture1.jpg",
          caption:
            "Photographs of fabricated SFSIW Filter - upper substrate layer with top ground plane ",
        },
        {
          image: "/Recents/wifi/Picture2.jpg",
          caption:
            "Photographs of fabricated SFSIW Filter - lower substrate layer with slots on the central metal septum",
        },
        {
          image: "/Recents/wifi/Picture3.jpg",
          caption:
            "Photographs of Fabricated SFSIW with transitions and SMA connectors",
        },
        {
          image: "/Recents/wifi/Picture4.png",
          caption:
            "Comparison of simulated S21 parameters response of the SFSIW Filter obtained using HFSS and ADS with Measured results",
        },
        {
          image: "/Recents/wifi/Picture5.png",
          caption:
            "Comparison of simulated S11 parameters response of the SFSIW Filter obtained using HFSS and ADS with Measured results",
        },
      ],

      title: (
        <>
          Sheelu Kumari, Vibha Rani Gupta and Shweta Srivastava,
          <b>
            “Folded Substrate Integrated Waveguide Based Multiband Filter for
            Wi-Fi6E Application”
          </b>{" "}
          <i>Wireless Personal Communications (Springer),</i> DOI:
          10.1007/s11277-021-08297-3, March 2021.
        </>
      ),
    },

    {
      images: [
        {
          image: "Recents/mmr/Picture1.png",
          caption: "Top view of fabricated filter",
        },
        {
          image: "Recents/mmr/Picture2.png",
          caption: "Bottom view of fabricated filter",
        },
        {
          image: "Recents/mmr/Picture3.png",
        },
      ],

      title: (
        <>
          Nitin Muchhal and Shweta Srivastava,
          <b>
            “Design of wideband comb shape substrate integrated waveguide
            multimode resonator bandpass filter with high selectivity and
            improved upper stopband performance”,
          </b>{" "}
          <i>
            International Journal of RF and Microwave Computer-Aided
            Engineering,
          </i>{" "}
          DOI: 10.1002/mmce.21807, April 2019
          <ul className="custom">
            <li>
              The result shows that filter produces three TZs (TZ1, TZ2, TZ3)
              are produced at 10.68, 18, and 20.45 GHz, respectively by
              comb-shaped slots. From the simulated result, the 3-dB bandwidth
              is calculated to be 5.30 GHz (11.30-16.6 GHz). Further, it can be
              observed that roll off rate is 58.4 dB/GHz at the lower edge of
              pass band and 44.8 dB/GHz at the upper edge of pass band.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="layout">
      {/* TOGGLE BUTTON */}
      <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h3>Profile</h3>

        <button onClick={() => handleNav("home")}>Home</button>
        <button onClick={() => handleNav("education")}>Education</button>
        <button onClick={() => handleNav("experience")}>Experience</button>
        <button onClick={() => handleNav("tnr")}>Academic Contributions</button>
        <button onClick={() => handleNav("resp")}>
          Administrative Responsibilities
        </button>
        <button onClick={() => handleNav("phd")}>Doctoral Supervision</button>

        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() =>
              setOpenDropdown(openDropdown === "projects" ? null : "projects")
            }
          >
            Projects ▾
          </button>

          {openDropdown === "projects" && (
            <div className="dropdown-content">
              <button onClick={() => handleNav("research")}>
                Research Projects
              </button>

              <button onClick={() => handleNav("pg")}>
                PG Projects Guided
              </button>

              <button onClick={() => handleNav("ongoing")}>
                Ongoing Projects
              </button>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() =>
              setOpenDropdown(openDropdown === "pub" ? null : "pub")
            }
          >
            Publications ▾
          </button>

          {openDropdown === "pub" && (
            <div className="dropdown-content">
              <button onClick={() => handleNav("journal")}>Journals</button>

              <button onClick={() => handleNav("conf")}>Conferences</button>

              <button onClick={() => handleNav("books")}>Books</button>
            </div>
          )}
        </div>

        <button onClick={() => handleNav("patent")}>Patents</button>
        <button onClick={() => handleNav("awards")}>Awards</button>
        <button onClick={() => handleNav("labs")}>Laboratories</button>
      </div>

      {/* MAIN */}
      <div className="main">
        {/* HERO */}
        {activeSection === "home" && (
          <section className="home">
            <div className="title">
              <h1>Prof. (Dr.)SHWETA SRIVASTAVA</h1>
              <p>Director, JIIT Noida</p>

              <p style={{ fontStyle: "italic" }}>
                Academic leader in microwave engineering and antenna systems
              </p>
            </div>
            <div className="hero">
              <img
                src="/shweta.jpg"
                alt="Prof. Shweta Srivastava"
                className="profile-img"
              />
              <div className="about">
                <h2>About</h2>
                <p>
                  Prof. Shweta Srivastava serves as Director at JIIT Noida with
                  expertise in microwave engineering and antenna systems. She is
                  a part of Organizational leadership Program from Harvard
                  Business School Executive Education.
                </p>
                <p>
                  Her research interest is in the field of microstrip, active
                  and smart antennas, millimeter wave antennas, reconfigurable
                  antennas, beam-forming antennas, on chip antennas, microwave
                  integrated circuits, active/passive substrate integrated
                  waveguide etc.
                </p>
                <p>
                  She has published more than 100 International and National
                  publications including IEEE transactions. She has published
                  book chapters and filed patents. She has 14 Ph.D's awarded
                  under her guidance and 3 are ongoing. She is a reviewer of
                  several reputed national and international journals like IEEE
                  transactions, IEEE Wireless Propagation Letters, Wireless
                  Personal Communication etc.
                </p>
                <p>
                  She was awarded "Women In Technology, 2025", as strong and
                  leadership role in academics, research and administration. She
                  was also awarded prestigious IETE – Lal C Verman Award 2023 in
                  recognition for outstanding contribution in the field of
                  standardization, quality control and precision measurements
                  during the last 10 (ten) years. She was also awarded IETE Smt.
                  Ranjana Pal Memorial Award in recognition for significant
                  contribution in the field of RF and Microwaves in September
                  2016 and “Outstanding Woman in Engineering” by Centre for
                  Advance Research, Venus Foundation, March 2018.
                </p>
                <p>
                  She is a member of IEEE Antenna and Propagation society
                  committee on security defense and disaster management. She is
                  also a member of National frequency allocation committee of
                  DoT, govt. Of india. She is a senior member of IEEE and a
                  fellow of IETE and so on.
                </p>
              </div>
            </div>

            <div className="recent">
              <h2>Recent Highlights</h2>
              <div className="timeline-item">
                <div className="car-main">
                  <Recents />
                </div>
                <div className="grid">
                  {publications.map((pub, i) => (
                    <PubCard key={i} images={pub.images} title={pub.title} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* EDUCATION */}
        {activeSection === "education" && (
          <section className="education">
            <h2>Education</h2>

            <div className="timeline">
              <div className="timeline-item">
                <h3>Ph.D.: Microwave Engineering</h3>
                <p>
                  Indian Institute of Technology (Banaras Hindu Uni) - Varanasi,
                  India
                </p>
                <p style={{ fontSize: "small" }}>
                  PhD Thesis title : Frequency Agile Microstrip Antennas
                </p>
                <span>April, 1998 - January, 2002</span>
              </div>

              <div className="timeline-item">
                <h3>B.Tech: Electronics and Computer Science</h3>
                <p>M.G.C.G.V. - Chitrakoot, India</p>
                <p style={{ fontSize: "small" }}>CGPA: 77.8%</p>
                <span>January, 1998</span>
              </div>
            </div>
          </section>
        )}

        {/* EXPERIENCE */}
        {activeSection === "experience" && (
          <section className="experience">
            <h2>Work History</h2>
            <h4>Grand Total of Work Experience: 28 years till Present</h4>

            <div className="timeline">
              <div className="timeline-item">
                <h3>Director</h3>
                <p>Jaypee Institute of Information Technology, Noida</p>
                <span>July, 2025 - Present</span>
              </div>

              <div className="timeline-item">
                <h3>Dean (A & R)/ Head of Department (ECE & MED)</h3>
                <p>Jaypee Institute of Information Technology, Noida</p>
                <span>February, 2023 - June, 2025</span>
              </div>

              <div className="timeline-item">
                <h3>Professor and Head of Department</h3>
                <p>JIIT, Noida</p>
                <span>January, 2017 - January, 2023</span>
              </div>

              <div className="timeline-item">
                <h3>Professor</h3>
                <p>JIIT, Noida</p>
                <span>December, 2015 - Present</span>
              </div>

              <div className="timeline-item">
                <h3>Associate Professor</h3>
                <p>JIIT, Noida</p>
                <span>July, 2014 - December, 2015</span>
              </div>

              <div className="timeline-item">
                <h3>Associate Professor</h3>
                <p>BIT, Mesra</p>
                <span>July, 2012 - July, 2014</span>
              </div>

              <div className="timeline-item">
                <h3>Reader</h3>
                <p>BIT, Mesra</p>
                <span>July, 2010 - June, 2012</span>
              </div>

              <div className="timeline-item">
                <h3>Sr. Lecturer</h3>
                <p>BIT, Mesra</p>
                <span>June, 2007 - June, 2010</span>
              </div>

              <div className="timeline-item">
                <h3>Lecturer</h3>
                <p>BIT, Mesra</p>
                <span>February, 2002 - May, 2007</span>
              </div>

              <div className="timeline-item">
                <h3>Junior Research Fellow</h3>
                <p>IIT, BHU</p>
                <span>January, 1998 - January, 2001</span>
              </div>
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {activeSection === "tnr" && (
          <section className="tnr">
            <h2>Academic Contributions</h2>

            <div classname="timeline">
              <h3>Subjects Taught</h3>
              <div className="timeline-item">
                <ul>
                  <li>Advance Electromagnetic Engineering</li>
                  <li>Microwave Integrated Circuits</li>
                  <li>Microwave Integrated Circuits Laboratory</li>
                  <li>RF and Microwave Engineering</li>
                  <li>Antenna and Wave Propagation</li>
                  <li>Satellite Communication</li>
                  <li>Electromagnetic Theory</li>
                  <li>Digital Electronics</li>
                  <li>Basic Electronics</li>
                  <li>Mobile and Cellular Communication</li>
                  <li>Microwave Laboratory</li>
                  <li>Advance Communication Laboratory</li>
                  <li>Digital Electronics Laboratory</li>
                  <li>Basic Electronics Laboratory</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* RESPONSIBILITIES */}
        {activeSection === "resp" && (
          <section className="resp">
            <h2>Administrative Responsibilities</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ul>
                  <li>
                    Director duties in Jaypee Institute of Information
                    Technology, Deemed University present.
                  </li>
                  <li>
                    Dean and HOD of ECE & MED in Jaypee Institute of Information
                    Technology, Noida sector 62 till 2023.
                  </li>
                  <li>
                    Head of the Department of Electronics and Communication
                    Engineering, 2017 - 2023, Managing the department with more
                    than 1000 students and 70 faculty members.
                  </li>
                  <li>
                    Departmental Coordinator, Looking after the overall
                    administrative work of the Department at Sector 128 campus
                    of Jaypee Institute of Information Technology.
                  </li>
                  <li>
                    Member of Board of Management and Academic Council, Jaypee
                    Institute of Information Technology
                  </li>
                  <li>Chairperson of Board of Studies, Department of ECE</li>
                  <li>
                    Ph.D Coordinator, Birla Institute of Technology, Mesra,
                    Managing Ph.D related issues of more than 60 research
                    scholars.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* PHD SUPERVISION */}
        {activeSection === "phd" && (
          <section className="phd">
            <h2>Doctoral Supervision</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ul>
                  <li>
                    Design of Substrate Integrated Waveguide H-plane Horn and
                    Cavity Backed Antennas, Design and Analysis SIW Antenna
                    array
                  </li>
                  <li>
                    High Gain Substrate Integrated Waveguide Antennas for
                    Wireless Communication Applications
                  </li>
                  <li>
                    Some Investigations on Gain Enhancement Techniques of
                    Microstrip antennas, Analysis and design of Active Array
                    Antenna
                  </li>
                  <li>
                    Design and Analysis of Beamforming Antenna System for
                    Wireless Application
                  </li>
                  <li>
                    Design of Substrate Integrated Waveguide for Frequency
                    Selective Applications, Design of Compact MIMO antenna for
                    Wireless Application
                  </li>
                  <li>
                    Design and Analysis of Miniaturized and Selective Substrate
                    Integrated Waveguide Band Pass Filters
                  </li>
                  <li>
                    Design and Development of Microstrip Antennas Integrated
                    with Electromagnetic Band Gap Structures
                  </li>
                  <li>
                    Analog/digital (mixed signal) temperature sensor design and
                    modeling
                  </li>
                  <li>
                    On Wave Propagation in Uniform and Non-Uniform Cylinderical
                    Waveguides
                  </li>
                  <li>
                    Half mode and quarter mode substrate integrated waveguide
                    antennas
                  </li>
                  <li>Substrate Integrated Waveguide based Filtenna</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {/* RESEARCH */}
        {activeSection === "research" && (
          <section className="research">
            <h2>Research Projects</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ul>
                  <li>
                    Design of Active Microstrip Antenna for wireless
                    Communication, SERC fast track project for young Scientist
                    by Deptt. of Science and Technology (DST), Government of
                    India, Principal and sole investigator
                  </li>
                  <span>Rs. 8.18 Lakh</span>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* PG */}
        {activeSection === "pg" && (
          <section className="pg">
            <h2>PG Projects Guided</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ul>
                  <li>
                    Design of active Microstrip antenna for Wireless
                    Communication
                  </li>
                  <li>
                    Analysis and Design of a Linearly Tapered Slot Antenna
                  </li>
                  <li>
                    Design and Development of Computer based Wireless EMG Data
                    Acquisition System
                  </li>
                  <li>
                    Design and Analysis of Active Phased array antenna system
                    for Wind Profiler Radar Antenna for GPS system
                  </li>
                  <li>Antenna for GPS system</li>
                  <li>
                    Design, Analysis and Gain enhancement of 4×4 Planar Butler
                    Matrix array for WLAN applications
                  </li>
                  <li>
                    Design and analysis of Millimeter Wave Antenna on Thick
                    Substrates
                  </li>
                  <li>
                    Design and Development of Polarization agile microstrip
                    antenna
                  </li>
                  <li>Analysis and Design of Substrate Integrated Waveguide</li>
                  <li>
                    Design of MIMO cube antenna for Wireless Communication
                  </li>
                  <li>
                    Analysis and Design of a Substrate Integrated Waveguide
                    Filter
                  </li>
                  <li>
                    Design of a X-band tunable resonator using Substrate
                    Integrated Waveguide
                  </li>
                  <li>Design of On-Chip antenna integrated with LNA</li>
                  <li>Design of SIW Horn antenna for X-band</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* PUBLICATIONS */}
        {/* BOOKS */}
        {activeSection === "books" && (
          <section className="books">
            <h2>Books Published</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ol type="1">
                  <li>
                    <b>Linearly Tapered Slot Antenna: </b>
                    Introduction to Design, Theory and Principles;
                    <br />
                    <p>Lap Lambert Academic Publishing</p>
                    <span>August 23, 2012</span>
                  </li>
                </ol>
              </div>
            </div>

            <h2>Book Chapters Published</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ol start={2}>
                  <li>
                    Nitin Muchhal, Shweta Srivastava and Mostafa Elkhouly,
                    &nbsp;
                    <b>
                      “Analysis and Design of Miniaturized Substrate Integrated
                      Waveguide CSRR Bandpass Filters for Wireless
                      Coomunication” &nbsp;
                    </b>
                    <br />
                    <p>
                      DOI: 10.5772/intechopen.104733,
                      <br />
                      In book: Recent Microwave Technologies
                    </p>
                    <span>May 6th, 2022.</span>
                  </li>

                  <li>
                    Sheelu Kumari, Vibha Rani Gupta and Shweta Srivastava,
                    &nbsp;
                    <b>
                      “Propagation Characteristics of SIW and Waveguide: A
                      Comparison”
                    </b>
                    <br />
                    <p>
                      DOI: 10.1007/978-981-15-7486-3_50,
                      <br />
                      In book: Nanoelectronics, Circuits and Communication
                      Systems
                    </p>
                    <span>January, 2021</span>
                  </li>

                  <li>
                    Naveen Jaglan, Binod K. Kanaujia, Samir Dev Gupta and Shweta
                    Srivastava, &nbsp;
                    <b>
                      "Developments in Efficient Antenna Designs Using EBG
                      Structures"
                    </b>
                    <p>
                      DOI: 10.4018/978-1- 5225-0773-4.ch002,
                      <br />
                      In book: Handbook of Research on Advanced Trends in
                      Microwave and Communication Engineering,
                      <br />
                      Chapter: Developments in Efficient Antenna Designs Using
                      EBG Structures,
                      <br />
                      Publisher: IGI Global USA,
                      <br />
                      Editors: Ahmed El Oualkadi, Jamal Zbitou, pp.34-84.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* CONFERENCES */}
        {activeSection === "conf" && (
          <section className="conf">
            <h2>Conference Seminars Organized</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ol type="1">
                  <li>
                    General Chair, IEEE ICSC (International Conference on Signal
                    Processing and Communication)
                  </li>
                  <span>2022, 2023</span>
                  <li>
                    Chair person, IEEE ICSC (International Conference on Signal
                    Processing and Communication)
                  </li>
                  <span>2020, 2021</span>
                  <li>Organising Chair, ICSC</li>
                  <span>2019, March-2019</span>
                  <li>
                    Organising Secretary, IEEE International Conference on
                    Signal Processing and Communication
                  </li>
                  <span>2016, 2018</span>
                  <li>Coordinator and member, ICSC</li>
                  <span>2015, 2015</span>
                </ol>
              </div>
            </div>

            <h2>Conference Sessions Chaired</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ol type="1" start={6}>
                  <li>IEEE IC3</li>
                  <span>2020, 2021</span>
                  <li>
                    IEEE Symposium on Wireless Technology and Applications
                  </li>
                  <span>September 25, 2011</span>
                  <li>
                    First International Conference on Recent Advances in
                    Information Technology (RAIT- 2012)
                  </li>
                  <span>March 15, 2012</span>
                </ol>
              </div>
            </div>

            <h2>Conference Papers Published</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ol type="1" start={9}>
                  <li>
                    Shweta Srivastava, Babau R. Vishvakarma and J.A. Ansari,
                    &nbsp;
                    <b>
                      “Frequency Agile Rectangular Microstrip Antenna On Ferrite
                      Substrate”{" "}
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of the National Symposium on Antennas and
                      Propagation (APSYM-2000), Cochin University of Science and
                      Technology, Kochi, Kerala, India,
                    </i>
                    <br />
                    <span>pp.78-81.</span>
                  </li>
                  <li>
                    Shweta Srivastava and Babau R. Vishvakarma, &nbsp;
                    <b>
                      “A New Wide Band Frequency Independent Microstrip Antenna”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of the National Seminar on Applied Systems
                      Engineering and Soft Computing (SASEC-2000), Dayalbagh,
                      Agra,
                    </i>
                    <br />
                    <span>pp. 531-535.</span>
                  </li>
                  <li>
                    Shweta Srivastava, Anjali Nayak and Babau R. Vishvakarma,
                    &nbsp;
                    <b>“Theoratical Analysis of Tapered Slot Antenna”</b>
                    &nbsp;
                    <i>
                      Proceedings of the Microwave Conference – 2001, Jodhpur,
                      India.
                    </i>
                  </li>
                  <li>
                    Shweta Srivastava and Babau R. Vishvakarma, &nbsp;
                    <b>
                      “Various Methods of Frequency Agile Operation of
                      Microstrip Antenna”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of the Microwave Conference – 2001, Jodhpur,
                      India.
                    </i>
                  </li>
                  <li>
                    Shatabdi Chakraborty and Shweta Srivastava,{" "}
                    <b>
                      “Performance Enhancement of annular ring antenna using air
                      gaps in stacked substrate”
                    </b>{" "}
                    <i>
                      IEEE Symposium on Wireless Technology and Applications,
                      Langkawi, Malaysia,
                    </i>{" "}
                    25th-28th Sep. 2011.
                  </li>
                  <li>
                    Megha Dadel, Shweta Srivastava ,{" "}
                    <b>
                      “Arrays of Patch Antenna using Log Periodic Property”,
                    </b>{" "}
                    <i>
                      2011 IEEE International RF and Microwave Conference (RFM
                      2011) Seremban, Malaysia,
                    </i>{" "}
                    December 12 – 14, 2011.
                  </li>
                  <li>
                    Srivastava, N. Chattoraj and Babau R. Vishvakarma, &nbsp;
                    <b>
                      “Theoritical Analysis of Circular Patch Antenna on Ferrite
                      Substrate”
                    </b>
                    &nbsp;
                    <i>IEEE-ACE 2002, Kolkata, Dec 2002,</i>
                    <br />
                    <span>pp. 16-19.</span>
                  </li>
                  <li>
                    Srivastava, &nbsp;
                    <b>“Frequency Agile Microstrip Antenna”</b>
                    &nbsp;
                    <i>
                      National Conference on Impact of Electronics and
                      Communication on Rural Development, Chouksey Engineering
                      College, Bilaspur (CG), 17-18 Dec. 2005.
                    </i>
                  </li>
                  <li>
                    Ved Vyas Dwivedi and Shweta Srivastava, &nbsp;
                    <b>“Characterization of Linear Tapered Slot Antenna”</b>
                    &nbsp;
                    <i>
                      MICROWAVE 07, Department of Science and Research, Gujarat
                      University.
                    </i>
                  </li>
                  <li>
                    Ved Vyas Dwivedi and Shweta Srivastava, &nbsp;
                    <b>“Design of Wideband Tapered Slot Antenna”</b>
                    &nbsp;
                    <i>
                      National Conference on Recent Trends in Electronics and
                      Communication, CUS Engineering College, Gujarat.
                    </i>
                  </li>
                  <li>
                    Anika Chowdhary and Shweta Srivastava, &nbsp;
                    <b>“An X-band Frequency Tunable Active Antenna”</b>
                    &nbsp;
                    <i>
                      Seminar on Electronics and Communication by Institution of
                      Engineers, Ranchi Chapter, Engineer Bhavan, Ranchi, 20-21
                      Jan. 2007.
                    </i>
                  </li>
                  <li>
                    Harsh Kumar and Shweta Srivastava, &nbsp;
                    <b>
                      “Circular Patch Antenna for Millimetre Wave on Thick
                      Substrates”
                    </b>
                    &nbsp;
                    <i>
                      National Seminar in Electrical, Power Engineering,
                      Electronics and Computer, Pailan College of Management and
                      Technology, Kolkata,
                    </i>
                    <br />
                    <span>pp. 126-130, Feb. 12-13, 2010.</span>
                  </li>
                  <li>
                    Wriddhi Bhowmik and Shweta Srivastava, &nbsp;
                    <b>
                      “Design of a Butler Matrix Array Components for WLAN
                      Application”
                    </b>
                    &nbsp;
                    <i>
                      National Seminar in Electrical, Power Engineering,
                      Electronics and Computer, Pailan College of Management and
                      Technology, Kolkata,
                    </i>
                    <br />
                    <span>pp. 126-130, Feb. 12-13, 2010.</span>
                  </li>
                  <li>
                    Megha Dadel, Shweta Srivastava and K. P. Tivary, &nbsp;
                    <b>
                      “Analysis of Log Periodic Frequency Independent Arrays of
                      Rectangular Patch Antenna”
                    </b>
                    &nbsp;
                    <i>ICDeCom 2011, BIT, Mesra, 24-25 Feb 2011.</i>
                  </li>
                  <li>
                    Shatabdi Chakraborty and Shweta Srivastava, &nbsp;
                    <b>“High Gain Annular Ring Antenna”</b>
                    &nbsp;
                    <i>ICDeCom 2011, BIT, Mesra, 24-25 Feb 2011.</i>
                  </li>
                  <li>
                    Dushyantt Garg and Shweta Srivastava, &nbsp;
                    <b>
                      “Multiband Compact Bowtie Slot Antenna for WLAN
                      Applications”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of Asia Pacific Electromagnetic Compatibility
                      Symposium (APEMC), 21-24 May 2012,
                    </i>
                    <br />
                    <span>pp. 597-600.</span>
                  </li>
                  <li>
                    Sheelu Kumari and Shweta Srivastava, &nbsp;
                    <b>
                      “Waveguide and Substrate Integrated Waveguide for Ku Band:
                      A Comparison”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of First International Conference on Recent
                      Advances in Information Technology (RAIT-2012), Indian
                      School of Mines, Dhanbad, March 15-17, 2012.
                    </i>
                  </li>
                  <li>
                    Wriddhi Bhowmik and Shweta Srivastava, &nbsp;
                    <b>
                      “Modified Butler Matrix Array with Gap Coupled Antennas”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of IEEE Indian Antenna Week (IAW-2012), May
                      2012.
                    </i>
                  </li>
                  <li>
                    Shivam Upadhyay and Shweta Srivastava, &nbsp;
                    <b>
                      “A 60-GHz On-Chip Monopole Antenna Using Silicon
                      Technology”
                    </b>
                    &nbsp;
                    <i>
                      IEEE Applied Electromagnetics Conference 2013 (AEMC),
                      18-20 Dec. 2013.
                    </i>
                  </li>
                  <li>
                    Vandana Kumari and Shweta Srivastava, &nbsp;
                    <b>
                      “Design of H-plane Horn Antenna using Substrate Integrated
                      Waveguide”
                    </b>
                    &nbsp;
                    <i>
                      International Conference on Microwave and Photonics
                      (ICMAP), ISM Dhanbad, 13-15 Dec. 2013.
                    </i>
                  </li>
                  <li>
                    Wriddhi Bhowmik, Vibha Rani Gupta, Shweta Srivastava and
                    Laxman Prasad, &nbsp;
                    <b>
                      “Gain Enhancement of Butler Matrix Fed Antenna Array
                      System by Using Planar Circular EBG Units”
                    </b>
                    &nbsp;
                    <i>
                      International Conference on Signal Processing and
                      Communication, Jaypee Institute of Information Technology
                      (JIIT), 16-18 March 2015.
                    </i>
                  </li>
                  <li>
                    Vandana Kumari and Shweta Srivastava, &nbsp;
                    <b>
                      “Design and Comparison of H-plane SIW Horn Antenna with
                      Different Flare Shapes”
                    </b>
                    &nbsp;
                    <i>
                      International Conference on Signal Processing and
                      Communication, Jaypee Institute of Information Technology
                      (JIIT), 16-18 March 2015.
                    </i>
                  </li>
                  <li>
                    Megha Dadel, Shweta Srivastava and K. P. Tivary, &nbsp;
                    <b>
                      “Log Periodic Triangular Patch Array Antenna with Gap
                      Coupled Feed”
                    </b>
                    &nbsp;
                    <i>
                      International Conference on Signal Processing and
                      Communication, Jaypee Institute of Information Technology
                      (JIIT), 16-18 March 2015.
                    </i>
                  </li>
                  <li>
                    Sonali Kumari, Shweta Srivastava, R. K. Lal and Ashok
                    Mittal, &nbsp;
                    <b>
                      “Design of Monopole Fractal Antenna Using Annular Ring for
                      RFID Applications”
                    </b>
                    &nbsp;
                    <i>
                      IEEE International Conference on Soft Computing Techniques
                      and Implementations, Manav Rachna University, 8th-10th
                      Oct. 2015.
                    </i>
                  </li>
                  <li>
                    Shivam Singhal, Nikunj Gokulia, Kunjan Garg and Shweta
                    Srivastava, &nbsp;
                    <b>
                      “Design of Spiral Resonator Integrated Monopole Antenna
                      for Digital Transmission”
                    </b>
                    &nbsp;
                    <i>
                      11th International Conference on Microwave, Antenna and
                      Remote Sensing, ICRS Jodhpur, 15th-17th Dec. 2015.
                    </i>
                  </li>
                  <li>
                    Tanvi Agrawal, Shweta Srivastava and Megha Dadel, &nbsp;
                    <b>
                      “Dual and Triple Band Rectangular Patch Antenna using
                      Complementary Split Ring Resonator (CSRR)”
                    </b>
                    &nbsp;
                    <i>
                      5th Applied Electromagnetics Conference (AEMC 2015), IIT
                      Guwahati, 18th-21st Dec. 2015.
                    </i>
                  </li>
                  <li>
                    Nidhi Tewari, Neetu Joshi, Shweta Srivastava,{" "}
                    <b>
                      “A Miniaturized Aperture Coupled 4x4 MIMO Array SIW
                      Antenna at K band”
                    </b>
                    , &nbsp;
                    <i>Microw. Opt. TechnolLett 2023.</i>
                    <br />
                    <span>DOI: 10.1002/mop.33952</span>
                  </li>
                  <li>
                    Arnab Chakraborty and Shweta Srivastava, &nbsp;
                    <b>
                      “A Study and Comparison of High Frequency Materials More
                      Suitable than Silicon for Antennas for MMIC”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of International Conference on Signal
                      Processing and Communication (ICSC 2016), 26th-28th Dec.
                      2016,
                    </i>
                    <br />
                    <span>pp. 48-50.</span>
                  </li>
                  <li>
                    Naveen Jaglan, Samir Dev Gupta, Shweta Srivastava and Binod
                    Kumar Kanaujia, &nbsp;
                    <b>
                      “Satellite Downlink Communication Band Notched UWB Antenna
                      Using Uniplanar EBG Structure”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of International Conference on Signal
                      Processing and Communication (ICSC 2016), 26th-28th Dec.
                      2016,
                    </i>
                    <br />
                    <span>pp. 89-94.</span>
                  </li>
                  <li>
                    Tanvi Agrawal and Shweta Srivastava, &nbsp;
                    <b>
                      “Two Element MIMO Antenna Using Substrate Integrated
                      Waveguide (SIW) Horn”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of International Conference on Signal
                      Processing and Communication (ICSC 2016), 26th-28th Dec.
                      2016,
                    </i>
                    <br />
                    <span>pp. 508-511.</span>
                  </li>
                  <li>
                    Vishal Singh Bisht, Aseem Srivastava, Ayush Agnihotri,
                    Prateek Srivastava and Shweta Srivastava, &nbsp;
                    <b>
                      “Wearable Microstrip Patch Antenna: Design and Simulation”
                    </b>
                    &nbsp;
                    <i>
                      8th International Conference on Innovative Research in
                      Engineering, Science and Management (ICIRESM-16), 18th
                      Dec. 2016.
                    </i>
                  </li>
                  <li>
                    Ekta Thakur, Dinesh Kumar, Naveen Jaglan and Shweta
                    Srivastava, &nbsp;
                    <b>
                      “Mathematical Analysis of Commonly Used Feeding Techniques
                      in Rectangular Microstrip Patch Antenna”
                    </b>
                    &nbsp;
                    <i>
                      Select Proceedings of ICSC 2018, In book: Advances in
                      Signal Processing and Communication (Springer), January
                      2019. <br />
                    </i>
                    <span>DOI: 10.1007/978-981-13-2553-3_3</span>
                  </li>
                  <li>
                    Abhay Kumar, Nitin Muchhal, Arnab Chakraborty and Shweta
                    Srivastava, &nbsp;
                    <b>
                      “Analysis of Empty Substrate-Integrated Waveguide H Plane
                      Horn Antenna for K Band Applications”
                    </b>
                    &nbsp;
                    <i>
                      Select Proceedings of ICSC 2018, In book: Advances in
                      Signal Processing and Communication (Springer), January
                      2019. <br />
                    </i>
                    <span>DOI: 10.1007/978-981-13-2553-3_10</span>
                  </li>
                  <li>
                    Nitin Muchhal, Tanvi Agrawal, Abhay Kumar, Arnab Chakraborty
                    and Shweta Srivastava, &nbsp;
                    <b>
                      “Slot Integrated Folded Substrate Integrated Waveguide
                      Bandpass Filter for K Band Applications”
                    </b>
                    &nbsp;
                    <i>
                      Select Proceedings of ICSC 2018, In book: Advances in
                      Signal Processing and Communication (Springer), January
                      2019.
                    </i>
                    <br />
                    <span>DOI: 10.1007/978-981-13-2553-3_12</span>
                  </li>
                  <li>
                    Tanvi Agrawal, Nitin Muchhal and Shweta Srivastava, &nbsp;
                    <b>
                      “Novel Substrate-Integrated Waveguide Incorporated with
                      Band-Pass Filter”
                    </b>
                    &nbsp;
                    <i>
                      Select Proceedings of ICSC 2018, In book: Advances in
                      Signal Processing and Communication (Springer), January
                      2019.
                    </i>
                    <br />
                    <span>DOI:10.1007/978- 981-13-2553-3_14</span>
                  </li>
                  <li>
                    Tanvi Agrawal, Shweta Srivastava and Pranjal Bishnoi, &nbsp;
                    <b>
                      “Design of Substrate Integrated Waveguide Leaky Wave
                      Antenna for RFID Application in ISM Band”
                    </b>
                    &nbsp;
                    <i>
                      2019 6th International Conference on Signal Processing and
                      Integrated Networks (SPIN), March 2019.
                      <br />
                    </i>
                    <span>DOI:10.1109/SPIN.2019.8711609</span>
                  </li>
                  <li>
                    Abhay Kumar, Nitin Muchhal, Arnab Chakraborty and Shweta
                    Srivastava, &nbsp;
                    <b>
                      “Enhanced Gain Substrate Integrated Waveguide H Plane Horn
                      Antenna for 5G Applications”
                    </b>
                    &nbsp;
                    <i>
                      2020 URSI Regional Conference on Radio Science
                      (URSI-RCRS), February 2020.
                      <br />
                    </i>
                    <span>DOI: 10.23919/URSIRCRS49211.2020.9113530</span>
                  </li>
                  <li>
                    Arnab Chakraborty and Shweta Srivastava, &nbsp;
                    <b>
                      “Design of Low Cost Substrate Integrated E-plane Waveguide
                      Filter for C-band Applications”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of 7th International Conference on Signal
                      Processing and Communication (ICSC), November 2021.
                      <br />
                    </i>
                    <span>DOI: 10.1109/ICSC53193.2021.9673487</span>
                  </li>
                  <li>
                    Abhay Kumar and Shweta Srivastava, &nbsp;
                    <b>
                      “H-Plane Bow-Tie SIW Horn Antenna for K Band Applications”
                    </b>
                    &nbsp;
                    <i>
                      Proceedings of 7th International Conference on Signal
                      Processing and Communication (ICSC), November 2021.
                      <br />
                    </i>
                    <span>DOI:10.1109/ICSC53193.2021.9673440</span>
                  </li>
                  <li>
                    Ruchi Paliwal, Reema Bhudhiraja, Shweta Srivastava and
                    Sanjeev Yadav, &nbsp;
                    <b>
                      “Design of Compact Double Pass Band SIW Filter Using
                      Coupled Slot for Ku Band Application”
                    </b>
                    &nbsp;
                    <i>
                      2021 IEEE Indian Conference on Antennas and Propagation
                      (InCAP), December 2021.
                      <br />
                    </i>
                    <span>DOI:10.1109/InCAP52216.2021.9726298</span>
                  </li>
                  <li>
                    Rakhi Kumari and Shweta Srivastava, &nbsp;
                    <b>“Leaky Wave Antenna in Quarter Mode SIW Filter”</b>
                    &nbsp;
                    <i>
                      2022 International Conference for Advancement in
                      Technology (ICONAT), January 2022.
                      <br />
                    </i>
                    <span>DOI: 10.1109/ICONAT53423.2022.9725868</span>
                  </li>
                  <li>
                    Abhay Kumar and Shweta Srivatava, &nbsp;
                    <b>
                      “Low Cost Temperature Controlled Frequency Reconfigurable
                      Antenna with High Selectivity”
                    </b>
                    &nbsp;
                    <i>
                      2022 IEEE Wireless Antenna and Microwave Symposium (WAMS),
                      June 2022.
                      <br />
                    </i>
                    <span>DOI: 10.1109/WAMS54719.2022.9848355</span>
                  </li>
                  <li>
                    Nidhi Tewari, Neetu Joshi and Shweta Srivastava, &nbsp;
                    <b>
                      “A Circularly Polarized Cylindrical Cavity Backed
                      Substrate Integrated Waveguide Antenna for Millimeter Wave
                      Applications”
                    </b>
                    &nbsp;
                    <i>
                      2022 IEEE Microwaves, Antennas, and Propagation Conference
                      (MAPCON), December 2022.
                      <br />
                    </i>
                    <span>DOI: 10.1109/MAPCON56011.2022.10047690</span>
                  </li>
                  <li>
                    Nidhi Tewari, Megha Dadel and Shweta Srivastava, &nbsp;
                    <b>
                      “A Pattern Reconfigurable Antipodal Vivaldi SIW Filtenna
                      at K Band”
                    </b>
                    &nbsp;
                    <i>
                      2023 IEEE Microwaves, Antennas, and Propagation Conference
                      (MAPCON).
                    </i>
                  </li>
                  <li>
                    Bansal, Yash, Nitin Muchhal, Abhay Kumar, Nidhi Tewari and
                    Shweta Srivastava, &nbsp;
                    <b>
                      “Bandwidth Enhancement of Microstrip Antenna by
                      Incorporation Koch Fractal Defected Ground Structure for
                      WLAN/Wi-Fi Applications”
                    </b>
                    &nbsp;
                    <i>
                      2025 7th International Conference on Signal Processing,
                      Computing and Control (ISPCC), IEEE,
                    </i>
                    <br />
                    <span>pp. 651-656.</span>
                  </li>
                  <li>
                    Muchhal, N. and Shweta Srivastava, &nbsp;
                    <b>
                      “Design of Miniaturized Diamond Shaped Substrate
                      Integrated Waveguide CSRR Band Pass Filter for X Band
                      Applications”
                    </b>
                    &nbsp;
                    <i>
                      2019 International Conference on Signal Processing and
                      Communication (ICSC), IEEE,
                    </i>
                    <br />
                    <span>pp. 113-116.</span>
                  </li>
                  <li>
                    Kumar, A. and Shweta Srivastava, &nbsp;
                    <b>
                      “SIW Based Two Layer Slot Ring Antenna for X-Band RADAR
                      Applications”
                    </b>
                    &nbsp;
                    <i>
                      2019 International Conference on Signal Processing and
                      Communication (ICSC), IEEE,
                    </i>
                    <br />
                    <span>pp. 329-332.</span>
                  </li>
                  <li>
                    Bhowmik, W., Vibha Rani Gupta, Shweta Srivastava and Laxman
                    Prasad, &nbsp;
                    <b>
                      “Butler Matrix Fed Exponentially Tapered H-Plane Horn
                      Antenna Array System Using Substrate Integrated Folded
                      Waveguide Technology”
                    </b>
                    &nbsp;
                    <i>
                      International Conference on Communication, Devices and
                      Computing, Springer, Singapore, November 2017,
                    </i>
                    <br />
                    <span>pp. 25-37.</span>
                  </li>
                  <li>
                    Muchhal, N., Abhay Kumar, Arnab Chakrabarty and Shweta
                    Srivastava, &nbsp;
                    <b>
                      “Design of Compact Wideband Folded Substrate-Integrated
                      Waveguide Band-Pass Filter for X-Band Applications”
                    </b>
                    &nbsp;
                    <i>
                      International Conference on Communication, Devices and
                      Computing, Springer, Singapore, November 2017,
                    </i>
                    <br />
                    <span>pp. 173-180.</span>
                  </li>
                  <li>
                    Bhowmik, W., S. Mukherjee, Vibha Rani Gupta, Shweta
                    Srivastava and Laxman Prasad, &nbsp;
                    <b>
                      “Improvement of Radiation Performances of Butler
                      Matrix-Fed Antenna Array System Using 4×1 Planar Circular
                      EBG Units”
                    </b>
                    &nbsp;
                    <i>
                      International Conference on Communication, Devices and
                      Computing, Springer, Singapore, November 2017,
                    </i>
                    <br />
                    <span>pp. 103-113.</span>
                  </li>
                  <li>
                    Muchhal, N. and Shweta Srivastava, &nbsp;
                    <b>
                      “Review of Recent Trends on Miniaturization of Substrate
                      Integrated Waveguide (SIW) Components”
                    </b>
                    &nbsp;
                    <i>
                      2017 3rd International Conference on Computational
                      Intelligence & Communication Technology (CICT), IEEE.
                      <br />
                    </i>
                    <span>(pp. 1-6)</span>
                  </li>
                  <li>
                    Garg, D. and Shweta Srivastava, &nbsp;
                    <b>
                      “Multiband Compact Bow-Tie Slot Antenna for WLAN
                      Applications”
                    </b>
                    &nbsp;
                    <i>
                      2012 Asia-Pacific Symposium on Electromagnetic
                      Compatibility, IEEE,
                    </i>
                    <br />
                    <span>pp. 597-600.</span>
                  </li>
                  <li>
                    Yuvraj Singh Sarao, Amrandra Hari, Nidhi Tewari, Abhay
                    Kumar, Nitin Muchhal and Shweta Srivastava, &nbsp;
                    <b>
                      “Reconfigurable Wideband Liquid Coupled Microstrip Antenna
                      in Ku Band for Defence Applications”
                    </b>
                    &nbsp;
                    <i>IEEE MAPCON 2025, 14-18 Dec 2025.</i>
                  </li>
                  <li>
                    Nidhi Tewari, Akash Bansal, Shweta Srivastava and William
                    Whittow, &nbsp;
                    <b>
                      “Wideband Homogeneous Lens Loaded Cavity Backed SIW Lens
                      Antenna for Satellite Communication and Defence
                      Applications”
                    </b>
                    &nbsp;
                    <i>IEEE MAPCON 2025, 14-18 Dec 2025.</i>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* JOURNALS */}
        {activeSection === "journal" && (
          <section className="journal">
            <h2>Journals</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ol type="1">
                  <li>
                    Shweta Srivastava and Babau R. Vishvakarma, &nbsp;
                    <b>
                      “Noise Considerations in a Tunnel Diode Integrated
                      Rectangular Microstrip Antenna” &nbsp;
                    </b>
                    <i>International Journal Of Electronics (U.K.), &nbsp;</i>{" "}
                    Vol.88, No. 5, pp. 561-573, May 2001.
                  </li>
                  <li>
                    Shweta Srivastava and Babau R. Vishvakarma, &nbsp;
                    <b>
                      “Tunnel Diode Integrated Rectangular Patch Antenna For
                      Millimeter Range”
                    </b>
                    &nbsp;
                    <i>International Journal Of Electronics (U.K.),</i>
                    Vol.88, No. 11, pp. 1177-1188, Nov. 2001.
                  </li>
                  <li>
                    Shweta Srivastava, Babau R. Vishvakarma and J.A. Ansari,
                    &nbsp;{" "}
                    <b>
                      “Frequency Agile Microstrip Antenna On Ferrite Substrate
                      For Circular Polarization”
                    </b>{" "}
                    &nbsp;
                    <i>
                      Institute of Electronics and Telecommunication Engineers,
                    </i>{" "}
                    &nbsp; Vol. 18, No.5, Sep-Oct.2001,pp.419-428.
                  </li>
                  <li>
                    Srivastava, S., Vishvakarma, B. R., & Ansari, J. A. (2003),
                    <b>
                      "Tunnel diode-loaded rectangular microstrip antenna for
                      millimeter range."
                    </b>{" "}
                    <i>IEEE Transactions on Antennas and Propagation,</i> 51(4),
                    750-755.
                  </li>
                  <li>
                    Shweta Srivastava and Babau R. Vishvakarma,
                    <b>
                      “Tunnel Diode Integrated Two Layer Microstrip Patch
                      Antenna”{" "}
                    </b>
                    <i> Indian Journal of Radio and Space Physics,</i> vol. 29,
                    Dec.2000, pp. 3,49-356.
                  </li>
                  <li>
                    Ved Vyas Dwivedi , Y.P. Kosta , Shweta Srivastava and H.B.
                    Pandya
                    <b>"Analysis and Design of a Linearly Tapered Slot",</b>
                    <i>Microwave Journal,</i>Vol. 51, No. 6, June 2008.
                  </li>
                  <li>
                    Wriddhi Bhowmik and Shweta Srivastava
                    <b>
                      “ Optimum design of a 4×4 planar Butler Matrix Array for
                      WLAN Application”
                    </b>
                    <i>Journal of Telecommunications,</i> Vol.2, Issue 1, pp
                    68-74, April 2010.
                  </li>
                  <li>
                    Harsh Kumar and Shweta Srivastava
                    <b>
                      “Rectangular and Circular Patch Antenna for Millimeter
                      Wave on Thick Substrates”
                    </b>
                    <i>Journal of Telecommunications,</i>
                    Vol.2, Issue 2, pp. 58-63, May 2010.
                  </li>
                  <li>
                    46 Nitin Muchhal and Shweta Srivastava,{" "}
                    <b>
                      “Compact Substrate Integrated Waveguide Bandpass Filter
                      with S-Shaped Broadside Coupled Complementary Split Ring
                      Resonators (BC-CSRR),
                    </b>
                    <i>
                      International Journal of Microwave and Optical Technology
                    </i>
                    15(5):440-448, September 2020.{" "}
                  </li>
                  <li>
                    Shatabdi Chakraborty and Shweta Srivastava,{" "}
                    <b>
                      “Gain Enhancement of Annular Ring Antenna Using Stacking
                      and Air Gaps”{" "}
                    </b>
                    <i>
                      IRE Journal on Communication Antennas and Propagation
                      (IRECAP),
                    </i>{" "}
                    Vol. 1. n. 5, pp. 457-464.
                  </li>
                  <li>
                    Shatabdi chakraborty and Shweta Srivastava{" "}
                    <b>
                      “Design of Compact Annular Ring Antenna on Metamaterials
                      for Improved Radiation Pattern and Gain”
                    </b>{" "}
                    <i>
                      International Journal of Microwave Optical Technology
                      (IJMOT),
                    </i>{" "}
                    Vol.8, No.3, pp. 155-162, May 2013.
                  </li>
                  <li>
                    Sheelu Kumari and Shweta Srivastava,{" "}
                    <b>
                      Notched Folded Substrate Integrated Waveguide (NFSIW) for
                      Frequency Selected Applications,
                    </b>{" "}
                    <i>
                      IRE Journal on Communication Antennas and Propagation
                      (IRECAP),
                    </i>{" "}
                    Vol. 2. n. 4, pp. 259-263.
                  </li>
                  <li>
                    Shatabdi chakraborty and Shweta Srivastava,
                    <b>
                      “ Ku Band Annular Ring Antenna on Different PBG
                      Substrates”,
                    </b>
                    <i>
                      International Journal of Modern Engineering Research
                      (IJMER),
                    </i>{" "}
                    Vol.2, Issue.6, Nov-Dec. 2012, pp-4726-4731.
                  </li>
                  <li>
                    Shatabdi Chakraborty, Manoj Kumar Vishwakarma and Shweta
                    Srivastava,{" "}
                    <b>“Annular Ring Antenna on a Novel PBG Structure”,</b>
                    <i>International Journal of Computer Applications.</i> pp.
                    22-24, 2012.
                  </li>
                  <li>
                    Shatabdi Chakraborty, Manoj Kumar Vishwakarma and Shweta
                    Srivastava,{" "}
                    <b>
                      “Performance Enhancement of Annular Ring Antenna using
                      Photonic Band Gap Structures”,
                    </b>{" "}
                    <i>International Journal of Computer Applications.</i> pp.
                    25-27, 2012.
                  </li>
                  <li>
                    Sheelu Kumari and Shweta Srivastava,{" "}
                    <b>
                      “Losses in Waveguide and Substrate Integrated Waveguide
                      (SIW) for Ku Band: A Comparison”,
                    </b>{" "}
                    <i>
                      International Journal of Modern Engineering Research
                      (IJMER),
                    </i>{" "}
                    Vol.3, Issue.1, Jan-Feb. 2013 pp-53-57.
                  </li>
                  <li>
                    Megha Dadel, Shweta Srivastava and K. P. Tivary,{" "}
                    <b>
                      “Design of a Compact Triangular Ring Antenna and Its Array
                      Using Log Periodic Property”
                    </b>{" "}
                    <i> Microwave and Optical Technology Letters,</i> Vol. 56,
                    No. 1, January 2014, pp. 41-46.
                  </li>
                  <li>
                    Wriddhi Bhowmik, Shweta Srivastava, and Laxman Prasad,
                    <b>
                      “Design of Multiple Beam Forming Antenna System Using
                      Substrate Integrated Folded Waveguide (SIFW) Technology”,
                    </b>
                    <i> Progress In Electromagnetics Research B (PIERB),</i>{" "}
                    Vol. 60, 15–34, 2014.
                  </li>
                  <li>
                    Wriddhi Bhowmik, Shweta Srivastava, And Laxman Prasad,
                    <b>
                      “Design Of A Low Cost 44 Butler Matrix Fed Antenna Array
                      Partially Loaded With Substrate Integrated Waveguide
                      (SIW),
                    </b>
                    <i>
                      International Journal of Microwave And Optical Technology
                      (IJMOT),
                    </i>{" "}
                    Vol.9, NO.3, May 2014, pp. 227-236.
                  </li>
                  <li>
                    Vandana Kumari, Wriddhi Bhowmik and Shweta Srivastava,{" "}
                    <b>
                      “ Design of High Gain SIW and HMSIW H-plane Horn Antenna
                      using Metamaterial”,
                    </b>{" "}
                    <i>
                      {" "}
                      International Journal of Microwave and Wireless
                      Technologies,
                    </i>{" "}
                    pp. 1-8, 2014.
                  </li>
                  <li>
                    Shivam Upadhyay, Arnab Chakraborty and Shweta Srivastava,{" "}
                    <b>
                      “ Design of an LNA in 45 nm for On-chip Millimeter Wave
                      Reciever System”,
                    </b>{" "}
                    <i>
                      International Journal of Microwave And Optical Technology
                      (IJMOT),
                    </i>{" "}
                    Vol. 9, No. 5, pp. 365-370
                  </li>
                  <li>
                    {" "}
                    MeghaDadel, Shweta Srivastava and Kamala PatiTivary,{" "}
                    <b>
                      “Design of Substrate Integrated Waveguide (SIW) Fed Log
                      Periodic Microstrip Array Antennas”
                    </b>{" "}
                    <i> Wireless Personal Communication (Springer),</i> June
                    2016.
                  </li>
                  <li>
                    Naveen Jaglan, Binod Kumar Kanaujia, Samir Dev Gupta and
                    Shweta Srivastava,{" "}
                    <b>
                      “Triple Band Notched UWB Antenna Design Using
                      Electromagnetic Band Gap Structures”,
                    </b>{" "}
                    <i>Progress In Electromagnetics Research C,</i> Vol. 66, pp.
                    139-147, July 2016.
                  </li>
                  <li>
                    Naveen Jaglan, Binod Kumar Kanaujia, Samir Dev Gupta and
                    Shweta Srivastava,{" "}
                    <b>
                      “Band notched UWB circular monopole antenna with
                      inductance enhanced modified mushroom EBG structures”
                    </b>{" "}
                    <i> Wireless Networks (Springer),</i> August 2016, DOI:
                    10.1007/s11276- 016-1343-7.
                  </li>
                  <li>
                    Jaglan, N., Gupta, S. D., Thakur, E., Kumar, D., Kanaujia,
                    B. K., & Srivastava, S. (2018).{" "}
                    <b>
                      Triple band notched mushroom and uniplanar EBG structures
                      based UWB MIMO/Diversity antenna with enhanced wide band
                      isolation.
                    </b>{" "}
                    <i>
                      AEU-International Journal of Electronics and
                      Communications,
                    </i>
                    90, 36-44.
                  </li>
                  <li>
                    Naveen Jaglan, Samir Dev Gupta and Shweta Srivastava,
                    <b>
                      "Notched UWB Circular Monopole Antenna Design using
                      Uni-Planar EBG Structures"{" "}
                    </b>
                    ,{" "}
                    <i>
                      International Journal of Communication Antenna and
                      Propagation,
                    </i>{" "}
                    6(5):266-273, August 2016.
                  </li>
                  <li>
                    Naveen Jaglan, Binod K. Kanaujia, Samir Dev Gupta and Shweta
                    Srivastava,
                    <b>
                      {" "}
                      "Dual Band Notched EBG Structure based UWB MIMO/ Diversity
                      Antenna with Reduced Wide Band Electromagnetic Coupling",
                    </b>{" "}
                    <i>Frequenz,</i> Jan. 2017,DOI: 10.1515/freq-2016-0325.
                  </li>
                  <li>
                    Tanvi Agrawal and Shweta Srivastava,{" "}
                    <b>
                      “High Gain Microstrip MIMO Antenna for Wireless
                      Applications”,
                    </b>{" "}
                    <i>
                      {" "}
                      International Journal of Microwave and Optical Technology
                      12(2),
                    </i>{" "}
                    pp. 74- 81, March 2017.
                  </li>
                  <li>
                    Naveen Jaglan, Binod K. Kanaujia, Samir Dev Gupta and Shweta
                    Srivastava,
                    <b>
                      {" "}
                      “Design and Development of an Efficient EBG Structures
                      Based Band Notched UWB Circular Monopole Antenna”,
                    </b>{" "}
                    <i>Wireless Personal Communications,</i> May 2017.
                  </li>
                  <li>
                    Thakur, E., Jaglan, N., Gupta, S. D., & Srivastava, S.
                    (2018).
                    <b>
                      {" "}
                      Compact microstrip antenna design at 60 GHz for next
                      generation communication systems.
                    </b>
                  </li>
                  <li>
                    Naveen Jaglan, Binod K. Kanaujia, Samir Dev Gupta and Shweta
                    Srivastava,{" "}
                    <b>“Design of band-notched antenna with DG-CEBG”,</b>
                    <i>International Journal of Electronics,</i> June 2017.{" "}
                  </li>
                  <li>
                    Tanvi Agrawal and Shweta Srivastava,{" "}
                    <b>
                      “Compact MIMO antenna for multiband mobile applications”,
                    </b>{" "}
                    <i>
                      Journal of Microwaves, Optoelectronics and Electromagnetic
                      Applications 16(2),
                    </i>{" "}
                    pp. 542-552, June 2017.
                  </li>
                  <li>
                    Naveen Jaglan, Binod K. Kanaujia, Samir Dev Gupta and Shweta
                    Srivastava and Ekta Thakur,{" "}
                    <b>
                      “Triple band notched DG-CEBG structure based UWB
                      MIMO/diversity antenna”,{" "}
                    </b>
                    <i>Progress in electromagnetic Research C, Vol. 80 (1),</i>{" "}
                    pp. 39-54, Dec. 2017.
                  </li>
                  <li>
                    Tanvi Agrawal and Shweta Srivastava,{" "}
                    <b>
                      “Ku Band Pattern Reconfigurable Substrate Integrated
                      Waveguide Leaky Wave Horn Antenna”,
                    </b>{" "}
                    <i>
                      AEU - International Journal of Electronics and
                      Communications,
                    </i>{" "}
                    DOI10.1016/j.aeue.2018.01.022, Feb 2018.
                  </li>
                  <li>
                    Nitin Muchhal, Arnab Chakraborty, Manoj Vishwakarma and
                    Shweta Srivastava,{" "}
                    <b>
                      “Slotted Folded Substrate Integrated Waveguide Band Pass
                      Filter with Enhanced Bandwidth for Ku/K Band
                      Applications”,
                    </b>{" "}
                    <i>Progress In Electromagnetics Research M,</i> Vol. 70, pp.
                    51–60, 2018
                  </li>
                  <li>
                    Wriddhi Bhowmik and Shweta Srivastava,{" "}
                    <b>
                      “Design of Compact Omnidirectional Substrate Integrated
                      Waveguide Exponentially Tapered Multiple H-Plane Horn
                      Antenna”,
                    </b>{" "}
                    <i>
                      {" "}
                      AEU - International Journal of Electronics and
                      Communications,
                    </i>{" "}
                    DOI:10.1016/j.aeue.2019.05.036, June 2019.
                  </li>
                  <li>
                    Nitin Muchhal and Shweta Srivastava,
                    <b>
                      “Design of wideband comb shape substrate integrated
                      waveguide multimode resonator bandpass filter with high
                      selectivity and improved upper stopband performance”,
                    </b>{" "}
                    <i>
                      International Journal of RF and Microwave Computer-Aided
                      Engineering,
                    </i>{" "}
                    DOI: 10.1002/mmce.21807, April 2019
                  </li>
                  <li>
                    Nitin Muchhal Arnab Chakraborty, Manoj Kumar and Shweta
                    Srivastava,{" "}
                    <b>
                      “Slotted Folded Substrate Integrated Waveguide Band Pass
                      Filter with Enhanced Bandwidth for Ku/K Band
                      Applications”,
                    </b>{" "}
                    <i>Progress In Electromagnetics Research M,</i> Vol. 70, pp.
                    51–60, 2018.
                  </li>
                  <li>
                    Nitin Muchhal and Shweta Srivastava,
                    <b>
                      “Design of miniaturized high selectivity folded substrate
                      integrated waveguide band pass filter with Koch fractal”,
                    </b>{" "}
                    <i> Electromagnetics 39(39):1-11,</i> October 2019, DOI:
                    10.1080/02726343.2019.1675440.{" "}
                  </li>
                  <li>
                    Sheelu Kumari, Vibha Rani Gupta and Shweta Srivastava,
                    <b>
                      {" "}
                      “Analysis of Staggered-Via Loss in Substrate Integrated
                      Waveguide” ,
                    </b>{" "}
                    <i>IETE Journal of Research ,</i> September 2020 DOI:
                    10.1080/03772063.2020.1811785
                  </li>
                  <li>
                    Sheelu Kumari, Vibha Rani Gupta and Shweta Srivastava,
                    <b>
                      “Folded Substrate Integrated Waveguide Based Multiband
                      Filter for Wi-Fi6E Application”
                    </b>{" "}
                    <i>Wireless Personal Communications (Springer),</i> DOI:
                    10.1007/s11277-021-08297-3, March 2021.
                  </li>
                  <li>
                    Abhay Kumar and Shweta Srivastava,{" "}
                    <b>
                      “ Four element three‐dimensional SIW horn antenna array
                      for high‐frequency applications”,
                    </b>{" "}
                    <i>
                      International Journal of RF and Microwave Computer-Aided
                      Engineering 31(6),
                    </i>{" "}
                    DOI: 10.1002/mmce.22660, March 2021
                  </li>
                  <li>
                    Sheelu Kumari, Vibha Rani Gupta and Shweta Srivastava,{" "}
                    <b>
                      “A Novel Feeding Technique for Folded Substrate Integrated
                      Waveguide”,
                    </b>{" "}
                    <i>
                      AEU - International Journal of Electronics and
                      Communications
                    </i>{" "}
                    138(8):153852, DOI:10.1016/j.aeue.2021.153852, June 2021
                  </li>
                  <li>
                    Megha Dadel, Zeba Parveen & Shweta Srivastava (2021){" "}
                    <b>Compact UWB MIMO Antennas with High Isolation,</b>{" "}
                    <i>IETE Journal of Research,</i> 69(11),1-7, DOI:
                    10.1080/03772063.2021.1942247, June 2021.
                  </li>
                  <li>
                    Arnab Chakraborty and Shweta Srivastava,{" "}
                    <b>
                      "High Gain Substrate Integrated Waveguide Fed Yagi-Uda
                      Antenna Array on Silicon Substrate for Multiband
                      Applications,"
                    </b>{" "}
                    <i>Progress In Electromagnetics Research C,</i> Vol. 116,
                    265-275, 2021. doi:10.2528/PIERC21100703
                    http://www.jpier.org/PIERC/pier.php?paper=21100703
                  </li>
                  <li>
                    Kumari, S., Gupta, V. R. ., & Srivastava, S. (2021).
                    <b>
                      {" "}
                      Analysis of Narrow Slot Loading on a Half Guided
                      Wavelength Folded Substrate Integrated Waveguide.
                    </b>{" "}
                    <i>
                      ECTI Transactions on Electrical Engineering, Electronics,
                      and Communications,
                    </i>{" "}
                    19(2), 174–181.
                    https://doi.org/10.37936/ecti-eec.2021192.241655{" "}
                  </li>
                  <li>
                    Nitin Muchhal, Arnab Chakraborty, Tanvi agrawal and Shweta
                    Srivastava,{" "}
                    <b>
                      ”Miniaturized and Selective Half-Mode Substrate Integrated
                      Waveguide Bandpass Filter Using Hilbert Fractal for Sub-6
                      GHz 5G Applications”,
                    </b>{" "}
                    <i> IETE Jouranal of Research,</i> January 2022,
                    DOI:10.1080/03772063.2021.2021816
                  </li>
                  <li>
                    Wriddhi Bhowmik and Shweta Srivastava,{" "}
                    <b>
                      “Design of Substrate Integrated Folded Waveguide H-Plane
                      Horn Antenna Array With Simultaneous Omnidirectional and
                      Directional Radiation Characteristics”,
                    </b>{" "}
                    <i>Progress in Electromagnetic Research M,</i> 107:141- 154,
                    January 2022, DOI: 10.2528/PIERM21121302.
                  </li>
                  <li>
                    Nitin Muchhal Arnab Chakraborty, Tanvi agrawal and Shweta
                    Srivastava,{" "}
                    <b>
                      ”Miniaturized and Selective Half-Mode Substrate Integrated
                      Waveguide Bandpass Filter Using Hilbert Fractal for Sub-6
                      GHz 5G Applications”,
                    </b>{" "}
                    <i>IETE Journal of Research,</i> January 2022,
                    DOI:10.1080/03772063.2021.2021816.
                  </li>
                  <li>
                    Abhay Kumar, Shweta Srivastava,
                    <b>
                      {" "}
                      “SIW cavity-backed dual inverted L slot antenna array for
                      Ku band applications”,
                    </b>
                    <i>
                      International Journal of Microwave and Wireless
                      Technologies,
                    </i>{" "}
                    February 2022. DOI: 10.1017/S1759078722000149
                  </li>
                  <li>
                    Abhay Kumar, Shweta Srivatava,
                    <b>
                      “A high‐gain linear array of cross slots substrate
                      integrated waveguide leaky‐wave antenna with defective
                      ground structure”,
                    </b>{" "}
                    <i>Microwave and Optical Technology Lette rs</i> 64(11),
                    June 2022, DOI: 10.1002/mop.33385{" "}
                  </li>
                  <li>
                    Arnab Chakraborty, Shweta Srivastava,{" "}
                    <b>
                      “High Gain Coplanar Waveguide Fed Slotted Two Element
                      Yagi-Uda Antenna Array with Common Reflector for Ka-band
                      Applications”,
                    </b>
                    <i>
                      International Journal on Communications Antenna and
                      Propagation (IRECAP)
                    </i>{" "}
                    12(3):189, June 2022, DOI: 10.15866/irecap.v12i3.21906
                  </li>
                  <li>
                    Nitin Muchhal, Mostafa Elkhouly, Renato Zea Vintimilla,
                    Arnab Chakraborty, Shweta Srivastava,
                    <b>
                      “Design of Hybrid Fractal Integrated Half Mode SIW Band
                      Pass Filter with CSRR and Minkowski Defected Ground
                      Structure for Sub-6 GHz 5G Applications”
                    </b>{" "}
                    <i>Photonics</i> 9(12):898, November 2022,
                    DOI:10.3390/photonics9120898
                  </li>
                  <li>
                    Nidhi Tewari, Neetu Joshi, Shweta Srivastava,{" "}
                    <b>
                      “A compact quad‐band circular cavity backed substrate
                      integrated waveguide antenna for millimeter wave
                      applications”,
                    </b>
                    <i>Microwave and Optical Technology Letters,</i> May 2023,
                    https://doi.org/10.1002/mop.33766.
                  </li>
                  <li>
                    Nidhi Tewari, Neetu Joshi, Shweta Srivastava,{" "}
                    <b>
                      " A Novel Reconfigurable H-Plane Horn Leaky wave Substrate
                      Integrated Waveguide MIMO Antenna for K Band",
                    </b>{" "}
                    <i>
                      AEU - International Journal of Electronics and
                      Communications,
                    </i>{" "}
                    170(5):154832, July 2023.DOI:10.1016/j.aeue.2023.154832
                  </li>
                  <li>
                    Tewari, Nidhi, Neetu Joshi, and Shweta Srivastava.{" "}
                    <b>
                      "A miniaturized aperture‐coupled 4× 4 MIMO array SIW
                      antenna at K band."
                    </b>{" "}
                    <i> Microwave and Optical Technology Letters</i> 66.1
                    (2024): e33952. https://doi.org/10.1002/mop.33952
                  </li>
                  <li>
                    Nitin Muchhal, Renato Zea Vintimilla, Mostafa Elkhouly,
                    Yaarob Fares, Shweta Srivastava,{" "}
                    <b>
                      “Design Analysis and Fabrication of High Gain Wideband
                      Antipodal Vivaldi Antenna for Satellite Communication
                      Applications”,
                    </b>{" "}
                    <i>
                      in International Journal On Advances in Systems and
                      Measurements,
                    </i>{" "}
                    vol. 16, nr 3&amp;4, pp. 130-139, Dec2023.
                  </li>
                  <li>
                    Ruchi Paliwal, Shweta Srivastava, Reema Bhuddhiraja,{" "}
                    <b>
                      “Band pass filter size reduction by implementing substrate
                      integrated waveguide technique”,
                    </b>{" "}
                    <i>Journal of Information and Optimization Sciences</i>
                    44(6):1241-1250, Jan 2023, DOI: 10.47974/JIOS-1496.
                  </li>
                  <li>
                    Rakhi Kumari and Shweta Srivastava,{" "}
                    <b>
                      “Four Port MIMO Antenna on Quarter Mode Substrate
                      Integrated Waveguide for Ku Band Applications”,
                    </b>{" "}
                    <i>Progress In Electromagnetics Research M,</i> Vol. 127,
                    113-120, 2024. 10.2528/PIERM24021801.
                  </li>
                  <li>
                    Ruchi Paliwal,Shweta Srivastava,Reema Budhiraja
                    <b>
                      “Customizable Substrate Integrated Waveguide Based Dual
                      Pole Band Pass Filter for X Band Application”,
                    </b>{" "}
                    <i>Progress in Electromagnetic Research M ,</i>
                    vol.125,11-19, March 2024. 10.2528/PIERM24011002.
                  </li>
                  <li>
                    Budhiraja, R., Saini, J., Tiwari, N., & Srivastava, S.
                    (2024).
                    <b>
                      {" "}
                      Novel Six way Power Divider using SIW for Array Antenna
                      Applications.
                    </b>{" "}
                    <i>
                      International Journal of Microwave & Optical Technology,
                    </i>
                    19(1).
                  </li>
                  <li>
                    N. Tewari, A. Bansal, S. Srivastava and W. Whittow,{" "}
                    <b>
                      "A Novel High-Gain Hexagonal Cavity-Backed MIMO SIW
                      Antenna With 3-D Homogeneous Lens Loading at Ka Band,"
                    </b>{" "}
                    <i>in IEEE Antennas and Wireless Propagation Letters,</i>{" "}
                    vol. 24, no. 9, pp. 2889-2893, Sept. 2025, doi:
                    10.1109/LAWP.2025.3576566.
                  </li>
                  <li>
                    Muchhal, Nitin, et al.{" "}
                    <b>
                      "Design of a Half-Mode Substrate-Integrated Waveguide
                      (HMSIW) Multimode Resonator Bandpass Filter Using the
                      Minkowski Fractal for C-Band Applications."
                    </b>{" "}
                    <i>Micromachines</i> 15.12 (2024): 1440.
                  </li>
                  <li>
                    Saxena Suryansh,Tewari, Nidhi, and Shweta Srivastava.{" "}
                    <b>
                      "A Spiral Cavity Backed 4 X 4 MIMO SIW Antenna at Ku Band
                      for Radio Telescopes."
                    </b>{" "}
                    <i>Progress in Electromagnetics Research M 132 (2025): </i>
                    1-10. 10.2528/PIERM24121306.
                  </li>
                  <li>
                    Elkhouly, M., Muchhal, N., Fares, Y., Blau, K., &
                    Srivastava, S. (2025).{" "}
                    <b>
                      Design of a compact 10–40 GHz filter bank for various
                      satellite communication (SATCOM) and 5G applications.
                    </b>{" "}
                    <i> Journal of Electromagnetic Waves and Applications,</i>{" "}
                    1–13. https://doi.org/10.1080/09205071.2025.2547787.
                  </li>
                  <li>
                    Tewari, N., Kumar, A., Muchhal, N., & Srivastava, S. A
                    <b>
                      Two-Port Triple Band Beam Steering Leaky-Wave Corrugated
                      Antenna for Millimeter Wave Applications.
                    </b>{" "}
                    <i>Progress In Electromagnetics Research C,</i> Vol. 162,
                    214-223, 2025. doi:10.2528/PIERC25101202
                  </li>
                  <li>
                    Kumari, R., & Srivastava, S. (2023).{" "}
                    <b>
                      Gain Enhancement at Selective Frequency of HMSIW Based
                      Leaky Wave Antenna.
                    </b>
                    <i>
                      International Journal of Microwave & Optical Technology,
                    </i>
                    18(3).
                  </li>
                  <li>
                    Bhowmik, W., Appasani, B., Jha, A. K., & Srivastava, S.
                    (2022).{" "}
                    <b>
                      A review on metamaterial application in microstrip and
                      substrate integrated waveguide antenna designs.
                    </b>{" "}
                    <i>Prog. In Electromagn. Res. B,</i> 96, 87-132.
                  </li>
                  <li>
                    Jaglan, N., Gupta, S. D., & Srivastava, S. (2016).{" "}
                    <b>
                      Notched UWB circular monopole antenna design using
                      uni-planar EBG structures.
                    </b>{" "}
                    <i>
                      {" "}
                      International Journal on Communications Antenna and
                      Propagation,
                    </i>{" "}
                    6(5), 266-273.
                  </li>
                  <li>
                    A.Kumar, N.Muchhal, N.Tewari, and S.Srivastava,{" "}
                    <b>
                      “A Novel Wideband U-Slot Dual Cavity Backed SIW MIMO
                      Antenna at X-Band for RADAR Application,”
                    </b>{" "}
                    <i>
                      Microwave and Optical Technology Letters68 (2026): e70576,
                    </i>
                    https://doi.org/10.1002/mop.70576.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* PATENT */}
        {activeSection === "patent" && (
          <section className="patent">
            <h2>Patents Granted</h2>

            <div className="timeline">
              <div className="timeline-item">
                <ol type="i">
                  <li>
                    Abhay Kumar, Shweta Srivastava, &nbsp;
                    <b>
                      “NOVEL THREE DIMENSIONAL SUBSTRATE INTEGRATED WAVEGUIDE
                      CAVITY SLOT ANTENNA ARRAY WITH DUAL OPERATION (RADIATOR
                      AND REFLECTOR)”
                    </b>
                    <br />
                    <span>Application No: 202311000507 dated 04.01.2023</span>
                    <br />
                    <br />
                    <img
                      src="/patent/patent1.jpeg"
                      alt="NOVEL THREE DIMENSIONAL SUBSTRATE INTEGRATED WAVEGUIDE
                      CAVITY SLOT ANTENNA ARRAY WITH DUAL OPERATION (RADIATOR
                      AND REFLECTOR)"
                    ></img>
                  </li>
                  <br />
                  <li>
                    Arnab Chakraborty and Shweta Srivastava, &nbsp;
                    <b>
                      “Substrate Integrated Waveguide Yagi Array Antenna on
                      Silicon Substrate”
                    </b>
                    <br />
                    <span>PAN 201911047519</span>
                    <br />
                    <br />
                    <img
                      src="/patent/patent2.jpg"
                      alt="Substrate Integrated Waveguide Yagi Array Antenna on
                      Silicon Substrate"
                    ></img>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* AWARDS */}
        {activeSection === "awards" && (
          <section className="awards">
            <h2>Awards</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ul>
                  <li>
                    <p>
                      IETE – Lal C Verman Award, 2023, Outstanding contribution
                      in the field of standardization, quality control and
                      precision measurements during the last 10 years.
                    </p>
                    <img src="/Awards/iete-lal.jpeg"></img>
                  </li>
                  <li>Women in Tech. 2025.</li>
                  <li>
                    IETE Smt. Ranjana Pal Memorial Award, 09/2016, Significant
                    contribution as an educator and a researcher in the field of
                    RF and Microwaves.
                  </li>
                  <li>
                    Outstanding Woman in Engineering, 03/2018, Awarded by Centre
                    for Advance Research, Venus Foundation.
                  </li>
                  <li>
                    Fellow of Institution of Electronics and Telecommunication
                    Engineers, 2022
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* LABS */}
        {activeSection === "labs" && (
          <section className="labs">
            <h2>Laboratories Developed</h2>
            <div className="timeline">
              <div className="timeline-item">
                <ul>
                  <li>
                    <h3>Robotics Lab</h3>
                    <p>
                      Development of Robotics and AI lab for students to enhance
                      their skill. The Lab includes key subjects such as machine
                      learning, computer vision, embedded systems, control
                      theory, and Internet of Things (IoT)
                    </p>

                    <img src="/Labs/robotic.png" id="robo"></img>
                  </li>
                  <li>
                    <h3>Idea Lab</h3>
                    <p>
                      Development of Idea Lab for students - A dynamic hub where
                      innovators are empowered to address societal challenges
                      through creativity, inclusivity, and collaboration,
                      fostering sustainable solutions that benefit communities
                      and drive positive change.
                    </p>
                    <img src="/Labs/idea.jpg" id="idea"></img>
                  </li>

                  <li>
                    <h3>6. Centre for Excellence in smart and VLSI systems </h3>
                    <ol type="a">
                      <li>PCB CNC Machine</li>
                      <li>3D Printer for PCB Packaging</li>
                      <li>Proteus Simulation Software</li>
                    </ol>
                    <div>
                      <figure id="vlsi">
                        <img src="/Labs/pcb.jpg" id="pcb"></img>
                        <figcaption style={{ textAlign: "center" }}>
                          PCB CNC Machine
                        </figcaption>
                        <img src="/Labs/3d.jpg" id="3d"></img>
                        <figcaption style={{ textAlign: "center" }}>
                          3D Printer for PCB Packaging
                        </figcaption>
                      </figure>
                    </div>
                  </li>

                  <li>
                    <ol type="a">
                      <li>
                        Anritsu Make Vector Network Analyzer (VNA) for testing
                        of antenna up to 30 GHz.
                      </li>
                      <li>
                        Anechoic Chamber for antenna radiation pattern
                        measurement up to 30 GHz.
                      </li>
                    </ol>
                    <figure>
                      <img src="/Labs/vna.jpg" id="vna"></img>
                      <figcaption style={{ textAlign: "center" }}>
                        (a) PCB CNC machine, (b) VNA and (c) Anechoic chamber
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <h3>Embedded System and Robotics Lab</h3>
                    <p>
                      Fire Bird V 2560 Robot, Spark V Robot, Servo motor based
                      gropper kit (sponsored by e yantra, IIT, Bombay)
                    </p>
                    <div id="iot">
                      <img src="/Labs/iot1.png"></img>
                      <img src="/Labs/iot2.jpg"></img>
                      <img src="/Labs/iot3.png"></img>
                    </div>
                  </li>

                  <li>
                    <h3>VLSI Fab Lab</h3>
                    <p>
                      VLSI Lab developed for practical learning and skilled
                      undergraduate students of JIIT. JIIT is the first
                      institute in India where undergraduate students are
                      trained for VLSI chip fabrication. Following are the
                      equipment in VLSI Fab lab: Fume Hood, Hot Oven, Hot
                      Plates, Ultrasonicator RF Sputtering, Diffusion Furnace,
                      Spin Coater, Laser Writer, Hall Effect Measurement I-V/C-V
                      2 channel and Probe Station with Wire bonder.
                    </p>
                    <img src="/Labs/vlsi.png" id="fab"></img>
                  </li>
                  <li>
                    <h3>5G Use Case Lab</h3>
                    <p>
                      The department has recently been sanctioned a{" "}
                      <b>5G use case lab </b>by the
                      <b>
                        {" "}
                        Department of Telecom (DoT), Government of India,
                      </b>{" "}
                      to pursue next generation research in the domain of 5G and
                      6G communication. It is one of the 100 labs set-up in the
                      country. Apart from the new communication lab, the
                      department has a Fabrication lab also, to create an
                      end-to-end semiconductor ecosystem for budding
                      researchers. he Government would be funding 80% of CAPEX
                      for the Lab Setup and 100% of OPEX expenses for the next 4
                      years. The institution to contribute for the remaining 20%
                      of the CAPEX as per the price discovery from financial
                      bids. The 5G lab equipment would include 5G SA
                      infrastructure (mid band), 5G SIMs, Dongles, IoT Gateway,
                      Router and Application Server to meet lab needs along with
                      management dashboard.
                    </p>
                  </li>

                  <li>
                    <h3>Electric Vehicle Lab</h3>
                    <p>
                      Lab for Electric Vehicle for undergraduate, post-graduate
                      and PhD scholars to enhance their skill.
                    </p>
                  </li>
                  <li>
                    Developed the Microwave Integrated Circuit fabrication
                    laboratory for fabrication of microstrip circuits and
                    antennas in collaboration with IIT Delhi.
                  </li>
                  <li>
                    Actively involved in development of the Advance
                    Communication Laboratory and establishment of Satellite
                    communication trainer kit, CDMA trainer kit, GPS trainer kit
                    etc.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="footer">
          <div className="contact">
            <h2>Contact Info</h2>

            <p id="add">
              Director, Jaypee Institute of Information Technology, Sector-62,
              Noida-201309, India
            </p>
            <p>
              <b>Email-</b> shweta.srivastava@mail.jiit.ac.in
            </p>
            <p>
              <b>Phone-</b> 09910175183
            </p>
            <p>
              <b>LinkedIn-</b>{" "}
              <a
                href="https://www.linkedin.com/in/shweta-srivastava-b693"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Shweta Srivastava
              </a>{" "}
            </p>
          </div>

          <div className="tag">
            <p>© 2026 Designed and Developed by Mahi Agarwal</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
