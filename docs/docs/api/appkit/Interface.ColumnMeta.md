# Interface: ColumnMeta

Metadata for an AppKit column. This is used to store the column metadata in the schema.

## Example

```ts
const columnMeta: ColumnMeta = {
  serverGenerated: true,
};
```

## Properties

### primaryKey?

```ts
optional primaryKey: boolean;
```

***

### private?

```ts
optional private: boolean;
```

Hides the column from default reads, writes, and column metadata. Set via
`.private()` on the column chain. Used to keep secrets like password hashes
out of the public surface without forking the schema.

***

### serverGenerated?

```ts
optional serverGenerated: boolean;
```
