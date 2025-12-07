export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  const { password, page } = await request.json();
  const correctPassword1 = undefined                                 ;
  const correctPassword2 = undefined                                 ;
  const correctPassword3 = undefined                                 ;
  let isValid = false;
  if (page === 1 && password === correctPassword1) isValid = true;
  if (page === 2 && password === correctPassword2) isValid = true;
  if (page === 3 && password === correctPassword3) isValid = true;
  if (isValid) {
    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ message: "Invalid password" }), { status: 401 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
