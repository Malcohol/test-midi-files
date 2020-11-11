var fs = require('fs');
var path = require('path');
var JZZ = require('jzz');
require('jzz-midi-smf')(JZZ);

if (module.parent) {
  module.exports.play = function(smf) {
    play(smf, process.argv[2]);
  }
  module.exports.write = function(smf, name) {
    if (typeof name == 'undefined') {
      name = path.basename(process.argv[1]);
      name = name.split('.').slice(0, -1).join('.');
      name = path.join(__dirname, 'midi', name + '.mid');
    }
    console.log('Writing ' + name + ' ...');
    fs.writeFileSync(name, smf.dump(), 'binary');
  }
}
else {
  if (process.argv.length < 3) {
    usage(process.argv[0], process.argv[1]);
    process.exit(0);
  }
  else {
    try {
      var data = fs.readFileSync(process.argv[2], 'binary');
      var smf = new JZZ.MIDI.SMF(data);
    }
    catch(err) {
      console.error('Error:', err.message);
      process.exit(-1);
    }
    var warn = smf.validate();
    if (warn) console.log(warn);
    play(smf, process.argv[3]);
  }
}

function usage(node, self) {
  console.log('USAGE:')
  console.log('    node ' + self + ' <filename.mid> [<midi-out port> | print]');
  JZZ().or(function() {
    console.log('No ports available...');
  }).and(function() {
    var i;
    var outs = this.info().outputs;
    if (outs.length) {
      console.log('Available ports:');
      for (i = 0; i < outs.length; i++) console.log('    ' + outs[i].name);
    }
    else {
      console.log('No ports available...');
    }
  });
}

function print(msg) { console.log(msg.toString()); }
function log(msg) {
  if (msg.ff == 1) console.log(msg.dd);
  if (msg.ff == 2) console.log('(by ' + msg.dd + ')\n');
  if (msg.ff == 3) console.log('\n##### ' + msg.dd + ' #####\n');
}

function play(smf, out) {
  var player = smf.player();
  if (out == 'print') {
    player.connect(print);
    player.play();
    return;
  }
  JZZ().or(function() {
    console.error('Cannot start MIDI engine!');
    if (!out) {
      player.connect(print);
      player.play();
    }
  }).and(function() {
    this.openMidiOut(out).or(function() {
      if (!out) {
        player.connect(print);
        player.play();
      }
      else {
        console.error('Cannot open port', out);
      }
    }).and(function() {
      player.connect(this);
      player.connect(log);
      player.onEnd = function() { console.log('\ndone!'); };
      player.play();
    });
  });
}