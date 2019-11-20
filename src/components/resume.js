import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="./kitty.jpg"
                alt="avatar"
                style={{ height: "250px" }}
                padding="50px"
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Mega Iriantika Kasmin</h2>
            <h4 style={{ color: "grey" }}>Student</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Be a strong woman. So your daughter will have a role model and
              your son will know what to look for in a woman when he’s a man.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Ardipura III Jayapura</p>
            <h5>Phone</h5>
            <p>62+852-441-964-73</p>
            <h5>Email</h5>
            <p>meghakasmin99@gmail.com</p>
            <h5>Website</h5>
            <p>NomadenFeels.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2005}
              endYear={2011}
              schoolName="SD Inpres Ardipura III"
            />
            <Education
              startYear={2011}
              endYear={2014}
              schoolName="SMP Negeri 3 Jayapura"
            />
            <Education
              startYear={2014}
              endYear={2017}
              schoolName="SMK Negeri 1 Jayapura"
            />
            <h2>Experiences</h2>
            <Experience
              startYear="July 2017"
              endYear="Oktober 2018"
              jobName="Admin Staff"
            />
            <Experience
              startYear="Oktober 2018"
              endYear="Oktober 2019"
              jobName="Freelancer"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <Skills skill="javascript" progress={10} />
            <Skills skill="HTML/CSS" progress={25} />
            <Skills skill="NodeJS" progress={10} />
            <Skills skill="React" progress={10} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
