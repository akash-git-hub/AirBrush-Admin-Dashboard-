import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ActiveInactive from 'components/@extended/ActiveInactive';
import Pagination from 'themes/overrides/Pagination';
import { Box, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Loader from 'components/Loader';
// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'image',
        align: 'left',
        disablePadding: false,
        label: 'Event Image',
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

// ==============================|| EVENT TABLE - HEADER ||============================== //

function EventTableHead() {
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

// ==============================|| EVENT TABLE ||============================== //

export default function EventTable() {
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
    const [eventData, setEventData] = useState([
        { id: 10, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 1 },
        { id: 9, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 0 },
        { id: 8, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 1 },
        { id: 7, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 0 },
        { id: 6, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 1 },
        { id: 5, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 0 },
        { id: 4, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 1 },
        { id: 3, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 0 },
        { id: 2, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 1 },
        { id: 1, eventName: 'Event Name', vendorName: 'Akash Verma', productName: 'T-shirt', address: '202, C21, Park Vijay....(Indore (M.p))', dateTime: '24-02-2024/ 10:00Am', status: 0 },
    ]);


    const handleButtonClick = (id) => {
        const prevState = [...eventData];
        const updatableData = prevState.map((e) => {
            const event = { ...e }
            if (e.id === id) {
                if (e.status === 1) {
                    event.status = 0
                } else {
                    event.status = 1
                }
            }
            return event;
        })
        setEventData(updatableData)
        // call api to update status here
    };

    return (
        <>
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
                        <EventTableHead />
                        {eventData.length ? <TableBody>
                            {eventData.map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        tabIndex={-1}
                                        key={index}
                                    >
                                        <TableCell align="left">
                                            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/0ef7ec186619481.Y3JvcCw2MTc2LDQ4MzEsMCwxNjgx.jpg" className='img-fluid eventimg' alt="" style={{
                                                width: '100%',
                                                maxWidth: '50px',
                                                maxHeight: '50px'
                                            }} />
                                        </TableCell>
                                        <TableCell align="left">{row.eventName}</TableCell>
                                        <TableCell align="left">{row.vendorName}</TableCell>
                                        <TableCell align="left">{row.productName}</TableCell>
                                        <TableCell align="right">{row.address}</TableCell>
                                        <TableCell align="right">{row.dateTime}</TableCell>
                                        <TableCell align="right">
                                            <ActiveInactive id={row.id} isActive={row.status === 1 ? true : false} handleButtonClick={handleButtonClick} />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody> : <TableBody>
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
                        </TableBody>}

                    </Table>
                    {eventData.length > 0 && <Pagination count={totalNumberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                </TableContainer>
            </Box>}
        </>

    );
}
