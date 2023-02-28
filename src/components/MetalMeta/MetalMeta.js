import './MetalMeta.css'
import data from '../../metal.json'

function MetalMeta() {
    const numBands = data.length;
  
    return (
      <div className="bands">
        <p><strong>🤘Total Bands:</strong> {numBands}</p>
      </div>
    );
  }
  
  export default MetalMeta;