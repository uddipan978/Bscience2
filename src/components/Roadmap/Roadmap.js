import React from 'react'
import { Grid } from "@material-ui/core"
import styles from "./roadmap.module.scss"

function Roadmap() {
    return (
        <Grid container xs={12} className={styles.RoadmapMain}>
            <Grid item xs={12}>
                <h1 className={styles.heading}> Road Map</h1>
            </Grid>
            <div className='desktop-only' >
            <Grid item container xs={11} direction="row" justify="space-around" className={styles.bodyTImeLine}>
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row" style={{margin: "auto"}} >
                    <Grid item xs={12}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                </Grid> 
                <div className='road_map_dot one' />
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row" style={{margin: "auto"}} >
                    <Grid item xs={12}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                </Grid>  
                <div className='road_map_dot two' />   
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row" style={{margin: "auto"}} >
                    <Grid item xs={12}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                </Grid>  
                <div className='road_map_dot three' />   
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row"  style={{margin: "auto"}} >
                    <Grid item xs={12}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                </Grid>  
                <div className='road_map_dot four' />   
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row" style={{margin: "auto"}} >
                    <Grid item xs={12}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                </Grid>             
            </Grid>
            </div>
            <div className='mobile-only' >
            <Grid item container xs={12} direction="row" justify="space-around" className={styles.bodyTImeLine}>
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row" style={{margin: "auto", marginBottom: 100}} >
                    <Grid item xs={12}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                </Grid> 
                <div className='road_map_dot one' />
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row" style={{margin: "auto", marginBottom: 100}} >
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                    
                </Grid>  
                <div className='road_map_dot two' />   
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row" style={{margin: "auto", marginBottom: 100}} >
                    <Grid item xs={12}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                </Grid>  
                <div className='road_map_dot three' />   
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row"  style={{margin: "auto", marginBottom: 100}} >
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                    
                </Grid>  
                <div className='road_map_dot four' />   
                <Grid item container xl={2} lg={2} md={3} sm={12} xs={12} direction="row" style={{margin: "auto", marginBottom: 100}} >
                    <Grid item xs={12}>
                        <h1 className={styles.headerRoadmap}> Heading</h1>
                        <p className={styles.mainText}> YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting.
                             YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: "30px"}}>
                        <p className={styles.pCircle}> 2020 </p> 
                        <p className={styles.pText}> Q1 </p> 
                    </Grid>
                </Grid>             
            </Grid>
            </div>
        </Grid>
    )
}

export default Roadmap
