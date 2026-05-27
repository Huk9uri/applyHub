import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between border-b border-slate-200 pb-5">
          <div>
            <p className="text-sm font-medium text-teal-700">ApplyHub</p>
            <h1 className="text-2xl font-semibold tracking-normal">지원 관리 대시보드</h1>
          </div>
          <Link
            className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            href="/applications"
          >
            지원 목록
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase text-teal-700">MVP foundation</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              공고, 자기소개서, 포트폴리오 버전, 지원 상태를 한 흐름에서 관리합니다.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              ApplyHub는 여러 회사에 동시 지원할 때 흩어지는 정보를 모아 마감일과 상태를 빠르게 판단하도록 돕는 풀스택 프로젝트입니다.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              ["전체 지원", "12건"],
              ["작성 중", "4건"],
              ["제출 완료", "5건"],
              ["면접 예정", "2건"]
            ].map(([label, value]) => (
              <div
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                key={label}
              >
                <span className="text-sm font-medium text-slate-600">{label}</span>
                <strong className="text-2xl font-semibold text-slate-950">{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
