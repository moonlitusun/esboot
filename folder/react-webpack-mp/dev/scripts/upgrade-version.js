const fs = require('fs');
const path = require('path');
const outputPath = path.resolve(__dirname, '../package.json');

function editData() {
  const f = fs.readFileSync(outputPath, 'utf8');
  const data = JSON.parse(f);
  const nextVersion = (Number(data.testVersion) || 0) + 1;
  return JSON.stringify(
    {
      ...data,
      testVersion: nextVersion,
    },
    null,
    2,
  );
}

fs.writeFileSync(path.resolve(__dirname, outputPath), editData(), { encoding: 'utf8' });
