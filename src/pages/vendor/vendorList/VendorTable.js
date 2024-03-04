import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getVendors } from "../../../networking/NetworkCall"

// material-ui
import { Grid, Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Pagination from 'themes/overrides/Pagination';
import Loader from 'components/Loader';


// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'logo',
        align: 'left',
        disablePadding: false,
        label: 'Vendor Logo',
    },
    {
        id: 'vendorName',
        align: 'left',
        disablePadding: false,
        label: 'Vendor Name',
    },
    {
        id: 'Email',
        align: 'left',
        disablePadding: false,
        label: 'Email Address.'
    },
    {
        id: 'phoneNo',
        align: 'left',
        disablePadding: true,
        label: 'Phone No'
    },
    {
        id: 'password',
        align: 'left',
        disablePadding: false,
        label: 'Password'
    },
    {
        id: 'organizationName',
        align: 'right',
        disablePadding: false,
        label: 'Organization Name'
    },
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function VendorTableHead({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

VendorTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};


// ==============================|| Vendor TABLE ||============================== //

export default function VendorTable() {
    const [vendors, setVendors] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const res = await getVendors(currentPage);
            if (res.success) {
                setVendors(res.data);
                setTotalNumberOfPages(res.totalNumberOfPages);
            }
            setLoading(false);
        };
        getData();
    }, [currentPage]);

    return (<>
        {loading ? <Loader /> : <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-of-type': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-of-type': {
                            pr: 3
                        }
                    }}
                >
                    <VendorTableHead />
                    {vendors.length ? <TableBody>
                        {vendors.map((row, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    tabIndex={-1}
                                    key={index}
                                >
                                    <TableCell align="left">
                                        <img src={row.company_logo} className='img-fluid eventimg' alt="" style={{
                                            width: '100%',
                                            maxWidth: '50px',
                                            maxHeight: '50px'
                                        }} />
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell component="th" id={labelId} scope="row" align="left">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {row.email}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{row.mobile_number}</TableCell>
                                    <TableCell align="left">{row.password}</TableCell>
                                    <TableCell align="right">
                                        {row.organization_name}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody> :
                        <TableBody>
                            <TableRow tabIndex={-1}>
                                <TableCell
                                    colSpan={headCells.length}
                                    sx={{
                                        textAlign: 'center',
                                        width: '100%',
                                        borderBottom: '0px solid #000'
                                    }}
                                >
                                    <Typography variant="h2">
                                        Data Not Found
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    }
                </Table>
                {vendors.length > 0 && <Pagination count={totalNumberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            </TableContainer>
        </Box>}
    </>

    );
}
