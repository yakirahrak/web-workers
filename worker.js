self.addEventListener('message', function(e) {
    switch (e.data.cmd) {
      case 'sum':
        console.log('sum task');
        let sum = 0;
        for(let i = 0; i < e.data.num; i++) {
            sum += i;
        }
        self.postMessage(sum);
        break;
      default:
        self.postMessage('Unknown command');
    }
  });

  