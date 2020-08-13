window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Abastecimento = window.blockly.js.blockly.Abastecimento || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Abastecimento.confirmar = function() {
 var item, valid;
  if (this.blockly.js.blockly.Abastecimento.validar()) {
    this.cronapi.screen.post("Abastecimento");
  } else {
    this.cronapi.screen.notify('error','Dados inválidos !!');
  }
}

/**
 * Abastecimento
 */
window.blockly.js.blockly.Abastecimento.validar = function() {
 var item, valid;
  if (this.cronapi.screen.getValueOfField("Abastecimento.active.valor") > 10000) {
    this.cronapi.screen.notify('error','Valor acima do limite !!');
    valid = false;
  } else {
    valid = true;
  }
  return valid;
}
