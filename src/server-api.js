import request from 'superagent';

module.exports = function(server) {

  server.get('/api/v1/docker-image/:name', function(req, res, next) {
    let registry = req.params.registry;
    let name = req.params.name;
    try {
      let url = 'https://registry.hub.docker.com/v1/repositories/' + registry + '/' + name + '/tags';
      request
      .get(url)
      .end(function(err, response){
        console.log('Docker image:');
        console.log(response.body);
        res.send(response.body);
      });
    } catch (err) {
      next(err);
    }
  });

  server.get('/api/v1/docker/image/:registry/:name', function(req, res, next) {
    let registry = req.params.registry;
    let name = req.params.name;
    try {
      let url = 'https://registry.hub.docker.com/v1/repositories/' + registry + '/' + name + '/tags';
      request
      .get(url)
      .end(function(err, response){
        console.log('Docker image:');
        console.log(response.body);
        res.send(response.body);
      });
    } catch (err) {
      next(err);
    }
  });

  //TODO: To abstract harcoded stuff in here.
  server.get('/api/v1/marathon/deploy/:tag', function(req, res, next) {
    var tag = req.params.tag;
    try {
      let url = 'https://raw.githubusercontent.com/Capgemini/voting-demo/master/voting-demo.json';
      request
      .get(url)
      .end(function(err, response){
        var jsonFile = JSON.parse(response.text, function (k, v) {
          if ( v === 'capgemini/voting-demo') {
            return 'capgemini/voting-demo:' + tag;
          }
          return v;
        });

        let url = server.get('marathonUri') + '/v2/groups';
        request
        .post(url)
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(jsonFile))
        .end(function(err, response){
          if (response.status == 409) {
            request
            .put(url)
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(jsonFile))
            .end(function(err, response){
              console.log('PUT');
              console.log(response);
              //res.send(response);
            });
          }
          res.send(response);
        });
        console.log('Marathom file:');
        console.log(JSON.stringify(jsonFile));
      })
    } catch (err) {
      next(err);
    }
  });
}
