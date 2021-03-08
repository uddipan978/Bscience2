import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Grid } from "@material-ui/core";
export default class MyComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      expandedSector: null,
    };
  }

  handleMouseEnterOnSector(sector) {
    this.setState({ expandedSector: sector });
  }

  handleMouseLeaveFromSector() {
    this.setState({ expandedSector: null });
  }

  render() {
    const data = [
      { label: "Facebook", value: 100, color: "#3b5998" },
      { label: "Twitter", value: 60, color: "#00aced" },
      { label: "Google Plus", value: 30, color: "#dd4b39" },
      { label: "Pinterest", value: 20, color: "#cb2027" },
      { label: "Linked In", value: 10, color: "#007bb6" },
    ];

    return (
      <div  >
        <Grid className='chart' >
          <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
            <PieChart
              data={data}
              expandedSector={this.state.expandedSector}
              onMouseEnterOnSector={this.handleMouseEnterOnSector}
              onMouseLeaveFromSector={this.handleMouseLeaveFromSector}
            />
          </Grid>
          <div className='pos-relative'>
            <div>
              {data.map((d, i) => (
                <div className={`chats_lables ${d.label}`} key={i}>
                  <span style={{ background: d.color }} />
                  <div
                    className='chart_lables_text'
                    // style={{
                    //   fontWeight:
                    //     this.state.expandedSector == i ? "bold" : null,
                    // }}
                  >
                    {d.label} 
                  </div>
                  <div className='percent' >
                  {d.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}
