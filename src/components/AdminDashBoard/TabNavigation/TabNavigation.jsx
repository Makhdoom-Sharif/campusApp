import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Title from '../../Title';
import { useSelector } from 'react-redux';
import PanelTab from './PanelTab'



export default function TabNavigation() {
    const { NewApprovalStudentsArray, NewApprovalCompaniesArray } = useSelector((state) => state.user);
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Title>New Approval Request</Title>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Students" value="1" />
                        <Tab label="Companies" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <PanelTab TableHead1={"ID"} TableHead2={"Email"} Data={NewApprovalStudentsArray} ListDilogTitle={"All Approval Requests"} />
                </TabPanel>
                <TabPanel value="2">
                    <PanelTab TableHead1={"Company"} TableHead2={"Email"} Data={NewApprovalCompaniesArray} ListDilogTitle={"All Approval Requests"} />
                </TabPanel>
            </TabContext>
        </Box>
    );
}
