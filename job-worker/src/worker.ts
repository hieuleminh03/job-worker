async function fetch(request: any, env: any, ctx: any) {
  const response = await handleRequest(request);
  return response;
}

async function handleRequest(request: any) {
  const { pathname } = new URL(request.url);
  console.log('pathname', pathname, 'url', request.url);
  if (!pathname.startsWith("/scheduled")) {
    if (!request.headers.get('Cf-Warmup')) {
      console.log('scheduled event', Date.now());
    } else {
      console.log('warmup event', Date.now());
    }
    return new Response("Hello world! Scheduled");
  }
  return new Response("Hello world!");
}

export default { fetch };