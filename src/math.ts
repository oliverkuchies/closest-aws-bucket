type Radial = number;

const EARTH_RADIUS_KM = 6371;

function getLatitudeWeight(lat1AsRadial: Radial, lat2AsRadial: Radial) {
    return Math.cos(lat1AsRadial) * Math.cos(lat2AsRadial);
}

function getLatLongContribution(difference: Radial) {
    return Math.sin(difference / 2) * Math.sin(difference / 2);
}

function toRadial(deg: number): Radial {
    return (deg * Math.PI) / 180;
}

function getFractionOfEarthsSurfaceCovered(lat1: number, lat2: number, lon1: number, lon2: number) {
    const latitudeDifference = toRadial(lat2 - lat1);
    const longitudeDifference = toRadial(lon2 - lon1);

    const lat1AsRadial = toRadial(lat1);
    const lat2AsRadial = toRadial(lat2);

    return getLatLongContribution(longitudeDifference) +
              getLatitudeWeight(lat1AsRadial, lat2AsRadial) *
              getLatLongContribution(latitudeDifference);
}

function haversine(lat1 : number, lon1 : number, lat2 : number, lon2 : number) {
    const fractionOfEarthsSurfaceCovered = getFractionOfEarthsSurfaceCovered(lat1, lat2, lon1, lon2);
    const angularDistanceBetweenBothpoints = 2 * Math.atan2(Math.sqrt(fractionOfEarthsSurfaceCovered), Math.sqrt(1 - fractionOfEarthsSurfaceCovered));
    return EARTH_RADIUS_KM * angularDistanceBetweenBothpoints;
}

export {
    haversine
}