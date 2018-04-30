  q.test('only expected elements appear', function() {
    q.expect(2);

    var server = sinon.fakeServer.create();
    server.respondWith('GET', '/providers.json',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(providers)]);

    $testDOM.filterElements(pluginOptions);
    server.respond();

    $searchField.attr('value', '61688');
    $zip = $testDOM.find('[data-role=zip]');

    q.ok($zip.text() === '61688 Rodenbach', 'expected zip/city rendered');
    q.ok($zip.length === 1, 'one result rendered');

  });
