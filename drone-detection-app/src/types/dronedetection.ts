export type DroneAlarm = {
    id: string;
    Detected: boolean;
    Timestamp: string;          
    Confidence: number;
    ModelVersion: string;
    RecordingURL: string;
    location: {
        lat: number;
        lon: number;
    };


    /*
    JSON FORMAT
    "detected": true,
    "timestamp": "2025-04-02T15:30:00Z",
    "confidence": 0.95,
    "model_version": "v1.0.0",
    "recordingURL": "http://example.com/audio/drone-detection-001.mp3",
    "location": {
        "lat": 55.6761,
        "lon": 12.5683
     */
};