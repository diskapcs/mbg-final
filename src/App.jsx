import { useState, useCallback } from 'react'
import TopBar from './components/TopBar'
import ImageMap from './components/ImageMap'
import Modal from './components/Modal'

/**
 * App
 * Root component. Manages which flow is currently selected (modal open state)
 * and wires TopBar, ImageMap, and Modal together.
 *
 * State:
 *  selectedFlow {object|null} – the flow the user clicked, or null if closed
 */
export default function App() {
  const [selectedFlow, setSelectedFlow] = useState(null)

  const handleHotspotClick = useCallback((flow) => {
    setSelectedFlow(flow)
  }, [])

  const handleClose = useCallback(() => {
    setSelectedFlow(null)
  }, [])

  return (
    <>
      <TopBar />
      <ImageMap onHotspotClick={handleHotspotClick} />
      <Modal flow={selectedFlow} onClose={handleClose} />
    </>
  )
}
