import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import ActiveInactive from 'components/@extended/ActiveInactive';

// project import
// import ActiveInactive from 'components/@extended/ActiveInactive';

function createData(image, eventName, vendorName, productName, address, dateTime, activeInactive) {
    return { image, eventName, vendorName, productName, address, dateTime, activeInactive, };
}

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
        id: 'image',
        align: 'left',
        disablePadding: false,
        label: 'Events Images',
    },
    {
        id: 'eventName',
        align: 'left',
        disablePadding: false,
        label: 'Event Name'
    },
    {
        id: 'vendorName',
        align: 'left',
        disablePadding: false,
        label: 'Vendor Name'
    },
    {
        id: 'productName',
        align: 'left',
        disablePadding: true,
        label: 'Product Name'
    },
    {
        id: 'address',
        align: 'right',
        disablePadding: false,
        label: 'Address'
    },
    {
        id: 'dateTime',
        align: 'right',
        disablePadding: false,
        label: 'Date/Time'
    },
    {
        id: 'activeInactive',
        align: 'right',
        disablePadding: false,
        label: 'Enable/Disable'
    },
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function EventTableHead({ order, orderBy }) {
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

EventTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE ||============================== //

export default function EventTable() {
    const [order] = useState('asc');
    const [orderBy] = useState('eventName');
    const [selected] = useState([]);

    const isSelected = (eventName) => selected.indexOf(eventName) !== -1;

    const [buttonStates, setButtonStates] = useState({
        1: true, // Initial state for button with id 1
        2: false,
        5: true,
        8: true,
    });

    const handleButtonClick = (id, isActive) => {
        setButtonStates(prevState => ({
            ...prevState,
            [id]: isActive, // Update state for the button with given id
        }));
    };



    const rows = [
        createData(84564564, 'Event Name', 'Akash Verma', 'T-shirt', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={1} isActive={buttonStates[1]} handleButtonClick={handleButtonClick} />),
        createData(98764564, 'Event Name', 'Akash Verma', 'Cap', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={2} isActive={buttonStates[2]} handleButtonClick={handleButtonClick} />),
        createData(98756325, 'Event Name', 'Akash Verma', 'Shock', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={3} isActive={buttonStates[3]} handleButtonClick={handleButtonClick} />),
        createData(98652366, 'Event Name', 'Akash Verma', 'T-shirt', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={4} isActive={buttonStates[4]} handleButtonClick={handleButtonClick} />),
        createData(13286564, 'Event Name', 'Akash Verma', 'Shock', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={5} isActive={buttonStates[5]} handleButtonClick={handleButtonClick} />),
        createData(86739658, 'Event Name', 'Akash Verma', 'T-shirt', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={6} isActive={buttonStates[6]} handleButtonClick={handleButtonClick} />),
        createData(13256498, 'Event Name', 'Akash Verma', 'Cap', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={7} isActive={buttonStates[7]} handleButtonClick={handleButtonClick} />),
        createData(98753263, 'Event Name', 'Akash Verma', 'T-shirt', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={8} isActive={buttonStates[8]} handleButtonClick={handleButtonClick} />),
        createData(98753275, 'Event Name', 'Akash Verma', 'Shock', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={9} isActive={buttonStates[9]} handleButtonClick={handleButtonClick} />),
        createData(98753291, 'Event Name', 'Akash Verma', 'Shock', '202, C21, Park Vijay....(Indore (M.p))', '24-02-2024/ 10:00Am', <ActiveInactive id={10} isActive={buttonStates[10]} handleButtonClick={handleButtonClick} />)
    ];

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
                    <EventTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.eventName);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.eventName}
                                    selected={isItemSelected}
                                >
                                    <TableCell align="left">
                                        <img src="https://mir-s3-cdn-cf.behance.net/projects/404/0ef7ec186619481.Y3JvcCw2MTc2LDQ4MzEsMCwxNjgx.jpg" className='img-fluid eventimg' alt="" style={{
                                            width: '100%',
                                            maxWidth: '50px',
                                            maxHeight: '50px'
                                        }} />
                                    </TableCell>
                                    <TableCell component="th" id={labelId} scope="row" align="left">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {row.eventName}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{row.vendorName}</TableCell>
                                    <TableCell align="left">{row.productName}</TableCell>
                                    <TableCell align="right">{row.address}</TableCell>
                                    <TableCell align="right">{row.dateTime}</TableCell>
                                    <TableCell align="right">
                                       {row.activeInactive}
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
