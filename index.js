;(function (global) {
  'use strict'
  try { global = Function('return this')() || (42, eval)('this') }
  catch (e) { global = window }
  if ((typeof module !== 'undefined') && (module !== global.module)) module.exports = tap
  else if (global.tap) return console.error('"tap" is already defined.')
  else global.tap = tap
  function tap (name, spec) {
    console.log('@TODO: implement `tap-browser`')
  }
})()
