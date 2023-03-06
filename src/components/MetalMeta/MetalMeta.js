import './MetalMeta.css'
import data from '../../metal.json'

function MetalMeta() {
    const numBands = data.length;
    const numFans = data.reduce((num, band) =>{
      return num + band.fans;
    }, 0)
  
    return (
      <div className="bands">
        <p><strong>🤘Total Bands:</strong> {numBands}</p>
        <p><strong>🤘Total Fans:</strong> {(numFans*1000).toLocaleString('en-US')}</p>
      </div>
    );
  }
  
  export default MetalMeta;