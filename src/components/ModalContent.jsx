import styles from "./ModalContent.module.css";

/**
 * ModalContent
 * Renders the detailed content inside the modal.
 * Displays image from public/SPPG-{id}.png
 *
 * Props:
 *  flow {object} – a single flow entry from flows.js
 */
export default function ModalContent({ flow }) {
  const { id } = flow;

  // Mapping: id 1-9 corresponds to SPPG-1.png through SPPG-9.png
  const imagePath = `/SPPG-${id}.png`;

  return (
    <div className={styles.body}>
      <div className={styles.imageContainer}>
        <img
          src={imagePath}
          alt={flow.title}
          className={styles.contentImage}
          onError={(e) => {
            e.target.style.display = "none";
            console.warn(`Image not found: ${imagePath}`);
          }}
        />
      </div>
    </div>
  );
}
