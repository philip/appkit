# Function: appKitDatabaseTypesPlugin()

```ts
function appKitDatabaseTypesPlugin(options: AppKitDatabaseTypesPluginOptions): Plugin$1;
```

Vite plugin — regenerates `shared/appkit-types/database.d.ts` and
`shared/appkit-types/database.columns.ts` whenever
`config/database/schema.ts` changes during dev. In production
(`vite build`) it runs once at `buildStart`.

Only activates when `config/database/schema.ts` exists at the Vite root
or its parent. Apps without the database plugin pay nothing.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `AppKitDatabaseTypesPluginOptions` |

## Returns

`Plugin$1`
