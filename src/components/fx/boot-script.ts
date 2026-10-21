/**
 * Runs before first paint:
 *  - enables the reveal/draw styles (html.fx-ready), backing out after a few
 *    seconds if the app never hydrates, so content is never left hidden;
 *  - decides whether to show the preloader (first visit this session, motion
 *    allowed) and opens a gate the page intro waits on (window.__introGate).
 */
export const FX_BOOT_SCRIPT = `(function(){
var d=document.documentElement;d.classList.add("fx-ready");
setTimeout(function(){if(!window.__fxBooted)d.classList.remove("fx-ready")},4000);
})();`;
