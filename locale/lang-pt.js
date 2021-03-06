/*

    lang-pt.js

    Portuguese (literary) translation for SNAP!

    translated by Manuel Menezes de Sequeira

    Copyright (C) 2016 by Manuel Menezes de Sequeira

    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.pt = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    ??, ??   \u00c4, \u00e4
    ??, ??   \u00d6, \u00f6
    ??, ??   \u00dc, \u00fc
    ??      \u00df
*/

    // meta informa????o sobre a tradu????o
    'language_name':
        'Portugu??s',
    'language_translator':
        'Manuel Menezes de Sequeira',
    'translator_e-mail':
        'mmsequeira@gmail.com',
    'last_changed':
        '2020-08-03',

    // GUI
    // control bar:
    'untitled':
        'Sem t??tulo',
    'development mode':
        'modo de desenvolvimento',

    // categorias:
    'Motion':
        'Movimento',
    'Looks':
        'Apar??ncia',
    'Sound':
        'Som',
    'Pen':
        'Caneta',
    'Control':
        'Controlo',
    'Sensing':
        'Sensores',
    'Operators':
        'Operadores',
    'Variables':
        'Vari??veis',
    'Lists':
        'Listas',
    'Other':
        'Outros',

    // editor:
    'draggable':
        'arrast??vel',

    // separadores:
    'Scripts':
        'Gui??es',
    'Costumes':
        'Trajes',
    'Backgrounds':
        'Cen??rios',
    'Sounds':
        'Sons',

    // nomes:
    'Sprite':
        'o actor',
    'Stage':
        'o palco',

    // estilos de rota????o:
    'don\'t rotate':
        'n??o roda',
    'can rotate':
        'roda',
    'only face left/right':
        'olha apenas para a esquerda ou para a direita',

    // bot??o de cria????o de novo actor:
    'add a new sprite':
        'adicionar um novo actor',
    'add a new Turtle sprite':
        'Adicionar um novo actor tartaruga.',
    'paint a new sprite':
        'Pintar um novo actor.',
    'take a camera snapshot and\nimport it as a new sprite':
        'Tirar uma fotografia com a c??mara\ne import??-la como novo actor.',


    // ajuda nos tabuladores
    'costumes tab help':
        'Importe uma imagem de uma p??gina Web ou de um\n'
            + 'arquivo do seu computador arrastando-a para aqui.',
    'import a sound from your computer\nby dragging it into here':
        'Importe um som do seu computador\narrastando-o para aqui.',

    // blocos primitivos:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // movimento:
    'Stage selected:\nno motion primitives':
        'Palco seleccionado:\nsem primitivas de movimento',


    'move %n steps':
        'anda %n passos',
    'turn %clockwise %n degrees':
        'gira %clockwise %n ??',
    'turn %counterclockwise %n degrees':
        'gira %counterclockwise %n ??',
    'point in direction %dir':
        'altera a tua direc????o para %dir ??',
    'point towards %dst':
        'aponta em direc????o a %dst',
    'go to x: %n y: %n':
        'vai para as coordenadas (x: %n , y: %n )',
    'go to %dst':
        'vai para a posi????o de %dst',
    'glide %n secs to x: %n y: %n':
        'desliza em %n s para as coordenadas (x: %n , y: %n )',
    'change x by %n':
        'adiciona %n ?? tua coordenada x',
    'set x to %n':
        'altera a tua coordenada x para %n',
    'change y by %n':
        'adiciona %n ?? tua coordenada y',
    'set y to %n':
        'altera a tua coordenada y para %n',
    'if on edge, bounce':
        'se estiveres a bater na borda, ressalta',
    'x position':
        'a coordenada x da posi????o',
    'y position':
        'a coordenada y da posi????o',
    'direction':
        'a direc????o',

    // apar??ncia:
    'switch to costume %cst':
        'muda o traje para %cst',
    'next costume':
        'passa para o pr??ximo traje',
    'costume #':
        'o n??mero do traje',
    'say %s for %n secs':
        'diz %s durante %n s',
    'say %s':
        'diz %s',
    'think %s for %n secs':
        'pensa %s durante %n s',
    'think %s':
        'pensa %s',
    'Hello!':
        'Ol??!',
    'Hmm...':
        'Hmm???',
    '%img of costume %cst':
        '%img do traje %cst',
    'new costume %l width %dim height %dim':
        'um novo traje com %l de largura %dim e altura %dim',
    'stretch %cst x: %n y: %n %':
        'o traje %cst escalado de (x: %n % , y: %n % )',
    'change %eff effect by %n':
        'adiciona ao efeito %eff o valor %n',
    'set %eff effect to %n':
        'altera o teu efeito %eff para %n',
    'clear graphic effects':
        'limpa os efeitos gr??ficos',
    '%eff effect':
        'o efeito %eff',
    'change size by %n':
        'adiciona %n % ao teu tamanho',
    'set size to %n %':
        'altera o teu tamanho para %n %',
    'size':
        'o tamanho',
    'show':
        'mostra-te',
    'hide':
        'esconde-te',
    'shown?':
        'est??s a ser mostrado',
    'go to %layer layer':
        'vai para %layer',
    'front':
        'a frente',
    'back':
        'tr??s',
    'go back %n layers':
        'recua %n camadas',

    'development mode \ndebugging primitives:':
        'primitivas de depura????o \ndo modo de desenvolvimento:',
    'console log %mult%s':
        'regista %mult%s na consola',
    'alert %mult%s':
        'mostra janela de alerta com %mult%s',

    'pixels':
        'p??xeis',
    'current':
        'actual',

    // sons:
    'play sound %snd':
        'toca o som %snd',
    'play sound %snd until done':
        'toca o som %snd at?? terminar',
    'stop all sounds':
        'p??ra todos os sons',
    'rest for %n beats':
        'faz uma pausa de %n tempos',
    'play sound %snd at %rate Hz':
        'toca o som %snd a %rate Hz',
    '%aa of sound %snd':
        '%aa do som %snd',
    'duration':
        'a dura????o',
    'length':
        'o n??mero de amostras',
    'number of channels':
        'o n??mero de canais',
    'new sound %l rate %rate Hz':
        'um novo som com %l e frequ??ncia %rate Hz',
    'play note %note for %n beats':
        'toca a nota %note durante %n tempos',
    'set instrument to %inst':
        'altera o teu instrumento para %inst',
    'change tempo by %n':
        'adiciona %n bpm ao teu andamento',
    'set tempo to %n bpm':
        'altera o teu andamento para %n bpm',
    'tempo':
        'o andamento',
    'change volume by %n':
        'adiciona %n % ao volume',
    'set volume to %n %':
        'altera o volume para %n %',
    'change balance by %n':
        'adiciona %n ao balan??o',
    'set balance to %n':
        'altera o balan??o para %n',
    'balance':
        'o balan??o',
    'play frequency %n Hz':
        'toca a frequ??ncia %n Hz',
    'stop frequency':
        'p??ra de tocar a frequ??ncia',
    'play %n Hz for %n secs':
        'toca a frequ??ncia %n Hz durante %n s',

    // "instrumento", i.e. formas de onda:
    '(1) sine':
        '(1) sinusoisal',
    '(2) square':
        '(2) quadrada',
    '(3) sawtooth':
        '(3) dente de serra',
    '(4) triangle':
        '(4) triangular',

    // caneta:
    'clear':
        'apaga tudo do palco',
    'pen down':
        'baixa a tua caneta',
    'pen up':
        'levanta a tua caneta',
    'pen down?':
        'a tua caneta est?? baixa',
    'set pen color to %clr':
        'altera a cor da tua caneta para %clr',
    'set background color to %clr':
        'altera a cor do fundo para %clr',
    'change pen %hsva by %n':
        'adiciona a %hsva da tua caneta o valor %n',
    'change background %hsva by %n':
        'adiciona a %hsva do fundo o valor %n',
    'set pen %hsva to %n':
        'altera %hsva da tua caneta para %n',
    'set background %hsva to %n':
        'altera %hsva do fundo para %n',
    'pen %pen':
        '%pen da tua caneta',
    'change pen size by %n':
        'adiciona %n ?? espessura da tua caneta',
    'set pen size to %n':
        'altera a espessura da tua caneta para %n',
    'stamp':
        'carimba-te',
    'fill':
        'enche o palco',
    'write %s size %n':
        'escreve %s com tamanho %n',
    'paste on %spr':
        'carimba-te em %spr',
    'pen vectors':
        'os vectores da caneta',

    // controlo:
    'when %greenflag clicked':
        'Quando algu??m clicar em %greenflag',
    'when %keyHat key pressed':
        'Quando algu??m pressionar a tecla %keyHat',
    'when I am %interaction':
        'Quando o rato %interaction',
    'clicked':
        'clicar em ti',
    'pressed':
        'pressionar em ti',
    'dropped':
        'te largar',
    'mouse-entered':
        'entrar em ti',
    'mouse-departed':
        'sair de ti',
    'scrolled-down':
        'rolar para baixo',
    'scrolled-up':
        'rolar para cima',
    'stopped':
        'parar',
    'when %b':
        'Quando %b',
    'when I receive %msgHat':
        'Quando receberes a mensagem %msgHat',
    'broadcast %msg':
        'difunde a mensagem %msg',
    'broadcast %msg and wait':
        'difunde a mensagem %msg e espera',
    'send %msg to %spr':
        'envia a mensagem %msg a %spr',
    'Message name':
        'Qual o nome da mensagem?',
    'message':
        'a mensagem',
    'any message':
        'qualquer mensagem',
    'wait %n secs':
        'espera %n s',
    'wait until %b':
        'espera at?? que %b',
    'forever %loop':
        'repete %loop para sempre',
    'repeat %n %loop':
        'repete %n vezes %loop',
    'repeat until %b %loop':
        'at?? que %b , repete %loop',
    'for %upvar = %n to %n %cla':
        'para %upvar de %n a %n , repete %cla',
    'if %b %c':
        'se %b , ent??o %c',
    'if %b %c else %c':
        'se %b , ent??o %c sen??o, %c',
    'if %b then %s else %s':
        'se %b ent??o %s , sen??o %s',
    'report %s':
        'reporta %s',
    'stop %stopChoices':
        'p??ra %stopChoices',
    'all':
        'tudo',
    'this script':
        'este gui??o de objecto',
    'this block':
        'este gui??o de bloco',
    'stop %stopOthersChoices':
        'p??ra %stopOthersChoices',
    'all but this script':
        'todos os gui??es de objecto excepto este',
    'other scripts in sprite':
        'os outros gui??es deste objecto',
    'pause all %pause':
        'faz pausa em tudo %pause',
    'run %cmdRing %inputs':
        'executa %cmdRing %inputs',
    'launch %cmdRing %inputs':
        'lan??a execu????o de %cmdRing %inputs',
    'call %repRing %inputs':
        'o resultado da invoca????o de %repRing %inputs',
    'run %cmdRing w/continuation':
        'executa %cmdRing com continua????o',
    'call %cmdRing w/continuation':
        'o resultado da invoca????o de %cmdRing com continua????o',
    'warp %c':
        'executa atomicamente %c',
    'when I start as a clone':
        'Quando fores criado como clone',
    'create a clone of %cln':
        'cria um novo clone de %cln',
    'a new clone of %cln':
        'um novo clone de %cln',
    'myself':
        'ti',
    'delete this clone':
        'remove-te',
    'tell %spr to %cmdRing %inputs':
        'diz a %spr para executar %cmdRing %inputs',
    'ask %spr for %repRing %inputs':
        'o resultado de %spr invocar %repRing %inputs',

    // sensores:
    'touching %col ?':
        'est??s a tocar em %col',
    'touching %clr ?':
        'est??s a tocar na cor %clr',
    'color %clr is touching %clr ?':
        'a cor %clr est?? a tocar na cor %clr',
    'ask %s and wait':
        'pergunta %s e espera pela resposta',
    'what\'s your name?':
        'Como te chamas?',
    'answer':
        'a resposta dada',
    'mouse x':
        'a coordenada x do rato',
    'mouse y':
        'a coordenada y do rato',
    'mouse down?':
        'o bot??o do rato est?? pressionado',
    'key %key pressed?':
        'a tecla %key est?? a ser pressionada',
    '%rel to %dst':
        '%rel at?? %dst',
    'distance':
        'a dist??ncia',
    '%asp at %loc' :
        '%asp em %loc',
    'r-g-b-a':
        'os valores de R, G, B e Alpha',
    'sprites' :
        'os actores',
    'reset timer':
        'reinicia o cron??metro',
    'timer':
        'o valor do cron??metro',
    '%att of %spr':
        '%att de %spr',
    'my %get':
        '%get',
    'object %self':
        'o objecto de %self',
    'http:// %s':
        'o recurso http:// %s',
    'turbo mode':
        'turbo',
    'flat line ends':
        'extremos das linhas planos',
    'is %setting on?':
        'o modo %setting est?? activo',
    'set %setting to %b':
        'altera o modo %setting para %b',
    'current %dates':
        '%dates actual',
    'year':
        'o ano',
    'month':
        'o m??s',
    'date':
        'o dia',
    'day of week':
        'o dia da semana',
    'hour':
        'a hora',
    'minute':
        'o minuto',
    'second':
        'o segundo',
    'time in milliseconds':
        'o tempo (em milisegundos)',
    'microphone %audio':
        '%audio do microfone',
    'volume':
        'o volume',
    'note':
        'a nota',
    'frequency':
        'a frequ??ncia',
    'samples':
        'as amostras',
    'sample rate':
        'a frequ??ncia de amostragem',
    'spectrum':
        'o espectro',
    'resolution':
        'a resolu????o',
    'Microphone resolution...':
        'Resolu????o do microfone...',
    'Microphone':
        'Microfone',
    'low':
        'baixa',
    'high':
        'alta',
    'max':
        'm??xima',
    'video %vid on %self':
        '%vid do v??deo em %self',
    'motion':
        'o movimento',
    'snap':
        'a fotografia',
    'set video transparency to %n':
        'altera a transpar??ncia do v??deo para %n',
    'video capture':
        'captura de v??deo',
    'mirror video':
        'v??deo espelhado',
    'filtered for %clr':
        'filtrado para %clr',
    'stack size':
        'altura da pilha',
    'frames':
        'molduras',
    'log pen vectors':
        'registo de vectores da caneta',

    // operadores:
    '%n mod %n':
        'o resto de %n a dividir por %n',
    'round %n':
        'o arredondamento de %n',
    '%fun of %n':
        '%fun de %n',
    'pick random %n to %n':
        'um valor ao acaso entre %n e %n',
    '%b and %b':
        '%b e %b',
    '%b or %b':
        '%b ou %b',
    'not %b':
        '?? falso que %b',
    'true':
        'verdadeiro',
    'false':
        'falso',
    'join %words':
        'a jun????o de %words',
    'split %s by %delim':
        'uma lista com os tro??os de %s por %delim',
    'hello':
        'Ol??',
    'world':
        'mundo!',
    'letter %idx of %s':
        'o caractere %idx de %s',
    'length of %s':
        'o comprimento de %s',
    'unicode of %s':
        'o c??digo Unicode do caractere %s',
    'unicode %n as letter':
        'o caractere cujo c??digo Unicode ?? %n',
    'is %s a %typ ?':
        '%s ?? um/uma %typ',
    'is %s identical to %s ?':
        '%s ?? id??ntico a %s',
    'JavaScript function ( %mult%s ) { %code }':
        'a fun????o JavaScript ( %mult%s ) { %code }',
    'compile %repRing':
        'a compila????o de %repRing',

    'type of %s':
        'o tipo de %s',

    // vari??veis:
    'Make a variable':
        'Criar uma vari??vel',
    'Variable name':
        'Qual o nome da vari??vel?',
    'Script variable name':
        'Qual o nome da vari??vel de gui??o?',
    'inherit %shd':
        'herda %shd do teu progenitor',
    'Delete a variable':
        'Remover uma vari??vel',

    'set %var to %s':
        'altera %var para %s',
    'change %var by %n':
        'adiciona a %var o valor %n',
    'show variable %var':
        'mostra a vari??vel %var',
    'hide variable %var':
        'esconde a vari??vel %var',
    'script variables %scriptVars':
        'cria as vari??veis de gui??o %scriptVars',

    // listas:
    'list %exp':
        'uma lista com %exp',
    'numbers from %n to %n':
        'uma lista com os n??meros de %n a %n',
    '%s in front of %l':
        'a prefixa????o de %s a %l',
    'item %idx of %l':
        '%idx de %l',
    'all but first of %l':
        'uma lista com os itens de %l menos o primeiro',
    'length of %l':
        'o comprimento de %l',
    '%l contains %s':
        '%l cont??m %s',
    'thing':
        'um valor',
    'is %l empty?':
        '%l est?? vazia',
    'index of %s in %l':
        'o ??ndice de %s em %l',
    'map %repRing over %l':
        'a aplica????o de %repRing aos itens de %l',
    'keep items %predRing from %l':
        'os itens tais que %predRing de %l',
    'find first item %predRing in %l':
        'o primeiro item tal que %predRing de %l',
    'combine %l using %repRing':
        'a combina????o dos itens de %l com %repRing',
    '%blitz map %repRing over %l':
        '%blitz a aplica????o de %repRing aos itens de %l',
    '%blitz keep items %predRing from %l':
        '%blitz os itens tais que %predRing de %l',
    '%blitz find first item %predRing in %l':
        '%blitz o primeiro item tal que %predRing de %l',
    '%blitz combine %l using %repRing':
        '%blitz a combina????o dos itens de %l com %repRing',
    'for each %upvar in %l %cla':
        'para cada %upvar de %l , repete %cla',
    'item':
        'o item',
    'value':
        'o valor',
    'index':
        'o ??ndice',
    'append %lists':
        'a concatena????o de %lists',
    'add %s to %l':
        'acrescenta %s a %l',
    'delete %ida of %l':
        'remove %ida de %l',
    'insert %s at %idx of %l':
        'insere %s como %idx de %l',
    'replace item %idx of %l with %s':
        'substitui %idx de %l por %s',

    // outros
    'Make a block':
        'Criar um bloco',

    // menus
    // snap menu
    'About...':
        'Acerca do Snap!???',
    'Reference manual':
        'Ler o Manual de refer??ncia',
    'Snap! website':
        'Ir para o s??tio Web do Snap!',
    'Download source':
        'Descarregar o c??digo fonte',
    'Switch back to user mode':
        'Regressar ao modo de utilizador',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'Desactivar menus de contexto\nprofundos do Morphic e\nmostrar menus amig??veis.',
    'Switch to dev mode':
        'Passar ao modo de desenvolvimento',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'Activar menus de contexto\ne inspectores n??o\namig??veis do Morphic!',

    // menu de projecto
    'Project notes...':
        'Notas deste projecto???',
    'New':
        'Criar novo',
    'Open...':
        'Abrir???',
    'Save':
        'Guardar',
    'Save to disk':
        'Guardar no disco',
    'store this project\nin the downloads folder\n(in supporting browsers)':
        'Guardar este projecto\nna sua pasta de descargas\n'
            + '(em navegadores que o suportem).',
    'Save As...':
        'Guardar como???',
    'Import...':
        'Importar???',
    'file menu import hint':
        'Abrir um projecto exportado,\nsubstitundo o projecto corrente, ou\n'
            + 'importar uma biblioteca de blocos, um\n'
            + 'traje ou um som para o projecto corrente.',
    'Export project as plain text...':
        'Exportar este projecto como texto simples???',
    'Export project...':
        'Exportar este projecto???',
    'save project data as XML\nto your downloads folder':
        'Guardar os dados do projecto no\nformato XML na sua pasta de descargas.',
    'show project data as XML\nin a new browser window':
        'Mostrar os dados do projecto no\nformato XML numa nova janela do navegador.',
    'Export blocks...':
        'Exportar blocos deste projecto???',
    'show global custom block definitions as XML\nin a new browser window':
        'Mostrar as defini????es de blocos\npersonalizados globais no formato\nXML numa nova janela do navegador.',
    'Unused blocks...':
          'Blocos n??o usados???',
    'find unused global custom blocks\nand remove their definitions':
        'Procurar os blocos personalizados globais\nn??o usados e remover as suas defini????es',
    'Remove unused blocks':
        'Remover blocos n??o usados',
    'there are currently no unused\nglobal custom blocks in this project':
        'de momento n??o h?? blocos personalizados\nglobais n??o usados neste projecto',
    'unused block(s) removed':
        'blocos n??o usados removidos',
    'Export summary...':
        'Exportar resumo???',
    'save a summary\nof this project':
        'Guardar um resumo\ndeste projecto',
    'Contents':
        '??ndice',
    'Kind of':
        'Do tipo de',
    'Part of':
        'Uma parte de',
    'Parts':
        'Partes',
    'Blocks':
        'Blocos',
    'For all Sprites':
        'Para todos os Actores',
    'Libraries...':
        'Bibliotecas???',
    'Select categories of additional blocks to add to this project.':
        'Seleccionar categorias de blocos adicionais a acrescentar a este projecto.',
    'Select a costume from the media library':
        'Seleccionar um traje da biblioteca de m??dia.',
    'Select a sound from the media library':
        'Seleccionar um som da biblioteca de m??dia.',

    //Bibliotecas
    'Import library':
        'Importar biblioteca',
    'Loading':
        'Carregando',
    'Imported':
        'Importada',
    'Iteration, composition':
        'Itera????o e composi????o',
    'List utilities':
        'Utilit??rios para listas',
    'Variadic reporters':
        'rep??rteres vari??dicos',
    'Web services access (https)':
        'Acesso a servi??os web (https)',
    'Multi-branched conditional (switch)':
        'Comandos de selec????o com m??ltiplos ramos',
    'LEAP Motion controller':
        'Controlador LEAP Motion',
    'Words, sentences':
        'Palavras e frases',
    'Catch errors in a script':
        'Capturar erros num gui??o',
    'Set RGB or HSV pen color':
        'Alterar ou obter corer RGB e HVS da caneta',
    'Text to speech':
        'Texto para fala',
    'Provide 100 selected colors':
        'Trabalhar com 100 cores pr??-seleccionadas',
    'Infinite precision integers, exact rationals, complex':
        'Inteiros com precis??o infinita, racionais exactos e n??meros complexos',
    'Provide getters and setters for all GUI-controlled global settings':
        'Rep??rteres para obter e comandos para alterar todas as configura????es globais',
    'Allow multi-line text input to a block':
        'Permitir texto com m??ltiplas linhas como entrada',
    'Create variables in program':
        'Criar vari??veis n??o locais (globais ou de objecto) num gui??o',

    // menu da nuvem
    'Login...':
        'Entrar na sua conta???',
    'Signup...':
        'Registar uma nova conta???',
    'Logout':
        'Sair',
    'Change Password...':
        'Alterar palavra-passe???',
    'Reset Password...':
        'Recuperar palavra-passe???',
    'Resend Verification Email...':
        'Reenviar Mensagem de Verifica????o???',
    'Open in Community Site':
        'Abrir na Comunidade Snap!',

    // menu de prefer??ncias
    'Language...':
        'L??ngua???',
    'Zoom blocks...':
        'Amplia????o dos blocos???',
    'Fade blocks...':
        'Desvanecimento de blocos???',
    'Stage size...':
        'Tamanho do palco???',
    'Stage size':
        'Tamanho do palco',
    'Stage width':
        'Largura do palco',
    'Stage height':
        'Altura do palco',
    'Default':
        'Normal',
    'Blurred shadows':
        'Sombras desfocadas',
    'uncheck to use solid drop\nshadows and highlights':
        'Desassinalar para usar sombras\ne realces n??tidos.',
    'check to use blurred drop\nshadows and highlights':
        'Assinalar para usar sombras\ne realces desfocados.',
    'Zebra coloring':
        'Colora????o em zebra',
    'check to enable alternating\ncolors for nested blocks':
        'Assinalar para alternar\nas cores de blocos aninhados.',
    'uncheck to disable alternating\ncolors for nested block':
        'Desassinalar para deixar de alternar\nas cores de blocos aninhados.',
    'Dynamic input labels':
        'Etiquetas de entrada din??micas',
    'uncheck to disable dynamic\nlabels for variadic inputs':
        'Desassinalar para desactivar etiquetas\ndin??micas nas entradas vari??dicas.',
    'check to enable dynamic\nlabels for variadic inputs':
        'Assinalar para activar etiquetas\ndin??micas nas entradas vari??dicas.',
    'Prefer empty slot drops':
        'Preferir largadas em ranhuras vazias',
    'settings menu prefer empty slots hint':
        'Assinalar para focar em ranhuras vazias\nquando arrastando e '
            + 'largando rep??rteres.',
    'uncheck to allow dropped\nreporters to kick out others':
        'Desassinalar para permitir que\nrep??rteres largados '
            + 'desalojem outros.',
    'check to turn on\n visible stepping (slow)':
        'Assinalar para activar\nexecu????o passo a passo vis??vel (lento).',
    'uncheck to turn off\nvisible stepping':
        'desassinalar para desactivar\nexecu????o passo a passo vis??vel',
    'Long form input dialog':
        'Forma longa da caixa de di??logo dos par??metros',
    'Plain prototype labels':
        'Texto dos prot??tipos simples',
    'uncheck to always show (+) symbols\nin block prototype labels':
        'Desassinalar para mostrar sempre os s??mbolos (+)\nno texto dos prot??tipos dos blocos',
    'check to hide (+) symbols\nin block prototype labels':
        'Assinalar para esconder os s??mbolos (+)\nno texto dos prot??tipos dos blocos',
    'check to always show slot\ntypes in the input dialog':
        'Assinalar para mostrar sempre\no tipo das ranhuras na caixa\nde di??logo dos par??metros.',
    'uncheck to use the input\ndialog in short form':
        'Desassinalar para usar a forma curta\nda caixa de di??logo dos par??metros.',
    'Virtual keyboard':
        'Teclado virtual',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'Desassinalar para desactivar o\nsuporte do teclado virtual\npara dispositivos '
            + 'm??veis.',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'Assinalar para activar o\nsuporte do teclado virtual\npara dispositivos '
            + 'm??veis.',
    'Input sliders':
        'Deslizadores nas ranhuras',
    'uncheck to disable\ninput sliders for\nentry fields':
        'Desassinalar para desactivar\ndeslizadores nas ranhuras dos blocos.',
    'check to enable\ninput sliders for\nentry fields':
        'Assinalar para activar deslizadores\nnas ranhuras dos blocos.',
    'Retina display support':
        'Suporte para o ecr?? retina',
    'uncheck for lower resolution,\nsaves computing resources':
        'Desassinalar para menor resolu????o;\npoupa recursos computacionais.',
    'check for higher resolution,\nuses more computing resources':
        'Assinalar para maior resolu????o;\ngasta mais recursos computacionais.',
    'Codification support':
        'Suportar produ????o de c??digo',
    'Clicking sound':
        'Som de cliques',
    'uncheck to turn\nblock clicking\nsound off':
        'Desassinalar para desactivar o som\nproduzido ao clicar nos blocos.',
    'check to turn\nblock clicking\nsound on':
        'Assinalar para activar o som\nproduzido ao clicar nos blocos.',
    'Animations':
        'Anima????es',
    'uncheck to disable\nIDE animations':
        'Desassinalar para desactivar\nas anima????es do AID',
    'Turbo mode':
        'Modo turbo',
    'check to prioritize\nscript execution':
        'Assinalar para dar prioridade\n?? execu????o de gui??es.',
    'uncheck to run scripts\nat normal speed':
        'Desassinalar para executar os gui??es\n?? velocidade normal.',
    'check to enable\nIDE animations':
        'Assinalar para activar\nas anima????es do AID',
    'Flat design':
        'Design plano',
    'check for alternative\nGUI design':
        'Assinalar para um design alternativo\nda interface gr??fica com o utilizador.',
    'uncheck for default\nGUI design':
        'Desassinalar para o design por omiss??o\nda interface gr??fica com o utilizador.',
    'Nested auto-wrapping':
        'Quebras de linha aninhadas',
    'Keyboard Editing':
        'Edi????o usando o teclado',
    'Table support':
        'Suporte de tabelas',
    'Table lines':
        'Tabelas com linhas',
    'Visible stepping':
        'Tra??ado passo a passo vis??vel',
    'Thread safe scripts':
        'Gui??es seguros face a threads',
    'uncheck to allow\nscript reentrance':
        'Desassinar para permitir\nreentr??ncia nos gui??es.',
    'check to disallow\nscript reentrance':
        'Assinar para n??o permitir\nreentr??ncia nos gui??es.',
    'Prefer smooth animations':
        'Preferir anima????es suaves',
    'uncheck for greater speed\nat variable frame rates':
        'Desassinalar para aumentar a velocidade\npermitindo ritmos vari??veis das tramas.',
    'check for smooth, predictable\nanimations across computers':
        'Assinalar para obter anima????es mais suaves\ne previs??veis de computador para computador.',
    'Flat line ends':
        'Extremos das linhas planos',
    'check for flat ends of lines':
        'Assinalar para que os extremos das linhas\ndesenhadas pela caneta sejam planos.',
    'uncheck for round ends of lines':
        'Desassinalar para que os extremos das linhas\ndesenhadas pela caneta sejam redondos.',
    'Ternary Boolean slots':
        'Ranhuras booleanas tern??rias',
    'Inheritance support':
        'Suporte para heran??a',
    'Hyper blocks support':
        'Suporte para hiperblocos',
    'uncheck to disable\nusing operators on lists and tables':
         'Desassinalar para desactivar a utiliza????o\nde operadores em listas e tabelas.',
    'check to enable\nusing operators on lists and tables':
         'Assinalar para activar a utiliza????o\nde operadores em listas e tabelas.',
    'Log pen vectors':
        'Registar vectores da caneta',
    'uncheck to turn off\nlogging pen vectors':
        'Desassinalar para desactivar\no registo de vectores da caneta',
    'check to turn on\nlogging pen vectors':
        'Assinalar para activar\no registo de vectores da caneta',


    // entradas
    'with inputs':
        'com argumentos',
    'input names:':
        'com par??metros',
    'Input Names:':
        'Par??metros:',
    'input list:':
        'os itens de',

    // menus de contexto:
    'help':
        'ajuda',

    // palette:
    'find blocks':
        'procurar blocos',
    'hide primitives':
        'esconder blocos primitivos',
    'show primitives':
        'mostrar blocos primitivos',

    // blocos:
    'help...':
        'ajuda???',
    'relabel...':
        'mudar para outro bloco???',
    'compile':
        'compilar',
    'uncompile':
        'descompilar',
    'duplicate':
        'duplicar',
    'make a copy\nand pick it up':
        'Fazer uma c??pia do\nbloco e agarr??-la.',
    'only duplicate this block':
        'Duplicar apenas este bloco.',
    'delete':
        'remover',
    'script pic...':
        'fotografia do gui??o???',
    'save a picture\nof this script':
        'guardar uma fotografia\ndeste gui??o',
    'result pic...':
        'fotografia do resultado???',
    'save a picture of both\nthis script and its result':
        'Guardar uma fotografia deste\ngui??o e do seu resultado.',
    'ringify':
        'adicionar anel',
    'unringify':
        'remover anel',
    'transient':
        'transiente',
    'uncheck to save contents\nin the project':
        'Desassinalar para guardar\no conte??do no projecto',
    'check to prevent contents\nfrom being saved':
        'Assinalar para n??o guardar\no conte??do no projecto',
    'new line':
        'nova linha',

    // blocos personalizados:
    'delete block definition...':
        'remover defini????o do bloco???',
    'duplicate block definition...':
        'duplicar defini????o do bloco???',
    'edit...':
        'editar???',

    // actores:
    'edit':
        'editar',
    'clone':
        'clonar',
    'move':
        'mover',
    'pivot':
        'editar centro de rota????o',
    'edit the costume\'s\nrotation center':
        'Drehpunkt des Kost??ms\nanzeigen und verschieben',
    'rotate':
        'rodar',
    'stick to':
        'prender a',
    'detach from':
        'soltar de',
    'detach all parts':
        'soltar todas as partes',
    'export...':
        'exportar???',
    'parent...':
        'progenitor???',
    'current parent':
        'progenitor actual',
    'release':
        'tornar clone tempor??rio',
    'make temporary and\nhide in the sprite corral':
        'tornar tempor??rio e\nesconder da lista de actores',

    // palco:
    'show all':
        'mostrar todos os actores',
    'pic...':
        'fotografia???',
    'open a new window\nwith a picture of the stage':
        'Abrir uma nova janela com\numa fotografia do palco.',
    'svg...':
        'exportar SVG???',
    'export pen trails\nline segments as SVG':
        'exportar os tra??os da\ncaneta no formato SVG',
    'there are currently no\nvectorizable pen trail segments':
        'de momento n??o h?? tra??os\nda caneta vectoriz??veis',
    'turn all pen trails and stamps\ninto a new background for the stage':
        'Transforma todos os tra??os da caneta e\ncarimbagens num novo cen??rio do palco.',
    'turn all pen trails and stamps\ninto a new costume for the\ncurrently selected sprite':
        'Transforma todos os tra??os da caneta e carimbagens num\nnovo traje do actor seleccionado neste momento.',

    // ??rea de gui??es:
    'clean up':
        'arrumar',
    'arrange scripts\nvertically':
        'Organizar os gui??es\nverticalmente.',
    'add comment':
        'adicionar coment??rio',
    'undrop':
        'desfazer ??ltima largada',
    'undo the last\nblock drop\nin this pane':
        'Desfazer a ??ltima largada de um bloco\nneste separador.',
    'redrop':
        'refazer ??ltima largada',
    'use the keyboard\nto enter blocks':
        'usar o teclado\npara introduzir blocos',
    'scripts pic...':
        'fotografia dos gui??es???',
    'open a new window\nwith a picture of all scripts':
        'Abrir uma nova janela com\numa fotografia de todos os gui??es.',
    'make a block...':
        'criar um bloco???',

    // trajes:
    'rename':
        'alterar o nome',
    'export':
        'exportar',
    'rename costume':
        'Qual o novo nome do traje?',

    // sons
    'Play sound':
        'Tocar som.',
    'Stop sound':
        'Parar som.',
    'Stop':
        'Parar',
    'Play':
        'Tocar',
    'rename sound':
        'Qual o novo nome do som?',

    // listas e tabelas
    'list view...':
        'vista de lista???',
    'table view...':
        'vista de tabela???',
    'Table view':
        'Vista de tabela',
    'open in dialog...':
        'abrir em caixa de di??logo???',
    'blockify':
        'como bloco',
    'reset columns':
        'reiniciar colunas',
    'items':
        'itens',

    // caixas de di??logo
    // bot??es
    'OK':
        'OK',
    'Ok':
        'OK',
    'Cancel':
        'Cancelar',
    'Yes':
        'Sim',
    'No':
        'N??o',

    // ajuda
    'Help':
        'Ajuda',

    // amplia????o de blocos
    'Zoom blocks':
        'Amplia????o de blocos',
    'build':
        'cria',
    'your own':
        'os teus pr??prios',
    'blocks':
        'blocos',
    'normal (1x)':
        'normal (1x)',
    'demo (1.2x)':
        'demonstra????o (1.2x)',
    'presentation (1.4x)':
        'apresenta????o (1.4x)',
    'big (2x)':
        'grande (2x)',
    'huge (4x)':
        'enorme (4x)',
    'giant (8x)':
        'gigante (8x)',
    'monstrous (10x)':
        'monstruosa (10x)',

    // desvanecimento de blocos
    'Fade blocks':
        'Desvanecimento de blocos',
    'block-solid (0)':
        'normal (0)',
    'medium (50)':
        'm??dio (50)',
    'light (70)':
        'leve (70)',
    'cintilante (80)':
        'schimmernd (80)',
    'elegant (90)':
        'elegante (90)',
    'subtle (95)':
        'subtil (95)',
    'text-only (100)':
        'apenas texto (100)',

    // Gestor de Projectos
     'Untitled':
        'Sem t??tulo',
    'Open Project':
        'Abrir Projecto',
    'Open':
        'Abrir',
    '(empty)':
        '(nada)',
    'Saved!':
        'Guardado!',
    'Delete Project':
        'Remover Projecto',
    'Are you sure you want to delete':
        'Quer mesmo remover',
    'rename...':
        'alterar o nome???',
    'Examples':
        'Exemplos',
    'Share':
        'Partilhar',
    'Unshare':
        'Deixar de Partilhar',
    'Publish':
        'Publicar',
    'Unpublish':
        'Deixar de Publicar',
    'Updating\nproject list...':
        'Actualizando a\nlista de projectos???',
    'Recover':
        'Recuperar',
    'Today':
        'Hoje',
    'Yesterday':
        'Ontem',

    // editor de trajes
    'Costume Editor':
        'Editor de Trajes',
    'Paint Editor':
        'Editor de Pintura',
    'click or drag crosshairs to move the rotation center':
        'Clique ou arraste a mira para alterar o centro de rota????o.',
    'undo':
        'desfazer',
    'Vector':
        'Vector',
    'Paintbrush tool\n(free draw)':
        'Pincel\n(desenho livre)',
    'Stroked Rectangle\n(shift: square)':
        'Rect??ngulo\n(shift: quadrado)',
    'Stroked Ellipse\n(shift: circle)':
        'Elipse\n(shift: circunfer??ncia)',
    'Eraser tool':
        'Borracha',
    'Set the rotation center':
        'Estabelecer centro de rota????o',
    'Line tool\n(shift: vertical/horizontal)':
        'Segmento de recta\n(shift: vertical/horizontal)',
    'Filled Rectangle\n(shift: square)':
        'Rect??ngulo preenchido\n(shift: quadrado)',
    'Filled Ellipse\n(shift: circle)':
        'Elipse preenchida\n(shift: c??rculo)',
    'Fill a region':
        'Balde de tinta',
    'Pipette tool\n(pick a color anywhere)':
        'Pipeta\n(recolher uma cor em qualquer lado)',
    'Brush size':
        'Espessura do pincel',
    'Constrain proportions of shapes?\n(you can also hold shift)':
        'Preservar propor????es das formas?\n(tamb??m pode pressionar shift)',
    'grow':
        'aumentar',
    'shrink':
        'reduzir',
    'flip ???':
        'inverter ???',
    'flip ???':
        'inverter ???',

    'Vector Paint Editor':
        'Editor de Pintura Vectorial',
    'Rectangle\n(shift: square)':
        'Rect??ngulo\n(shift: quadrado)',
    'Ellipse\n(shift: circle)':
        'Elipse\n(shift: c??rculo)',
    'Selection tool':
        'Selec????o',
    'Line tool\n(shift: constrain to 45??)':
        'Linha\n(shift: restringe a 45??)',
    'Closed brush\n(free draw)':
        'Pincel fechado\n(desenho livre)',
    'Paint a shape\n(shift: edge color)':
        'Pintar uma forma\n(shift: cor de aresta)',
    'Pipette tool\n(pick a color from anywhere\nshift: fill color)':
        'Pipeta\n(recolher uma cor de qualquer lado\nshift: cor de preenchimento)',
    'Edge color\n(left click)':
        'Cor de aresta\n(clique esquerdo)',
    'Fill color\n(right click)':
        'Cor de preenchimento\n(clique direito)',
   'Top':
       'Topo',
   'Bottom':
       'Base',
   'Up':
       'Cima',
   'Down':
       'Baixo',


    // notas de projecto
    'Project Notes':
        'Notas do Projecto',

    // novo projecto
    'New Project':
        'Novo Projecto',
    'Replace the current project with a new one?':
        'Substituir este projecto por um novo projecto?',

    // guardar projecto
    'Save Project As...':
        'Guardar Projecto Como???',
    'Save Project':
        'Guardar Projecto',

    // exportar blocos
    'Export blocks':
        'Exportar blocos',
    'Import blocks':
        'Importar blocos',
    'this project doesn\'t have any\ncustom global blocks yet':
        'Este projecto ainda n??o tem\nnenhum bloco personalizado global.',
    'select':
        'seleccionar',
    'none':
        'nenhum',

    // caixa de di??logo de vari??veis
    'for all sprites':
        'para todos os objectos',
    'for this sprite only':
        'apenas para este objecto',

    // refactoriza????o de vari??veis
    'rename only\nthis reporter':
        'alterar o nome\napenas neste rep??rter',
    'rename all...':
        'alterar o nome em todo o lado???',
    'rename all blocks that\naccess this variable':
        'alterar todos os blocos que\nusam esta vari??vel',


    // caixa de di??logo de blocos
    'Change block':
        'Alterar tipo de bloco',
    'Command':
        'Comando',
    'Reporter':
        'Rep??rter',
    'Predicate':
        'Predicado',

    // editor de blocos
    'Block Editor':
        'Editor de Blocos',
    'Method Editor':
        'Editor de M??todos',
    'Apply':
        'Aplicar',

    // caixa de di??logo de remo????o de bloco
    'Delete Custom Block':
        'Remover Bloco Personalizado',
    'block deletion dialog text':
        'Quer mesmo remover este bloco e '
            + 'todas as suas utiliza????es?',

    // caixa de di??logo de par??metros
    'Create input name':
        'Criar par??metro',
    'Edit input name':
        'Editar par??metro',
    'Edit label fragment':
        'Editar etiqueta',
    'Title text':
        'Etiqueta',
    'Input name':
        'Par??metro',
    'Delete':
        'Remover',
    'Object':
        'Objecto',
    'Number':
        'N??mero',
    'Text':
        'Texto',
    'List':
        'Lista',
    'Any type':
        'Qualquer tipo',
    'Boolean (T/F)':
        'Booleano (V/F)',
    'Command\n(inline)':
        'Comando\n(em linha)',
    'Command\n(C-shape)':
        'Comando\n(em forquilha)',
    'Any\n(unevaluated)':
        'Rep??rter\n(forma especial)',
    'Boolean\n(unevaluated)':
        'Predicado\n(forma especial)',
    'Single input.':
        'Par??metro ??nico.',
    'Default Value:':
        'Valor em caso de omiss??o do argumento:',
    'Multiple inputs (value is list of inputs)':
        'M??ltiplos argumentos (o valor do par??metro ?? a lista dos argumentos).',
    'Upvar - make internal variable visible to caller':
        'Tornar o par??metro vis??vel ao invocador.',

    // Acerca do Snap
    'About Snap':
        'Sobre o Snap!',
    'Back...':
        'Para tr??s???',
    'License...':
        'Licen??a???',
    'Modules...':
        'M??dulos???',
    'Credits...':
        'Cr??ditos???',
    'Translators...':
        'Tradutores???',
    'License':
        'Licen??a',
    'current module versions:':
        'vers??es actuais dos m??dulos',
    'Contributors':
        'Contribuidores',
    'Translations':
        'Tradu????es',

    // monitores de vari??veis
    'normal':
        'normal',
    'large':
        'grande',
    'slider':
        'potenci??metro',
    'slider min...':
        'm??nimo do potenci??metro???',
    'slider max...':
        'm??ximo do potenci??metro???',
    'import...':
        'importar???',
    'raw data...':
        'dados em bruto???',
    'import without attempting to\nparse or format data':
        'Importar sem tentar analisar ou formatar os dados',
    'Slider minimum value':
        'Valor m??nimo do potenci??metro',
    'Slider maximum value':
        'Valor m??ximo do potenci??metro',

    // monitores de listas
    'length: ':
        'comprimento: ',

    // coment??rios
    'add comment here...':
        'colocar aqui um coment??rio???',
    'comment pic...':
        'fotografia do coment??rio???',
    'open a new window\nwith a picture of this comment':
        'Abrir uma nova janela com\numa fotografia deste coment??rio.',

    // drop downs
    // direc????es
    '(90) right':
        '90?? (direita)',
    '(-90) left':
        '-90?? (esquerda)',
    '(0) up':
        '0?? (cima)',
    '(180) down':
        '180?? (baixo)',
    'random':
        'um valor ao acaso',
    'random position':
        'um ponto ao acaso',

    // detec????o de colis??es
    'mouse-pointer':
        'o ponteiro do rato',
    'edge':
        'a borda',
    'pen trails':
        'os tra??os da caneta',
    'center':
        'o centro',

    // trajes
    'Turtle':
        'Tartaruga',
    'Empty':
        'Vazio',
    'Paint a new costume':
        'Pintar um novo traje.',
    'Import a new costume from your webcam':
        'Importar um novo traje da sua c??mara.',
    'Please make sure your web browser is up to date\nand your camera is properly configured. \n\nSome browsers also require you to access Snap!\nthrough HTTPS to use the camera.\n\nPlase replace the "http://" part of the address\nin your browser by "https://" and try again.':
        'Por favor assegure-se de que o seu navegador est?? actualizado\ne de que a sua c??mara est?? correctamente configurada.\n\nAlguns navegadores tamb??m exigem que aceda ao Snap!\natrav??s de HTTPS para usar a c??mara.\n\nPor favor substitua a parte "http://" do endere??o\nno seu navegador por "https:// e tente de novo."',
    'Camera':
        'C??mara',

    // sons
    'Record a new sound':
        'Gravar um novo som.',


    // efeitos gr??ficos, cor da caneta
    'color':
        'a cor',
    'hue':
        'o matiz',
    'fisheye':
        'olho-de-peixe',
    'whirl':
        'remoinho',
    'pixelate':
        'pixeliza????o',
    'mosaic':
        'mosaico',
    'saturation':
        'a satura????o',
    'brightness':
        'o brilho',
    'transparency':
        'a transpar??ncia',
    'ghost':
        'fantasma',
    'negative':
        'negativo',
    'comic':
        'ondeado',
    'confetti':
        'confetes',

    // teclas
    'space':
        'espa??o',
    'up arrow':
        'seta para cima',
    'down arrow':
        'seta para baixo',
    'right arrow':
        'seta para a direita',
    'left arrow':
        'seta para a esquerda',
    'any key':
        'qualquer',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    // mensagens
    'new...':
        'Nova???',
    '__shout__go__':
        'bandeira verde clicada',

    // fun????es matem??ticas
    'abs':
        'o valor absoluto',
    'ceiling':
        'o arredondamento para cima',
    'floor':
        'o arredondamento para baixo',
    'sqrt':
        'a raiz quadrada',
    'sin':
        'o seno',
    'cos':
        'o cosseno',
    'tan':
        'a tangente',
    'asin':
        'o arco-seno',
    'acos':
        'o arco-cosseno',
    'atan':
        'o arco-tangente',
    'ln':
        'o logaritmo natural',
    'e^':
        'a exponencial',

    // Introdu????o pelo teclado de express??es booleanas
    'not':
        '?? falso que',

    // delimitadores
    'letter':
        'letra',
    'word':
        'palavra',
    'whitespace':
        'espa??os em branco',
    'line':
        'linha',
    'tab':
        'tabuladores',
    'cr':
        'retornos',

    // tipos de dados
    'number':
        'n??mero',
    'text':
        'texto',
    'Boolean':
        'booleano',
    'list':
        'lista',
    'command':
        'comando',
    'reporter':
        'rep??rter',
    'predicate':
        'predicado',
    'sprite':
        'actor',

    // ??ndices de listas
    'last':
        'o ??ltimo item',
    'any':
        'um item ao acaso',

    // attributos
    'my':
        'pr??prios',
    'neighbors':
        'os vizinhos',
    'self':
        'tu pr??prio',
    'other sprites':
        'os outros actores',
    'parts':
        'as partes',
    'anchor':
        'a ??ncora',
    'parent':
        'o progenitor',
    'temporary?':
        '??s tempor??rio',
    'children':
        'os descendentes',
    'clones':
        'os clones',
    'other clones':
        'os outros clones',
    'dangling?':
        'est??s pendurado',
    'draggable?':
        '??s arrast??vel',
    'rotation style':
        'estilo de rota????o',
    'rotation x':
        'a coordenada x de rota????o',
    'rotation y':
        'a coordenada y de rota????o',
    'center x':
        'a coordenada x do centro',
    'center y':
        'a coordenada y do centro',
    'name':
        'o nome',
    'costume':
        'o traje',
    'stage':
        'o palco',
    'costumes':
        'os trajes',
    'sounds':
        'os sons',
    'scripts':
        'os gui??es',
    'width':
        'a largura',
    'height':
        'a altura',
    'left':
        'a coordenada x da esquerda',
    'right':
        'a coordenada x da direita',
    'top':
        'a coordenada y da topo',
    'bottom':
        'a coordenada y da base',

    // heran??a
    'inherited':
        'herdado',
    'check to inherit\nfrom':
        'assinalar para\nherdar de',
    'uncheck to\ndisinherit':
        'desassinalar para\nn??o herdar',

    // em falta no ficheiro lang-de.js
    'log':
        'o logaritmo',
    'neg':
        'o sim??trico',
    'url %s':
        'o recurso http:// %s',
    'delete %shd':
        'remove %shd',
    'First-Class Sprites':
        'Actores de primeira classe',
    'uncheck to disable support\nfor first-class sprites':
        'Desassinalar para desactivar o suporte\nde actores de primeira classe.',
    'check to enable support\n for first-class sprite':
        'Assinalar para activar o suporte\nde actores de primeira classe.',
    'Live coding support':
        'Suporte de programa????o ao vivo',
    'EXPERIMENTAL! check to enable\n live custom control structures':
        'EXPERIMENTAL! Assinalar para activar estruturas\nde controlo personalizadas ao vivo.',
    'EXPERIMENTAL! uncheck to disable live\ncustom control structures':
        'EXPERIMENTAL! Desassinalar para desactivar estruturas\nde controlo personalizadas ao vivo.',
    'Persist linked sublist IDs':
        'Persistir ID de sublistas ligadas',
    'check to enable\nsaving linked sublist identities':
        'Assinalar para activar o\narmazenamento das identidades de sublistas ligadas.',
    'uncheck to disable\nsaving linked sublist identities':
        'Desassinalar para desactivar o\narmazenamento das identidades de sublistas ligadas.',
    'Export all scripts as pic...':
        'Exportar todos os gui??es como fotografia???',
    'show a picture of all scripts\nand block definitions':
        'Mostra uma imagem com todos\nos gui??es e defini????es de blocos',
    'find blocks...':
        'procurar blocos???',
    'costume name':
        'o nome do traje',
    'Snap!Cloud':
        'Snap!Nuvem',
    'Cloud':
        'Nuvem',
    'could not connect to:':
        'N??o foi poss??vel ligar a:',
    'Service:':
        'Servi??o:',
    'login':
        'autentica????o',
    'ERROR: INVALID PASSWORD':
        'ERRO: PALAVRA-PASSE INV??LIDA',
    'Browser':
        'Navegador',
    'Sign up':
        'Registar nova conta',
    'Signup':
        'Registo de nova conta',
    'Sign in':
        'Entrar',
    'Change Password':
        'Alterar palavra-passe',
    'Account created.':
        'Conta criada.',
    'An e-mail with your password\nhas been sent to the address provided':
        'Foi enviada uma mensagem para\no endere??o disponibilizado\ncontendo a sua palavra-passe.',
    'now connected.':
        'entrou.',
    'disconnected.':
        'saiu.',
    'Reset password':
        'Recuperar palavra-passe',
    'User name:':
        'Nome de utilizador:',
    'Password:':
        'Palavra-passe:',
    'Old password:':
        'Palavra-passe actual:',
    'New password:':
        'Nova palavra-passe:',
    'Repeat new password:':
        'Repita a nova palavra-passe:',
    'Birth date:':
        'Data de nascimento:',
    'January':
        'Janeiro',
    'February':
        'Fevereiro',
    'March':
        'Mar??o',
    'April':
        'Abril',
    'May':
        'Maio',
    'June':
        'Junho',
    'July':
        'Julho',
    'August':
        'Agosto',
    'September':
        'Setembro',
    'October':
        'Outubro',
    'November':
        'Novembro',
    'December':
        'Dezembro',
    'year:':
        'ano:',
    ' or before':
        ' ou antes',
    'E-mail address:':
        'Endere??o de correio electr??nico:',
    'E-mail address of parent or guardian:':
        'Endere??o de encarregado de educa????o:',
    'Terms of Service...':
        'Termos do Servi??o???',
    'Privacy...':
        'Privacidade???',
    'I have read and agree\nto the Terms of Service':
        'Li e declaro concordar\ncom os Termos do Servi??o',
    'stay signed in on this computer\nuntil logging out':
        'manter-me autenticado neste\ncomputador at?? que saia',
    'please fill out\nthis field':
        'Por favor preencha\neste campo.',
    'User name must be four\ncharacters or longer':
        'O nome de utilizador tem de ter\npelo menos quatro caracteres.',
    'please provide a valid\nemail address':
        'Por favor indique um endere??o\nde correio electr??nico v??lido.',
    'password must be six\ncharacters or longer':
        'A palavra-passe tem de ter\npelo menos seis caracteres.',
    'passwords do\nnot match':
        'As palavras-passe\nn??o correspondem.',
    'please agree to\nthe TOS':
        'Por favor concorde com\nos Termos do Servi??o.',
    'You are not logged in':
        'Ainda n??o se autenticou',
    'Opening project...':
        'Abrindo o projecto???',
    'Fetching project\nfrom the cloud...':
        'Obtendo o projecto\nda nuvem???',
    'Saving project\nto the cloud...':
        'Guardando o projecto\nna nuvem???',
    'Sprite Nesting':
        'Actores compostos',
    'uncheck to disable\nsprite composition':
        'Desassinalar para desactivar\na composi????o de actores.',
    'check for block\nto text mapping features':
        'Assinalar para funcionalidades\nde mapeamento entre blocos e texto.',
    'saved.':
        'guardado.',
    'Rasterize SVGs':
        'Transformar SVG em mapas de bits',
    'check to rasterize\nSVGs on import':
        'Assinalar para transformar os arquivos SVG\nem mapas de bits durante a importa????o.',
    'turn pen trails into new costume...':
        'transformar tra??os da caneta em novo traje???',
    'pen':
        'caneta',
    'tip':
        'ponta',
    'middle':
        'meio',
    'last changed':
        'alterado pela ??ltima vez em',
    'Are you sure you want to publish':
        'Quer mesmo publicar',
    'Are you sure you want to unpublish':
        'Quer mesmo deixar de publicar',
    'Share Project':
        'Partilhar Projecto',
    'Unshare Project':
        'Deixar de Partilhar Projecto',
    'sharing\nproject...':
        'partilhando\nprojecto???',
    'unsharing\nproject...':
        'deixando de partilhar\nprojecto???',
    'shared.':
        'partilhado.',
    'unshared.':
        'deixado de partilhar.',
    'password has been changed.':
        'a sua palavra-passe foi alterada.',
    'SVG costumes are\nnot yet fully supported\nin every browser':
        'trajes SVG ainda n??o\ns??o totalmente suportados\nem todos os navegadores',
    'script pic with result...':
        'fotografia do gui??o incluindo resultado???',
    'open a new window\nwith a picture of both\nthis script and its result':
        'Abrir uma nova janela com\numa fotografia tanto deste gui??o\ncomo do seu resultado.',
    'Import sound':
        'Importar som',
    'Import':
        'Importar',
    'edit rotation point only...':
        'editar apenas ponto de rota????o???',
    'Export Project As...':
        'Exportar Projecto Como???',
    'a variable of name \'':
        'n??o existe uma vari??vel ??',
    '\'\ndoes not exist in this context':
        '??\nneste contexto',
    '(temporary)':
        '(tempor??ria)',
    'expecting':
        'esperavam-se',
    'input(s), but getting':
        'argumento(s), mas foram passados',
    'Dragging threshold...':
        'Limiar de arrastamento???',
    'Cache Inputs':
        'Memorizar entradas',
    'uncheck to stop caching\ninputs (for debugging the evaluator)':
        'Desassinalar para parar de memorizar\nentradas (para depurar o avaliador).',
    'check to cache inputs\nboosts recursion':
        'Assinalar para memorizar as entradas\n(acelera recursividade).',
    'Project URLs':
        'URL de projecto',
    'check to enable\nproject data in URLs':
        'Assinalar para activar dados\ndo projecto nos URL.',
    'uncheck to disable\nproject data in URLs':
        'Desassinalar para desactivar\ndados do projecto nos URL.',
    'export project media only...':
        'Exportar apenas os m??dia do projecto???',
    'export project without media...':
        'Exportar projecto sem os m??dia???',
    'export project as cloud data...':
        'Exportar projecto como dados da nuvem???',
    'open shared project from cloud...':
        'Abrir projecto partilhado a partir da nuvem???',
    'url...':
        'URL???',
    'Export summary with drop-shadows...':
        'Exportar resumo com sombreamento???',
    'open a new browser browser window\nwith a summary of this project\nwith drop-shadows on all pictures.\nnot supported by all browsers':
        'Abrir uma nova janela no navegador\ncontendo um resumo deste projecto\n'
        + 'com sombreamento em todas as imagens\n(n??o suportado em todos os navegadores)',
    'specify the distance the hand has to move\nbefore it picks up an object':
        'Especificar a dist??ncia que m??o tem de se\nmover antes de agarrar algum objecto',
    'block variables...':
        'adicionar vari??veis de bloco???',
    'remove block variables...':
        'remover vari??veis de bloco???',
    'block variables':
        'com vari??veis de bloco',
    'experimental -\nunder construction':
        'Experimental ??? em constru????o',
    'open in another dialog...':
        'abrir noutra caixa de di??logo???',
    'check for multi-column\nlist view support':
        'Assinalar para suporte de\nvistas multicoluna de listas.',
    'uncheck to disable\nmulti-column list views':
        'Desassinalar para desactivar\nvistas multicoluna de listas.',
    'check for higher contrast\ntable views':
        'Assinalar para vistas de\ntabela com maior contraste.',
    'uncheck for less contrast\nmulti-column list views':
        'Desassinalar para vistas multicoluna\nde listas com menor contraste.',
    '(in a new window)':
        '(numa nova janela)',
    'save project data as XML\nto your downloads folder':
        'Guardar dados do projecto como XML\nna sua pasta de descarregamentos.',

    // S??mbolos em blocos personalizados:
    'square':
        'quadrado',
    'pointRight':
        'tri??ngulo para a direita',
    'stepForward':
        'avan??ar um passo',
    'gears':
        'roda dentada',
    'file':
        'arquivo',
    'fullScreen':
        'ecr?? inteiro',
    'normalScreen':
        'ecr?? normal',
    'smallStage':
        'palco pequeno',
    'normalStage':
        'palco normal',
    'turtle':
        'tartaruga',
    'turtleOutline':
        'contorno de tartaruga',
    'pause':
        'pausa',
    'flag':
        'bandeira',
    'octagon':
        'oct??gono',
    'cloud':
        'nuvem',
    'cloudOutline':
        'contorno de nuvem',
    'cloudGradient':
        'nuvem com gradiente',
    'turnRight':
        'girar ?? direita',
    'turnLeft':
        'girar ?? esquerda',
    'storage':
        'armazenagem',
    'poster':
        'p??ster',
    'flash':
        'rel??mpago',
    'brush':
        'pincel',
    'rectangle':
        'rect??ngulo',
    'rectangleSolid':
        'rect??ngulo preenchido',
    'circle':
        'circunfer??ncia',
    'circleSolid':
        'c??rculo',
    'ellipse':
        'elipse',
    'cross':
        'cruz',
    'crosshairs':
        'mira',
    'paintbucket':
        'balde de tinta',
    'eraser':
        'borracha',
    'pipette':
        'pipeta',
    'speechBubble':
        'bal??o de fala',
    'speechBubbleOutline':
        'contorno de bal??o de fala',
    'loop':
        'ciclo',
    'turnBack':
        'voltar para tr??s',
    'turnForward':
        'voltar para a frente',
    'arrowUp':
        'seta para cima',
    'arrowUpOutline':
        'contorno de seta para cima',
    'arrowLeft':
        'seta para a esquerda',
    'arrowLeftOutline':
        'contorno de seta para a esquerda',
    'arrowDown':
        'seta para baixo',
    'arrowDownOutline':
        'contorno de seta para baixo',
    'arrowRight':
        'seta para a direita',
    'arrowRightOutline':
        'contorno de seta para a direita',
    'robot':
        'rob??',
    'magnifyingGlass':
        'lupa',
    'magnifierOutline':
        'contorno de lupa',
    'selection':
        'selec????o',
    'polygon':
        'pol??gono',
    'closedBrush':
        'pincelada fechada',
    'notes':
        'nota',
    'camera':
        'c??mara',
    'location':
        'localiza????o',
    'footprints':
        'pegadas',
    'keyboard':
        'teclas',
    'keyboardFilled':
        'teclado',
    'globe':
        'globo',

    // produ????o de c??digo
    'map %cmdRing to %codeKind %code':
        'mapear %cmdRing no %codeKind %code',
    'map %mapValue to code %code':
        'mapear %mapValue no c??digo %code',
    'map %codeListPart of %codeListKind to code %code':
        'mapear %codeListPart de %codeListKind no c??digo %code',
    'code of %cmdRing':
        'o c??digo de %cmdRing',
    'String':
        'texto',
    'delimiter':
        'delimitador',
    'collection':
        'colec????o',
