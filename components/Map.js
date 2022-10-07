import { useState } from 'react';

const WorldMap = require('react-world-map');
import "../styles/map.module.css";
const Map = () => {
    const [selected, onSelect] = useState(null);
    return (
        <WorldMap 
        // selected={ 'sa' } 
        // onSelect={ (continent) => {} }
        selected={ selected } 
        onSelect={ onSelect }
        />
    );
};

export default Map;