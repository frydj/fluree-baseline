import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../../../App/App.css';

const LedgerSelect = ({ ledger, setLedger }) => {
  const { getValue, setValue } = useLocalStorage();
  const [ledgers, setLedgers] = useState([getValue('activeLedger')] || []);

  const handleChange = (event) => {
    setValue('activeLedger', event.target.value);
    setLedger(event.target.value);
  };

  const getLedgers = () => {
    let url = 'http://localhost:5001/ledgers';
    axios.get(url).then((response) => {
      setLedgers(response.data);
    });
  };

  useEffect(() => {
    getLedgers();
  }, []);

  return (
    <Box id="ledger-select-container" sx={{ minWidth: 120 }}>
      <FormControl variant="standard" fullWidth>
        <Select id="demo-simple-select" value={ledger} onChange={handleChange}>
          <MenuItem value={'<no ledger>'}>{'<no ledger>'}</MenuItem>
          {ledgers.map((p, i) => (
            <MenuItem key={i} value={p}>
              {p}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LedgerSelect;
