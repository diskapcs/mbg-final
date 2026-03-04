import mbgImage from '../assets/mbg-flow.jpeg'
import Hotspot from './Hotspot'
import { flows } from '../data/flows'
import styles from './ImageMap.module.css'

/**
 * ImageMap
 * Renders the MBG flow journey image with all hotspot overlays.
 *
 * Props:
 *  onHotspotClick {function} – called with the selected flow object
 */
export default function ImageMap({ onHotspotClick }) {
  return (
    <div className={styles.wrapper}>
      <img
        src={mbgImage}
        alt="End to End Flow Journey MBG"
        className={styles.image}
        draggable={false}
      />

      {flows.map((flow) => (
        <Hotspot
          key={flow.id}
          flow={flow}
          onClick={onHotspotClick}
        />
      ))}
    </div>
  )
}
