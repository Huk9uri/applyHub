export default function NewApplicationPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] px-6 py-8 text-slate-950">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-sm font-medium text-teal-700">New Application</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-normal">지원 등록</h1>
        <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-slate-600">
          회사명, 공고 URL, 포지션, 마감일, 기술스택을 입력하는 폼이 들어갈 자리입니다.
        </div>
      </div>
    </main>
  );
}
