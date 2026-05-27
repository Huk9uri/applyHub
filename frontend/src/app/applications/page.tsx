import Link from "next/link";

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] px-6 py-8 text-slate-950">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-between border-b border-slate-200 pb-5">
          <div>
            <p className="text-sm font-medium text-teal-700">Applications</p>
            <h1 className="text-2xl font-semibold tracking-normal">지원 목록</h1>
          </div>
          <Link className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white" href="/applications/new">
            새 지원 등록
          </Link>
        </div>
        <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-slate-600">
          지원 목록 API와 테이블이 연결될 자리입니다.
        </div>
      </div>
    </main>
  );
}
