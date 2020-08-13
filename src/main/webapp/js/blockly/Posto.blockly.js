window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Posto = window.blockly.js.blockly.Posto || {};

/**
 * Posto
 */
window.blockly.js.blockly.Posto.obterDadosCEP = function() {
 var item, dadosCEP, url;
  url = ['https://viacep.com.br/ws/',this.cronapi.screen.getValueOfField("Posto.active.cep"),'/json/'].join('');
  this.cronapi.util.getURLFromOthers('GET', 'application/json', url, null, null, function(sender_dadosCEP) {
      dadosCEP = sender_dadosCEP;
    this.cronapi.screen.changeValueOfField("Posto.active.endereco", this.cronapi.object.getProperty(dadosCEP, 'logradouro'));
    this.cronapi.screen.changeValueOfField("Posto.active.cidade", this.cronapi.object.getProperty(dadosCEP, 'localidade'));
    this.cronapi.screen.changeValueOfField("Posto.active.uf", this.cronapi.object.getProperty(dadosCEP, 'uf'));
  }.bind(this), function(sender_dadosCEP) {
      dadosCEP = sender_dadosCEP;
    this.cronapi.screen.notify('info','Não achei o CEP');
  }.bind(this));
}
