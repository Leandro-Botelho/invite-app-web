export const formatAlias = (alias: string) => {
  return alias
    // .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/\s+/g, "-")
    // .replace(/_{2,}/g, "_")
    // .replace(/_$/, "")
    .toLowerCase();
};
