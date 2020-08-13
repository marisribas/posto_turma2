window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Abastecimento = window.blockly.js.blockly.Abastecimento || {};

/**
 * Abastecimento
 */
window.blockly.js.blockly.Abastecimento.confirmar = function() {

  this.cronapi.screen.changeValueOfField("Abastecimento.active.carro", this.cronapi.screen.getValueOfField("params.carroId"));
  this.cronapi.screen.post("Abastecimento");
}
