import styles from './Hotspot.module.css'

/**
 * Hotspot
 * A transparent, clickable overlay positioned absolutely over a region
 * of the background image. Shows a label and pulse animation on hover.
 *
 * Props:
 *  flow     {object}   – single flow entry from flows.js
 *  onClick  {function} – callback when user clicks this hotspot
 */
export default function Hotspot({ flow, onClick }) {
  const { hotspot, step, title } = flow

  return (
    <div
      className={styles.hotspot}
      style={{
        left: hotspot.left,
        top: hotspot.top,
        width: hotspot.width,
        height: hotspot.height,
      }}
      onClick={() => onClick(flow)}
      role="button"
      aria-label={`${step}: ${title}`}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(flow)}
    >
      <span className={styles.label}>
        {step}: {title}
      </span>
      <span className={styles.pulse} />
    </div>
  )
}
