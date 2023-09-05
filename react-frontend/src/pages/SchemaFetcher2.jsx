import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Bits/Container/Container';

import { schemadotorg } from '../assets/schema/schemadotorg';

// axios.defaults.baseURL = 'http://localhost:58090/fluree';

const SchemaFetcher = () => {
  const [value, setValue] = useState('Invoice');
  const [data, setData] = useState([]);
  const [type, setType] = useState(null);

  const baseUrl = 'https://schema.org';

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  const parseHeader = (header) => {
    switch (header) {
      case 'Values expected to be one of these types':
        return 'Expected Types:';
      case 'Used on these types':
        return 'Used On:';
      default:
        return header;
    }
  };

  useEffect(() => {
    console.log('data changed', data);
  }, [data]);

  const fetchTypeDetails = () => {
    axios
      .get(`https://schema.org/${value}`, {
        'content-type': 'application/json',
      })
      .then((res) => {
        // console.log(res.data);

        // snipped
        // var s = '<div id="myDiv"></div>';
        let ret = document.getElementById('returned');
        ret.innerHTML = res.data;

        let exp = document.getElementById('expectedTypes');
        let usd = document.getElementById('usedOnValues');

        // exp.innerHTML = '';
        // usd.innerHTML = '';

        let tables = ret.getElementsByClassName('definition-table');
        console.log('tables', tables);

        let arr = [];
        let valTest = value.charAt(0);

        if (valTest === valTest.toUpperCase()) {
          setType('Class');
        } else {
          setType('Property');
        }

        for (var i = 0; i < tables.length; i++) {
          let header = tables[i].querySelector('th').innerHTML;
          console.log('header', header);
          let links = tables[i].querySelector('code').querySelectorAll('a');

          console.log('links', links);

          let vals = [];
          for (var x = 0; x < links.length; x++) {
            console.log('window location', window.location);

            vals.push({
              title: links[x].innerHTML,
              href: `${baseUrl}${links[x].href.replace(
                window.location.origin,
                ''
              )}`,
            });
          }

          // let helper1 = document.getElementById('helper1');
          // helper1.innerHTML = vals;

          header = parseHeader(header);
          arr = [...arr, [header, [...vals]]];
        }

        setData([...arr]);
        // exp.appendChild(
        //   ret.querySelector('.definition-table').querySelector('code')
        // );
      });
  };

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button onClick={fetchTypeDetails}>Fetch it!</button>
      <div id="returned"></div>
      <div id="helper1"></div>

      <h2>Type</h2>
      <p>{type}</p>

      {data.map((p, i) => (
        <div key={i}>
          <h2>{p[0]}</h2>
          <Container lay={{ x: 'start', y: 'start', p: 'sm', d: 'col' }}>
            {p[1].map((r, n) => (
              <a key={n} href={r['href']} target="_blank">
                {r['title']}
              </a>
            ))}
          </Container>
        </div>
      ))}

      <textarea
        defaultValue={`
-- need to handle fetching CLASSES, and their properties, expected types, etc. 

-- start pondering doing fetches for each schema.org type, based on their base context 

-- instead of storing these in db... we should build TypeScript files?`}
      />
    </Container>
  );
};

export default SchemaFetcher;
