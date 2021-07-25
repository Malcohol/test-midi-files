var TEST = require('..');
var JZZ = require('jzz');
require('jzz-midi-smf')(JZZ);

var smf = new JZZ.MIDI.SMF(0, 96);
var trk = new JZZ.MIDI.SMF.MTrk();
smf.push(trk);
trk.smfSeqName('Track length test 0')
  .smfCopyright('https://jazz-soft.net')
  .smfText('No silence at end of track.\n')
  .smfText(' You must hear C5 and then the track ends!')
  .noteOn(0, 'C5', 127).tick(96).noteOff(0, 'C5')
  .smfText('Thank you!');
TEST.write(smf);
TEST.play(smf);
