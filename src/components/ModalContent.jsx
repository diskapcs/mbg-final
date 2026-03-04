import styles from './ModalContent.module.css'

/**
 * ModalContent
 * Renders the detailed content sections inside the modal:
 *  - Overview
 *  - Step-by-step breakdown
 *  - Outputs
 *  - Technical details grid
 *
 * Props:
 *  flow {object} – a single flow entry from flows.js
 */
export default function ModalContent({ flow }) {
  const { color, overview, steps, outputs, extras } = flow

  return (
    <div className={styles.body}>
      {/* Overview */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>📌 Overview</div>
        <p className={styles.overviewText}>{overview}</p>
      </section>

      {/* Steps */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>🔢 Langkah-Langkah</div>
        <ul className={styles.stepList}>
          {steps.map((s) => (
            <li key={s.num} className={styles.stepItem}>
              <span
                className={styles.stepNum}
                style={{ background: color.badge, color: color.accent }}
              >
                {s.num}
              </span>
              <span>{s.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Outputs */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>✅ Output / Hasil</div>
        {outputs.map((o, i) => (
          <div
            key={i}
            className={styles.outputItem}
            style={{ background: color.bg, borderLeftColor: color.accent }}
          >
            <span className={styles.outputIcon}>{o.icon}</span>
            <span>{o.text}</span>
          </div>
        ))}
      </section>

      {/* Technical details */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>📋 Detail Teknis</div>
        <div className={styles.detailGrid}>
          {extras.map((e, i) => (
            <div
              key={i}
              className={styles.detailBox}
              style={{ background: color.bg }}
            >
              <div className={styles.detailLabel}>{e.label}</div>
              <div className={styles.detailValue} style={{ color: color.accent }}>
                {e.value}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
