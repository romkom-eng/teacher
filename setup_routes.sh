mkdir -p src/app/curriculum src/app/reviews src/app/support src/app/login

cat << 'INNER_EOF' > src/app/curriculum/page.tsx
import Link from 'next/link';
export default function Curriculum() {
  return (
    <div className="min-h-screen py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">과정 안내 (Curriculum)</h1>
      <p className="mb-8">준비 중인 페이지입니다.</p>
      <Link href="/" className="text-primary font-bold hover:underline">홈으로 돌아가기</Link>
    </div>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/app/reviews/page.tsx
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
INNER_EOF

cat << 'INNER_EOF' > src/app/support/page.tsx
import Link from 'next/link';
export default function Support() {
  return (
    <div className="min-h-screen py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">고객 센터 (Support)</h1>
      <p className="mb-8">준비 중인 페이지입니다.</p>
      <Link href="/" className="text-primary font-bold hover:underline">홈으로 돌아가기</Link>
    </div>
  );
}
INNER_EOF

cat << 'INNER_EOF' > src/app/login/page.tsx
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
INNER_EOF

chmod +x setup_routes.sh
./setup_routes.sh
