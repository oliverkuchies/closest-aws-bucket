import { haversine } from "./math";

const awsRegions = [
    { name: "us-east-1", lat: 38.95, lon: -77.45 },
    { name: "us-east-2", lat: 40.00, lon: -83.00 },
    { name: "us-west-1", lat: 37.78, lon: -122.42 },
    { name: "us-west-2", lat: 45.60, lon: -122.67 },
    { name: "ca-central-1", lat: 43.70, lon: -79.42 },
    { name: "eu-west-1", lat: 53.33, lon: -6.25 },
    { name: "eu-west-2", lat: 51.50, lon: -0.13 },
    { name: "eu-west-3", lat: 48.85, lon: 2.35 },
    { name: "eu-central-1", lat: 50.11, lon: 8.68 },
    { name: "ap-northeast-1", lat: 35.68, lon: 139.76 },
    { name: "ap-northeast-2", lat: 37.56, lon: 126.97 },
    { name: "ap-southeast-1", lat: 1.35, lon: 103.82 },
    { name: "ap-southeast-2", lat: -33.86, lon: 151.21 },
    { name: "ap-south-1", lat: 19.08, lon: 72.88 },
    { name: "sa-east-1", lat: -23.55, lon: -46.63 }
];

export function closestS3Region(lat : number, lon : number, availableRegions: string[] = awsRegions.map(r => r.name)) {
    let closestRegion = null;
    let minDistance = Infinity;

    for (const availableRegion of availableRegions) {
        const region = awsRegions.find(r => r.name === availableRegion);

        if (!region) {
            continue;
        }

        const distance = haversine(lat, lon, region.lat, region.lon);
        if (distance < minDistance) {
            minDistance = distance;
            closestRegion = region.name;
        }
    }
    return closestRegion;
}