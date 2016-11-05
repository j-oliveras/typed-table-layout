/// <reference path="../out/index.d.ts" />

import test = require('blue-tape');

import tableLayout = require('table-layout');

import os = require('os');

function joinExpected(expected: Array<string>): string {
  return expected.join(os.EOL) + os.EOL;
}

// Using the sample from official synopsis: https://github.com/75lb/table-layout#synopsis

const officialDataFromSynopsisSample = [
  {
    'column 1': 'The Kingdom of Scotland was a state in north-west Europe traditionally said to have been founded in 843, which joined with the Kingdom of England to form a unified Kingdom of Great Britain in 1707. Its territories expanded and shrank, but it came to occupy the northern third of the island of Great Britain, sharing a land border to the south with the Kingdom of England. ',
    'column 2': 'Operation Barbarossa (German: Unternehmen Barbarossa) was the code name for Nazi Germany\'s invasion of the Soviet Union during World War II, which began on 22 June 1941. Over the course of the operation, about four million soldiers of the Axis powers invaded Soviet Russia along a 2,900 kilometer front, the largest invasion force in the history of warfare. In addition to troops, the Germans employed some 600,000 motor vehicles and between 600–700,000 horses.'
  }
];

test('Synopsis: two columns same width', t => {
  const options: tableLayout.Options = {
    maxWidth: 86
  };
  const expectedRows = [
    ' The Kingdom of Scotland was a state in     Operation Barbarossa (German: Unternehmen ',
    ' north-west Europe traditionally said to    Barbarossa) was the code name for Nazi    ',
    ' have been founded in 843, which joined     Germany\'s invasion of the Soviet Union    ',
    ' with the Kingdom of England to form a      during World War II, which began on 22    ',
    ' unified Kingdom of Great Britain in 1707.  June 1941. Over the course of the         ',
    ' Its territories expanded and shrank, but   operation, about four million soldiers of ',
    ' it came to occupy the northern third of    the Axis powers invaded Soviet Russia     ',
    ' the island of Great Britain, sharing a     along a 2,900 kilometer front, the        ',
    ' land border to the south with the Kingdom  largest invasion force in the history of  ',
    ' of England.                                warfare. In addition to troops, the       ',
    '                                            Germans employed some 600,000 motor       ',
    '                                            vehicles and between 600–700,000 horses.  '
  ];

  const result = tableLayout(officialDataFromSynopsisSample, options);
  t.equals(result, joinExpected(expectedRows));

  const resultLines = tableLayout.lines(officialDataFromSynopsisSample, options);
  t.deepEquals(resultLines, expectedRows);
}).
end();

test('Synopsis: two columns diferent width', t => {
  const options: tableLayout.Options = {
    maxWidth: 86,
    columns: [
      {
        name: 'column 2',
        width: 55
      }
    ]
  };
  const expectedRows = [
    ' The Kingdom of Scotland was a  Operation Barbarossa (German: Unternehmen Barbarossa) ',
    ' state in north-west Europe     was the code name for Nazi Germany\'s invasion of the  ',
    ' traditionally said to have     Soviet Union during World War II, which began on 22   ',
    ' been founded in 843, which     June 1941. Over the course of the operation, about    ',
    ' joined with the Kingdom of     four million soldiers of the Axis powers invaded      ',
    ' England to form a unified      Soviet Russia along a 2,900 kilometer front, the      ',
    ' Kingdom of Great Britain in    largest invasion force in the history of warfare. In  ',
    ' 1707. Its territories          addition to troops, the Germans employed some 600,000 ',
    ' expanded and shrank, but it    motor vehicles and between 600–700,000 horses.        ',
    ' came to occupy the northern                                                          ',
    ' third of the island of Great                                                         ',
    ' Britain, sharing a land                                                              ',
    ' border to the south with the                                                         ',
    ' Kingdom of England.                                                                  '
  ];

  const result = tableLayout(officialDataFromSynopsisSample, options);
  t.equals(result, joinExpected(expectedRows));

  const resultLines = tableLayout.lines(officialDataFromSynopsisSample, options);
  t.deepEquals(resultLines, expectedRows);
}).
end();

// Using the sample from official API documentation https://github.com/75lb/table-layout#tablelayoutdata-options-

const jsonData = [{
  col1: 'Some text you wish to read in table layout',
  col2: 'And some more text in column two. '
}];

test('API sample', t => {
  const options = {
    maxWidth: 30
  };

  const expectedRows = [
    ' Some text you  And some more ',
    ' wish to read   text in       ',
    ' in table       column two.   ',
    ' layout                       '
  ];

  const result = tableLayout(jsonData, options);
  t.equals(result, joinExpected(expectedRows));

  const resultLines = tableLayout.lines(jsonData, options);
  t.deepEquals(resultLines, expectedRows);
}).
end();
