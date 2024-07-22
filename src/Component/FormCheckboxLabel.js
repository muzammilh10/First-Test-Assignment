import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = () => ({
  checkbox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  checkboxVariant1: {
    '& .MuiIconButton-label': {
      position: 'absolute',
    },
    '&.Mui-checked': {
      background: "#909090",
      color: '#ffffff',
      border: '1px solid #b0a4a4',
      borderRadius: '3px',
      bottom: 0.1,
      '&:after': {
        position: 'absolute',
        width: '5px',
        height: '10px',
      },
      '&:hover': {
        backgroundColor: '#909090',
      },
    },
  },
  checkboxVariant2: {
    '& .MuiIconButton-label': {
      position: 'absolute',
      height: '82%',
      width: '94%',
    },
    '&.Mui-checked': {
      background: "#d5d2d2",
      color: '#ffffff',
      border: '1px solid #b0a4a4',
      borderRadius: '3px',
      '&:after': {
        position: 'absolute',
        width: '5px',
        height: '10px',
        opacity: 0,
      },
      '&:hover': {
        backgroundColor: '#d5d2d2',
      },
    },
  },
  checkboxVariant3: {
    '& .MuiIconButton-label': {
      position: 'absolute',
      height: '82%',
      width: '94%',
    },
    '&.Mui-checked': {
      background: "#f2efef",
      color: '#ffffff',
      border: '1px solid #b0a4a4',
      borderRadius: '3px',
      '&:after': {
        position: 'absolute',
        width: '5px',
        height: '10px',
        opacity: 0,
      },
      '&:hover': {
        backgroundColor: '#f2efef',
      },
    },
  },
  checkboxVariant4: {
    '& .MuiIconButton-label': {
      position: 'absolute',
    },
    '& .MuiCheckbox-root': {
      color: '#b0b0b0',
    },
    '&.Mui-checked': {
      color: '#1976d2',
    },
  },
  checkboxVariant5: {
    '& .MuiIconButton-label': {
      position: 'absolute',
    },
    '& .MuiCheckbox-root': {
      color: '#b0b0b0',
    },
    '&.Mui-checked': {
      color: '#1262b1',
    },
  },
  checkboxVariant6: {
    '& .MuiIconButton-label': {
      position: 'absolute',
    },
    '& .MuiCheckbox-root': {
      color: '#b0b0b0',
    },
    '&.Mui-checked': {
      color: '#3081d0',
    },
  },
  checkboxVariant7: {
    '& .MuiIconButton-label': {
      position: 'absolute',
    },
    '& .MuiCheckbox-root': {
      color: '#b0b0b0',
    },
    '&.Mui-checked': {
      color: '#3895f2',
    },
  },
  checkboxVariant8: {
    '& .MuiIconButton-label': {
      position: 'absolute',
    },
    '&.Mui-checked': {
      background: "#909090",
      color: '#ffffff',
      border: '1px solid #b0a4a4',
      borderRadius: '3px',
      bottom: 0.1,
      '&:after': {
        position: 'absolute',
        width: '5px',
        height: '10px',
      },
      '&:hover': {
        backgroundColor: '#909090',
      },
    },
  },
  formControlLabel: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '4px',
    marginRight: '0px',
    marginBottom: '20px',
  },
});

const CheckboxGroup = ({ classes, variant, label }) => {
  return (
    <div className={classes.checkbox}>
      <FormControlLabel
        control={<Checkbox className={classes[`checkboxVariant${variant}`]} />}
        label={label}
        className={classes.formControlLabel}
      />
    </div>
  );
};

CheckboxGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.number,
  label: PropTypes.string.isRequired,
};

CheckboxGroup.defaultProps = {
  variant: 6,
};

export default withStyles(styles)(CheckboxGroup);
