/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../../typings/main/ambient/angular/index.d.ts" />

export function interpolate(version)
{
  return (text:String) => {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}
