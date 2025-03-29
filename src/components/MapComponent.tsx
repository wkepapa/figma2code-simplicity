
import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

// This is a placeholder implementation of a map that doesn't require external API keys
// In a production app, you would integrate with a real mapping service like Google Maps or Mapbox
const MapComponent = () => {
  const [mapApiKey, setMapApiKey] = useState<string>('');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Simulated map location
  const officeLocations = [
    { id: 1, name: "Headquarters", address: "123 Tech Park, Bangalore, Karnataka", lat: 12.9716, lng: 77.5946 },
    { id: 2, name: "Delhi Office", address: "456 Innovation Hub, New Delhi", lat: 28.6139, lng: 77.2090 },
    { id: 3, name: "Mumbai Office", address: "789 Startup Street, Mumbai, Maharashtra", lat: 19.0760, lng: 72.8777 },
  ];

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapApiKey) {
      setShowPlaceholder(false);
      // In a real implementation, you would initialize the map API here
    }
  };

  return (
    <div className="relative w-full h-full">
      {showPlaceholder ? (
        <div className="bg-gray-100 w-full h-full flex flex-col items-center justify-center rounded-lg p-6">
          <div className="max-w-md w-full">
            <h3 className="text-lg font-semibold mb-2">Map Preview</h3>
            <p className="text-gray-600 mb-4">
              To display an interactive map, you would need to connect to a mapping service like Google Maps or Mapbox.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <form onSubmit={handleApiKeySubmit} className="flex flex-col gap-2">
                <label htmlFor="map-api-key" className="text-sm font-medium">
                  Enter your map API key:
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
            
            <div className="space-y-4">
              {officeLocations.map(location => (
                <div key={location.id} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <MapPin className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{location.name}</h4>
                    <p className="text-sm text-gray-600">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div ref={mapContainerRef} className="w-full h-full bg-blue-50 rounded-lg">
          {/* Map would be rendered here in a real implementation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p>Map would be displayed here with API key: {mapApiKey}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
