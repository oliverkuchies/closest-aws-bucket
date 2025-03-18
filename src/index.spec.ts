import { expect, test } from "vitest";
import { closestS3Region } from ".";


test('should return the closest region with lat long', () => {
    expect(closestS3Region(37.7749, -122.4194)).toBe("us-west-1");
    expect(closestS3Region(-33.9180, 151)).toBe("ap-southeast-2");
    expect(closestS3Region(-26, 28)).toBe("eu-central-1");
});