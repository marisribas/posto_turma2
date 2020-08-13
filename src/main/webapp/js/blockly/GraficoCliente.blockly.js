window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.GraficoCliente = window.blockly.js.blockly.GraficoCliente || {};

/**
 * GraficoCliente
 */
window.blockly.js.blockly.GraficoCliente.popular = function() {
 var serie2, serie1, legenda, registro, dados;
  console.log('entrou');
  dados = this.cronapi.screen.getValueOfField('Estatisticas.data');
  console.log(dados);
  serie1 = [];
  serie2 = [];
  legenda = [];
  for (var registro_index in dados) {
    registro = dados[registro_index];
    legenda.push(this.cronapi.object.getObjectField(registro, 'posto_posto'));
    serie1.push(this.cronapi.object.getObjectField(registro, 'valor'));
    serie2.push(this.cronapi.object.getObjectField(registro, 'valor_1'));
  }
  this.cronapi.chart.createChart("chart-dados-cliente", 'bar', legenda, null, [this.cronapi.chart.createDataset('Ticket Médio', serie1, null), this.cronapi.chart.createDataset('Valor total abastecido', serie2, null)]);
}
