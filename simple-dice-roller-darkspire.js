class SimpleDiceRollerDarkspire {

    static async Init(controls, html) {

        const diceRollbtn = $(
            `
            <li class="scene-control sdr-scene-control" data-control="simple-dice-roller" title="Simple Dice Roller">
                <i class="sdr-icon fas fa-dice-d20"></i>
            
                <ol class="control-tools">
                    <div id="SDRpopup" class="simple-dice-roller-popup" style="display: none;">
                        <ul class="sdr-selector">
                            <li data-dice-type="20" class="sdr-col1 selected"><i class="df-d20-20"></i> d20</li>
                            <li data-dice-type="100"><i class="df-d10-10"></i><i class="df-d10-10"></i> d100</li>
                            <li data-dice-type="30"><i class="df-d20-3"></i> d30</li>
                            <li data-dice-type="24"><i class="df-d20-4"></i> d24</li>
                            <li data-dice-type="16"><i class="df-d20-16"></i> d16</li>
                            <li data-dice-type="14"><i class="df-d20-14"></i> d14</li>
                            <li data-dice-type="12"><i class="df-d12-12"></i> d12</li>
                            <li data-dice-type="10"><i class="df-d10-10"></i> d10</li>
                            <li data-dice-type="8"><i class="df-d8-8"></i> d8</li>
                            <li data-dice-type="7"><i class="df-d8-7"></i> d7</li>
                            <li data-dice-type="6"><i class="df-d6-6"></i> d6</li>
                            <li data-dice-type="5"><i class="df-d8-5"></i> d5</li>
                            <li data-dice-type="4"><i class="df-d4-4"></i> d4</li>
                            <li data-dice-type="3"><i class="df-d4-3"></i> d3</li>
                            <li data-dice-type="2" class="sdr-lastcol"><i class="df-d2-2"></i> d2</li>
                        </ul>
                        <ul class="sdr-roller">
                            <li data-dice-type="20" data-dice-roll="1" class="sdr-col1">1</li>
                            <li data-dice-type="20" data-dice-roll="2">2</li>
                            <li data-dice-type="20" data-dice-roll="3">3</li>
                            <li data-dice-type="20" data-dice-roll="4">4</li>
                            <li data-dice-type="20" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul class="sdr-modifier sdr-lastrow">
                            <li class="sdr-modifier sdr-col1"><i class="df-d30-30" data-dice-type="30" data-dice-roll="1"></i> Modifier</li>
                            <li class="sdr-modifier sdr-lastcol"><input class="dice-modifier" type="number" value="0" /></li>
                        </ul>
                    </div>
                </ol>
            </li>
            `
        );

        html.append(diceRollbtn);

        html.find('.simple-dice-roller-popup .sdr-selector li').click(ev => this._selectDice(ev, html));
        html.find('.simple-dice-roller-popup .sdr-roller li').not('.sdr-selector').not('.sdr-modifier').click(ev => this._rollDice(ev, html));

        //diceRollbtn[0].addEventListener('click', ev => this.PopupSheet(ev, html));
        html.find('.sdr-icon').click(ev => this.PopupSheet(ev, html));
    }

    static async _selectDice(event, html) {
        var diceSelected = event.target.dataset.diceType;
        html.find('.sdr-selector li').removeClass('selected');
        html.find('.sdr-selector li[data-dice-type="'+diceSelected+'"]').addClass('selected');
        html.find('.sdr-roller li').data('dice-type',diceSelected);
    }

    static async _rollDice(event, html) {

        var diceType = html.find('.sdr-roller li.sdr-col1').data('dice-type');
        var diceRoll = event.target.dataset.diceRoll;
        if(diceRoll == undefined){diceRoll = 1;}
        var diceModifier = html.find('.dice-modifier').val();
        var diceAdd = " + ";

        if(diceModifier < 0){diceAdd = " - "; diceModifier = Math.abs(diceModifier);}
                
        var formula = diceRoll + "d" + diceType + diceAdd + diceModifier;

        let r = new Roll(formula);

        r.toMessage({
            user: game.user._id,
        });

        html.find('.dice-modifier').val(0);

        this._close(event, html);

    }
    
    static async PopupSheet(event, html) {
        //console.log("SDR | clicked");

        if (html.find('.sdr-scene-control').hasClass('active')) {
            this._close(event, html);
        } else {
            this._open(event, html);
        }
    }

    static async _close(event, html) {
        //console.log("SDR | closed");
        html.find('#SDRpopup').hide();
        html.find('.sdr-scene-control').removeClass('active');
        html.find('.scene-control').first().addClass('active');
        event.stopPropagation();
    }

    static async _open(event, html) {
        //console.log("SDR | opened");
        html.find('.scene-control').removeClass('active');
        html.find('#SDRpopup').show();
        html.find('.sdr-scene-control').addClass('active');
        event.stopPropagation();
    }


}

Hooks.on('renderSceneControls', (controls, html) => { SimpleDiceRollerDarkspire.Init(controls, html); });

console.log("SDRD | Simple Dice Roller Darkspire loaded");