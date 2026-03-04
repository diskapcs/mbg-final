import { useEffect } from 'react'
import ModalContent from './ModalContent'
import styles from './Modal.module.css'

/**
 * Modal
 * Full-screen overlay that renders a dialog showing flow details.
 *
 * Props:
 *  flow     {object|null} – currently selected flow, or null when closed
 *  onClose  {function}    – callback to close the modal
 */
export default function Modal({ flow, onClose }) {
  // Close on ESC key
  useEffect(() => {
    if (!flow) return
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [flow, onClose])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = flow ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [flow])

  if (!flow) return null

  const { color } = flow

  return (
    <div
      className={styles.overlay}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={flow.title}
    >
      <div className={styles.dialog}>
        {/* Header */}
        <div
          className={styles.header}
          style={{
            background: `linear-gradient(135deg, ${color.bg}, #fff)`,
            borderBottom: `2px solid ${color.bg}`,
          }}
        >
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Tutup modal"
          >
            ✕
          </button>

          <span
            className={styles.stepBadge}
            style={{ background: color.badge, color: color.badgeText }}
          >
            {flow.step}
          </span>

          <span className={styles.icon}>{flow.icon}</span>

          <h2 className={styles.title} style={{ color: color.accent }}>
            {flow.title}
          </h2>

          <p className={styles.subtitle}>{flow.subtitle}</p>
        </div>

        {/* Scrollable body */}
        <ModalContent flow={flow} />
      </div>
    </div>
  )
}
