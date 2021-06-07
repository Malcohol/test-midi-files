# test-midi-files
A framework for producing test MIDI files

See also:
- [**midi-test**](https://github.com/jazz-soft/midi-test),
- [**web-midi-test**](https://github.com/jazz-soft/web-midi-test),
- [**official MIDI specifications**](https://www.midi.org/specifications)

## Before use
Please run `npm install` to make sure all dependencies are up to date.

## Playing/viewing MIDI files
`node index.js <filename.mid> [<midi-out port> | print]`

e.g.:  
`node index.js midi/test-c-major-scale.mid`  
-- play MIDI file to the default MIDI-Out port.  
`node index.js midi/test-c-major-scale.mid "Microsoft GS Wavetable Synth"`  
-- play MIDI file to the specified MIDI-Out port.  
`node index.js midi/test-c-major-scale.mid print`  
-- print MIDI file contents.

## Playing MIDI files in browser
Open `index.html`

## Creating your own test
Copy `code/test-c-major-scale.js` or your favorite test in the `code` directory.  
Make changes using the API documented at https://jazz-soft.net/doc/JZZ/midifile.html to suit your test case.  
Run `node code/your-test-name.js`, it will create a MIDI file with the same name in the `midi` directory.

If you believe your test will be useful for others, please don't hesitate to check it into this repository.

## Test files
- [**test-c-major-scale.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-c-major-scale.mid)
- [**test-all-gm-percussion.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-all-gm-percussion.mid)
- [**test-all-gm-sounds.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-all-gm-sounds.mid)
- [**test-control-00-20-bank-select.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-control-00-20-bank-select.mid)
- [**test-control-40-damper.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-control-40-damper.mid)
- [**test-control-41-portamento.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-control-41-portamento.mid)
- [**test-control-54-portamento-control.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-control-54-portamento-control.mid)
- [**test-control-7c-omni-mode-off.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-control-7c-omni-mode-off.mid)
- [**test-control-7d-omni-mode-on.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-control-7d-omni-mode-on.mid)
- [**test-control-7e-mono-mode-on.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-control-7e-mono-mode-on.mid)
- [**test-control-7f-poly-mode-on.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-control-7f-poly-mode-on.mid)
- [**test-rpn-00-00-pitch-bend-range.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-rpn-00-00-pitch-bend-range.mid)
- [**test-rpn-00-01-fine-tuning.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-rpn-00-01-fine-tuning.mid)
- [**test-rpn-00-02-coarse-tuning.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-rpn-00-02-coarse-tuning.mid)
- [**test-rpn-00-05-modulation-depth-range.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-rpn-00-05-modulation-depth-range.mid)
- [**test-sysex-7e-06-01-id-request.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-sysex-7e-06-01-id-request.mid)
- [**test-sysex-7e-09-01-gm1-enable.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-sysex-7e-09-01-gm1-enable.mid)
- [**test-sysex-7e-09-02-gm-disable.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-sysex-7e-09-02-gm-disable.mid)
- [**test-sysex-7e-09-03-gm2-enable.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-sysex-7e-09-03-gm2-enable.mid)
- [**test-sysex-7f-04-03-master-fine-tuning.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-sysex-7f-04-03-master-fine-tuning.mid)
- [**test-sysex-7f-04-04-master-coarse-tuning.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-sysex-7f-04-04-master-coarse-tuning.mid)
- [**test-sysex-7x-08-0x-scale-tuning.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-sysex-7x-08-0x-scale-tuning.mid)
- [**test-karaoke-kar.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-karaoke-kar.mid)
- [**test-non-midi-track.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-non-midi-track.mid)
- [**test-vlq-2-byte.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-vlq-2-byte.mid)
- [**test-vlq-3-byte.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-vlq-3-byte.mid)
- [**test-vlq-4-byte.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-vlq-4-byte.mid)
- [**test-corrupt-file-extra-byte.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-corrupt-file-extra-byte.mid)
- [**test-corrupt-file-missing-byte.mid**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-corrupt-file-missing-byte.mid)
- [**test-syx-7e-06-01-id-request.syx**](https://github.com/jazz-soft/test-midi-files/raw/main/midi/test-syx-7e-06-01-id-request.syx)
## More to come...
*NOTE:* not every MIDI message is understood by every MIDI device!
