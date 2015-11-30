import { Styles, Utils } from 'material-ui';
var Colors = require('material-ui/lib/styles/colors');
var ColorManipulator = require('material-ui/lib/utils//color-manipulator');
var Spacing = require('material-ui/lib/styles/spacing');
/**
 *  Apollo Light Material UI Theme. Copied from Material-ui light theme and changed
 *  accordingly. https://www.materialpalette.com used for colour scheme.
 */

/*
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.grey400,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
  }
}