//    'variables':
//        'vari??veis',
    'parameters':
        'par??metros',
    'code':
        'c??digo',
    'recording':
        'Grava????o',
    'header':
        'cabe??alho',
    'header mapping...':
        'mapeamento para cabe??alho???',
    'code mapping...':
        'mapeamento para c??digo???',
    'Code mapping':
        'Mapeamento para c??digo',
    'Header mapping':
        'Mapeamento para cabe??alho',
    'Enter code that corresponds to the block\'s definition. Use the formal parameter\nnames as shown and <body> to reference the definition body\'s generated text code.':
        'Introduza o c??digo correspondente ?? defini????o do bloco. Use os nomes dos par??metros\n'
            + 'tal como mostrados e use <body> para referenciar o c??digo gerado da defini????o do corpo',
    'Enter code that corresponds to the block\'s definition. Choose your own\nformal parameter names (ignoring the ones shown).':
        'Introduza o c??digo correspondente ?? defini????o do bloco. Escolha os seus pr??prios\n'
            + 'nomes para os par??metros (ignorando os nomes mostrados).',
    'Enter code that corresponds to the block\'s operation (usually a single\nfunction invocation). Use <#n> to reference actual arguments as shown.':
        'Introduza o c??digo que corresponda ?? opera????o do bloco (normalmente uma simples\n'
            + 'invoca????o de rotina). Use <#n> para referenciar os argumentos tal como mostrado',
    'uncheck to disable\nkeyboard editing support':
        'Desassinalar para desactivar\na edi????o usando o teclado.',
    'check to enable\nkeyboard editing support':
        'Assinalar para activar\na edi????o usando o teclado.',
    'check to allow\nempty Boolean slots':
        'assinalar para permitir\nranhuras booleanas vazias',
    'uncheck to limit\nBoolean slots to true / false':
        'desassinalar para limitar\nas ranhuras booleanas aos valores verdadeiro / falso',
    'Camera support':
        'Suporte para c??mara',
    'check to enable\ncamera support':
        'assinalar para activar\no suporte para a c??mara',
    'uncheck to disable\ncamera support':
        'desassinalar para desactivar\no suporte para a c??mara',
    'check to enable auto-wrapping\ninside nested block stacks':
        'assinalar para activar as quebras de linha\nem pilhas de blocos aninhadas',
    'uncheck to confine auto-wrapping\nto top-level block stacks':
        'desassinalar para limitar as quebras de linha\n??s pilhas de blocos do n??vel de topo',
    'uncheck to disable\nsprite inheritance features':
        'Desassinalar para desactivar\nfuncionalidades de heran??a de actores.',
    'check for sprite\ninheritance features':
        'Assinalar para activar\nfuncionalidades de heran??a de actores.',
    'compile %repRing for %n args':
        'a compila????o de %repRing para %n argumentos',
    'Polygon':
        'Pol??gono',
    'cloud unavailable without a web server.':
        'Nuvem indispon??vel sem um servidor web.',
    'sound':
        'som',

    // Tradu????es de blocos personalizados:
    'translations...':
        'tradu????es???',
    'Custom Block Translations':
        'Tradu????es do Bloco Personalizado',
    'Enter one translation per line. use colon (":") as lang/spec delimiter\nand underscore ("_") as placeholder for an input, e.g.:\n\nen:say _ for _ secs':
        'Introduza uma tradu????o por linha.\nUtilize (:) para separar a l??ngua da especifica????o traduzida do bloco\ne sublinhado (_) nos locais dos par??metros, por exemplo:\n\n  pt:diz _ durante _ s',

    // Op????es de entradas de blocos personalizados:
    'options':
        'op????es',
    'Input Slot Options':
        'Op????es de Ranhura de Entrada',
    'Enter one option per line.\nOptionally use "=" as key/value delimiter and {} for submenus. e.g.\n   the answer=42':
        'Introduza uma op????o por linha.\nOpcionalmente, use "=" como separador entre chave e valor e {} para submenus. E.g.\n   a resposta=42',
    'read-only':
        'apenas leitura',
    '(none)':
        '(nenhum)',
    'messages':
        'as mensagens',
    'objects':
        'os objectos',
    'variables':
        'as vari??veis',
    'piano keyboard':
        'um teclado de piano',
    '360?? dial':
        'um mostrador de 360??',
    'special':
        'especial',
    'multi-line':
        'multilinha',

    // Libraries:
    'Traditional loop constructs (while, until, etc.) plus the Lisp "named let" (a generalization of FOR) plus functional iteration (repeated invocation of a function) and function composition.':
        'Comandos tradicionais para ciclos (enquanto, at?? que, etc.), o ??named let?? do Lisp (uma generaliza????o do ciclo PARA), itera????o funcional (invoca????o repetida de uma fun????o) e composi????o de fun????es.',
    'Some standard functions on lists (append, reverse, etc.)':        
        'Algumas fun????es padr??o sobre listas (acrescentar, inverter, etc.)',
    'Streams (lazy lists)':
        'Canais (listas pregui??osas)',
    'A variation on the list data type in which each list item aren\'t computed until it\'s needed, so you can construct million-item lists without really taking up all that time or memory, or even infinite-sized lists.  (A block that reports all the prime numbers is included as an example.)':
        'Uma varia????o do tipo de dados lista para o qual cada item da lista n??o ?? calculado sen??o quando ?? necess??rio, pelo que pode criar listas com milh??es de itens sem que isso demore demasiado tempo ou ocupe demasiada mem??ria, ou mesmo listas de comprimento infinito.  (?? inclu??do como exemplo um bloco que reporta todos os n??meros primos.)', 
    'Versions of +, x, AND, and OR that take more than two inputs.':
        'Vers??es de +, x, E, e OU que aceitam mais do que duas entradas.',
    'An extended version of the HTTP:// block that allows POST, PUT, and DELETE as well as GET requests, allows using the secure HTTPS protocol, and gives control over headers, etc.':
        'Uma vers??o estendida do bloco HTTP:// que permite realizar pedidos POST, PUT e DELETE, bem como GET, permite utilizar o protocolo seguro HTTPS e d?? controlo sobre os cabe??alhos, etc.',
    'One of the big ideas in Logo that they left out of Scratch is thinking of text as structured into words and sentences, rather than just a string of characters.  This library brings back that idea.':
        'Um das grandes ideias do Logo que ficou de fora no Scratch ?? pensar no texto como estruturado em palavras e frases, em vez de s?? como uma cadeia de caracteres. Esta biblioteca reintroduz esta ideia.',
    'Like "switch" in C-like languages or "cond" in Lisp.  Thanks to Nathan Dinsmore for inventing the idea of a separate block for each branch!':
        'Tal como o ??switch?? em linguagens como o C ou o ??cond?? no Lisp.  Obrigado ao Nathan Dinsmore por inventar a ideia de ter um bloco separado para cada ramo!',
    'Report hand positions from LEAP Motion controller (leapmotion.com).':
        'Reportar posi????es das m??os dadas pelo controlador LEAP Motion (leapmotion.com).',
    'Text Costumes':
        'Trajes de texto',
    'Generate costumes from letters or words of text.':
        'Gerar trajes a partir de letras ou palavras de texto.',
    'Set or report pen color as RGB (red, green, blue) or HSV (hue, saturation, value).':
        'Alterar ou reportar a cor da caneta nos formatos RGB (vermelho/??red??, verde/??green??, azul/??blue??) ou HSV (matiz/??hue??, satura????o/??saturation??, brilho/??value??).',
    'Run a script; if an error happens, instead of stopping the script with a red halo, run another script to handle the error. Also includes a block to cause an error with a message given as input. Also includes a block to create a script variable and give it a value.':
        'Execute um gui??o; se ocorrer um erro, em vez de parar o gui??o com um halo vermelho, execute outro gui??o para lidar com o erro. Inclui tamb??m um bloco que causa um erro com uma mensagem dada como entrada. Inclui ainda um bloco para criar uma vari??vel de gui??o inicializando-a imediatamente.',
    'In general, text inputs allow only a single line.  The MULTILINE block accepts multi-line text input and can be used in text input slots of other blocks.':
        'Em geral as entradas de texto permitem apenas uma ??nica linha.  O bloco MULTILINHA aceita texto multilinha na sua entrada e pode ser usado em ranhuras de entradas de texto de outros blocos.',
    'Eisenberg\'s Law: Anything that can be done from the GUI should be doable from the programming language, and vice versa.':
        'Lei de Eisenberg: O quer que se possa fazer atrav??s da interface com o utilizador deve ser poss??vel de fazer a partir da linguagem de programa????o e vice-versa.',
    'The full Scheme numeric tower.  "USE BIGNUMS <True>" to enable.':
        'A torre num??rica do Scheme completa. Usar ??usa n??meros grandes <verdadeiro>" para activar.',
    'to use instead of hue for better selection':
        'Para usar em vez da matiz de modo a permitir uma melhor selec????o.',
    'output text using speech synthesis.':
        'Falar texto usando s??ntese de voz.',
    'glide, grow and rotate using easing functions.':
        'Deslizar, aumentar e rodar usando fun????es de forma (de ??easing??).',
    'Pixels':
        'P??xeis',
    'manipulate costumes pixel-wise.':
        'Manipular trajes p??xel a p??xel.',
    'Audio Comp':
        'Computa????o ??udio',
    'analyze, manipulate and generate sound samples.':
        'Analisar, manipular e gerar amostras de som.',
    '"Bigger" Data':
        'Dados ??maiores??',
    '[EXPERIMENTAL] crunch large lists very fast':
        '[EXPERIMENTAL] Processar listas grandes de forma muito r??pida.',
    'Frequency Distribution Analysis':
        'An??lise da distribui????o de frequ??ncias',
    '[EXPERIMENTAL] analyze data for frequency distribution':
        '[EXPERIMENTAL] Analisar dados para obter a sua distribui????o de frequ??ncias.',
    'World Map':
        'Mapa do mundo',
    '[EXPERIMENTAL] add interactive maps to projects':
        '[EXPERIMENTAL] Adicionar mapas interactivos a projectos.',
    'Create and manage global/sprite/script variables in a script':
        'Criar e gerir vari??veis globais, de objecto e de gui??o a partir de um gui??o.',
    'Deal with JSON data':
        'Lidar com dados JSON',
    'Turn JSON strings into lists with the listify block, then retrieve data out of them by using the value at key block.':
        'Converter em listas texto com formato JSON usando o bloco ??a lista em?? e obter dados dessas listas usando o bloco ??o valor com chave em??.',
    'Parallelization':
        'Paraleliza????o',
    'Run several scripts in parallel and wait until all are done.':
        'Executar v??rios gui??es em paralelo e esperar que todos eles terminem.',
    'String processing':
        'Processamento de cadeias de caracteres',
    'Extract substrings of a string in various ways':
        'Extrair partes de cadeias de caracteres de formas variadas',

    // Biblioteca Anima????es:
    'ghost effect':
        'o efeito fantasma',
    'color effect':
        'o efeito cor',
    'saturation effect':
        'o efeito satura????o',
    'brightness effect':
        'o efeito brilho',
    'fisheye effect':
        'o efeito olho-de-peixe',
    'whirl effect':
        'o efeito remoinho',
    'pixelate effect':
        'o efeito pixeliza????o',
    'mosaic effect':
        'o efeito mosaico',
    'negative effect':
        'o efeito negativo',
    'linear':
        'linear',
    'quadratic':
        'quadr??tica',
    'quadratic-in':
        'quadr??tica ?? entrada',
    'quadratic-out':
        'quadr??tica ?? sa??da',
    'quadratic-in-out':
        'quadr??tica ?? entrada e ?? sa??da',
    'cubic':
        'c??bica',
    'cubic-in':
        'c??bica ?? entrada',
    'cubic-out':
        'c??bica ?? sa??da',
    'cubic-in-out':
        'c??bica ?? entrada e ?? sa??da',
    'quart':
        'qu??rtica',
    'quart-in':
        'qu??rtica ?? entrada',
    'quart-out':
        'qu??rtica ?? sa??da',
    'quart-in-out':
        'qu??rtica ?? entrada e ?? sa??da',
    'sinusoidal':
        'sinusoidal',
    'sine-in':
        'sinusoidal ?? entrada',
    'sine-out':
        'sinusoidal ?? sa??da',
    'sine-in-out':
        'sinusoidal ?? entrada e ?? sa??da',
    'elastic':
        'el??stica',

    // Biblioteca Eisenberg:
    'Project notes':
        'Notas do projecto',
    'Project name':
        'Nome do projecto',
    'User':
        'Utilizador',
    'Presentation mode':
        'Modo de apresenta????o',
    'Language':
        'L??ngua',
    'Stage scale':
        'Escala do palco',
    'Execute on slider change':
        'Executar quando o potenciometro varia',
    'Keyboard edition':
        'Edi????o com o teclado',
    'Visible palette':
        'Palete vis??vel',

    // Biblioteca Mapa do mundo:
    'OpenStreetMap':
        'OpenStreetMap',
    'Wikimedia':
        'Wikimedia',
    'Watercolor':
        'Aguarela',
    'Toner':
        'Tons',
    'Terrain':
        'Terreno',
    'Topographic':
        'Topogr??fico',
    'Satellite':
        'Sat??lite',
    'Streets':
        'Estradas',
    'Shading':
        'Sombreamento',
    'Mapbox (experimental)':
        'Mapbox (experimental)',

    // Biblioteca aritm??tica do Scheme:
    'number?':
        '?? n??mero, o valor',
    'complex?':
        '?? complexo, o valor',
    'real?':
        '?? real, o valor',
    'rational?':
        '?? racional, o valor',
    'integer?':
        '?? inteiro, o valor',
    'exact?':
        '?? exacto, o valor',
    'inexact?':
        '?? inexacto, o valor',
    'exact':
        'a vers??o exacta',
    'inexact':
        'a vers??o inexacta',
    'finite?':
        '?? finito, o valor',
    'infinite?':
        '?? infinito, o valor',
    'nan?':
        '?? NaN, o valor',
    'numerator':
        'o numerador',
    'denominator':
        'o denominador',
    'real-part':
        'a parte real',
    'imag-part':
        'a parte imagin??ria',
    'magnitude':
        'o m??dulo',
    'angle':
        'o argumento',

    'script pic':
        'fotografia de gui??o',

    'Enable command drops in all rings':
        'Activar encaixe de comandos em todos os an??is',
    'uncheck to disable\ndropping commands in reporter rings':
        'Desassinalar para desactivar\no encaixe de comandos em an??is de reporter',
    'check to enable\ndropping commands in all rings':
        'Assinalar para activar\no encaixe de comandos em an??is de reporter',
    'JIT compiler support':
        'Suportar compila????o JIT',
    'EXPERIMENTAL! uncheck to disable live\nsupport for compiling':
        'EXPERIMENTAL! Desassinalar para desactivar\no suporte da compila????o din??mica.',
    'EXPERIMENTAL! check to enable\nsupport for compiling':
        'EXPERIMENTAL! Assinalar para activar\no suporte da compila????o din??mica.',

    'download script':
        'descarregar gui??o',
};
