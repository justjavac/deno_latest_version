import versionInfo from "https://deno.land/x/latest_version/mod.ts";

/**
 * Get the latest version of Deno.
 *
 * @param mod
 */
export default async function latestVersion(
  mod: string,
): Promise<string | null> {
  return await versionInfo(mod)?.latest ?? null;
}
