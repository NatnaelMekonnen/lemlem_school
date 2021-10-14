import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import './ContactUs.style.scss';
import * as Yup from 'yup';
import TextFieldWrapper from '../../Components/TextFieldWrapper/Textfield.component';
import { Button, Grid } from '@mui/material';

const ContactUsPage = () => {

    const INITIAL_VALUES = {
        name: '',
        email: '',
        detail: '',
    }

    const FORM_VALIDATION = Yup.object().shape({
        name: Yup.string().required("Required Field"),
        email: Yup.string().required("Required Field"),
        detail: Yup.string().required("Required Field"),
    })

    const [discValue, setDiscValue] = useState('');

    return (
        <div className='ContactUsPage'>
            <h2>
                Contact Us
            </h2>
            <Formik
                initialValues={{ ...INITIAL_VALUES }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                    console.log(values, discValue)
                }}
            >
                <Form>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name='name'
                                label='Name'
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name='email'
                                type='email'
                                label='E-mail'
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <textarea name="detail" rows="7" placeholder="Add Text here ... "
                                onChange={(e) => {
                                    setDiscValue(e.target.value)
                                }}
                                value={discValue}
                                style={{
                                    fontFamily: 'roboto',
                                    width: '100%',
                                }}
                                
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        style={{
                            backgroundColor: '#89c9bb',
                            color: 'white',
                            marginTop: '2ch'
                        }}
                    >
                        Send
                    </Button>
                </Form>
            </Formik>
        </div >
    )
}

export default ContactUsPage;
