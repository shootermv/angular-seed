export function interpolate(version)
{
  return (text:String) => {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}
