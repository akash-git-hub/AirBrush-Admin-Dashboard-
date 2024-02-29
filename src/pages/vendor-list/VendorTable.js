import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  } from '@mui/material';

// project import

function createData(protein, trackingNo, name, fat, carbs) {
    return { protein, trackingNo, name, fat, carbs, };
}

const rows = [
    createData('Akash Verma', 'example@gmail.com', '+91 - 8989898910', 123456, 'IBM'),
    createData('Sanjay Verma', 'example@gmail.com', '+91 - 8989898910', 1234560, 'IBM'),
    createData('Ankit Verma', 'example@gmail.com', '+91 - 8989898910', 1234565, 'IBM'),
    createData('Pankaj Verma', 'example@gmail.com', '+91 - 8989898910', 123456, 'IBM'),
    createData('Akshat Verma', 'example@gmail.com', '+91 - 8989898910', 1234560, 'IBM'),
    createData('Vishal Verma', 'example@gmail.com', '+91 - 8989898910', 123456, 'IBM'),
    createData('Sharan Verma', 'example@gmail.com', '+91 - 8989898910', 1234565, 'IBM'),
    createData('Kumar Verma', 'example@gmail.com', '+91 - 8989898910', 123456, 'IBM'),
    createData('Akash Verma', 'example@gmail.com', '+91 - 8989898910', 1234565, 'IBM'),
    createData('Hitesh Verma', 'example@gmail.com', '+91 - 8989898910', 1234560, 'IBM')
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'protein',
        align: 'left',
        disablePadding: false,
        label: 'Vendor Name',
    },
    {
        id: 'trackingNo',
        align: 'left',
        disablePadding: false,
        label: 'Email Address.'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'Phone No'
    },
    {
        id: 'fat',
        align: 'left',
        disablePadding: false,
        label: 'Password'
    },
    {
        id: 'carbs',
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
                        sortDirection={orderBy === headCell.id ? order : false}
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


// ==============================|| ORDER TABLE ||============================== //

export default function VendorTable() {
    const [order] = useState('asc');
    const [orderBy] = useState('trackingNo');
    const [selected] = useState([]);

    const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

    return (
        <Box>
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
                    <VendorTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.trackingNo);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.trackingNo}
                                    selected={isItemSelected}
                                >
                                    <TableCell align="left">{row.protein}</TableCell>
                                    <TableCell component="th" id={labelId} scope="row" align="left">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {row.trackingNo}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.fat}</TableCell>
                                    <TableCell align="right">
                                        {row.carbs}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
