window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.MeuLocal = window.blockly.js.blockly.MeuLocal || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.MeuLocal.desenharMapa = function() {
 var item, i, lista, meulocal, objPosto, top3, x;
  meulocal = this.cronapi.maps.createLatLngPoint(this.cronapi.screen.getValueOfField("vars.vLatitude"), this.cronapi.screen.getValueOfField("vars.vLongitude"));
  this.cronapi.maps.init("map4518", 'roadmap', meulocal, '16', function(sender_item) {
      item = sender_item;
    this.cronapi.maps.createMarker("map4518", 'meulocal', 'Você está aqui !!', meulocal, '', 'Você está aqui mesmo !!', '');
  }.bind(this));
}

/**
 * MeuLocal
 */
window.blockly.js.blockly.MeuLocal.ObterCoordenadas = function() {
 var item, i, lista, meulocal, objPosto, top3, x;
  this.cronapi.cordova.geolocation.getCurrentPosition(function(sender_meulocal) {
      meulocal = sender_meulocal;
    console.log(meulocal);
    this.cronapi.screen.changeValueOfField("vars.vLatitude", this.cronapi.object.getProperty(meulocal, 'coords.latitude'));
    this.cronapi.screen.changeValueOfField("vars.vLongitude", this.cronapi.object.getProperty(meulocal, 'coords.longitude'));
  }.bind(this), function(sender_meulocal) {
      meulocal = sender_meulocal;
    this.cronapi.screen.notify('error','Não foi possível obter as coordenadas');
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.MeuLocal.desenharMapa2 = function() {
 var item, i, lista, meulocal, objPosto, top3, x;
  meulocal = this.cronapi.maps.createLatLngPoint(this.cronapi.screen.getValueOfField("vars.vLatitude"), this.cronapi.screen.getValueOfField("vars.vLongitude"));
  this.cronapi.util.callServerBlocklyAsynchronous('blockly.Posto:listaMenorCusto', function(sender_top3) {
      top3 = sender_top3;
    this.cronapi.maps.init("map4518", 'roadmap', meulocal, '16', function(sender_item) {
        item = sender_item;
      this.cronapi.maps.createMarker("map4518", 'meulocal', 'Você está aqui !!', meulocal, '', 'Você está aqui mesmo !!', '');
      this.blockly.js.blockly.MeuLocal.marcarPostos(top3);
    }.bind(this));
  }.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.MeuLocal.marcarPostos = function(top3) {
 var item, i, lista, meulocal, objPosto, x;
  var i_end = top3.length;
  var i_inc = 1;
  if (1 > i_end) {
    i_inc = -i_inc;
  }
  for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
    objPosto = top3[(i - 1)];
    this.cronapi.maps.createMarker("map4518", i, this.cronapi.object.getProperty(objPosto, 'posto'), this.cronapi.maps.createLatLngPoint(this.cronapi.object.getProperty(objPosto, 'latitude'), this.cronapi.object.getProperty(objPosto, 'longitude')), 'img/fillingstation.png', [this.cronapi.object.getProperty(objPosto, 'posto'),'. Custo Km: ',this.cronapi.object.getProperty(objPosto, 'custokm')].join(''), '');
  }
}
