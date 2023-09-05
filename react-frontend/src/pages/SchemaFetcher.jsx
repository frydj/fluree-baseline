import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../components/Bits/Container/Container';

import { schemadotorg } from '../assets/schema/schemadotorg';

// axios.defaults.baseURL = 'http://localhost:58090/fluree';

const SchemaFetcher = () => {
  const [value, setValue] = useState('Invoice');
  const [data, setData] = useState([]);
  // const [type, setType] = useState(null);

  useEffect(() => {
    // console.log(schemadotorg);
    let items = schemadotorg['@graph'];

    let properties = [];
    let classes = [];
    let other = [];

    let subclasses = [];
    let topclasses = [];

    let level1classes = [];
    let level2classes = [];

    for (var i = 0; i < items.length; i++) {
      if (items[i]['@type'] === 'rdf:Property') {
        properties.push(items[i]);
      } else if (items[i]['@type'] === 'rdfs:Class') {
        classes.push(items[i]);
      } else {
        other.push(items[i]);
      }
    }

    for (i = 0; i < classes.length; i++) {
      if (!classes[i]['rdfs:subClassOf']) {
        topclasses.push(classes[i]);
      } else {
        subclasses.push(classes[i]);
      }
    }

    for (i = 0; i < subclasses.length; i++) {
      if (
        subclasses[i]['rdfs:subClassOf'] &&
        subclasses[i]['rdfs:subClassOf']['@id'] &&
        subclasses[i]['rdfs:subClassOf']['@id'] === 'schema:Thing'
      ) {
        level1classes.push(subclasses[i]);
      }
    }

    for (i = 0; i < level1classes.length; i++) {
      let key = level1classes[i]['@id'];

      console.log('key', key);

      for (var x = 0; x < subclasses.length; x++) {
        if (
          subclasses[x]['rdfs:subClassOf'] &&
          subclasses[x]['rdfs:subClassOf']['@id'] &&
          subclasses[x]['rdfs:subClassOf']['@id'] === key
        ) {
          level2classes.push(subclasses[x]);
        }
      }

      // below
    }

    console.log('properties:', properties);
    console.log('classes', classes);
    console.log('other', other);

    console.log('topclasses', topclasses);
    console.log('subclasses', subclasses);
    console.log('level1classes', level1classes);
    console.log('level2classes', level2classes);
  });

  useEffect(() => {
    console.log('data changed', data);
  }, [data]);

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Container>
  );
};

export default SchemaFetcher;
