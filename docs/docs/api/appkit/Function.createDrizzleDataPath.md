# Function: createDrizzleDataPath()

```ts
function createDrizzleDataPath(pool: Pool, schema: Schema): DataPath;
```

Build a `DataPath` backed by `drizzle-orm/node-postgres` over a pg.Pool.

This is the **only** AppKit file that imports `drizzle-orm` for query
execution (decision #30). All other code consumes the AppKit-shaped
`DataPath` interface, so swapping Drizzle for another query builder later
means rewriting just this file.

`schema` is needed to resolve eager-loading relations — Drizzle's runtime
relations API would also work, but it requires `relations()` declarations
in the schema-builder which we don't generate today. We do joins via a
two-query pattern (parent + IN-clause for related rows) which avoids the
N+1 trap without requiring extra schema metadata.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `pool` | `Pool` |
| `schema` | [`Schema`](TypeAlias.Schema.md) |

## Returns

[`DataPath`](Interface.DataPath.md)
