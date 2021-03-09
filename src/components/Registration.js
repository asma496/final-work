import React from 'react'
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonAppBar from './Header'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function StyledCheckbox(props) {
    const classes = useStyles();
  
    return (
      <Checkbox
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        inputProps={{ 'aria-label': 'decorative checkbox' }}
        {...props}
      />
    );
  }


const currencies = [
    {
      value: 'vlue1',
      label: 'islam',
    },
    {
      value: 'vlue2',
      label: 'hindu',
    },
    {
      value: 'vlue3',
      label: 'Christian',
    },
    {
      value: 'vlue4',
      label: 'budhist',
    },
  ];


const GreenCheckbox = withStyles({
 
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        marginLeft:40,
        width: 280,
      },
    },
 
  }));

function Registration({handleNext,handleBack}) {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('vlue1');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChangecheck = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      }
  
        // The first commit of Material-UI
        const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
      
        const handleDateChange = (date) => {
          setSelectedDate(date);
        };
    return (
        <div>
    
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <ButtonAppBar handleNext={handleNext} handleBack={handleBack}/>
                    <h2>
                        Registration Form
                    </h2>

                </Grid>
                <form className={classes.root} noValidate autoComplete="on">

                <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="M.R #" variant="outlined" />
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Token #" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      {/* <TextField
                      //   label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        variant="outlined"
                        size="small"
                      /> */}
                         <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />

                      </div>
                    </Grid>
                    {/* 2nd grid */}
                    

                <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Father Name" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Date of Birth" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Age" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Gender" variant="outlined" />

                      </div>
                    </Grid>
                   </Grid>
                   {/* 3rd grid */}
                   <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                      <TextField
                      //   label="Size"
                        defaultValue="Religion"
                        size="small"
                        id="outlined-select-currency"
                        select
                        value={currency}
                        onChange={handleChange}
                        variant="outlined"
                      >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                         ))}
                         </TextField>
                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Help Type" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="CNIC" variant="outlined" />

                      </div>
                    </Grid>
                   
                   </Grid>
                   {/* 4th contact */}
                   <fieldset>
                   <legend>Contact</legend>
                   <Grid container direction='row'>
                       
                           
                           <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="House #" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Address" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Area" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="District" variant="outlined" />

                      </div>
                    </Grid>
                   </Grid>

                   {/* 5th grid */}

                   <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="City" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Phone (Res)" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Phone off" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Mobile" variant="outlined" />

                      </div>
                    </Grid>
                   </Grid>
                   <Grid container direction='row'>
                   <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

                      </div>
                    </Grid>
                       </Grid>
                   </fieldset>

                   {/* 6th reffer info */}

                   <fieldset>
                   <legend>Reffer Info</legend>
                   <Grid container direction='row'>
                       
                           
                           <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Refered By" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Employee ID" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="NOY" variant="outlined" />

                      </div>
                    </Grid>
                   
                   </Grid>

                   {/* 5th grid */}

                   <Grid container direction='row'>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>
                    <TextField id="outlined-basic" label="Remarks" variant="outlined" />

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>

                      </div>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                    <div>

                      </div>
                    </Grid>
                   </Grid>
                  
                   </fieldset>

                {/* 7th box staff */}

                <fieldset>
                   <legend>Contact</legend>
                   <Grid container direction='row'>
                   <FormGroup row>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    
                    <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="is PAF Employee"
                      />
                       
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="Is Staff"
                      />
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                  <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="Is Rejected"
                      />
                    </Grid>
                    </FormGroup>
                   </Grid>
                 
                   </fieldset>

                </Grid>
                </form>
               
            </Grid>
        </div>
    )
}

export default Registration
