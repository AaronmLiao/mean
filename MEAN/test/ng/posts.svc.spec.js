describe('posts.svc', function () {
    beforeEach(module('app'))
    var PostsSvc, $httpBackend

    beforeEach(inject(function (_PostsSvc_, _$httpBackend_) {
        PostsSvc = _PostsSvc_
        $httpBackend = _$httpBackend_
    }))

    

    describe('#fetch', function () {
        beforeEach(function () {
            $httpBackend.expect('GET', '/api/posts')
                .respond([
                    {username: 'dickeyxxx', body: 'first post'},
                    {username: 'dickeyxxx', body: 'second post'}
                ])
        })
        

        it('gets 2 posts', function () {
            PostsSvc.fetch().success(function (posts) {
                expect(posts).to.have.length(2)
                console.log(posts)
            })
        })
    })


})