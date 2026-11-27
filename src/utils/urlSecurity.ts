export function safeExternalHref(
  raw: string | undefined | null,
  fallback = 'https://www.planalto.gov.br/ccivil_03/'
): string {
  if (!raw || typeof raw !== 'string') return fallback;
  const trimmed = raw.trim();
  if (!trimmed) return fallback;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return parsed.toString();
    }
  } catch {
    // Reject relative or unsafe protocol URIs (e.g. javascript:, data:, vbscript:)
  }
  return fallback;
}
