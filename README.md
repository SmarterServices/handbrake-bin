# handbrake-bin

[![Build Status](https://travis-ci.org/milewski/handbrake-bin.svg?branch=master)](https://travis-ci.org/milewski/handbrake-bin)
[![npm version](https://badge.fury.io/js/handbrake-bin.svg)](https://badge.fury.io/js/handbrake-bin)
[![npm downloads](https://img.shields.io/npm/dm/handbrake-bin.svg)](https://www.npmjs.com/package/handbrake-bin)
[![dependencies](https://david-dm.org/milewski/handbrake-bin.svg)](https://www.npmjs.com/package/handbrake-bin)
[![Join the chat at https://gitter.im/handbrake-bin/Lobby](https://badges.gitter.im/handbrake-bin/Lobby.svg)](https://gitter.im/handbrake-bin/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> HandBrake is a tool for converting video from nearly any format to a selection of modern, widely supported codecs. More at [https://handbrake.fr/](https://handbrake.fr/)

# What is this?

This is a wrapper to install [HandBrake](https://handbrake.fr) as a local dependency through **npm**.

## Install

```bash
$ npm install handbrake-bin --save
```
_Linux users may need to run with sudo_

## Usage
```js
const execFile = require('child_process').execFile;
const handBrake = require('handbrake-bin');

execFile(handBrake, ['--input', 'input.mkv', '--output', 'output.mp4'], err => {
	console.log('Done');
});
```
Or you could pull [```object-to-spawn-args```](https://www.npmjs.com/package/object-to-spawn-args) and use like this:
```js
import { HandbrakeCLIPath } from 'handbrake-bin';
import toSpawnArgs from 'object-to-spawn-args';

const options = {
    input: 'input.mkv',
    output: 'output.mp4'
}

execFile(handBrake, toSpawnArgs(options), err => {
	console.log('Done');
});
```

# CLI

```bash
$ npm install --global handbrake-bin
```
```bash
$ handbrake --help
```

## Credits

All the credits goes to [https://github.com/HandBrake/HandBrake](https://github.com/HandBrake/HandBrake) and its contributors for their hard work on building [HandBrake](https://handbrake.fr).

## License 

[MIT](LICENSE)
