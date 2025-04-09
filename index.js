export default {
  async fetch(request) {
    const url = new URL(request.url)
    url.hostname = 'eu2-node.caliphdev.com'
    url.port = '9019'
    url.protocol = 'http:'

    // Forward request ke backend, copy headers & method
    return fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'follow'
    })
  }
}
