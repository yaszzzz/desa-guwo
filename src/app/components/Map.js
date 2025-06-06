'use client'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'

// Perbaiki default marker
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
})

// Komponen untuk mengubah posisi peta secara dinamis
function ChangeMapView({ coords }) {
  const map = useMap()

  useEffect(() => {
    if (coords) {
      map.setView(coords, map.getZoom())
    }
  }, [coords, map])

  return null
}

export default function Map({ posisi }) {
  return (
    <MapContainer center={posisi} zoom={16} scrollWheelZoom={true} className="w-full h-full z-0">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posisi}>
        <Popup>
          Lokasi terpilih
        </Popup>
      </Marker>
      <ChangeMapView coords={posisi} />
    </MapContainer>
  )
}
