
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const [mapApiKey, setMapApiKey] = useState<string>('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  // Mumbai office location
  const officeLocation = {
    name: "Human Team Foundation",
    address: "Sion Trombay Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400071",
    phone: "+91 97694 06488",
    coordinates: [72.8777, 19.0760] // Longitude, Latitude
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapApiKey) {
      setShowPlaceholder(false);
      
      // Initialize map with provided API key
      setTimeout(() => {
        if (!mapContainerRef.current) return;
        
        mapboxgl.accessToken = mapApiKey;
        
        try {
          mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: officeLocation.coordinates,
            zoom: 15
          });
          
          // Add navigation controls
          mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
          
          // Add marker for office location
          const marker = new mapboxgl.Marker({ color: "#0039a6" })
            .setLngLat(officeLocation.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`
              <strong>${officeLocation.name}</strong><br>
              ${officeLocation.address}<br>
              ${officeLocation.city}, ${officeLocation.state} ${officeLocation.pincode}
            `))
            .addTo(mapRef.current);
          
          // Open popup by default
          marker.togglePopup();
          
        } catch (error) {
          console.error("Error initializing map:", error);
          setShowPlaceholder(true);
        }
      }, 100);
    }
  };

  // Clean up map on unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      {showPlaceholder ? (
        <div className="bg-gray-50 w-full h-full flex flex-col items-center justify-center rounded-lg p-6">
          <div className="max-w-md w-full">
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600 mb-6">
              Find us at our Mumbai office. You can enter a Mapbox API key below to view an interactive map.
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
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <form onSubmit={handleApiKeySubmit} className="flex flex-col gap-2">
                <label htmlFor="map-api-key" className="text-sm font-medium">
                  Enter your Mapbox API key:
                </label>
                <input
                  id="map-api-key"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={mapApiKey}
                  onChange={(e) => setMapApiKey(e.target.value)}
                  placeholder="Your Mapbox public token"
                />
                <button 
                  type="submit" 
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Load Map
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div ref={mapContainerRef} className="w-full h-full" />
          <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md z-10 max-w-xs">
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
