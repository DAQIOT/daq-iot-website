const https = require('https');
const path = 'src/content/cases/zh/' + encodeURIComponent('泰国创维光伏-edmi电表数据采集及云边对接案例.md');
const url = 'https://api.github.com/repos/DAQIOT/daq-iot-website/contents/' + path;
https.get(url, { headers: { 'User-Agent': 'node' } }, (res) => {
  let s = '';
  res.on('data', (d) => (s += d));
  res.on('end', () => {
    try {
      const a = JSON.parse(s);
      if (!a.content) { console.log('无 content:', JSON.stringify(a).slice(0, 300)); return; }
      const c = Buffer.from(a.content, 'base64').toString('utf8');
      const fm = c.split('---')[1] || '';
      const ind = (fm.match(/industry:\s*(.*)/) || [])[1];
      const tagBlock = fm.split('tags:')[1];
      const tags = tagBlock ? tagBlock.split('order:')[0].trim() : '(无)';
      console.log('线上 industry:', ind);
      console.log('线上 tags:', tags);
      console.log('线上 sha:', a.sha);
    } catch (e) { console.log('解析失败:', s.slice(0, 300)); }
  });
});
