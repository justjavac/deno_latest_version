# deno_latest_version

[![tag](https://img.shields.io/github/release/justjavac/deno_latest_version)](https://github.com/justjavac/deno_latest_version/releases)
[![Build Status](https://github.com/justjavac/deno_latest_version/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_latest_version/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_latest_version)](https://github.com/justjavac/deno_latest_version/blob/master/LICENSE)

Get the latest version of Deno from <https://deno.land/x>.

## Usage

```js
import latestVersion from 'https://deno.land/x/latest_version/mod.ts';

await latestVersion('std');
```

## Example

```bash
deno run --allow-net https://deno.land/x/latest_version/example.ts
```

## License

[deno_latest_version](https://github.com/justjavac/deno_latest_version) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
