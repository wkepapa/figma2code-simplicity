
import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with bundlers
// This is needed because Leaflet's default marker icons have relative paths that don't work with bundlers
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {
  const [showMap, setShowMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  // Mumbai office location
  const officeLocation = {
    name: "Human Team Foundation",
    address: "Sion Trombay Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400071",
    phone: "+91 97694 06488",
    coordinates: [19.0760, 72.8777] // Latitude, Longitude (note: order is different from Mapbox)
  };

  useEffect(() => {
    // Fix Leaflet icon issue
    const DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const handleShowMap = () => {
    setShowMap(true);
    
    // Initialize map after a small delay to ensure container is ready
    setTimeout(() => {
      if (!mapContainerRef.current || mapRef.current) return;
      
      try {
        // Create the map
        mapRef.current = L.map(mapContainerRef.current).setView(officeLocation.coordinates as L.LatLngExpression, 15);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current);
        
        // Add marker for office location
        const marker = L.marker(officeLocation.coordinates as L.LatLngExpression)
          .addTo(mapRef.current)
          .bindPopup(`
            <strong>${officeLocation.name}</strong><br>
            ${officeLocation.address}<br>
            ${officeLocation.city}, ${officeLocation.state} ${officeLocation.pincode}
          `)
          .openPopup();
      } catch (error) {
        console.error("Error initializing map:", error);
        setShowMap(false);
      }
    }, 100);
  };

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      {!showMap ? (
        <div className="bg-gray-50 w-full h-full flex flex-col items-center justify-center rounded-lg p-6">
          <div className="max-w-md w-full">
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600 mb-6">
              Find us at our Mumbai office. Click the button below to view an interactive map.
            </p>
            
            <div className="p-5 rounded-lg border border-gray-200 bg-white mb-6 shadow-sm">
              <div className="flex flex-col gap-1 mb-4">
                <h4 className="font-medium text-lg">{officeLocation.name}</h4>
                <p className="text-gray-700">{officeLocation.address}</p>
                <p className="text-gray-700">{officeLocation.city}, {officeLocation.state}</p>
                <p className="text-gray-700">{officeLocation.pincode}</p>
                <p className="text-gray-700 mt-2">{officeLocation.phone}</p>
              </div>
              
              <button className="text-blue-600 flex items-center text-sm font-medium">
                Get Directions <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
            
            <button 
              onClick={handleShowMap} 
              className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              View on Map
            </button>
          </div>
        </div>
      ) : (
        <>
          <div ref={mapContainerRef} className="w-full h-full" />
          <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md z-50 max-w-xs">
            <h4 className="font-medium">{officeLocation.name}</h4>
            <p className="text-sm text-gray-600">{officeLocation.address}, {officeLocation.city}</p>
            <p className="text-sm text-gray-600">{officeLocation.state} {officeLocation.pincode}</p>
            <p className="text-sm text-gray-600 mt-1">{officeLocation.phone}</p>
            <button className="text-blue-600 flex items-center text-sm font-medium mt-2">
              Get Directions <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MapComponent;
