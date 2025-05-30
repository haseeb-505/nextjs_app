'use client'

import React, { useRef } from 'react'
import SequenceBoard from '@/components/SequenceBoard'
import { toPng } from 'html-to-image'

function SequenceBoardPage() {
  const boardRef = useRef(null)

  const handleDownload = async () => {
    if (!boardRef.current) return

    const dataUrl = await toPng(boardRef.current, { quality: 1.0, pixelRatio: 3 })
    const link = document.createElement('a')
    link.download = 'sequence-board.png'
    link.href = dataUrl
    link.click()
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center font-bold mt-12 mb-4">Sequence Board</h1>

      {/* This is the part you want to export */}
      <div ref={boardRef} className="bg-white shadow-2xl rounded-xl p-4">
        <SequenceBoard />
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Download as Image
        </button>
      </div>
    </div>
  )
}

export default SequenceBoardPage
