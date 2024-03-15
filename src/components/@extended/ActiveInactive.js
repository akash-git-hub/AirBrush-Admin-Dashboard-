import React from 'react';
import { Button } from '@mui/material';

const ActiveInactive = ({ id, isActive, handleButtonClick }) => {
    const handleClick = () => {
        handleButtonClick(id);
    };

    return (
        <>
            <Button
                type="button"
                variant="contained"
                color={isActive ? 'success' : 'error'}
                size="small"
                onClick={handleClick}
                sx={{ width: '8vw' }}
            >
                {isActive ? 'Active' : 'Inactive'}
            </Button>
        </>
    );
}

export default ActiveInactive;
