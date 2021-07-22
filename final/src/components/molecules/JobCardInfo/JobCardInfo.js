import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from "../../atoms/MyTypography/MyTypography";
import MyImage from '../../atoms/MyImage/MyImage';
import Button from '@material-ui/core/Button';

const JobCardInfo = ( {positionAppliedName,companyName,locationName,imageSrc} )  => {

  const useStyles = makeStyles((theme) => ({
    root: {
        display : 'inline-flex',
        width : '390px',
        flexDirection : 'row',
    },
    cardDetailsDisplay : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        padding : '0 3% 3% 5%',
        paddingTop : '0',
        gap : '4px'
    },
    typographyHeaderStyle : {
        fontFamily : 'Montserrat',
        color : '#19293b',
        fontSize : '16px',
        lineHeight : 1.5,
        letterSpacing : '0.1px'
    },
    typographyParagraphStyle : {
        fontFamily : 'Montserrat',
        color : '#5f7381',
        fontSize : '12px',
        lineHeight : 1.33,
        letterSpacing : '0.1px'
    },
    buttonDisplay:{
        width: '101px',
        height: '38px',
        flexGrow:' 0',
        objectFit: 'contain',
        display:'block',
    },
   

}));

const classes = useStyles();

  return (
    <div className={classes.root}>
        <div>
            <MyImage src="https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg" height="50px" width="50px" alt={companyName}/>
        </div>
        <div className={classes.cardDetailsDisplay}>
            <MyTypography children={positionAppliedName} variant="h6" component="h5" className={classes.typographyHeaderStyle} />
            <MyTypography children={companyName} variant="body2" component="p" className={classes.typographyParagraphStyle}/>
            <MyTypography children={locationName} variant="body2" component="p" className={classes.typographyParagraphStyle} />
        </div>
        
    </div>
  );
}

export default JobCardInfo;