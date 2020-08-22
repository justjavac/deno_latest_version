import versionInfo from "https://deno.land/x/version_info/mod.ts";

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
