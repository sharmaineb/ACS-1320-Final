import React from "react";
import Band from "./Band/Band";
import data from '../metal.json'
import { useState } from "react";
import './BandList.css';

function BandList() {
    const [ query, setQuery ] = useState('');
    const spaces = data.filter((obj) => {
      const inTitle = obj.band_name.toLowerCase().includes(query.toLowerCase())
      const inAddress = obj.origin.toLowerCase().includes(query.toLowerCase())
      const inFormed = obj.formed.toLowerCase().includes(query.toLowerCase())
      const inStyle = obj.style.toLowerCase().includes(query.toLowerCase())
      return inTitle || inAddress || inFormed || inStyle })
    .map(({ band_name, origin, formed, style, split, fans } ) => {
      return (
        <Band
          band_name={band_name}
          origin={origin}
          formed={formed}
          split={split}
          style={style}
          fans={fans}
        />
      )
    })
  
    return (
      <div className="BandList">
              <form>
                  <input
                      value={query}
                      placeholder="search"
                      onChange={(e) => setQuery(e.target.value)}
                  />
              </form>
              {spaces}
      </div>
    )
    
  }
    
  export default BandList
