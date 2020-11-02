import React, { Component } from 'react';

// styles
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField'
import PhoneIcon from '@material-ui/icons/Phone';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import TodayIcon from '@material-ui/icons/Today';


const styles = theme => ({
    paper: {
        padding: "1rem",
        '@media print': {
            margin: 0,
            padding: 0,
            width: "100%"
        }
    }
});

class OrderViewCard extends Component {
    render() {
        const { classes, orderNumber, name, phoneNumber, dateTime, cakeSize, flavor1, flavor2, filling, decoration, printOut, celebratedName, celebratedAge, celebratedText, price } = this.props

        return (
            <>
                <Grid container spacing={2} className={classes.paper}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" >Order No.</Typography>
                        <Typography variant="body1" >{orderNumber}</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="name"
                            label="Name"
                            value={name}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PermIdentityIcon />
                                    </InputAdornment>
                                ),
                                readOnly: true
                            }}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="dateTime"
                            label="Date and Time"
                            value={dateTime}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <TodayIcon />
                                    </InputAdornment>
                                ),
                                readOnly: true
                            }}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            name="phoneNumber"
                            label="Phone Number"
                            value={phoneNumber}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                ),
                                readOnly: true
                            }}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            name="cakeSize"
                            label="Cake Size"
                            value={cakeSize}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true
                            }} >
                        </TextField>
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            name="flavor1"
                            label="Flavor #1"
                            value={flavor1}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true
                            }} >
                        </TextField>

                        <TextField
                            name="flavor2"
                            label="Flavor #2"
                            value={flavor2}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true
                            }} >
                        </TextField>
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            name="filling"
                            label="Filling"
                            value={filling}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true
                            }} >
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="decoration"
                            multiline
                            rows={3}
                            variant="outlined"
                            label="Decoration"
                            value={decoration}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            name="celebratedName"
                            label="Celebrated Name"
                            value={celebratedName}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            name="celebratedAge"
                            type="number"
                            label="Celebrated Age"
                            value={celebratedAge}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </Grid>

                    <Grid item xs={4}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={printOut ? true : false}
                                    name="printOut"
                                    color="secondary"
                                />
                            }
                            label="Print Out"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="celebratedText"
                            multiline
                            label="Celebrated Text"
                            value={celebratedText}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="price"
                            type="number"
                            label="Price"
                            value={price}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                ),
                                readOnly: true,
                            }}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(styles, { withTheme: true })(OrderViewCard);