class SimpleDiceRollerDarkspire {

    static async Init(controls, html) {

        const diceRollbtn = $(
            `
            <li class="scene-control sdr-scene-control" data-control="simple-dice-roller" title="Simple Dice Roller">
                <i class="sdr-icon fas fa-dice-d20"></i>
            
                <ol class="control-tools">
                    <div id="SDRpopup" class="simple-dice-roller-popup" style="display: none;">
                        <ul>
                            <li data-dice-type="2" data-dice-roll="1" class="sdr-col1"><i class="df-d2-2" data-dice-type="2" data-dice-roll="1"></i> d2</li>
                            <li data-dice-type="2" data-dice-roll="2">2</li>
                            <li data-dice-type="2" data-dice-roll="3">3</li>
                            <li data-dice-type="2" data-dice-roll="4">4</li>
                            <li data-dice-type="2" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="3" data-dice-roll="1" class="sdr-col1"><i class="df-d6-3" data-dice-type="3" data-dice-roll="1"></i> d3</li>
                            <li data-dice-type="3" data-dice-roll="2">2</li>
                            <li data-dice-type="3" data-dice-roll="3">3</li>
                            <li data-dice-type="3" data-dice-roll="4">4</li>
                            <li data-dice-type="3" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="4" data-dice-roll="1" class="sdr-col1"><i class="df-d4-4" data-dice-type="4" data-dice-roll="1"></i> d4</li>
                            <li data-dice-type="4" data-dice-roll="2">2</li>
                            <li data-dice-type="4" data-dice-roll="3">3</li>
                            <li data-dice-type="4" data-dice-roll="4">4</li>
                            <li data-dice-type="4" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="5" data-dice-roll="1" class="sdr-col1"><i class="df-d8-5" data-dice-type="5" data-dice-roll="1"></i> d5</li>
                            <li data-dice-type="5" data-dice-roll="2">2</li>
                            <li data-dice-type="5" data-dice-roll="3">3</li>
                            <li data-dice-type="5" data-dice-roll="4">4</li>
                            <li data-dice-type="5" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="6" data-dice-roll="1" class="sdr-col1"><i class="df-d6-6" data-dice-type="6" data-dice-roll="1"></i> d6</li>
                            <li data-dice-type="6" data-dice-roll="2">2</li>
                            <li data-dice-type="6" data-dice-roll="3">3</li>
                            <li data-dice-type="6" data-dice-roll="4">4</li>
                            <li data-dice-type="6" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="8" data-dice-roll="1" class="sdr-col1"><i class="df-d8-8" data-dice-type="8" data-dice-roll="1"></i> d8</li>
                            <li data-dice-type="8" data-dice-roll="2">2</li>
                            <li data-dice-type="8" data-dice-roll="3">3</li>
                            <li data-dice-type="8" data-dice-roll="4">4</li>
                            <li data-dice-type="8" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="10" data-dice-roll="1" class="sdr-col1"><i class="df-d10-10" data-dice-type="10" data-dice-roll="1"></i> d10</li>
                            <li data-dice-type="10" data-dice-roll="2">2</li>
                            <li data-dice-type="10" data-dice-roll="3">3</li>
                            <li data-dice-type="10" data-dice-roll="4">4</li>
                            <li data-dice-type="10" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="12" data-dice-roll="1" class="sdr-col1"><i class="df-d12-12" data-dice-type="12" data-dice-roll="1"></i> d12</li>
                            <li data-dice-type="12" data-dice-roll="2">2</li>
                            <li data-dice-type="12" data-dice-roll="3">3</li>
                            <li data-dice-type="12" data-dice-roll="4">4</li>
                            <li data-dice-type="12" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="20" data-dice-roll="1" class="sdr-col1"><i class="df-d20-20" data-dice-type="20" data-dice-roll="1"></i> d20</li>
                            <li data-dice-type="20" data-dice-roll="2">2</li>
                            <li data-dice-type="20" data-dice-roll="3">3</li>
                            <li data-dice-type="20" data-dice-roll="4">4</li>
                            <li data-dice-type="20" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="24" data-dice-roll="1" class="sdr-col1"><i class="df-d20-4" data-dice-type="24" data-dice-roll="1"></i> d24</li>
                            <li data-dice-type="24" data-dice-roll="2">2</li>
                            <li data-dice-type="24" data-dice-roll="3">3</li>
                            <li data-dice-type="24" data-dice-roll="4">4</li>
                            <li data-dice-type="24" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="30" data-dice-roll="1" class="sdr-col1"><i class="df-d20-3" data-dice-type="30" data-dice-roll="1"></i> d30</li>
                            <li data-dice-type="30" data-dice-roll="2">2</li>
                            <li data-dice-type="30" data-dice-roll="3">3</li>
                            <li data-dice-type="30" data-dice-roll="4">4</li>
                            <li data-dice-type="30" data-dice-roll="5" class="sdr-lastcol">5</li>
                        </ul>
                        <ul>
                            <li data-dice-type="100" data-dice-roll="1" class="sdr-col1"><i class="df-d10-10" data-dice-type="100" data-dice-roll="1"></i><i class="df-d10-10" data-dice-type="100" data-dice-roll="1"></i> d100</li>
                            <li data-dice-type="100" data-dice-roll="2">2</li>
                            <li data-dice-type="100" data-dice-roll="3">3</li>
                            <li data-dice-type="100" data-dice-roll="4">4</li>
                            <li data-dice-type="100" data-dice-roll="5" class="sdr-lastcol">5</li>
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

        html.find('.simple-dice-roller-popup li').not('.sdr-modifier').click(ev => this._rollDice(ev, html));

        //diceRollbtn[0].addEventListener('click', ev => this.PopupSheet(ev, html));
        html.find('.sdr-icon').click(ev => this.PopupSheet(ev, html));

    }

    static async _rollDice(event, html) {

        var diceType = event.target.dataset.diceType;
        var diceRoll = event.target.dataset.diceRoll;
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