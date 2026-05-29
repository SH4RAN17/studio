"use client"

import { useEffect, useRef } from "react"
import Marzipano from "marzipano"

export function PanoramaViewer() {
  const panoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!panoRef.current) return

    const viewer = new Marzipano.Viewer(panoRef.current)

    const source = Marzipano.ImageUrlSource.fromString(
      "/panoramas/Bedroom.webp"
    )

    const geometry = new Marzipano.EquirectGeometry([
      {
        width: 4000,
      },
    ])

    const limiter = Marzipano.RectilinearView.limit.traditional(
      4096,
      (100 * Math.PI) / 180
    )

    const view = new Marzipano.RectilinearView(
      {
        yaw: 0,
        pitch: 0,
        fov: Math.PI / 2,
      },
      limiter
    )

    const scene = viewer.createScene({
      source,
      geometry,
      view,
    })

    scene.switchTo()
  }, [])

  return (
    <div
      ref={panoRef}
      style={{
        width: "100%",
        height: "100vh",
        background: "#000",
      }}
    />
  )
}