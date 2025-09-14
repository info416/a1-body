export async function POST({ request }) {
  const { password, page } = await request.json();

  // Vercelの環境変数から、正しいパスワードを取得
  const correctPassword1 = import.meta.env.RECIPE_PASSWORD_1;
  const correctPassword2 = import.meta.env.RECIPE_PASSWORD_2;
  const correctPassword3 = import.meta.env.RECIPE_PASSWORD_3;

  let isValid = false;
  if (page === 1 && password === correctPassword1) isValid = true;
  if (page === 2 && password === correctPassword2) isValid = true;
  if (page === 3 && password === correctPassword3) isValid = true;

  if (isValid) {
    // 認証成功
    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
  } else {
    // 認証失敗
    return new Response(JSON.stringify({ message: 'Invalid password' }), { status: 401 });
  }
}