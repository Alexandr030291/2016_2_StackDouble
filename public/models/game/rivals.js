(function () {
  'use strict';
  const PlayerModel = window.PlayerModel;

  class Rival extends PlayerModel{
    /**
    * Создаёт соперника
    * @param {boolean} his_turn - показывает чей ход
    * @param {number} total_cards - количество карт
    */
    constructor(data){
      super(data);
      this.has_star = data.has_star || false;
      this.his_turn = data.his_turn  || false;
      this.total_cards = data.total_cards || 0;
      this.onchange = function(){};
    }

    update(data){
      this.his_turn = data.his_turn;
      this.total_cards = data.total_cards;
      this.onchange();
    }
  }

  /**
  * класс контейнер Rivals
  */
  class Rivals {
    constructor(data) {
      this.list = [];
      data.forEach(function(item, i, data){
        this.list.push(new Rival(item));
      }.bind(this));
    }

    update(data){
      data.forEach(function(item, i, data){
        for(let j=0; j<this.list.length; j++){
          if(this.list[j].login === item.login){
            this.list[j].update(item);
          }
        }
      }.bind(this));
    }

    get function(){
      return this.list;
    }
  }


  //export
  window.GameRivals = Rivals;
})();
