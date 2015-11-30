import { Styles, Utils } from 'material-ui';
var Colors = require('material-ui/lib/styles/colors');
var ColorManipulator = require('material-ui/lib/utils//color-manipulator');
var Spacing = require('material-ui/lib/styles/spacing');

/**
 *  Apollo Material UI Theme. Copied from Material-ui light theme and changed
 *  accordingly. https://www.materialpalette.com used for colour scheme.
 */

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan700,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.grey600,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.pinkA400,
    accent3Color: Colors.pinkA100,
    textColor: Colors.fullWhite,
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: ColorManipulator.fade(Colors.fullWhite, 0.3),
    disabledColor: ColorManipulator.fade(Colors.fullWhite, 0.3)
  }
};
