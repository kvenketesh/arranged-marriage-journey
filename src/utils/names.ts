export const PROFILE_STORAGE_KEY = 'bandhan_couple_profile_v2';
export const BLESSINGS_STORAGE_KEY = 'bandhan_blessings_v3';

/**
 * Extracts the given name from Indian names that may start with an initial
 * (e.g., "N SWETHA" -> "Swetha", "K VENKETESH" -> "Venketesh").
 */
export function getGivenName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';

  const firstClean = parts[0].replace(/\./g, '');
  const raw = parts.length > 1 && firstClean.length <= 2 ? parts[1] : parts[0];

  if (raw === raw.toUpperCase() && raw.length > 2) {
    return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
  }
  return raw;
}
