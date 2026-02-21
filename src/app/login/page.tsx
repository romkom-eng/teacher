import Link from 'next/link';
export default function Login() {
  return (
    <div className="min-h-screen py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">로그인 (Login)</h1>
      <p className="mb-8">준비 중인 페이지입니다.</p>
      <Link href="/" className="text-primary font-bold hover:underline">홈으로 돌아가기</Link>
    </div>
  );
}
