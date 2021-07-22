import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import * as Yup from 'yup'
import {theme} from '../Theme/Theme';

  

const RegistrationForm = () => {
    const paperStyle = { padding: '0 15px 40px 15px', width: 250 }
    const btnStyle = { marginTop: 10 }
    const initialValues = {
        name: '',
        authorName: '',
        category:'',
        time:'',
        src:'https://images.blinkist.com/images/books/5f76e2276cee070007d0480d/1_1/250.jpg'
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        authorName: Yup.string().min(3,"Enter authorName").required("Required"),
        category:Yup.string().min(3, "Enter category").required("Required"),
        time:Yup.string().min(3, "Enter time").required("Required"),
        src: Yup.string().min(3, "It's too short"),
    })
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }
    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    
                    <Typography variant='caption'>Fill the form to create a book
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}

                            <Field as={TextField} name='name' label='Name' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='name' />} required />

                            {/* <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/> */}

                            <Field as={TextField} name='authorName' label='AuthorName' fullWidth
                                error={props.errors.authorName && props.touched.authorName}
                                helperText={<ErrorMessage name='authorName' />} required />

                             <Field as={TextField} name='category' label='category' fullWidth
                                error={props.errors.category && props.touched.category}
                                helperText={<ErrorMessage name='category' />} required />

                                   <Field as={TextField} name='time' label='time' fullWidth
                                error={props.errors.time && props.touched.time}
                                helperText={<ErrorMessage name='time' />} required />

                                <Field as={TextField} name='src' label='src' fullWidth
                                error={props.errors.src && props.touched.src}
                                helperText={<ErrorMessage name='src' />} required />

                        <ThemeProvider theme={theme}>
                            <Button type='submit' style={btnStyle} 
                            variant='contained'
                            color='primary'
                                >Submit</Button>

                        </ThemeProvider>
                        </Form>
                    )}
                </Formik>
            </Paper>
            </Grid>
    )
}

export default RegistrationForm;