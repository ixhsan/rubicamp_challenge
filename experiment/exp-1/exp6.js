// experimenting with CLI

// var Table = require('cli-table');
import Table from 'cli-table'

// instantiate
let table = new Table({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
           , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
           , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
           , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });
  
  table.push(
      ['foo']
    , ['frob']
  );
  
  console.log(table.toString());
  // Outputs:
  //
  //╔══════╤═════╤══════╗
  //║ foo  │ bar │ baz  ║
  //╟──────┼─────┼──────╢
  //║ frob │ bar │ quuz ║
  //╚══════╧═════╧══════╝