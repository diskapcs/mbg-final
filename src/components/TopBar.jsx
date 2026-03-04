import styles from './TopBar.module.css'

/**
 * TopBar
 * Sticky navigation bar at the top of the page.
 */
export default function TopBar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.title}>
        End to End Flow Journey <span className={styles.highlight}>MBG</span>
      </div>
      <div className={styles.hint}>
        👆 Klik area berwarna pada gambar untuk melihat detail flow
      </div>
    </header>
  )
}
