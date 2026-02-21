import Link from 'next/link';
export default function Reviews() {
  return (
    <div className="min-h-screen py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">이용 후기 (Reviews)</h1>
      <p className="mb-8">준비 중인 페이지입니다.</p>
      <Link href="/" className="text-primary font-bold hover:underline">홈으로 돌아가기</Link>
    </div>
  );
}
