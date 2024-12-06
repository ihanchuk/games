export function doBackground(url: string) {
  return {
    background: `url('${url}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}
