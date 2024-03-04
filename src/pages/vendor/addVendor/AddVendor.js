import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addVendor } from "../../../networking/NetworkCall"
import {
    Button,
    Grid,
    Typography, Modal, Box, TextField, Stack, InputLabel, OutlinedInput, FormHelperText
    , IconButton,
    InputAdornment
} from '@mui/material';
import { PlusCircleOutlined } from '@ant-design/icons';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddVendor = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [logo, setLogo] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogoChange = (event) => {
        // Logic to handle file upload
        const file = event.target.files[0];
        if (file) {
            setLogo(URL.createObjectURL(file));
        }
    };

    // Destructuring formik object
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
            company_logo: logo,
            name: '',
            mobile: '',
            organization_name: ''
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required'),
            company_logo: Yup.mixed()
                .required('Logo should be an image format')
                .test(
                    'fileFormat',
                    'Supported image formats: jpg, jpeg, png, gif',
                    (value) => value && value.type.startsWith('image/')
                ),
            name: Yup.string().max(200).required('Name is Required'),
            mobile: Yup.string().required('Mobile number is required'),
            organization_name: Yup.string().required('Organization name is required')
        }),

        onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
            console.log("this is values----------------->", values)
            // const res = await addVendor(values);
            // if (res.success) {
            //     toast.success(res.message);
            //     // Navigate("/dashboard", { replace: true });
            // } else {
            //     toast.error(res.message);
            // }
        }
    });

    return (
        <>
            <Button className="w-100" type="button" variant="contained" size="large" onClick={handleOpen} startIcon={<PlusCircleOutlined />}>Add Vendor</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h2" component="h2">
                        Add Vendor
                    </Typography>
                    <form onSubmit={handleSubmit}
                        noValidate
                        style={{
                            overflow: 'scroll',
                            scrollbarWidth: 'none'

                        }}
                    >
                        <div>
                            <input
                                accept="image/*"
                                id="contained-button-file"
                                type="file"
                                name="company_logo"
                                style={{ display: 'none' }}
                                onChange={handleLogoChange}
                                // onChange={handleChange}
                                required
                            />
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px'
                            }}>
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" component="span" className="mb-2 mt-4" sx={{
                                        background: 'transparent',
                                        color: '#000',
                                        border: '1px dashed #000',
                                        width: '100%',
                                        marginBottom: '10px',
                                        marginTop: '10px',
                                        position: 'relative',
                                        '&:hover': {
                                            background: 'transparent',
                                            color: '#1777FF',
                                            border: '1px dashed #1777FF',
                                        }
                                    }}>
                                        {logo && (
                                            <img src={logo} alt="Logo" style={{
                                                width: '80px',
                                                height: '80px',
                                                objectFit: 'contain'
                                            }} />
                                        )}
                                        {!logo && <span>Upload Logo</span>}
                                    </Button>
                                </label>
                                {touched.company_logo && errors.company_logo && (
                                    <FormHelperText error>
                                        {errors.company_logo}
                                    </FormHelperText>
                                )}
                            </Box>

                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="name">Name</InputLabel>
                                        <OutlinedInput
                                            id="name"
                                            type="text"
                                            value={values.name}
                                            name="name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter name"
                                            fullWidth
                                            error={Boolean(touched.name && errors.name)}
                                        />
                                        {touched.name && errors.name && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.name}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="email-login">Email Address</InputLabel>
                                        <OutlinedInput
                                            id="email-login"
                                            type="email"
                                            value={values.email}
                                            name="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter email address"
                                            fullWidth
                                            error={Boolean(touched.email && errors.email)}
                                        />
                                        {touched.email && errors.email && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.email}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="mobile">Mobile No</InputLabel>
                                        <OutlinedInput
                                            id="mobile"
                                            type="text"
                                            value={values.mobile}
                                            name="mobile"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter mobile no"
                                            fullWidth
                                            error={Boolean(touched.mobile && errors.mobile)}
                                        />
                                        {touched.mobile && errors.mobile && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.mobile}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-login">Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.password && errors.password)}
                                            id="-password-login"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            name="password"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        size="large"
                                                    >
                                                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            placeholder="Enter password"
                                        />
                                        {touched.password && errors.password && (
                                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                                {errors.password}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="organization_name">Organization Name</InputLabel>
                                        <OutlinedInput
                                            id="organization_name"
                                            type="text"
                                            value={values.organization_name}
                                            name="organization_name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Enter organization name"
                                            fullWidth
                                            error={Boolean(touched.organization_name && errors.organization_name)}
                                        />
                                        {touched.organization_name && errors.organization_name && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.organization_name}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Button type="submit" variant="contained" size="large" sx={{
                                width: '100%',
                                mt: '5px'
                            }} >Create Vendor</Button>
                        </div>

                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default AddVendor
