import React from "react";
import './Band.css';
import Like from "../Like/Like";

const BandInfo = (props) => {
    const { band_name, origin, fans, formed, split, style } = props;
    let fanAmount = parseInt(fans)*1000;
    fanAmount = fanAmount.toLocaleString('en');
    const bandStyle = style.split(',').map((item, index) => {
        return <li key={index}>{item}</li>
    });

    return (
        <div className="bandsInfo">
            <h2>🤘{band_name}</h2>
            <p><strong>Origin:</strong> {origin}</p>
            <p><strong>Fans:</strong> {fanAmount}</p>
            <p><strong>Formed:</strong> {formed}</p>
            <p><strong>Split:</strong> {split}</p>
            <ul className="styleBand"><strong>Style:</strong>{bandStyle}</ul>
            { split === "-" ? <Like /> : null }
        </div>
    );
}

export default BandInfo;
