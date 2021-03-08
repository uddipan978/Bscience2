import React from 'react'
import Farm from '../farm/Farm'
import Header from '../header/Header'
import styles from "./farm.module.scss"
import { Grid } from "@material-ui/core"
import Center from '../center/Center'


function FarmHeader() {
    return (
        <Grid container xs={12} className={styles.farmBackground} direction="row">
            <Grid item xs={12}>
                <Header />
            </Grid>
            
            <Grid item xs={12}>
                <Center />
            </Grid>
        </Grid>
    )
}

export default FarmHeader
