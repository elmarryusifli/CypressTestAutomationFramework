describe('JSONPlaceholder API Tests', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  it('GET /posts - should fetch a list of posts', () => {
    cy.request(`${baseUrl}/posts`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(100); // JSONPlaceholder has 100 posts
    });
  });

  it('GET /posts/1 - should fetch a single post', () => {
    cy.request(`${baseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });

  it('POST /posts - should create a new post', () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    cy.request('POST', `${baseUrl}/posts`, newPost).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body).to.include(newPost);
    });
  });

  it('PUT /posts/1 - should update an existing post', () => {
    const updatedPost = {
      title: 'foo updated',
      body: 'bar updated',
      userId: 1,
    };

    cy.request('PUT', `${baseUrl}/posts/1`, updatedPost).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(updatedPost);
    });
  });

  it('DELETE /posts/1 - should delete an existing post', () => {
    cy.request('DELETE', `${baseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.empty;
    });
  });
});