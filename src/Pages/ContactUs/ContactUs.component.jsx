import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import './ContactUs.style.scss';
import * as Yup from 'yup';
import TextFieldWrapper from '../../Components/TextFieldWrapper/Textfield.component';
import { Button, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const ContactUsPage = () => {

    const INITIAL_VALUES = {
        name: '',
        email: '',
        detail: '',
    }

    const FORM_VALIDATION = Yup.object().shape({
        name: Yup.string().required("Required Field"),
        email: Yup.string().required("Required Field"),
    })

    const [discValue, setDiscValue] = useState('');
    const [discValidate, setDiscValidate] = useState(true);
    let data = {};

    //---------------------------------------------------------------------SnackBar------------------------------------------------------
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    //---------------------------------------------------------------------------------------------------------------------

    return (
        <div className='ContactUsPage'>
            <h2>
                Contact Us
            </h2>
            <Formik
                initialValues={{ ...INITIAL_VALUES }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values, actions) => {
                    if (discValue === '') {
                        setDiscValidate(false)
                    } else {
                        setDiscValidate(true)
                        data = { ...values, detail: discValue }
                        handleClick();
                        actions.resetForm();
                        setDiscValue('');
                        console.log(data)
                    }
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
                                    padding: '2ch',
                                    fontFamily: 'roboto',
                                    fontSize: 'medium',
                                    width: '100%',
                                    borderRadius: '5px',
                                    borderColor: discValidate ? 'lightgray' : 'red',
                                }}
                            />
                            {
                                !discValidate ?
                                    <p
                                        style={{
                                            fontFamily: 'roboto',
                                            color: 'red',
                                            fontSize: 'small'
                                        }}
                                    >
                                        * Required Field
                                    </p>
                                    : null
                            }

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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Message Sent Successfully
                </Alert>
            </Snackbar>
        </div >
    )
}

export default ContactUsPage;
